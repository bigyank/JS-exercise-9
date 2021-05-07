const ball = document.getElementById("ball");
let ballDiameter = ball.clientHeight;
const startpos = 0;
const endpos = document.body.clientHeight - ballDiameter;
let ballpos = 0;
let direction = 1;
const speed = 5;

function move() {
  switch (ballpos) {
    case endpos:
      direction = -1;
      break;
    case startpos:
      direction = 1;
      break;
  }

  ballpos += direction * speed;
  ball.style.transform = `translateY(${ballpos}px)`;
  window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);
