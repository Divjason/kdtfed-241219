const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

// destination => 먼저 그려진 도형
// source => 나중에 그려진 도형

// source-over : source 도형을 가장 위로 올려주는 속성
// source-in : source 도형을 기준으로 source도형과 교차되는 영역만 살림
// source-out : source 도형을 기준으로 source도형과 교차되지 않는 영역만 살림
// source-atop : source 도형을 기준으로 교차되는 영역은 살리면서, 동시에 destination 영역을 기준으로 나머지 영역은 불투명하게!!!

// destination-over : destination 도형을 가장 위로 올려주는 속성
// destination-in : destination 도형을 기준으로 destination도형과 교차되는 영역만 살림
// destination-out : destination 도형을 기준으로 destination도형과 교차되지 않는 영역만 살림
// destination-atop : destination 도형을 기준으로 교차되는 영역은 살리면서, 동시에 source 영역을 기준으로 나머지 영역은 불투명하게!!!

// lighter : 감산혼합 기법으로, 교차되는 영역을 밝게 만드는 속성
// darken : 가산혼합 기법으로, 교차되는 영역을 어둡게 만드는 속성
// copy : 나중에 그려진 source만 출력하고자 할 때 사용하는 속성
// xor : source 와 destination이 교차되는 영역을 아예 색상을 없애버린 효과, 그러면서 동시에 나머지 영역은 색상을 유지

ctx.globalCompositeOperation = "xor";

ctx.beginPath();
ctx.fillStyle = "#222";
ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
