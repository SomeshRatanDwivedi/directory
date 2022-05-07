import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirect1]'
})
export class Direct1Directive {
  @Input() appDirect1=''
  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appDirect1);
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    
    this.highlight('');
  }
  highlight(color:string){
  this.ele.nativeElement.style.backgroundColor=color
  }


}
