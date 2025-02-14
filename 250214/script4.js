// 객체는 최소한 자바스크립트에서 만큼은 최초의 근원이다!!
// 모든것의 근원이다!!!

// class Array {
//   constructor(length) {
//     this.length = length
//   }

//   filter() {

//   }

//   push() {

//   }
// }

// const arr = new Array();
// console.log(typeof arr);

// 배열 => iterable => 순회할 수 있는 객체

const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};

for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}
