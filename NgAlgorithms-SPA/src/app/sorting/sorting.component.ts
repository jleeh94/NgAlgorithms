import { Component, OnInit } from '@angular/core';
import { quickSort } from '../algorithms/quicksort';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {


  _randomNums: Array<number>;
  _selectedAlgo: string;
  _enableGo: boolean;

  constructor() { }

  ngOnInit() {
    this.GenerateNumbers();
  }

  GenerateNumbers() {
    this._randomNums = Array.from({length: 15}, () => Math.floor(Math.random() * 500) + 50);
  }

  EnableGo(event: any) {
    this._enableGo = true;
    this._selectedAlgo = event.target.value;
  }

  async Sort() {
    if (this._enableGo === false) {
      return false;
    }

    this._enableGo = false;
    switch (this._selectedAlgo) {
      case 'quick':
        await quickSort(this._randomNums);
        break;

      default:
        break;
    }

    this._enableGo = true;
  }

}
