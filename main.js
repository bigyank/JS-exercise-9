const ball = document.getElementById("ball");
let ballDiameter = ball.clientHeight;
const startPos = 0;
const endPos = document.body.clientHeight - ballDiameter;
let ballPos = startPos;
let direction = 1;
const speed = 5;

function move() {
  switch (ballPos) {
    case endPos:
      direction = -1;
      break;
    case startPos:
      direction = 1;
      break;
  }

  ballPos += direction * speed;
  ball.style.transform = `translateY(${ballPos}px)`;
  window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);
