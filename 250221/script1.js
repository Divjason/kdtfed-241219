// const string = prompt("영문 소문자로 된 문자열을 입력해주세요!");
const string = "abcde";

// const firstCh = string[0].toUpperCase();
// const remainStr = string.slice(1);
// const result = firstCh + remainStr;

// split() => 문자열을 배열로 바꿔주는 역할 => [...]
// join() => 배열을 문자열로 바꿔주는 역할
// concat() => 서로다른 두개의 배열 혹은 유사배열을 1개의 배열로 합칠 때 => [...]

// const result = [string[0].toUpperCase(), ...string.slice(1)];
// const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
const result = [string[0].toUpperCase(), ...string.slice(1)].join();

// document.write(result);
console.log(result);
