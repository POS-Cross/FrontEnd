import { formatNumber } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { bottom } from '@popperjs/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
@Component({
  selector: 'app-mixed-widget11',
  templateUrl: './mixed-widget11.component.html',
  changeDetection:ChangeDetectionStrategy.Default
})
export class MixedWidget11Component implements OnInit,OnChanges {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  @Input() SalesData: any;
  
  
  chartOptions: any = {};
  SalesSum: any;

  constructor() {
    // this.chartOptions = getChartOptions(this.chartHeight, this.chartColor);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.Update(changes.SalesData.currentValue)
  }
  Update(currentValue: any) {
    if (this.chartOptions.series){
      if (this.chartOptions.xaxis.categories !=currentValue.dates )
        this.chartOptions = getChartOptions(currentValue.data,currentValue.dates,this.chartHeight, this.chartColor)
      else{
        this.chartOptions.series=currentValue.data;
      }
    this.SalesSum=currentValue.SalesSum
    }
  }

  ngOnInit(): void {
    this.chartOptions = getChartOptions([
      {
        name: 'This Week',
        data: [60, 90, 70, 80, 60, 50, 80],
      },
      {
        name: 'Last Week',
        data: [40, 60, 70, 90, 60, 50, 70],
      },
    ],['1', '2', '3', '4', '5', '6', '7'],this.chartHeight, this.chartColor);
    console.log("udpate")
    // if (this.SalesData != null){
    //   this.Update(this.SalesData)
    // }
    
  }
}

function getChartOptions(data: any[],labels:String[],chartHeight: string, chartColor: string) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const secondaryColor = getCSSVariableValue('--bs-gray-300');
  const baseColor = getCSSVariableValue('--bs-' + chartColor);

  return {
    series: data,
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: chartHeight,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    legend: {
      show: bottom,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: labels,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'solid',
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return 'NIS ' + formatNumber(Number(val), 'en-US', '1.0-0') + ' Sales';
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      padding: {
        top: 10,
      },
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
}
