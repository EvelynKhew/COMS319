var xPos=1, yPos=300, edgeX = 1250, edgeY = 600, movingX = 1, movingY = 0, savedX = 1, savedY = 0

function startStop(){
  var ssButton = document.getElementById("startStop");

  if (ssButton.value != "stop") {
    ssButton.value = 'stop'
    movingY = savedY; movingX = savedX
    startGame();
  } else {
    ssButton.value = 'start'
    savedY = movingY; savedX = movingX
    movingY = 0; movingX = 0
  }
}

function startGame(){
  var board = document.getElementById("snakeBoard");
  var ctx = board.getContext("2d");
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  const whiteSpace = JSON.stringify(Array.from(ctx.getImageData(1, 1, 1, 1).data)); //white pixel to compare to

  setInterval(() => {
    var updateY = yPos + movingY
    var updateX = xPos + movingX

    //spaces to compare to to see if they are white or not
    var spaceToGoRight = JSON.stringify(Array.from(ctx.getImageData(updateX+5, updateY, 1, 1).data));
    var spaceToGoLeft = JSON.stringify(Array.from(ctx.getImageData(updateX-5, updateY, 1, 1).data));
    var spaceToGoUp = JSON.stringify(Array.from(ctx.getImageData(updateX, updateY+5, 1, 1).data));
    var spaceToGoDown = JSON.stringify(Array.from(ctx.getImageData(updateX, updateY-5, 1, 1).data));

    //TODO doesnt work with right turn but works with left turn
    //update: it works with right but not left now
    //update update: now it works with neither :((
    // if(movingX==0){ //up or down
    //   if(movingY < 0 && whiteSpace != SpaceToGoDown){
    //     startStop();
    //     return;
    //   }
    //
    //   else if(movingY > 0 && whiteSpace != SpaceToGoUp){
    //     startStop();
    //     return;
    //   }
    // }
    //
    // else if(movingY==0){ //left or rightTurn
    //   if(movingX < 0 && whiteSpace != SpaceToGoLeft){
    //     startStop();
    //     return;
    //   }
    //
    //   else if(movingX > 0 && whiteSpace != SpaceToGoRight){
    //     startStop();
    //     return;
    //   }
    // }


    if(updateX + 2 < edgeX && updateY + 2 < edgeY && updateX - 2 >= 0 && updateY - 2 >= 0){ // havent reached boundaries
      yPos = updateY, xPos = updateX
      ctx.lineTo(xPos, yPos);
      ctx.stroke();
    } else{ //boundaries reached
      clearInterval(); //added to stop the flashing
      startStop();
      return; //exit
    }
  }, 10);
}

function rightTurn(){
  if(movingX != 0){ //moving left or right
    if (movingX > 0){movingY = 1}
    else {movingY = -1}
    movingX = 0;
  } else{ //moving up or down
    if (movingY > 0){movingX = -1}
    else {movingX = 1}
    movingY = 0;
  }
}

function leftTurn(){
  if(movingX != 0){ //moving left or right
    if (movingX > 0){movingY = -1}
    else {movingY = 1}
    movingX = 0;
  } else { //moving up or down
    if (movingY > 0){movingX = 1}
    else {movingX = -1}
    movingY = 0;
  }
}
