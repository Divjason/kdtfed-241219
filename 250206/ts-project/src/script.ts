// let numA: 100 = 100;
// let strA = "Hello";

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["Hello", "World"];

let boolArr01: boolean[] = [true, false, true];
boolArr01 = [true, true];

const boolArr02: Array<boolean> = [true, false, true];
const muliArr: (number | string)[] = [1, "hello"];
const doubleArr: (number | string)[][] = [[1, "2", 3], [4, 5], [6]];

const tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
let tup2: [number, string, boolean] = [1, "Hello", true];
// tup2 = [1, 2];

let tup3: [number, number] = [1, 2];
tup3.push(1);

console.log(tup3);

const users: [string, number][] = [
  ["박세진", 0],
  ["강백호", 1],
  ["서태웅", 2],
  ["정대만", 3],
  // [4, "채치수"],
];
