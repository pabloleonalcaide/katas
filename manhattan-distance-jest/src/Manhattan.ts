import {Point} from './Point'
import {InvalidParamsError } from './InvalidParamsError'

class Manhattan {

  public manhattanDistance(point1: Point, point2: Point): number {
    if( point1 == null || point2 == null)
      throw new InvalidParamsError
    return point1.distanceFrom(point2)
  }

}

export {
  Manhattan
}
