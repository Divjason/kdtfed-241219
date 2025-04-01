// number
const num1 = 123;
let num2 = 456;
num2 = 789;
let num3: number = 700;
// num2 = "123";

// string
let str1 = "Hello";
str1 = "World";

let str2: "David" = "David";
// str2 = "Juliet";
// str1 = 1;

let bool = true;
bool = false;

let test1: null = null;
test1 = null;

let test2: undefined = undefined;
test2 = undefined;

// 예외사항
// let num4 = 7;
// num4 = null;
// num4 = undefined;
// let num5 = null;

let num10: number = 10;
let test10: unknown;

// 대수타입!!
// num10 = test10;
test10 = num10;

let numArr: number[] = [1, 2, 3];
// numArr = ["1", 2, 3];
let strArr: string[] = ["hello", "world"];
let boolArr: boolean[] = [true, false, true];
let bool1Arr: Array<boolean | number | string> = [true, false, true, 1, "Node"];

let muliArr: (string | number)[] = [1, "hello"];

let doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];

let tupl: [number, number] = [1, 2];

// tupl = [1, 2, 3];
// tupl = ["1", 2];

// tupl.push(1);

// const users: [string, number][] = [
//   ["David", 1],
//   ["Jane", 2],
//   ["Juliet", 3],
//   ["Brown", 4],
//   [5, "Whitney"],
// ];

let user: object = {
  id: 1,
  name: "David",
};

// user.id;

let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "David",
};

interface User {
  readonly id: number;
  name?: string;
}

let user2: User = {
  id: 3,
  name: "Jane",
};

let user3: User = {
  id: 4,
  name: "Brown",
};

let user4: User = {
  id: 5,
};

// user4.id = 7;

type Usernick = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

const test12 = () => {
  type Usernick = string;
};

let user5: Usernick = {
  id: 5,
  name: "통키",
  nickname: "피구왕",
  birth: "2002.02.02",
  bio: "내꿈은 피구왕",
  location: "서울시 서초구",
};

// import nick as name from "./lkjsdlkfjlsdjkflj"

interface ICountryCode {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  [key: string]: string;
}

type CountryCode = {
  // Korea: string;
  // UnitedState: string;
  // UnitedKingdom: string;
  // Japan: string;
  [key: string]: string;
};

let countryCode: ICountryCode = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  Japan: "jp",
  // Mexico: 1,
};

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user9 = {
  name: "David",
  role: Role.ADMIN,
};
