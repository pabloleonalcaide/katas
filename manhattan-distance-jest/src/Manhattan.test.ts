import { Manhattan } from './Manhattan'
import { Point } from './Point'
import {InvalidParamsError } from './InvalidParamsError'


describe('Manhattan Distance Kata', () => {
  const manhattan = new Manhattan()

  it('Should throw InvalidParamsError if some Point is not defined', () => {
    const goodPoint = new Point(1, 2)

    expect(() => manhattan.manhattanDistance(goodPoint, null)).toThrowError(InvalidParamsError)
  })


  it('Should return a valid position', () => {
    const manhattan = new Manhattan()
    const point1 = new Point(1, 2)
    const point2 = new Point(1, 3)
    
    const value = manhattan.manhattanDistance(point1, point2)
    expect(value).toEqual(1)
  })
})
