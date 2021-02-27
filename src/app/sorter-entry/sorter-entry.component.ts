import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorter-entry',
  templateUrl: './sorter-entry.component.html',
  styleUrls: ['./sorter-entry.component.css']
})
export class SorterEntryComponent implements OnInit {

  constructor() { }

  strNumber: string = "";
  numberList: Array<number> = [];

  isNumeric(value: string) {
    return /^-?\d+$/.test(value);
  }  

  onAddNumber(){
    if(this.isNumeric(this.strNumber)){
      let intNumber: number = parseInt(this.strNumber);
      this.numberList.push(intNumber);
      this.strNumber = "";  
    }else{
      alert("Input should be a number");
    }
  }

  bubbleSort(inputArray: Array<number>) {
    if(!inputArray){
      return [];
    }

    let len = inputArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                let tmp = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return inputArray;
  };  

  onSortList(){
    this.numberList = this.bubbleSort(this.numberList);
  }

  ngOnInit(): void {
  }

}
