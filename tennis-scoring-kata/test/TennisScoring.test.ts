import {Player} from '../src/Player'
import { Game } from '../src/Game';

describe('Player Behaviour', () => {
  var player1 = new Player();

  it('Players must be able to score points', () => {
    const initialPoints = player1.getPoints();
    player1.scorePoints();
    expect(player1.getPoints()).toBeGreaterThan(initialPoints)
  })
})

describe('Game behaviour', () => {
  var p1: Player;
  var p2: Player;
  var game: Game;
  beforeEach(() => {
    p1 = new Player();
    p2 = new Player();  
    game = new Game(p1, p2);  
  })
  it('The game must be able to be completed with a winner', () => {
    game.scoreForPlayer(1)
    game.scoreForPlayer(1)
    game.scoreForPlayer(1)
    game.scoreForPlayer(1)
    expect(game.getWinner()).toBe(p1)
  })

  it('The deuce case should be handled', () => {
      game.deuce = jest.fn()
      game.scoreForPlayer(1)
      game.scoreForPlayer(2)
      game.scoreForPlayer(1)
      game.scoreForPlayer(2)
      game.scoreForPlayer(1)
      game.scoreForPlayer(2)
      game.scoreForPlayer(1)
      expect(game.deuce).toHaveBeenCalled()
  })

  it('After a game has been won, a winner must be determined', () => {
      expect(game.getWinner()).toBeUndefined();
      game.scoreForPlayer(1)
      game.scoreForPlayer(1)
      game.scoreForPlayer(1)
      game.scoreForPlayer(1)
      expect(game.getWinner()).toBe(p1)
    })
    
  it('The current score of either player should be available at any point during the game', () => {
    const expectedScore1 = {player1: 15, player2: 0}
    const expectedScore2 = {player1: 30, player2: 15}
    game.scoreForPlayer(1)
    expect(game.getCurrentScore()).toEqual(expectedScore1);
    game.scoreForPlayer(1)
    game.scoreForPlayer(2)
    expect(game.getCurrentScore()).toEqual(expectedScore2);
  })
})