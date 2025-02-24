// 문자열
// substring(), slice() => 문자열 안에 있는 문자를 추출하고자 할 때 사용가능한 메서드 함수 => 공통점 : 첫번째 인자값은 해당 문자열 내 시작하는 문자의 인덱스를 의미, 두번째 인자값은 찾아오고자 하는 문자열의 인덱스 + 1 => 차이점 : slice()는 문자열의 뒤에서부터 문자를 찾아올 수 있도록 하는 - = 음수값을 사용할 수 있었음. substring() 음수 사용불가!!

// 배열 메서드!!
const subjects = ["html", "css", "js", "ts", "react"];
subjects.splice(1, 3);
// 배열 내 특정 위치부터 원하는 개수만큼 아이템 값을 추출할 때 사용할 수 있는 메서드 함수!! => 원본 배열 데이터를 변경시킨다!!
console.log(subjects);

const colors = ["red", "green", "blue", "white", "black"];
console.log(colors.slice(2, 4));
console.log(colors);
