// 구조분해할당
const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

const [apple, peach] = fruits;
console.log(apple, peach);

const seasons = ["봄", "여름", "가을", "겨울"];

const [spring, , fall] = seasons;

console.log(spring, fall);

const char = ["park", "lee", "kim", "choi"];

const [teacher, ...students] = char;

console.log(teacher, students);

// 객체의 구조분해할당 - 1
const member = {
  name: "David",
  age: 20,
};

const { name: username, age } = member;
console.log(username, age);

// 객체의 구조분해할당 - 2
const student = {
  name: "David",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(f1);
