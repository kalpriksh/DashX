import * as dummyData from "../helpers/chartTestData.json"

export class DataHandler {
    
    constructor() {}
    
    GetKeys(chartType, dataType){
        if(chartType == "Bar"){
            return Object.keys(dummyData["Bar"][dataType])
        } else {
            return null
        }
    }

    GetValuesAll(chartType : string, dataType : string, keyName : string){
        if(chartType == "Bar"){
            return dummyData["Bar"][dataType][keyName]
        } else {
            return null
        }
    }

}