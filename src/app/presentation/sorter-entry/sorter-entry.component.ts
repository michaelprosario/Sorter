import { Component, OnInit } from '@angular/core';
import { NumberSortService } from 'src/app/core/services/number-sort.service';

@Component({
  selector: 'app-sorter-entry',
  templateUrl: './sorter-entry.component.html',
  styleUrls: ['./sorter-entry.component.css']
})
export class SorterEntryComponent implements OnInit {

  constructor(private numberSortService: NumberSortService) { }

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

  onSortList(){
    this.numberList = this.numberSortService.bubbleSort(this.numberList);
  }

  ngOnInit(): void {
  }

}
