
class Point {

    private axisX: number
    private axisY: number
  
  constructor(axisX: number, axisY: number) {
    this.axisX = axisX,
    this.axisY = axisY
  }

  public distanceFrom(otherPoint: Point): number {
        
    const distanceX = Math.abs(otherPoint.axisX - this.axisX);
    const distanceY = Math.abs(otherPoint.axisY - this.axisY);
    
    if(distanceX == 0 && distanceY == 0){
      throw new Error("The two points are in the same position")
    }

    return distanceX + distanceY
  }
}

export {
  Point
}
