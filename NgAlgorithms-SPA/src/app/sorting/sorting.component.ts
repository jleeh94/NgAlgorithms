import { Component, OnInit } from '@angular/core';
import { quickSort } from '../algorithms/quicksort';
import { bubbleSort } from '../algorithms/bubblesort';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {


  _randomNums: Array<number>;
  _selectedAlgo: string;
  _enableGo: boolean;
  _playSpeed: number;

  constructor() { }

  ngOnInit() {
    this.GenerateNumbers();
    this._playSpeed = 200;
  }

  GenerateNumbers() {
    this._randomNums = Array.from({length: 80}, () => Math.floor(Math.random() * 500) + 50);
  }

  EnableGo(event: any) {
    this._enableGo = true;
    this._selectedAlgo = event.target.value;
  }

  SetSpeed(event: any) {
    this._playSpeed = event.target.value;
  }

  async Sort() {

    this._enableGo = false;

    switch (this._selectedAlgo) {

      case 'quick':
        await quickSort(this._randomNums, 0, this._randomNums.length - 1, this._playSpeed);
        break;
      case 'bubble':
        await bubbleSort(this._randomNums, this._playSpeed);
        break;

      default:
        break;
    }

    this._enableGo = true;
  }

}
