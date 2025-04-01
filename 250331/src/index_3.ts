// 타입변수가 2개 필요한 경우?
// const swap = <T, O>(a: T, b: O): (T | O)[] => {
//   return [b, a];
// };

// const [a, b] = swap("1", 2);
// console.log(a, b);

// const returnFirstValue = <T>(data: T[]) => {
//   return data[0];
// };

// let num = returnFirstValue([0, 1, 2]);

// let str = returnFirstValue([1, "Hello", "World"]);

// const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };

// let str = returnFirstValue([1, "Hello", "World"]);

const getLength = <T extends { length: number }>(data: T) => {
  return data.length;
};

getLength("Hello");
getLength([1, 2, 3]);
getLength({ length: 1 });

// getLength(null);
// getLength(undefined);

// TS + React.js
// React =>
