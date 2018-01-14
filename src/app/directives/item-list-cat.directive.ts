import { Directive, HostListener,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appItemListCat]'
})
export class ItemListCatDirective {
  @Input() category:String;
  @HostBinding('style.background') private background = '';
  
  constructor() { 
    // let filtre = {}; filtre.category = this.category;
    // db.collection("Products").find(filtre)
    // .toArray(function(err, documents) {
    //          res.setHeader('Content-Type','application/json; charset=utf-8');
    //          res.setHeader('Access-Control-Allow-Origin','*');
    //          var json = JSON.stringify(documents);
  }
  @HostListener('mouseover', ['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    
  }

  @HostListener('mouseleave', ['$event']) public onMouseLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
    
  }
}
