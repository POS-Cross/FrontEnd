import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixed-widget1',
  templateUrl: './mixed-widget1.component.html',
})
export class MixedWidget1Component {
  @Input() color: string = '';
  @Input() title: string = '';
  
  constructor() {}

  OnInit(){
    console.log(this.title)
  }
}
