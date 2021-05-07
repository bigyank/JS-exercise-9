const ball = document.getElementById("ball");
const container = document.getElementsByClassName("container")[0];
let ballDiameter = ball.clientHeight;
const startPos = 0;

// cant access external css so have to assign here
container.style.height = "700px";
const endPos = parseInt(container.style.height) - ballDiameter;
console.log(endPos);
let ballPos = startPos;
let direction = 1;
let speed = 5;

function move() {
  ballPos >= endPos ? (direction = -1) : ballPos == 0 ? (direction = 1) : null;
  ballPos += direction * speed;
  ball.style.top = ballPos + "px";
  window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);
