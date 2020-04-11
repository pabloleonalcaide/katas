import {Point} from './Point'

class Manhattan {

  constructor() {}

  public manhattanDistance(point1: Point, point2: Point): number {
    if( point1 == null || point2 == null)
      throw new Error('Invalid params')
    return point1.distanceFrom(point2)
  }

}

export {
  Manhattan
}
