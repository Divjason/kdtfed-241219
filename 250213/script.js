// 원의 넓이 : 파이 * r제곱
// r = 반지름

// 원의 둘레 : 2 * 파이 * r

const radius = prompt("반지름의 크기는?");

const area = (r) => {
  return Math.PI * r * r;
};

const circum = (r) => {
  return 2 * Math.PI * r;
};

const result = document.querySelector("#result");

result.innerText = `
  반지름 : ${radius},
  원의넓이 : ${area(radius).toFixed(3)},
  원의둘레 : ${circum(radius).toFixed(3)}
`;
