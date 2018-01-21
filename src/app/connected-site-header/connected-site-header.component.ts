import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { RemoveService } from '../services/remove.service';

@Component({
  selector: 'app-connected-site-header',
  templateUrl: './connected-site-header.component.html',
  styleUrls: ['./connected-site-header.component.css']
})
export class ConnectedSiteHeaderComponent implements OnInit {
  @Input() private received:any;
  private yesForShow:String;
  constructor( private cookieServ:CookieService,private router:Router) { }

  ngOnInit() {
  }
  showNewMessages(){
    console.log("affichage des messages!!");
      
  }
  logOut(){
    this.cookieServ.deleteAll();
    location.reload(true);
    window.location.assign("http://localhost:4200/");
  }

}
