import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-cat',
  templateUrl: './item-cat.component.html',
  styleUrls: ['./item-cat.component.css']
})
export class ItemCatComponent implements OnInit {
  @Input() private itemComp:any;
  constructor() { 
    
  }

  ngOnInit() {
  }

  showDetails(){
    let html:String='<div id="'+this.itemComp._id+'" style="display:block;"><img src="'+this.itemComp.imgFolder+'main" style="width:500px; height:320px;"><br><b>Brand :</b> '+this.itemComp.brand+'<br/><b>Name :</b> '+this.itemComp.name+'<br/><b>Price :</b> '+this.itemComp.price+' $<br/><b>Description :</b> '+this.itemComp.description+'<br/></div>';
    let id=document.getElementById("app_body");
    id.innerHTML=""+html;
  }

}
