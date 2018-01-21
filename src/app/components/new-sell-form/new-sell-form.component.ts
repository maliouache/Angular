import { Component, OnInit } from '@angular/core';
import {AddProductService} from '../../services/add-product.service';
import { CookieService } from 'ngx-cookie-service';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-new-sell-form',
  templateUrl: './new-sell-form.component.html',
  styleUrls: ['./new-sell-form.component.css']
})
export class NewSellFormComponent implements OnInit {
  private msg:String="";
  private msg_error:String="";
  private owner:String;
  private name:String;
  private brand:String;
  private price:Number;
  private category:String;
  private description:String;
  private longitude:number;
  private latitude:Float32Array;
  private filesToUpload:Array<File>;
  private all:any;
  constructor(private addProd:AddProductService,public cookieService:CookieService) { }

  ngOnInit() {
  }
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>> fileInput.target.files;
    console.log(this.filesToUpload[0]);
  }
  upload(name2: String) {
    this.makeFileRequest("http://localhost:8888/upload", [], this.filesToUpload, name2).then((result) => {
        console.log(result);
    }, (error) => {
        console.error(error);
    });
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name2: String) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append('file', files[i], name2);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
}
  onSubmit(){
    if (this.name){
      var name2 = this.cookieService.get("ecomm")+"-"+this.name;
      name2.replace(" ","");
      this.upload(name2);
      let newProd = JSON.stringify({
        "owner":this.cookieService.get("ecomm"),
        "name":this.name,
        "brand":this.brand,
        "category":this.category,
        "price":this.price,
        "latitude":this.latitude,
        "longitude":this.longitude,
        "description":this.description,
        "imgFolder":"assets/images/"+name2});
        this.addProd.addProduct(newProd); 
      // let reader=new FileReader();
      // var file = this.imgFolder.uploaded_image;
      // var img_name=file.name;
      // console.log(img_name);
      // var fr = new FileReader();
      // reader.readAsText(this.imgFolder);
      // console.log(fr.readAsDataURL(file));
      this.msg="The new product has been added!";
    }
    else{
      this.msg_error="Please enter a product name";
    }
  }

  

  // getLocation() {
  //   let x:any = document.getElementById("geolocalisation");
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // }

  // showPosition(position) {
  //   let x:any = document.getElementById("geolocalisation");
  //   x.innerHTML = "Latitude: " + position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude;
  // }
}
