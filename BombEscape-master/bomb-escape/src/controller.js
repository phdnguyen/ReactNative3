export const Directions = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  STAY: "STAY"
}

var calculateDensity = (gameState) => {


}

export const doTurn = (gameState) => {
  var bombs    = gameState.bombs;
  var player_x = gameState.playerPosition.x;
  var player_y = gameState.playerPosition.y;
  // calculate mat do bomb tai 1 diem bat ki
  var bombDensity = new Array(gameState.BOARD_HEIGHT);
  for (var i = 0; i< bombDensity.length; i++){
    bombDensity[i] = new Array(31);
  }


  return Directions.STAY;
}