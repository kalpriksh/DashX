import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as XLSX from "xlsx";

@Directive({
  selector: '[ReadExcel]'
})
export class ReadExcelDirective {
  @Output() dataReadEvent = new EventEmitter();

  constructor() { }

  @HostListener("change", ["$event.target"])
  OnChange(target:HTMLInputElement){
    const file = target.files[0];
    const excelObservable = new Observable((subscriber : Subscriber<any>)=>{
    this.ReadFile(file, subscriber)
    })
    excelObservable.subscribe((data) => {
      this.dataReadEvent.emit(data);
    })
  }

  ReadFile(file : File, subscriber : Subscriber<any>){
    const fileReader = new FileReader()

    // reading file as buffer
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) =>{
      const bufferArray =  e.target.result;

      // creating workbook from file 
      const wb : XLSX.WorkBook = XLSX.read(bufferArray, {type : 'buffer'} );
      
      subscriber.next(wb);
      subscriber.complete()

    }

  }

}
