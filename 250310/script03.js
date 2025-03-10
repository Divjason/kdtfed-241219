const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 원을 만듭시다!!!
// 개발자가 매번 원을 만들때마다 arc함수를 사용해야 할까?
// 만약, 개발자가 20개의 원을 만든다면, 우리는 arc함수를 20번사용해야함
// 그리고 그때마다 우리는 너비, 높이, 반지름, 색상을 매번 기입해야함

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

// const circleOne = new Circle(100, 100, 50, "red");
// const circleTwo = new Circle(200, 200, 50, "blue");

// circleOne.draw();
// circleTwo.draw();

// x중심축, y중심축, 반지름, 컬러 => 4개 값(1쌍)이 랜덤으로 필요함
// 총 20개가 필요함!!!!
// 20개를 반복문으로 만들었다고 가정합시다!!!
// 1쌍 2쌍 3쌍 .... 20쌍

// 그리고나서 최종적으로 생성된 20쌍의 요소에 draw()라는 함수를 사용해서 그려줘야함!!
// 반복적인 행위 => draw()를 활용해서 그림을 그리는 반복행위!!!

// 현재 20쌍의 값이 iterable한 객체안에 담겨있어야, 각각의 아이템을 가져와서 draw()에 적용할 수 있음!!!

const objs = [];

for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  objs.push(new Circle(x, y, radius, color));
}

// objs.forEach((obj, i) => {
//   objs[i].draw();
// });

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  objs.forEach((obj, index) => {
    objs[index].animate();
  });
  // for (let i = 0; i < objs.length; i++) {
  //   let obj = objs[i];
  //   obj.animate();
  // }
  requestAnimationFrame(update);
};

update();
