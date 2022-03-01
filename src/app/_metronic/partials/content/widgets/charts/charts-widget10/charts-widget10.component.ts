import { getCSSVariableValue } from 'src/app/_metronic/kt/_utils';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-charts-widget10',
  templateUrl: './charts-widget10.component.html',
  styleUrls: ['./charts-widget10.component.scss']
})
export class ChartsWidget10Component implements OnInit ,OnChanges{
  chartOptions:any;
  @Input() Top5DepartmentData:any;
  constructor() {  
    this.chartOptions = getChartOptions(); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.Top5DepartmentData.currentValue){
    this.Update(changes.Top5DepartmentData.currentValue)
  }
  }
public updateSeries(){
  this.chartOptions.series=[1, 11,12, 70, 2]
}
public Update(currentValue:any){
  this.chartOptions.series = currentValue.data
  this.chartOptions.labels = currentValue.labels
}

  ngOnInit(): void {
    if (this.Top5DepartmentData !=null){
      this.chartOptions.series = this.Top5DepartmentData.data
      this.chartOptions.labels = this.Top5DepartmentData.labels
    }
    
  }

}




function getChartOptions() {  
  const colors=["#2ec4b6","#3F37C9","#227c9d","#4CC9F0","#7209B7"]
  return {
    series: [42, 90,42, 70, 30],
    chart: {
      width: 300,
      height: 700,
      type: 'polarArea',
      
    },
    colors: colors,
    labels: ['Rose A', 'Rose B', 'Rose C','Rose A', 'Rose B'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        //    enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
};
}
