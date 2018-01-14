import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Params } from '@angular/router/src/shared';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../detail.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.css']
})
export class ShippingMethodComponent implements OnInit {
  private item:any;
  constructor(private detail : DetailService, private route : ActivatedRoute, cookie : CookieService) {
    
   }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.detail.getDetails("Detail/"+params.id).subscribe(res => {this.item = res[0];});
 }); 
  }

}
