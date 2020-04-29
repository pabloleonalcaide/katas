import { Points } from './Points';

class Player {
  private points: Points;

  constructor() {
    this.points = new Points();
  }

  public getPoints():number{
    return this.points.value;
  }

  public scorePoints():void{
    this.points.score();
  }
}

export {Player}