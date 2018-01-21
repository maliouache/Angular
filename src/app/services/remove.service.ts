import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http';

@Injectable()
export class RemoveService {

  constructor(private http : Http) { }

  RemoveProduct(id:any){
    let url = "http://localhost:8888/removeProduct";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    return this.http.post(url, id, options).subscribe(
      () => {},
      err => console.error(err)
    );
  }
  sendMessage(message:any){
    let url = "http://localhost:8888/addMessage";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    return this.http.post(url, message, options).subscribe(
      () => {},
      err => console.error(err)
    );
  }
  getNewMessages(email:String){
    let url = "http://localhost:8888/getNewMessages/"+email;
    return this.http.get(url).map((res:Response) => res.json());
  }
  discardMessage(id:String){
    let url = "http://localhost:8888/discardMessage";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    return this.http.post(url,JSON.stringify({"_id":id}) , options).subscribe(
      () => {},
      err => console.error(err)
    );
  }
}
