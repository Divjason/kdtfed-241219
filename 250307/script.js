const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.font = "60px Arial";
// ctx.fillText("HELLO", 50, 70);
// ctx.strokeText("HELLO", 50, 150);

// ctx.font = "italic 60px Arial";
// ctx.fillText("Javascript", 50, 70);

// ctx.font = "Bold 60px Arial";
// ctx.fillText("Typescript", 50, 150);

// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 100, 50, 200, 350, 160, 100, 200, 350);
// });
// img.src = "./images/cat.jpg";

// masking : 서로 다른 요소들이 혼합되지 않도록 별개의 요소로 관리하기 위해서 조치하는 행위

// cliping mask : 서로 다른 복수의 이미지 요소들을 원하는 좌표에 혼합해서 사용할 수 있도록 하는 행위.기능

// const img = new Image();
// img.onload = () => {
//   ctx.drawImage(img, 0, 0);
// };

// img.src = "./images/bird.jpg";

// ctx.beginPath();
// ctx.arc(400, 200, 150, 0, Math.PI * 2, false);
// ctx.clip();

// globalAlpha = "value"

// ctx.globalAlpha = 0.3;

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
// ctx.fillRect(50, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0, 255, 0.4)";
// ctx.fillRect(110, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
// ctx.fillRect(170, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0, 255, 0.8)";
// ctx.fillRect(230, 50, 60, 50);

// ctx.fillStyle = "rgba(0, 0, 255, 1)";
// ctx.fillRect(290, 50, 60, 50);

// gradient 컬러 적용하기!
// createLinearGradient(x1, y1, x2, y2)
// addColorStop(position, color)

// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "#fff");
radGrad.addColorStop(0.4, "#ff0");
radGrad.addColorStop(1, "orange");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();

// 패턴 만들기!!
// const img = new Image();
// img.addEventListener("load", () => {

// })
// img.onload = () => {

// }
// img.onload = function () {
//   const pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// };

// img.src = "./images/pattern.png";

// canvas API를 활용해서 선을 그린다고 했을 때, 선의 마감처리는 총 3가지 중 하나로 선택할 수 있음!

// butt : 기본 디자인 => 단면처리
// round : 선 너비 = 두께의 1/2만큼을 반지름으로 하는 원을 선 양쪽에 붙여넣는다!!
// square : 선 너비의 1/2만큼을 양쪽끝에 붙여넣는다.

// const lineCap = ["butt", "round", "square"];
// const lineJoin = ["bevel", "miter", "round"];

// ctx.strokeStyle = "#222";

// lineCap.forEach((line, index) => {
//   ctx.beginPath();
//   ctx.lineWidth = 20;
//   // ctx.lineCap = lineCap[index];
//   ctx.lineJoin = lineJoin[index];
//   ctx.moveTo(60, 60 * index + 50);
//   ctx.lineTo(100, 60 * index + 15);
//   ctx.lineTo(140, 60 * index + 50);
//   ctx.stroke();
// });
