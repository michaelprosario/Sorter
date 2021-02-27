import { Ensure } from "src/app/core/helpers/ensure";
import { ISorterEntryView } from "./sorter-entry-view";

export class SorterEntryPresenter {

  constructor(private view: ISorterEntryView){}

  isNumeric(value: string) {
    Ensure.thatObjectNotNull(value, "value is required");

    return /^-?\d+$/.test(value);
  }  

  onAddEntry(strNumber: string , numberList: Array<number>){
    Ensure.thatObjectNotNull(strNumber, "strNumber is required");
    Ensure.thatObjectNotNull(numberList, "numberList is required");    

    if(this.isNumeric(strNumber)){
      let intNumber: number = parseInt(strNumber);
      let outputList = [...numberList];
      outputList.push(intNumber);
      //this.view.setNumberList(outputList);      
      console.log("ok path")
    }else{
      console.log("error path")
      this.view.showErrorMessage("Input should be a number");
    }    
  }
}
