/*

1.변수

2.자료형

3.형변환

4.연산자

5.조건문

6.반복문

7.함수

8.DOM

9.EVENT
- 브라우저를 통해서 특정 웹페이지 도착
- 사용자가 하는 행위 모든 것
- 페이지를 확인 // 버튼 클릭 // 스크롤 이동
- 이벤트를 설정
- event handler => onclick
- addEventListener()
- 이벤트 설정 > 이벤트 실행 > 로컬 컴퓨터 > 메모리 공간 > 이벤트 객체 생성 > 이벤트 객체를 참조변수 값으로 찾아올 수 있다
- 이벤트 객체 > preventDefault() 유일한 메서드 함수

*/

// window.onload = () => {};

// const button = document.querySelector("button");

// button.onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});
