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
        } else if(chartType == "Pie"){
            if(dummyData["Pie"][dataType]){
                return Object.keys(dummyData["Pie"][dataType])
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
        else {

            return null
        }
    }

}