import { Player } from "./Player"
import { InvalidPlayerException } from './InvalidPlayerException'
import { CompletedGameException } from "./CompletedGameException";

class Game {
  private player1: Player;
  private player2: Player;
  private completed: boolean;
  private winner: Player;
  private deucePlayer: Player;
  private MAX_POINT = 40;

  constructor(player1: Player, player2: Player){
    this.player1 = player1;
    this.player2 = player2;
    this.completed = false;
  }

  public isCompleted():boolean {
    return this.completed;
  }

  public scoreForPlayer(player: number):void{
    this.ensureIncompleteGame();
    switch (player) {
      case 1: this.scorePoints(this.player1);break;
      case 2: this.scorePoints(this.player2);break;
      default: throw new InvalidPlayerException("Only players 1 or 2 availables"); break;
    }
  }

  public deuce(player: Player):void {
    this.deucePlayer = player;
  }

  public getWinner():Player{
    return this.winner;
  }

  private setWinner(player: Player){
    this.winner = player
    this.completed = true;
  }
  
  public getCurrentScore(): object{
    return {player1: this.player1.getPoints(), player2: this.player2.getPoints()}
  }

  private checkGameStatus(player: Player):void {
    if((player == this.player1 && this.player1.getPoints() == this.MAX_POINT && this.player2.getPoints() < this.MAX_POINT) || this.deucePlayer == this.player1)
      this.setWinner(this.player1);
    else if((player == this.player2 && this.player2.getPoints() == this.MAX_POINT && this.player1.getPoints() < this.MAX_POINT) || this.deucePlayer == this.player2)
      this.setWinner(this.player2);
  }

  private scorePoints(player: Player){
    this.checkGameStatus(player);
    if(player.getPoints() == this.MAX_POINT)
      this.deuce(player);
    else
      player.scorePoints();
  }

  private ensureIncompleteGame():void {
    if(this.completed)
      throw new CompletedGameException("The game is already completed, no more actions available")
  }
}

export {Game}