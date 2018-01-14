import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddUserService {

  constructor(private http : Http) { }

  addUser(form:any): any{
    //preparation before the submit
    let url = "http://localhost:8888/Users";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    //check if the user is already in the database
    this.checkExistance(JSON.parse(form).mail_adress).subscribe(res => {
      if (res.length==0){
        this.http.post(url, form, options).subscribe(
          () => {},
          err => console.error(err)
        );
        let s=document.getElementById("registration_form_check");
        s.innerHTML='<p style="color: green;">Votre identifiant vient d\'être créé</p>';
        
      } else {
        let s=document.getElementById("registration_form_check");
        s.innerHTML='<p style="color: red;">Votre identifiant( adresse email ) existe déjà</p>';        
      }
    });
  }

  checkExistance(mail:any):Observable<any>{
    let url = "http://localhost:8888/Users/"+mail;
    let observable: Observable<any> =this.http.get(url).map((res:Response) => res.json());
    return observable; 
  }
}
