import { Component, OnInit } from '@angular/core';
import { quickSort } from '../algorithms/quicksort';
import { bubbleSort } from '../algorithms/bubblesort';
import { mergeSort } from '../algorithms/mergesort';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {


  randomNums: Array<number>;
  selectedAlgo: string;
  enableGo: boolean;
  playSpeed: number;

  constructor() { }

  ngOnInit() {
    this.GenerateNumbers();
    this.playSpeed = 200;
  }

  GenerateNumbers() {
    this.randomNums = Array.from({length: 80}, () => Math.floor(Math.random() * 500) + 50);
  }

  EnableGo(event: any) {
    this.enableGo = true;
    this.selectedAlgo = event.target.value;
  }

  SetSpeed(event: any) {
    this.playSpeed = event.target.value;
  }

  async Sort() {

    this.enableGo = false;


    switch (this.selectedAlgo) {

      case 'quick':
        await quickSort(this.randomNums, 0, this.randomNums.length - 1, this.playSpeed);
        break;
      case 'bubble':
        await bubbleSort(this.randomNums, this.playSpeed);
        break;
      case 'merge':
        await mergeSort(this.randomNums, 0, this.randomNums.length - 1, this.playSpeed);
        break;

      default:
        break;
    }

    console.log('Sorted: ' + this.randomNums.toString());

    console.log('Match: ' + (this.randomNums === this.randomNums.sort((a, b) => a - b)));

    this.enableGo = true;
  }

}
