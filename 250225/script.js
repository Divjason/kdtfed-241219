// 함수 매개변수 정의 - 1
const hello = (name, message) => {
  console.log(`${name}님, ${message}`);
};

hello("슛돌이", "반갑습니다.");

// 함수 매개변수 정의 - 2
// 기본 매개변수 값 정의!!
const hello01 = (name, message = "안녕하세요!") => {
  console.log(`${name}님, ${message}`);
};

hello01("슛돌이");

// 함수 매개변수 정의 - 3
// 나머지 매개변수 정의방법 => ...변수명
// const addNum = (a, b = 2) => {
//   const result = a + b;
//   return console.log(result);
// };

const addNum = (...numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return console.log(sum);
};

addNum(1);
addNum(1, 3);
addNum(1, 2, 3, 4, 5);

// 전개연산자 구문 사용법 - 1
// 전개연산자 구문이 함수의 매개변수에서 사용되면 나머지 매개변수라고 특정한 명칭을 갖게 됨!

const animal = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"];

console.log(animal.concat(fruits));
console.log([...animal, ...fruits]);

// 전개연산자 구문 사용법 - 2
// const mine = fruits;
// console.log(mine, fruits);

// mine[1] = "orange";
// console.log(mine, fruits);

const mine = [...fruits];
console.log(mine, fruits);

mine[1] = "orange";
console.log(mine, fruits);

// 객체 프로퍼티 시리즈 - 1
// 객체 내 프로퍼티 값을 추가하고 싶을 때, 온점표기법 & 대괄호 표기법
const book = {
  title: "Javascript",
  pages: 500,
};

console.log(book);

book.published = "2025-03";
// 온점표기법

console.log(book);

book["author"] = "David";
// 대괄호표기법

console.log(book);

// 객체 프로퍼티 시리즈 - 2
// 계산된 프로퍼티 값을 추가하는 방법

const fn = () => {
  return "result";
};

const add02 = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수 키",
  [`${add02(10, 20)} key`]: "계산식 키",
};

console.log(obj);

// 객체 프로퍼티 시리즈 - 3
// 객체 내 프로퍼티를 단축해서 사용하고자 할 때

const user = {
  name: "David",
};

user.age = 20;
console.log(user);

const makeUser = (name, age) => {
  return {
    name,
    age,
  };
};

const user1 = makeUser("Sophia", 30);
console.log(user1);

// 객체에서 심벌 키 사용
// 심벌 => 유일무이한 값을 생성 및 관리.사용하고자 할 때 생성하는 자료구조 형태 중 하나

// 심벌을 생성하는 방법
const mySymbol1 = Symbol();
const mySymbol2 = Symbol("something");

console.log(mySymbol1 === mySymbol2);
console.log(mySymbol1);
console.log(mySymbol2);

// 심벌을 생성하는 또 다른 방법 => 전역 심볼 레지스트리에 저장하는 방법
// 아무리 유일무이한 심볼값이 장점이라고 하지만, 심볼간 값을 공유하거나 논리적으로 비교해야하는 상황이 발생되는 경우에는 전역 심볼 레지스트리에 저장을 하는 것이 좋음!
// Symbol()은 고유한 값을 가지고 있는 심벌을 생성 후 반환하지만, Symbol.for()는 전역적으로 존재하는 global symbol table(*전역 심볼 레지스트리)에 저장 및 데이터를 찾아오는 역할!!

const s1 = Symbol.for("foo");
const s2 = Symbol.for("foo");
// foo => Token String

console.log(s1 === s2);

const token = Symbol.for("tokenString");
console.log(Symbol.keyFor(token) === "tokenString");

// 심볼을 생성하는 일반적인 방법
const obj01 = {};
const v = "my";

obj01[v] = "myProps";
obj01[123] = 123;
obj01["props" + 123] = false;

console.log(obj01);

const obj02 = {};

const mySymbol3 = Symbol("mySymbol");
const mySymbol4 = Symbol("mySymbol");

obj02[mySymbol3] = 123;
obj02[mySymbol4] = 456;

console.log(obj02);

// 사용자 회원가입 시, 동명이인의 사용자를 독립적인 개체로 구분지어서 관리하고자 할 때 Symbol()을 이용하는 방법
// 제주 : 이효리
// 서울 : 이효리

// Class 선언 시, Symbol()을 이용하는 방법

const count = Symbol();

class Counter {
  constructor() {
    this[count] = 0;
  }

  add() {
    return this[count]++;
  }

  get() {
    return this[count];
  }
}

const test1 = new Counter();
test1.add();
console.log(test1.get());

class BetterCounter extends Counter {
  count() {
    return console.log("test");
  }
}

const test2 = new BetterCounter();
console.log(test2);
console.log(test2.count());
