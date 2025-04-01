let num1: number = 10; // number
let num2: 10 = 10; // literal

// num1 = supertype
// num2 = subtype

// supertype > subtype : upcasting
// subtype > supertype : downcating => any type

// num1 = num2;
// num2 = num1;

let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = undefined;

let unknownVar: unknown;

// let num: number = unknownVar;
// let str: string = unknownVar;

// let test01: never = 10;
// let test02: never = "string";
// let test03: never = true;

// interface IAnimal {
//   // name: string;
//   // color: string;
//   [key: string]: string;
// }

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

let cat = {
  name: "야옹이",
  color: "white",
  country: "일본",
};

animal = dog;
animal = cat;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "ts",
  price: 30000,
  // skill: "react",
};

let programingBook: ProgrammingBook = {
  name: "typescript",
  price: 30000,
  skill: "reactjs",
};

book = programingBook;
// programingBook = book;

let book3: Book = programingBook;

const func = (book: Book) => {};

func(programingBook);

programingBook.skill = "ts";
