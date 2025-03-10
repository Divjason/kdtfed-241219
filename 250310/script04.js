const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#222",
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.fillStyle = circle.color;
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fill();
};

const move = () => {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawCircle();

  circle.x += circle.dx;
  circle.y += circle.dy;

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }

  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = -circle.dy;
  }

  // 재귀함수 => recursion
  requestAnimationFrame(move);
};

move();
