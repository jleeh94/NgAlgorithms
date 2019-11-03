import { Component, OnInit } from '@angular/core';
import { Node } from '../helpers/node';

@Component({
  selector: 'app-pathfinding',
  templateUrl: './pathfinding.component.html',
  styleUrls: ['./pathfinding.component.css']
})


export class PathfindingComponent implements OnInit {

  grid: Node[][];
  startNode: number[];
  endNode: number[];

  allowSetStart: boolean;
  allowSetEnd: boolean;

  constructor() {

    this.initGrid(40, 20);
  }

  ngOnInit() {
    this.allowSetStart = false;
    this.allowSetEnd = false;
  }

  initGrid(width: number, height: number) {

    this.grid = [];

    for (let i = 0; i < height; i++) {

      this.grid[i] = [];

      for (let j = 0; j < width; j++) {
        this.grid[i][j] = new Node(i, j);
      }
    }
    this.grid[5][5].start = true;
    this.startNode = [5, 5];
    this.grid[15][35].end = true;
    this.endNode = [15, 35];

  }
  enableStartSet() {
    this.allowSetStart = true;
    this.allowSetEnd = false;
  }

  enableEndSet() {
    this.allowSetStart = false;
    this.allowSetEnd = true;
  }
  setStart($event) {

    const target = $event.target;
    
    //Unset current start
    if(this.startNode.length > 0) {
      this.grid[this.startNode[0]][this.startNode[1]].start = false;
    }

    const locClicked: number[] = [target.getAttribute('data-x'), target.getAttribute('data-y')];    
    this.startNode = locClicked;

    this.grid[locClicked[0]][locClicked[1]].start = true;
  }

  setEnd($event) {

    const target = $event.target;
    
    //Unset current end
    if(this.endNode.length > 0) {
      this.grid[this.endNode[0]][this.endNode[1]].end = false;
    }

    const locClicked: number[] = [target.getAttribute('data-x'), target.getAttribute('data-y')];    
    this.endNode = locClicked;

    this.grid[locClicked[0]][locClicked[1]].end = true;
  }
}







