import { Component, Input, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';

@Component({
  selector: 'app-charts-widget3',
  templateUrl: './charts-widget3.component.html',
  changeDetection:ChangeDetectionStrategy.Default
})
export class ChartsWidget3Component implements OnInit ,OnChanges{
  chartOptions: any = {};
  @Input() DailyOrdersData:any;

  constructor() {
    this.chartOptions = getChartOptions(
      [30, 100, 40, 90, 90, 10, 20],
      ['1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2'],
      350);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.DailyOrdersData.currentValue){
    this.Update(changes.DailyOrdersData.currentValue)
    // console.log(changes.DailyOrdersData.currentValue)
    }
  }
  Update(currentValue:any):void{
    if (this.chartOptions.series[0].data){
      this.chartOptions = getChartOptions(currentValue.data,currentValue.dates,350);
      // this.chartOptions.series[0].data=currentValue.data;
      // this.chartOptions.xaxis.categories=currentValue.dates;
    }
  }
  ngOnInit(): void {
    this.chartOptions = getChartOptions(
      [30, 100, 40, 90, 90, 10, 20],
      ['1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2'],
      350);
   
  }
}

function getChartOptions(data:Number[],lable:String[],height: number) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-info');
  const lightColor = getCSSVariableValue('--bs-light-info');

  return {
    series: [
      {
        name: '# Order',
        data: data,
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: lable,
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
      crosshairs: {
        position: 'front',
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
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
          return  + val + ' order';
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}
