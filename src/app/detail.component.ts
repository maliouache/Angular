import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DetailService} from './detail.service';
import { CookieService } from 'ngx-cookie-service';
import { ShippingMethodComponent } from './components/shipping-method/shipping-method.component';

@Component({
 selector: "detail",
 templateUrl: "./detail.component.html",
 styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
      private compt:Number=1;
      private connected :String;
      private itemComp : Object[];
      constructor(private detail : DetailService, private route : ActivatedRoute, cookie : CookieService){
          this.connected=cookie.get("ecomm");
      }
      ngOnInit(){
                this.route.params.subscribe((params:Params)=>{
                     this.detail.getDetails("Detail/"+params.id).subscribe(res => {this.itemComp = res;});
                }); 
     }
 }
