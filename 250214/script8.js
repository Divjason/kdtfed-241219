class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);

// book1.buy();

class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextBook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터공학");
console.log(book2);
book2.buyTextBook();
book2.buy();
