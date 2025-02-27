// 배열관련 메서드 함수 및 예제 학습
// concat()
// slice()
// splice()
// sort()
// pop()
// push()
// shift()
// unshift()

// map()
// filter()
// find()
// reduce()

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(number * 2);
});

const newNumbers = numbers.map((number, index, array) => number * 2 + index);

console.log(newNumbers);

// filter
// 내가 원하는 조건에 부합하는 복수의 값을 찾아서 새로운 배열로 반환하고 싶을 때 사용!!
// 만약에 부합하는 값이 존재하지 않는 경우? 조건이 충족되지 않는다면, 빈배열값을 반환!!
const scores = [70, 35, 64, 68, 45, 52];

const highScores = scores.filter((score) => score >= 85);
console.log(highScores);

// find
// 내가 찾고자 하는 값이 나타나는 순간 해당 메서드 함수는 종료!! => 명확하게 찾고자 하는 값이 단일값인 경우!!!

const names = ["kim", "park", "lee", "park"];
const result = names.find((name) => name === "park");

console.log(result);

// filter VS find

// 1) filter의 경우, 반환값을 배열형태의 자료구조로 가져오는 반면, find의 경우, 반환값을 문자열로 반환

// 2) filter의 경우, 반환값이 존재하지 않는 경우, 빈배열로 반환하는 반면, find의 경우, undefined로 값을 반환

// 3) filter의 경우, 복수값의 값을 찾아와서 배열로 반환하는 목적을 가지고 있기 때문에 해당 조건에 부합하는 값들을 모두 찾아옵니다. 반면, find의 경우, 명확하게 1개의 단일 값을 찾아오고자 하는 목적을 가지고 있기 때문에 하나의 값을 찾는 순간 해당 함수의 명령 및 실행은 종료!!

// reduce()
// 누산기 : 누적계산기

const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers.reduce((total, current) => total + current, 0);

console.log(result01);
