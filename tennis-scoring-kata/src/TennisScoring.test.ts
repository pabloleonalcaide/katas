import {Player} from './Player'

describe('Tennis Scoring Kata', () => {
  var player1 = new Player();

  it('Players must be able to score points', () => {
    const initialPoints = player1.getPoints();
    console.log(player1.getPoints())
    player1.scorePoints();
    console.log(player1.getPoints())
    expect(player1.getPoints()).toBeGreaterThan(initialPoints)
  })



})
