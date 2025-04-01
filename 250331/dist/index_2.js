"use strict";
// // 특정 값을 인자값으로 받아서 해당 값을 반환하는 함수를 선언!!
// // 위 특정 값이 숫자, 문자, 객체, 배열이 예측불가!!
Object.defineProperty(exports, "__esModule", { value: true });
// const func = (value: unknown) => {
//   return value;
// };
// let num = func(10);
// let str = func("Hello");
// // num.toUpperCase();
// // num.toFixed();
// // str.toUpperCase();
// if (typeof num === "number") {
//   num.toFixed();
// }
// if (typeof str === "string") {
//   str.toUpperCase();
// }
const func = (value) => {
    return value;
};
let num = func(10);
// const func01 = <T>(value: T): T => {
//   return value;
// };
let arr = func([1, 2, 3]);
// 제네릭 형식으로 타입을 지정하게되면, 기본적으로 상대적인 슈퍼타입을 타입으로 지정하려고 함!!
