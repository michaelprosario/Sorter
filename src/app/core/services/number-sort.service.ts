import { Injectable } from '@angular/core';
import { Ensure } from '../helpers/ensure';

@Injectable({
  providedIn: 'root'
})
export class NumberSortService {

  constructor() { }

  bubbleSort(inputArray: Array<number>) {
    Ensure.thatObjectNotNull(inputArray, "input array is required");
    
    if(!inputArray){
      return [];
    }

    let len = inputArray.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (this.itemsOutOfOrder(inputArray, i)) {
                this.swapItems(inputArray, i);
                swapped = true;
            }
        }
    } while (swapped);

    return inputArray;
  };  

  private itemsOutOfOrder(inputArray: number[], i: number) {
    return inputArray[i] > inputArray[i + 1];
  }

  swapItems(inputArray: number[], i: number) {
    Ensure.thatObjectNotNull(inputArray, "input array is required");
    Ensure.thatObjectNotNull(i, "i is required");

    let tmp = inputArray[i];
    inputArray[i] = inputArray[i + 1];
    inputArray[i + 1] = tmp;
  }
}
