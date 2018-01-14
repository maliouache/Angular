import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Http, Response } from '@angular/http';
import { DetailService } from '../../detail.service';


@Component({
  selector: 'app-private-shipping-choice',
  templateUrl: './private-shipping-choice.component.html',
  styleUrls: ['./private-shipping-choice.component.css']
})
export class PrivateShippingChoiceComponent implements OnInit {
  private item:any;
  private shippings:any;
  constructor(private route : ActivatedRoute,private http:Http,private detail:DetailService) { }

  ngOnInit() {
  	this.route.params.subscribe((params:Params)=>{
  		this.detail.getDetails("Detail/"+params.id_item).subscribe(res => {this.item = res[0];console.log(res);});
  	this.route.params.subscribe((params:Params)=>{
  		this.detail.getDetails("Shippings/"+params.id_item).subscribe((res:Response) => {this.shippings = res;console.log(res);});
  }

}
