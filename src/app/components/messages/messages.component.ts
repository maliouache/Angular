import { Component, OnInit } from '@angular/core';
import { RemoveService } from '../../services/remove.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  private received_messages:Object[];
  constructor(private rem:RemoveService,private cok:CookieService) { }

  ngOnInit() {
      this.rem.getNewMessages(this.cok.get('ecomm')).subscribe(res =>{
        this.received_messages=res;
      });
  }
  showContentMessage(id:any){
    let sh=document.getElementById(id);
    if (sh.style.display=="none"){
      sh.style.display="block";
      this.rem.discardMessage(id);
    }
    else{
      sh.style.display="none";
    }
  }

}
