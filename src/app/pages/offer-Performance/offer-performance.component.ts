import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-offer-performance',
  templateUrl: './offer-performance.component.html',
  styleUrls: ['./offer-performance.component.scss']
})
export class OfferPerformanceComponent implements OnInit {
  OrderTimeData: any ;
  SalesData: any ;
  Top5DepartmentData: any ;
  DailyOrdersData:any;
  items: { name: string;departmentname:string, counts: number,growth:number }[];
  constructor() { }

  ngOnInit(): void {
    

    this.SalesData={
      data :  [
      {
        name: 'This Week',
        data: [50, 60, 70, 80, 60, 50, 70],
      },
      {
        name: 'Last Week',
        data: [50, 60, 70, 200, 60, 50, 70],
      },
    ],
    dates:['1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2']};


    this.OrderTimeData =[33.3, 33.2, 33.5];

    
    this.Top5DepartmentData=
    {data :  [33, 27,23, 2, 10],
    labels:['Canned/Jarred Goods', 'Beverages', 'Deli','Department A', 'Department B']
  }



    

    this.items=[
      {"name":"item1","departmentname":"Deli","counts":1500,"growth":1},
      {"name":"item2","departmentname":"Deli","counts":1400,"growth":0},
      {"name":"item3","departmentname":"Deli","counts":1300,"growth":-1},
      {"name":"item4","departmentname":"Deli","counts":1200,"growth":1},
      {"name":"item5","departmentname":"Deli","counts":1100,"growth":0}
    ]

    this.DailyOrdersData=
    { data:[30, 40, 40, 90, 90, 70, 1],
      dates:['1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2']}
  }

  
  public updateSeries(chartOptions:any): any {
    console.log(chartOptions)
    return [2.3, 4.2, 1.5];
  }

}





