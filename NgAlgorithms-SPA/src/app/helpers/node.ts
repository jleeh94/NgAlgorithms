

export class Node {

    start: boolean;
    end: boolean;
    posX: number;
    posY: number;
    distance: number;
    visited: boolean;

    constructor(x: number, y: number) {
      this.end = false;
      this.posX = x;
      this.posY = y;
      this.distance = Number.MAX_SAFE_INTEGER;
      this.visited = false;
    }
}
