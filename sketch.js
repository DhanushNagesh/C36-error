
var database
var gameState
var playerCount
var player,form,game
var allPlayers

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
    console.log(gameState)
}

function draw(){
  if(playerCount === 4){
      game.update(1)
  }
  if(gameState === 1){
      clear()
      game.play()
  }
  
}