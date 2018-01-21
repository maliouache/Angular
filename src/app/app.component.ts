import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RemoveService } from './services/remove.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cok: CookieService,private rem:RemoveService) { }
  private exis: boolean = this.cok.check('ecomm');
  private marque: string = "";
  private connected:String;
  private received_messages: any;
  ngOnInit() {
    this.connected=this.cok.get('ecomm');
    if (this.exis){
      this.rem.getNewMessages(this.cok.get('ecomm')).subscribe(res =>{
        this.received_messages=res;
      });

    }
  }
}

