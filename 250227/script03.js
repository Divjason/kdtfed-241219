// Iterable Object = 이터러블 객체
// 이터러블 객체 조건
// 1) for of 및 forEach 등의 반복문을 사용할 수 있어야 함
// 2) 전개연산자 구문을 활용할 수 있어야 함
// 3) 구조분해할당이 가능해야 함

// 자바스크립트에서 이터러블 객체 => 배열, 문자열(*유사배열)

// const hi = "hello";
// Array.from(hi).forEach((ch) => {
//   console.log(ch);
// });

// const chTest = [...hi];
// console.log(chTest);

// const [ch1, ...ch2] = hi;
// console.log(ch1, ch2);

// const arr = [1, 2, 3, 4, 5];

// 이터러블한 기능을 구현할 수 있는 함수를 만들고 싶음!! => 그렇다면 이터러블 객체들이 어떤 특성을 가지고 있는지 확인할 필요가 있었다!!! => 그 안에는 next() 존재하더라!!

// 일반함수
function fnc() {
  console.log("1");
  console.log("2");
  console.log("3");
}

fnc();

// 제너레이터 함수
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = gen();
console.log(g1);

// Array.from(g1).forEach((item) => {
//   console.log(item);
// });

for (let item of g1) {
  console.log(item);
}

// 배열이 가지고 있는 메서드 함수 : forEach()
// 배열은 for문 // for of문 사용가능!!!

// 이터러블 객체 > 배열
