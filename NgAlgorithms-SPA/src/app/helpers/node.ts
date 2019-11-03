

export class Node {

    start: boolean;
    end: boolean;
    posX: number;
    posY: number;

    constructor(x: number, y: number) {
      this.end = false;
      this.posX = x;
      this.posY = y;
    }
}
