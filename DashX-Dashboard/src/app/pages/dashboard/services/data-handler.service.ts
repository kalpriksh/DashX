import { Injectable } from '@angular/core';
import * as dummyData from "../services/chartTestData.json"


@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {
  data : any
  
  constructor() { 
    this.data = `[
      {
        "Country": "Colombia",
        "Id": 1,
        "CreatedOn": "12/13/2011",
        "Population": 50415
      },
      {
        "Country": "Rwanda",
        "Id": 2,
        "CreatedOn": "01/18/2011",
        "Population": 19070
      },
      {
        "Country": "Uganda",
        "Id": 3,
        "CreatedOn": "12/27/2003",
        "Population": 25892
      },
      {
        "Country": "Senegal",
        "Id": 4,
        "CreatedOn": "05/23/2022",
        "Population": 52150
      },
      {
        "Country": "Benin",
        "Id": 5,
        "CreatedOn": "06/19/2018",
        "Population": 86003
      },
      {
        "Country": "Korea, North",
        "Id": 6,
        "CreatedOn": "05/21/2021",
        "Population": 95054
      },
      {
        "Country": "Virgin Islands, British",
        "Id": 7,
        "CreatedOn": "04/24/2018",
        "Population": 36511
      },
      {
        "Country": "Seychelles",
        "Id": 8,
        "CreatedOn": "06/21/2007",
        "Population": 39741
      },
      {
        "Country": "Lebanon",
        "Id": 9,
        "CreatedOn": "07/18/2012",
        "Population": 75397
      },
      {
        "Country": "Swaziland",
        "Id": 10,
        "CreatedOn": "10/24/2021",
        "Population": 74968
      }
    ]`
  }

  GetHeaders(){
    return Object.keys(dummyData[0]);
  }

  GetHeaderValue(chartType : string, dataType? : string, keyName? : string){
    var values : any[] = []
    var dummyData = JSON.parse(this.data) 
    dummyData.forEach(row =>{
      values.push(row[keyName])
    },this)
    return values
  }


}
