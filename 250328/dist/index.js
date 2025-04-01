"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const func = (a: number, b: number): number => {
//   return a + b;
// };
const func = (a, b) => a + b;
// 매개변수 => 선택적 매개변수
// 바닐라 자바스크립트
const introduce = (name, tall) => {
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
};
introduce("박세진", 182);
introduce("박세진");
const getSum = (...rest) => {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    console.log(sum);
};
getSum(1, 2, 3);
