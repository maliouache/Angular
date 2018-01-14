import { Component, OnInit, Input } from '@angular/core';
import {ResearchService} from '../../research.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-list-sells',
  templateUrl: './my-list-sells.component.html',
  styleUrls: ['./my-list-sells.component.css']
})
export class MyListSellsComponent implements OnInit {
  @Input() private owner:String;
  private itemList:any;
  constructor(private research : ResearchService, cookieService: CookieService) { 
    this.owner=cookieService.get("ecomm");
  }

  ngOnInit() {
    this.research.getProducts("Owner/"+this.owner).subscribe(res => {this.itemList = res;console.log(res);});

  }

}
