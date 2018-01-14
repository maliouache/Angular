import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-search',
  templateUrl: './item-list-search.component.html',
  styleUrls: ['./item-list-search.component.css']
})
export class ItemListSearchComponent implements OnInit {
  @Input() private itemList:any;
  constructor() { }

  ngOnInit() {
  }

}
