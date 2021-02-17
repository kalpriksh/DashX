import * as dummyData from "../helpers/chartTestData.json"

export class DataHandler {
    
    constructor() {}
    
    GetKeys(chartType, dataType){
        if(chartType == "Bar"){
            if(dummyData["Bar"][dataType]){
                return Object.keys(dummyData["Bar"][dataType])
            } else {
                return null
            }
        } else if(chartType == "Pie") {
            if(dummyData["Pie"][dataType]){
                return Object.keys(dummyData["Pie"][dataType])
            } else {
                return null
            }
        } else if(chartType == "Line") {
          if(dummyData["Line"][dataType]){
              return Object.keys(dummyData["Line"][dataType])
          } else {
              return null
          }
        } 
        else {
            return null
        }
    }

    GetValuesAll(chartType : string, dataType? : string, keyName? : string){
        if(chartType == "Bar"){
            return dummyData["Bar"][dataType][keyName]
        } 
        if(chartType == "Pie"){
            return dummyData["Pie"][dataType][keyName]
        }
        if(chartType == "Line"){
          return dummyData["Line"][dataType][keyName]
        }
        else {
            return null
        }
    }

}