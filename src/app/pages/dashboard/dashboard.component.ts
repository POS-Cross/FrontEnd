
import { Component, NgZone, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  OrderTimeData: any;
  SalesData: any;
  Top5DepartmentData: any;
  DailyOrdersData: any;
  items: any;
  i: { SalesData: any, DailyData: any, Top5Items: any, Top5DepartmentData: any, OrderTimeData: any };


  results: any;
  constructor(private dataService: DataService, private ngZone: NgZone) {

  }
  private unsubscribe: Subscription[] = [];
  ngOnInit(): void {

    this.dataService.getSalesData().subscribe({
      next: (data) => {
        let json = data
        this.SalesData = json
      },
      error: error => {
        console.log(error)
        console.error('There was an error!', error);
      }
    })
    this.dataService.getDailyData().subscribe({
      next: (data) => {
        let json = data
        this.DailyOrdersData = json
      },
      error: error => {
        console.log(error)
        console.error('There was an error!', error);
      }
    })
    this.dataService.getOrderTimeData().subscribe({
      next: (data) => {
        let json = data
        this.OrderTimeData = json
      },
      error: error => {
        console.log(error)
        console.error('There was an error!', error);
      }
    })
    this.dataService.getTop5Dept().subscribe({
      next: (data) => {
        let json = data
        this.Top5DepartmentData = json
      },
      error: error => {
        console.log(error)
        console.error('There was an error!', error);
      }
    })
    this.dataService.getTop5Items().subscribe({
      next: (data) => {
        let json = data
        this.items = json
      },
      error: error => {
        console.log(error)
        console.error('There was an error!', error);
      }
    })
    
    setTimeout(() => {

    }, 5000);



  }
  init() {
    this.OrderTimeData = [1.3, 1.2, 1.5];
    this.SalesData = {
      data: [
        {
          name: 'This Week',
          data: [60, 90, 70, 80, 60, 50, 80],
        },
        {
          name: 'Last Week',
          data: [40, 60, 70, 90, 60, 50, 70],
        },
      ],
      dates: ['1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2']
    };
    this.Top5DepartmentData = {
      data: [33, 50, 23, 2, 10],
      labels: ['Canned/Jarred Goods', 'Beverages', 'Deli', 'Department A', 'Department B']
    };

    this.DailyOrdersData
      = { data: [30, 100, 40, 90, 90, 10, 20], dates: ['1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2'] }

    this.items =
      [
        { "name": "item1", "departmentname": "Deli", "counts": 1400, "growth": 0 },
        { "name": "item2", "departmentname": "Deli", "counts": 1100, "growth": 1 },
        { "name": "item3", "departmentname": "Deli", "counts": 1000, "growth": -1 },
        { "name": "item4", "departmentname": "Deli", "counts": 900, "growth": 1 },
        { "name": "item5", "departmentname": "Deli", "counts": 100, "growth": -1 }
      ]
  }

  public updateSeries(OrderTimeData: any): any {
    return OrderTimeData;
  }
  public updateData(json: any) {
    this.DailyOrdersData = json.DailyData
    this.OrderTimeData = json.OrderTimeData
    this.SalesData = json.SalesData
    this.Top5DepartmentData = json.Top5DepartmentData
    this.items = json.Top5Items

  }

  json = {
    DailyData: {
      data: [6512, 6626, 4644, 3938, 0, 0, 0],
      dates: ['1/9', '2/9', '3/9', '4/9', '5/9', '6/9', '7/9']
    },
    'OrderTimeData': [0, 83513, 0],
    SalesData: {
      SalesSum: 3433164.6500000004,
      data: [{
        data: [416384.54, 417757.26, 261051.74, 169411.21, 0, 0, 0],
        name: 'This Week'
      },
      {
        data: [230627.96,
          312796.73,
          291304.43,
          286172.03,
          345351.01,
          349757.77,
          352549.97],
        name: 'Last Week'
      }],
      dates: ['1/9', '2/9', '3/9', '4/9', '5/9', '6/9', '7/9']
    },
    'Top5DepartmentData': {
      'data': [133899, 50789, 42557, 42025, 30080],
      'labels': ['Beverages',
        'Dairy',
        'Canned/Jarred Goods',
        'Paper Goods',
        'Produce']
    },
    'Top5Items': [{
      'counts': 3665,
      'departmentname': 'Bakery',
      'growth': 1,
      'name': 'Bread Sarfande Kmaj'
    },
    {
      'counts': 3445,
      'departmentname': 'Produce',
      'growth': 1,
      'name': 'Produce 8 Nis'
    },
    {
      'counts': 3373,
      'departmentname': 'Produce',
      'growth': -1,
      'name': 'Produce 5 Nis'
    },
    {
      'counts': 2738,
      'departmentname': 'Produce',
      'growth': -1,
      'name': 'Produce 6 Nis'
    },
    {
      'counts': 2723,
      'departmentname': 'Deli',
      'growth': 0,
      'name': 'Tnuva Amek Cheese'
    }]
  }

}


