import { Component, OnInit } from '@angular/core';
import {AddProductService} from '../../services/add-product.service';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(private addProd:AddProductService,public cookieService:CookieService) { }

  ngOnInit() {
  }

  onSubmit(){
    let newProd = JSON.stringify({
      "owner":this.cookieService.get("ecomm"),
      "name":this.name,
      "brand":this.brand,
      "category":this.category,
      "price":this.price,
      "description":this.description});
    let res=this.addProd.addProduct(newProd);
    console.log(newProd);
  }
}
