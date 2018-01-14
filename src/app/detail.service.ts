import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService {
           
       constructor(private http : Http){}
       
       getDetails(parametres : String) : Observable<any> {
          let url = "http://localhost:8888/"+parametres;
          let observable2: Observable<any> = this.http.get(url).map((res:Response) => res.json());
          return observable2;
       }
       
    }    