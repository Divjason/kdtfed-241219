enum Role {
  ADMIN,
  USER,
  GUEST,
}

const user9 = {
  name: "David",
  role: Role.ADMIN,
};
const user8 = {
  name: "Jane",
  role: Role.GUEST,
};
const user7 = {
  name: "Juliet",
  role: Role.USER,
};

console.log(user9, user8, user7);

let test01: unknown;

let test02: number = 2;

test01 = test02;
// test02 = test01;

let anyVar: any = 10;

anyVar = "hello";
anyVar.toUpperCase();

anyVar = true;
anyVar = {};
anyVar = [];

anyVar.pop();

let num = 10;

anyVar = num;
num = anyVar; // downcasting 허용

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// num = unknownVar; // downcasting 비허용

if (typeof unknownVar === "number") {
  num = unknownVar;
}

const func1 = (): void => {
  console.log("Hello");
};

let a: void;
a = undefined;

const func3 = (): never => {
  while (true) {
    console.log("Hello");
  }
};

const func4 = (): never => {
  throw new Error();
};
