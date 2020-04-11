import { Manhattan } from './Manhattan'
import { Point } from './Point'

describe('Manhattan Distance Kata', () => {

  it('Should throw error if some Point is not defined', () => {
    const manhattan = new Manhattan()
    const goodPoint = new Point(1, 2)
    const badPoint = null

    expect(() => manhattan.manhattanDistance(goodPoint, badPoint)).toThrow()
  })

  it('Should throw error if both Points are in the same position', () => {
    const manhattan = new Manhattan()
    const point1 = new Point(1, 2)
    const point2 = new Point(1, 2)

    expect(() => manhattan.manhattanDistance(point1, point2)).toThrow()
  })
})
