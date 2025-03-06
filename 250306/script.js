const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.fillRect(10, 10, 50, 100);

// canvas 초기화!!!

// context 생성하기!!!

// canvas 위에 그림을 그리기 위한 환경요소들의 실체 혹은 집합체
// 문맥, 맥락, 목차 등등 사전적 정의

// 각도 개념!!! = 도씨 사용불가!!! & 호도법!!!!

// 1) 사각형 그리기!!!
// 내장함수 및 속성이 지원!!!

// fillRect(x, y, width, height)
// strokeRect(x, y, width, height)
// clearRect(x, y, width, height)

// fillStyle = "색상"
// strokeStyle = "색상"

// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.strokeStyle = "#000";

// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(50, 50, 120, 120);

// ctx.clearRect(70, 80, 80, 45);

// 2) 삼각형 그리기!
// 지금부터 그림을 그릴거야! 선언 => beginPath()
// 직선경로를 설정할 때 => lineTo(x, y)
// 설정한 직선경로를 그리고 싶을 때 => stroke()
// 설정 및 그린 직선경로들을 활용해서 어떤 도형이 생성되었을 때, 그 안에 색상을 넣고자 한다면 => fill()
// 현재 그림을 그리고 있는 위치에서 경로를 이동하고자 할 때, moveTo(x, y)
// 현재 작업중인 그리기가 끝났다! 선언 => closePath()

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(150, 100);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 150);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "rgb(0, 200, 0)";
// ctx.fill();

// 3) 원 및 호 만들기
// 아치형 구조 => arch
// arc(x, y, r, startAngle, endAngle, counterClockWise = true = 반시계방향)

// ctx.beginPath();
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
// ctx.closePath();
// ctx.stroke();

// ctx.fillStyle = "#ff0";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, Math.PI, true);
// ctx.arc(280, 100, 50, 0, Math.PI, false);

// ctx.fillStyle = "#f00";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI / 3, false);
// ctx.stroke();

// 4) 타원 그리기!!!
// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockWise)

// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);

// ctx.strokeStyle = "#f00";
// ctx.stroke();

// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, Math.PI / -6, 0, Math.PI * 2);

// ctx.strokeStyle = "#00f";
// ctx.stroke();

// ctx.beginPath();
// ctx.save();
// ctx.scale(1, 0.7);
// ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
// ctx.stroke();
// ctx.restore();

// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
// ctx.stroke();

// 5) 곡선 그리기!
// TTF : 2차 베지에 // OTF : 3차 베지에
// 2차 베지에 : quadraticCurveto()
// 3차 베지에 : bezierCurveTo(첫번째 x조절점, 첫번째 y조절점, 두번째 x조절점, 두번째 y조절점, 최종 종착점 x, 최종 종착점 y)

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();

// 6) 특정 경로값을 저장해놓고 가져와서 사용하고자 할 때!
// new Path2D()

// const triangle = new Path2D();
// triangle.moveTo(100, 100);
// triangle.lineTo(300, 100);
// triangle.lineTo(200, 260);
// triangle.closePath();

// const circle = new Path2D();
// circle.arc(200, 155, 50, 0, Math.PI * 2);

// ctx.stroke(triangle);

// ctx.fillStyle = "#0f0";
// ctx.fill(circle);

let radius = 0; // 원의 초기 반지름
const maxRadius = 50; // 최대로 커질 반지름
const centerX = 200;
const centerY = 155;
const speed = 1; // 반지름이 증가하는 속도

function animateCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0f0";
  ctx.fill();

  if (radius < maxRadius) {
    radius += speed; // 반지름 증가
    requestAnimationFrame(animateCircle); // 다음 프레임 요청
  }
}

animateCircle(); // 애니메이션 시작
