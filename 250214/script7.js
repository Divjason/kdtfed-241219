function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("Javascript", 1000);
book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextbook = function () {
  console.log(`${this.title} 전공서적, ${this.major}을 구매했습니다!`);
};

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("컴퓨터공학", 5000, "알고리즘");

console.log(book2);

book2.buyTextbook();
book2.buy();
