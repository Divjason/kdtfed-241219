// Map()
// 클래스 혹은 생성자함수 => 프로토타입 객체
// 왜 만들었을까?
// 주요 자료구조 : 객체 & 배열
// 객체 : 키 & 값 한쌍 프로퍼티 구성!!!
// 반복적인 무언가를 실행할 수 없음
// 객체안에 있는 속성들을 인덱스화 할 수 없음

// 배열 : 이터러블하다 => 반복적인 무언가를 실행
// 배열안에 있는 요소들은 각각 인덱스화 할 수 있음

// 객체 & 배열 장점만 추출해서 자료구조!!

// Set()
// Map()과 달리, 중복되는 값을 허용하지 않는다!!

const bag = new Map();
// Method Chaining 기법
bag.set("color", "red").set("price", "30000");
bag.delete("color");
bag.clear();

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

// console.log(myCup.keys());
const myCupIte = myCup.keys();
console.log(myCupIte);

const myCupIte02 = myCup.values();
console.log(myCupIte02);

const myCupIte03 = myCup.entries();
console.log(myCupIte03);

myCupIte.forEach((item) => {
  console.log(item, typeof item);
});

myCupIte03.forEach((item) => {
  console.log(item, typeof item);
});

// Iterable : 반복 순회할 수 있는 (*형용사)
// Iterator : Iterable한 객체가 된 요소!! (*명사)
