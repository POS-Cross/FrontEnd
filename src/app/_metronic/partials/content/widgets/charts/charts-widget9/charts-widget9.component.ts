import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';

@Component({
  selector: 'app-charts-widget9',
  templateUrl: './charts-widget9.component.html',
})


export class ChartsWidget9Component implements OnInit, OnChanges {
  
  chartOptions: any = {};
  @Input() series: any ;
  @Input() updateSeriesFn: any ;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.updateSeriesData(changes.series.currentValue)
  }

  ngOnInit(): void {
    this.chartOptions= getChartOptions(100)
    if (this.series != null)
      {this.chartOptions.series = this.series;}
  }
  public updateSeriesData(series:any): void {
    this.chartOptions.series = series;
  }

  public updateSeries(): void {
    this.chartOptions.series = this.updateSeriesFn();
  }
}

function getChartOptions(height: number) {
  const blue = getCSSVariableValue('--bs-blue');
  const purple = getCSSVariableValue('--bs-purple');
  const cyan = getCSSVariableValue('--bs-cyan');
  const colors=["#4CC9F0","#3F37C9","#9bf6ff","#7209B7","#aeeee0"]
  
  return {
    series: [],
    chart: {
      type: "donut",
      width: 300,
      height: 300,
    },
    colors: [blue, purple, cyan],
    labels: ["Afternoon", "Evening", "Morning"],
    legend: {
      position: "bottom"
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
}
