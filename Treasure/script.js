function validateNumbers(num) {
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

function getFinalPosition(mapSize, startingPosition) {
  let position = Math.floor(Math.random() * mapSize);
  while (position == startingPosition) {
    position = Math.floor(Math.random() * mapSize);
  }
  return position;
}

function start(player) {
  player.mapSize = Number(prompt("Enter the size of the map"));
  player.allowedMoves = Number(prompt("Enter the number of allowed moves"));
  player.startPosition = Number(prompt("Enter the starter position"));

  //checking if all the variables are numbers
  if (
    !validateNumbers(player.mapSize) ||
    !validateNumbers(player.allowedMoves) ||
    !validateNumbers(player.startPosition)
  ) {
    return;
  } else {
    //treasure postion
    const rewardPosition = getFinalPosition(
      player.mapSize,
      player.startPosition
    );
    console.log("The treause in position " + rewardPosition);
    const map = new Array(player.mapSize);

    player.history[0].movesLeft = player.allowedMoves;
    player.history[0].currentPosition = player.startPosition;

    console.log(`Map Size ${player.mapSize}`);
    console.log(`Start Position ${player.startPosition}`);
    console.log(`Moves Allowed  ${player.allowedMoves}`);

    let i = 0;
    while (
      player.history[i].movesLeft != 0 &&
      player.history[i].currentPosition != rewardPosition
    ) {
      let move = prompt("Enter the direction you want to move");

      if (move === "left") {
        if (player.history[i].currentPosition != 0) {
          player.history.push({
            moveNumber: i + 1,
            direction: "left",
            currentPosition: player.history[i].currentPosition - 1,
            movesLeft: player.history[i].movesLeft - 1,
          });
          console.log("moves left");
          i++;
        } else {
          console.log("Pleaes move right , you can't move left");
        }
      } else if (move === "right") {
        if (player.history[i].currentPosition != map.length - 1) {
          player.history.push({
            moveNumber: i + 1,
            direction: "right",
            currentPosition: player.history[i].currentPosition + 1,
            movesLeft: player.history[i].movesLeft - 1,
          });
          console.log("moves right");
          i++;
        } else {
          console.log("Pleaes move left , you can't move right");
        }
      } else {
        console.log("Enter just left or right");
      }
    }
    if (player.history[i].movesLeft == 0) {
      console.log("You Lose");
    } else {
      console.log("You win");
    }
  }
}

let player = {
  mapSize: 0,
  startPosition: 0,
  allowedMoves: 0,
  history: [
    {
      moveNumber: 0,
      direction: "null",
      currentPosition: 0,
      movesLeft: 0,
    },
  ],
};
start(player);
