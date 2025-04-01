interface Person {
  readonly name: string;
  age?: number;
  // sayHi?: (a: number, b: number) => void;
  sayHi?(a: number, b: number): void;
}

let person1: Person = {
  name: "David",
  // age: 20,
  sayHi: () => {},
};

let person2: Person = {
  name: "Romeo",
  age: 20,
};

// person2.name = "Jane";

interface Func2 {
  (a: number): string;
  b?: boolean;
}

let func2: Func2 = (a) => "Hello World!";
func2.b = true;

// 타입별칭과의 강력한 차이점!!
type Type1 = number | string;
type Type2 = number & string;

interface Person3 {
  name: string;
  age: number;
}

type Type3 = number | string | Person3;
type Type4 = number & string & Person3;

const person5: Person3 = {
  name: "David",
  age: 20,
};

// interface만의 고유기능!!!

// interface Animal {
//   name: string;
//   age: number;
// }

type Animal = {
  name: string;
  age: number;
};

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 1,
  isBark: true,
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "777",
  age: 1,
  isBark: true,
};

// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Chiken {
//   name: string;
//   age: number;
//   isFly: boolean;
// }

type Person7 = {
  name: string;
};

// type Person7 = {
//   name: string;
// };

interface Person10 {
  name: string;
}

interface Person10 {
  age: number;
}

const person10: Person10 = {
  name: "Ronaldo",
  age: 20,
};
