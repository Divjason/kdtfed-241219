const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.scale(1, 0.7);
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 80, 20, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "#fff";
ctx.strokeStyle = "green";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(120, 80, 5, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "#000";
ctx.fill();

ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI, false);
ctx.strokeStyle = "#000";
ctx.lineWidth = 3;
ctx.stroke();
