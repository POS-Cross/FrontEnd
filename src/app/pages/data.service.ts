import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  REST_API_SERVER= "http://eo66wm2ug7ktzd3.m.pipedream.net/?fromData=1&toDate=2";
  // url = "http://127.0.0.1:8000/"
  url = "https://recommender-bravo.herokuapp.com/"

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest():any{
    setTimeout(() =>{
      let data = {
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
      return data
    },5000)
    // return this.httpClient.get<string>(this.REST_API_SERVER)
  }

  public getSalesData(){
    return this.httpClient.get<string>(this.url+"getSalesData")
  }
  public getOrderTimeData(){
    return this.httpClient.get<string>(this.url+"getOrderTimeData")
  }
  public getTop5Dept(){
    return this.httpClient.get<string>(this.url+"getTop5Dept")
  }
  public getTop5Items(){
    return this.httpClient.get<string>(this.url+"getTop5Items")
  }
  public getDailyData(){
    return this.httpClient.get<string>(this.url+"getDailyData")
  }

  public getRecommendation(ListItems:String[],BundelSize:Number,ListType:string){
    return this.httpClient.get<string>(this.url+"getRecommendation",{headers:new HttpHeaders({ 
      'ListItems': JSON.stringify(ListItems),
      'BundelSize':JSON.stringify(BundelSize),
      'ListType': JSON.stringify(ListType)
      })})
  }
}
