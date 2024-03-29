import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as dummyData from "../services/chartTestData.json"


@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {
  data : any
  data_new : any
  
  constructor(private http : HttpClient) { 
    this.data = `[
      {
        "Country": "Colombia",
        "Id": 1,
        "CreatedOn": "12/13/2011",
        "Population": 50415,
        "Metric" : 60000
      },
      {
        "Country": "Rwanda",
        "Id": 2,
        "CreatedOn": "01/18/2011",
        "Population": 19070,
        "Metric" : 60000
      },
      {
        "Country": "Uganda",
        "Id": 3,
        "CreatedOn": "12/27/2003",
        "Population": 25892,
        "Metric" : 60000
      },
      {
        "Country": "Senegal",
        "Id": 4,
        "CreatedOn": "05/23/2022",
        "Population": 52150,
        "Metric" : 60000
      },
      {
        "Country": "Benin",
        "Id": 5,
        "CreatedOn": "06/19/2018",
        "Population": 86003,
        "Metric" : 60000
      },
      {
        "Country": "Korea, North",
        "Id": 6,
        "CreatedOn": "05/21/2021",
        "Population": 95054,
        "Metric" : 60000
      },
      {
        "Country": "Virgin Islands, British",
        "Id": 7,
        "CreatedOn": "04/24/2018",
        "Population": 36511,
        "Metric" : 60000
      },
      {
        "Country": "Seychelles",
        "Id": 8,
        "CreatedOn": "06/21/2007",
        "Population": 39741,
        "Metric" : 60000
      },
      {
        "Country": "Lebanon",
        "Id": 9,
        "CreatedOn": "07/18/2012",
        "Population": 75397,
        "Metric" : 60000
      },
      {
        "Country": "Swaziland",
        "Id": 10,
        "CreatedOn": "10/24/2021",
        "Population": 74968,
        "Metric" : 60000
      }
    ]`
    var rowObject 
    this.http.get('http://localhost:3000/data/?limit=10').subscribe(rowData => {
      this.data_new = rowData
    })
  }

  GetHeaders_(){
    var dummyData = JSON.parse(this.data);
    console.log(Object.keys(dummyData[0]));
    
    return Object.keys(dummyData[0]);
  }
  
  GetHeaders(){
    return this.http.get('http://localhost:3000/header/all');
  }

  GetHeaderValue(chartType : string, dataType? : string, keyName? : string){
    // var url = 'http://localhost:3000/header/?name=' + keyName;
    debugger
    // return this.http.get(url)
    var values : any[] = []
    this.data_new.forEach(row =>{
      values.push(row[keyName])
    },this)
    return values
  }

}
