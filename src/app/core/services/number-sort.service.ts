import { Injectable } from '@angular/core';
import { Ensure } from '../helpers/ensure';

@Injectable({
  providedIn: 'root'
})
export class NumberSortService {

  constructor() { }

  bubbleSort(inputArray: Array<number>) {
    Ensure.thatObjectNotNull(inputArray, "input array is required");
        
    if(!inputArray || inputArray.length === 0){
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

    if(inputArray.length < 2){
      throw new Error("Input array should have at least 2 elements");
    }

    if(i >= inputArray.length){
      throw new Error("i should be inside the bounds of the array");
    }

    let tmp = inputArray[i];
    inputArray[i] = inputArray[i + 1];
    inputArray[i + 1] = tmp;
  }
}
