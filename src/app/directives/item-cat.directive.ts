import { Directive, HostListener, HostBinding, Output, Input} from '@angular/core';

@Directive({
  selector: '[appItemCat]'
})
export class ItemCatDirective {
  constructor() { }
  @HostListener('mouseover', ['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('mouseleave', ['$event']) public onMouseLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('mouseclick', ['$event']) public onMouseClick(evt){
    evt.preventDefault();
    evt.stopPropagation();
    console.log(evt);
  }
}
