import { Component, OnInit } from '@angular/core';
import { Node } from '../helpers/node';
import { dijkstra } from '../algorithms/dijkstra';

@Component({
  selector: 'app-pathfinding',
  templateUrl: './pathfinding.component.html',
  styleUrls: ['./pathfinding.component.css']
})


export class PathfindingComponent implements OnInit {

  grid: Node[][];
  startNode: number[]; // Keep the x-y coordinates of the start and end so we don't have to iterate the grid
  endNode: number[];   // to find it.

  allowSetStart: boolean;
  allowSetEnd: boolean;

  enableGo: boolean;
  playSpeed: number;
  selectedAlgo: string;

  constructor() { }

  ngOnInit() {
    this.initGrid(40, 20);
    this.allowSetStart = false;
    this.allowSetEnd = false;

  }

  async Pathfind() {

    this.enableGo = false;

    switch (this.selectedAlgo) {

      case 'dijkstra':
        await dijkstra(this.grid, this.playSpeed);
        break;

      default:
        break;
    }

    this.enableGo = true;
  }

  EnableGo(event: any) {

    this.selectedAlgo = event.target.value;

    if (this.startNode && this.endNode) {
      this.enableGo = true;
    }
  }

  SetSpeed(event: any) {
    this.playSpeed = event.target.value;
  }

  initGrid(width: number, height: number) {

    this.grid = [];

    for (let i = 0; i < height; i++) {

      this.grid[i] = [];

      for (let j = 0; j < width; j++) {
        this.grid[i][j] = new Node(i, j);
      }
    }

  }

  enableStartSet() {
    this.allowSetStart = true;
    this.allowSetEnd = false;
  }

  enableEndSet() {
    this.allowSetStart = false;
    this.allowSetEnd = true;
  }
  setStart($event: any) {

    const target = $event.target;

    // Unset current start
    if (this.startNode) {
      let currentStart = this.grid[this.startNode[0]][this.startNode[1]];
      currentStart.start = false;
      currentStart.distance = Number.MAX_SAFE_INTEGER;
    }

    const locClicked: number[] = [target.getAttribute('data-x'), target.getAttribute('data-y')];
    this.startNode = locClicked;

    let newStart = this.grid[locClicked[0]][locClicked[1]];
    newStart.start = true;
    newStart.distance = 0;

    if (this.endNode && this.selectedAlgo) {
      this.enableGo = true;
    }

  }

  setEnd($event: any) {

    const target = $event.target;

    // Unset current end
    if (this.endNode) {
      let currentEnd = this.grid[this.endNode[0]][this.endNode[1]];
      currentEnd.end = false;
    }

    const locClicked: number[] = [target.getAttribute('data-x'), target.getAttribute('data-y')];
    this.endNode = locClicked;

    let newEnd = this.grid[locClicked[0]][locClicked[1]];
    newEnd.end = true;
    newEnd.distance = Number.MAX_SAFE_INTEGER;

    if (this.startNode && this.selectedAlgo) {
      this.enableGo = true;
    }
  }
}







