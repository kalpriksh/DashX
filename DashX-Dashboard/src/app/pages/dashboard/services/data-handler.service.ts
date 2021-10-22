import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DBTables } from "../models";
import * as dummyData from "../services/chartTestData.json"


@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {
  data : any
  data_new : any
  row_limit : number

  constructor(private http : HttpClient, ) {
    this.row_limit = 10
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
  }

  // fetched tables based on dbName specified
  GetDBTables(dbName : string){
    if(dbName == "mongo")
    {
      return this.http.get('http://localhost:3000/mongo/tables');
    }
    return null;
  }

  GetHeaders_(){
    var dummyData = JSON.parse(this.data);
    console.log(Object.keys(dummyData[0]));

    return Object.keys(dummyData[0]);
  }

  GetHeaders(){
    // fetches headers for mongo
      return this.http.get(`http://localhost:3000/header/all/`);
  }

  GetHeadersForTable(dbName, dbTableName){

    if(dbName == "mongo"){
      return this.http.get(`http://localhost:3000/headers/?tablename=${dbTableName}`);
    }

  }


  GetHeaderValue(dbName : string, tableName : string, keyName? : string){
    if(dbName == "mongo"){
      return this.http.get(`http://localhost:3000/headerdata/?tablename=${tableName}&limit=10`);
    }
    return null;
  }

}
