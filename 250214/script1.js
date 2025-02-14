// 사용자정의 객체 생성

const newBook = {
  title: "Javascript",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다.`);
  },
};

// 생성자 함수

function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}님의 따끈한 신간 도서입니다!`);
  };
}

// 생성자 함수를 만들고 나서 해당 생성자함수를 사용하고자 할 때에는 반드시 new 예약어

const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
