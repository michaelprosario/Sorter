import { TestBed } from '@angular/core/testing';

import { NumberSortService } from './number-sort.service';

describe('NumberSortService', () => {
  let service: NumberSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('bubbleSort', () => {
    it('should sort numbers correctly', () => {
      // arrange
      let myList: Array<number> = [10,8,6,4,2];
  
      // act
      service.bubbleSort(myList);
  
      // assert
      expect(myList).toEqual([2,4,6,8,10]);
    });

    it('should sort numbers correctly on 2 element array', () => {
      // arrange
      let myList: Array<number> = [10,8];
  
      // act
      service.bubbleSort(myList);
  
      // assert
      expect(myList).toEqual([8,10]);
    });    

    it('should handle 1 element array', () => {
      // arrange
      let myList: Array<number> = [10];
  
      // act
      service.bubbleSort(myList);
  
      // assert
      expect(myList).toEqual([10]);
    });  
    
    it('should throw error if array is empty', () => {
      // arrange
      let myList: Array<number> = [];
  
      // act
      service.bubbleSort(myList);
  
      // assert      
      expect(myList).toEqual([]);
    });     
  });

  describe('swap', () => {
    it('should swap numbers correctly', () => {
      // arrange
      let myList: Array<number> = [10,8,6,4,2];
  
      // act
      service.swapItems(myList,0);
  
      // assert
      expect(myList).toEqual([8,10,6,4,2]);
    });

    it('should swap numbers correctly again', () => {
      // arrange
      let myList: Array<number> = [10,8,6,4,2];
  
      // act
      service.swapItems(myList,3);
  
      // assert
      expect(myList).toEqual([10,8,6,2,4]);
    });    

    it('should handle bad array', () => {
      // arrange
      let myList: Array<number> = [];
  
      // act       
      expect( () => { service.swapItems(myList,0) } ).toThrow(new Error("Input array should have at least 2 elements"));
    });      

    it('should handle i value larger than array', () => {
      // arrange
      let myList: Array<number> = [10,8,6,4,2];
  
      // act
      // assert
      expect( () => { service.swapItems(myList,10); } ).toThrow(new Error("i should be inside the bounds of the array"));
      expect( () => { service.swapItems(myList,5); } ).toThrow(new Error("i should be inside the bounds of the array"));
    });

  });

});
