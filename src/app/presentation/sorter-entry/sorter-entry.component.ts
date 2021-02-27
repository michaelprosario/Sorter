import { Component, OnInit } from '@angular/core';
import { NumberSortService } from 'src/app/core/services/number-sort.service';
import { ISorterEntryView } from './sorter-entry-view';
import { SorterEntryPresenter } from './sorter-entry.presenter';

@Component({
  selector: 'app-sorter-entry',
  templateUrl: './sorter-entry.component.html',
  styleUrls: ['./sorter-entry.component.css']
})
export class SorterEntryComponent implements OnInit, ISorterEntryView {


  strNumber: string = "";
  numberList: Array<number> = [];
  presenter: SorterEntryPresenter;

  constructor(private numberSortService: NumberSortService) { 
    this.presenter = new SorterEntryPresenter(this);
  }
  
  setNumberList(outputList: number[]) {
    this.numberList = outputList;
    this.strNumber = "";
  }

  showErrorMessage(errorMessage: string): void {
    alert(errorMessage);
  }

  onAddNumber(){
    this.presenter.onAddEntry(this.strNumber, this.numberList);
  }

  onSortList(){
    this.numberList = this.numberSortService.bubbleSort(this.numberList);
  }

  ngOnInit(): void {
  }

}
