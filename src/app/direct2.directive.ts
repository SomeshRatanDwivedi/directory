import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirect2]'
})
export class Direct2Directive {

  @Input() appDirect2=''
  constructor(private ele: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appDirect2);
    
  }
  @HostListener('mouseleave') onMouseLeave(){
    
    this.highlight('');
  }
  highlight(color:string){
  this.ele.nativeElement.style.backgroundColor=color
  }

}
