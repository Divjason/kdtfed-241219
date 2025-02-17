// const str = "hello";
// console.log(str.length);

//문자열은 유사배열이다!

// const str = "Good Morning!";
// console.log(str.length);
// charAt(3)

// console.log(str.charAt(3));
// console.log(str[3]);

const string = prompt("문자열을 입력하세요!");
const letter = prompt("어떤 문자를 체크하겠습니까?");

const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) count += 1;
  }
  return count;
};

const result = counting(string, letter);

document.write(`${string}에는 ${letter}가 ${result}개 있습니다.`);
