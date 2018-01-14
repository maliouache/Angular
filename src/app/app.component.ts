import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cok:CookieService){}
  private exis:boolean = this.cok.check('ecomm'); 
   private marque: string = "";
   ngOnInit(){
     }
}

