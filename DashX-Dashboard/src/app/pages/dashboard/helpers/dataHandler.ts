import * as XLSX from "xlsx";

export class DataHandler {
    
    private wb : XLSX.WorkBook
    private wsName : string
    private ws : XLSX.WorkSheet
    
    // array of rows in a worksheet
    wsData_json : JSON[]

    constructor(WorkBook : XLSX.WorkBook) {

        //initialize later using input to constructor
        this.wb = WorkBook;
        // worksheet name
        this.wsName = this.wb.SheetNames[0];
        // reading worksheet based on wsName
        this.ws = this.wb.Sheets[this.wsName];
        // reading data
        this.wsData_json = XLSX.utils.sheet_to_json(this.ws);
        console.log(this.wsData_json);
        
    }
    
    GetKeys(){
        return Object.keys(this.wsData_json[0]);
    }

    GetValuesAll(keyName : string){
        
        var reqArray = Array()
        this.wsData_json.forEach(row => {
            reqArray.push(row[keyName])
        });
        return reqArray;
        

    }
}