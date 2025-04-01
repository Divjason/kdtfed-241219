// const func = (a: number, b: number): number => {
//   return a + b;
// };
const func = (a: number, b: number) => a + b;

// 매개변수 => 선택적 매개변수
// 바닐라 자바스크립트

const introduce = (name: string, tall?: number) => {
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
};

introduce("박세진", 182);

introduce("박세진");

const getSum = (...rest: [number, number, number]) => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
};

getSum(1, 2, 3);
// getSum(1, 2);
// getSum(1, 2, 3, 4);

type Add = (a: number, b: number) => number;
type Call = { (a: number, b: number): number };

const add: Call = (a, b) => a + b;
const sub: Add = (a, b) => a - b;
const multiply: Add = (a, b) => a * b;
const divid: Add = (a, b) => a / b;

const test: (a: number, b: number) => number = (a, b) => a * b;
