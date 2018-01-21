import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogInService} from '../services/log-in.service'; 
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:LogInService) { }



  ngOnInit() {
    let div=document.getElementById('ComponIndex');
    div.style.display="none";
  }
  


  loginUser(e){
    e.preventDefault();
    var saveObject = JSON.stringify({
      "mail_adress" : e.target.elements[0].value,
      "password" : e.target.elements[1].value
      });
      
    let res=this.user.logUser(saveObject); 
  }


}
