import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Http, Headers, Response } from '@angular/http';
  

@Injectable()
export class AddProductService {

  constructor(private http : Http) { }

  addProduct(newProd: any): any {
    let url = "http://localhost:8888/newProduct";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({headers : headers});
    this.http.post(url, newProd, options).subscribe(
      () => {},
      err => console.error(err)
    );
    return 1;
  }
}
