// 객체종류

/*
1.내장객체 : new Date(), Math

2.브라우저객체 : window

3.문서객체 : document

4.사용자정의객체 : 직접 개발자가 원하는 형태 & 기능을 담고 있는 객체의 형태로 정의하는 것을 의미
*/

/*

객체는 특징 및 원리 혹은 패턴을 가지고 있음 
객체는 property (= 속성)로 구성되어 있음

그렇다면 속성은 어떤 형태를 띄고 있는가?
반드시 key:value의 형태를 띄고 있는 1쌍이다!!!
value에 입력될 수 있는 값의 형태는 숫자, 문자만
가능한가? // 배열도 가능 / 함수도 가능

객체의 특정 key안에 value값으로 입력된 자료의 형태가
함수인 경우에는 별도의 용어를 사용합니다!!!

method = 메서드 = 방법 => 우리가 그동안 사용했던
 => 함수

document.querySelector()

*/

// 객체를 정의하는 방법

// let obj1 = new Object();

// console.log(obj1);

// obj1.name = "David";

// console.log(obj1);

// obj1["gender"] = "male";

// console.log(obj1);

// obj1.name = "Romeo";

// console.log(obj1);

// delete obj1.name;

// console.log(obj1);

const student = {
  name: "Juliet",
  score: {
    history: 85,
    science: 94,
    average: function () {
      return (this.history + this.science) / 2;
    },
  },
};

const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  buy: function () {
    console.log("이 책을 구입했습니다!");
  },
};

book3.price = 20000;

console.log(book3);
