const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// save(), restore()
// ctx 스타일 정의 후 다음번 새로운 스타일을 생성한 후 적용하고자 할 때, 기존 스타일과 다르게 진행하고자 할 때
// 게임 특정구간에 저장버튼을 누르는 것처럼, 특정 구간 및 구간 외 스타일을 이원화해서 사용하고자 할 때

// translate() => canvas의 위치를 이동하고자 할 때, canvas 안에서 좌표값을 변경할 때, moveTo()

// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save();
// ctx.translate(150, 150);

// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);

// ctx.fillStyle = "#f00";
// ctx.fillRect(50, 50, 80, 20);

// ctx.restore();

// ctx.fillStyle = "#ff0";
// ctx.fillRect(100, 100, 200, 200);

// rotate(각도 => 호도법) : 회전을 시켜주는 함수

// ctx.fillStyle = "#ccc";
// ctx.fillRect(150, 150, 100, 100);

// ctx.translate(150, 150);
// ctx.rotate((Math.PI / 180) * 45);
// ctx.strokeRect(0, 0, 100, 100);
// ctx.translate(-150, -150);

// scale(x, y) => 1 => 100%

// ctx.fillStyle = "#ccc";
// ctx.fillRect(50, 50, 100, 50);

// ctx.save();
// ctx.scale(3, 2);
// ctx.strokeStyle = "#ccc";
// ctx.strokeRect(20, 70, 100, 50);
// ctx.restore();

// ctx.strokeRect(200, 50, 100, 50);
