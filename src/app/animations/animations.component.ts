import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('changeDivSize1', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
    trigger('changeDivSize2', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(2)'
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
    
  ]
})
export class AnimationsComponent implements OnInit {

  constructor() { }
  currentState1 = 'initial';
  currentState2 = 'initial';

  changeState1() {
    this.currentState1 = this.currentState1 === 'initial' ? 'final' : 'initial';
  }
  changeState2() {
    this.currentState2 = this.currentState2 === 'initial' ? 'final' : 'initial';
  }
  listItem:string[] = [];
  list_order: number = 1;
  
  addItem() {
    var listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
    if(this.listItem.length===0){
      this.list_order=1;
    }
  }
  ngOnInit(): void {
  }

}
