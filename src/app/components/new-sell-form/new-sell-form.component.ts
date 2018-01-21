import { Component, OnInit } from '@angular/core';
import {AddProductService} from '../../services/add-product.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sell-form',
  templateUrl: './new-sell-form.component.html',
  styleUrls: ['./new-sell-form.component.css']
})
export class NewSellFormComponent implements OnInit {
  private owner:String;
  private name:String;
  private brand:String;
  private price:Number;
  private category:String;
  private description:String;
  private longitude:Float32Array;
  private latitude:Float32Array;
  private imgFolder:File;
  private all:any;
  private msg:String;

  constructor(private router:Router,private addProd:AddProductService,public cookieService:CookieService) { }

  ngOnInit() {
  }

  save_product(){
    let newProd = JSON.stringify({
      "owner":this.cookieService.get("ecomm"),
      "name":this.name,
      "brand":this.brand,
      "category":this.category,
      "price":this.price,
      "latitude":this.latitude,
      "longitude":this.longitude,
      "description":this.description});
    let res=this.addProd.addProduct(newProd);
    this.msg="The message has been sent";
    this.router.navigate(['my-sells']);
    let reader=new FileReader();
    console.log(this.imgFolder);
    reader.readAsText(this.imgFolder);
    console.log(reader.result);
  }

}
