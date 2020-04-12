
class Point {

    readonly axisX: number
    readonly axisY: number
  
  constructor(axisX: number, axisY: number) {
    this.axisX = axisX,
    this.axisY = axisY
  }

  public distanceFrom(otherPoint: Point): number {
        
    const distanceX = Math.abs(otherPoint.axisX - this.axisX);
    const distanceY = Math.abs(otherPoint.axisY - this.axisY);

    return distanceX + distanceY
  }
}

export {
  Point
}
