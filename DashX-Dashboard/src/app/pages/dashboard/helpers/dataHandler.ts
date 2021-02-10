import * as dummyData from "../helpers/chartTestData.json"

export class DataHandler {
    
    JSON_obj
    constructor() {

    }
    
    GetKeys(chartType, dataType){
        if(chartType == "Bar"){
            return Object.keys(dummyData["Bar"][dataType])
        } 
        if(chartType == "Pie"){
            return Object.keys(dummyData["Pie"][dataType])
        } 
        else {
            return null
        }
    }

    GetValuesAll(chartType : string, dataType : string, keyName : string){
        if(chartType == "Bar"){
            return dummyData["Bar"][dataType][keyName]
        } 
        if(chartType == "Pie"){
            return dummyData["Pie"][dataType][keyName]
        } 
        else {
            return null
        }
    }

}