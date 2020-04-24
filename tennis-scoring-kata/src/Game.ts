import { Player } from "./Player"

class Game {
  private player1: Player;
  private player2: Player;
  private winner: Player;
  private deucePlayer: Player;
  private MAX_POINT = 40;

  constructor(player1: Player, player2: Player){
    this.player1 = player1;
    this.player2 = player2;
  }

  public scoreForPlayer(playerNumber: 1|2):void{
    if(this.winner == undefined){
      playerNumber == 1 ? this.scorePoints(this.player1) : this.scorePoints(this.player2);
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
}

export {Game}