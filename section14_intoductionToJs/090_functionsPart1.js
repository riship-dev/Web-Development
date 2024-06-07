/*
function main(){
    fourSteps();
    turnLeft();
    fourSteps();
 }
 
function fourSteps(){
    move();
    move();
    move();
    move();
}
*/

/*
// Diagonal
function main(){
   putBeeper();
   diagonalBeeper();
   diagonalBeeper();
   diagonalBeeper();
   diagonalBeeper();
}

function diagonalBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
   turnRight();
}
*/

//Chess
function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight(){
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft(){
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }