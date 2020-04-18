class Player {
  private points: number;

  constructor(){
    this.points = 0
  }
  public getPoints():number{
    return this.points;
  }

  public scorePoints():void{
    this.points = this.nextScore(this.points)
  }

  private nextScore(previousPoints):number{
      let nextPoints;
    switch (previousPoints) {
      case 0: nextPoints = 15;break;
      case 15: nextPoints = 30;break;
      case 30: nextPoints = 40;break;
      default: break;
    }
    return nextPoints;
  }
}

export {Player}