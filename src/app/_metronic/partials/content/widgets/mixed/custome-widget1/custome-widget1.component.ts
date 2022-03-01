import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-mixed-widget1',
  templateUrl: './custome-widget1.component.html',
})
export class CustomeWidget1Component implements OnChanges{
  @Input() color: string = '';
  @Input() title: string = '';
  @Input() items: { name: string;departmentname:string, counts: number,growth:number }[];
  
  constructor() {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    changes.items.currentValue
  }
  update(currentValue:any):void{
    this.items=currentValue
  }
  OnInit(){
    
    if (this.items ==null){
      this.items=[
        {"name":"item1","departmentname":"Deli","counts":1,"growth":0},
        {"name":"item1","departmentname":"Deli","counts":1,"growth":0},
        {"name":"item1","departmentname":"Deli","counts":1,"growth":0},
        {"name":"item1","departmentname":"Deli","counts":1,"growth":0},
        {"name":"item1","departmentname":"Deli","counts":1,"growth":0}
      ]
    }
    // console.log(this.title)
  }
}
