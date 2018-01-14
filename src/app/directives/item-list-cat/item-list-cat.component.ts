import { Component, OnInit, Input } from '@angular/core';
import {ItemCatComponent} from '../item-cat/item-cat.component'
import { ResearchService } from '../../research.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-list-cat',
  templateUrl: './item-list-cat.component.html',
  styleUrls: ['./item-list-cat.component.css']
})
export class ItemListCatComponent implements OnInit {
  @Input() private category:String;
  private itemList:any;
  constructor(private research : ResearchService) { 
  }

  ngOnInit() {
      this.research.getProducts("Category/"+this.category).subscribe(res => {this.itemList = res;}); 
  }

  onItemsChange(){
  }
}
