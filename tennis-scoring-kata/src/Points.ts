class Points {
  private points: number;

  constructor(){
    this.points = 0;
  }

  public value():number {
    return this.points;
  }

  public score():void {
    switch (this.points) {
      case 0: this.points = 15;break;
      case 15: this.points = 30;break;
      default: this.points = 40;break;
    }
  }
}
export { Points }