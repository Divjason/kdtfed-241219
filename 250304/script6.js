// 콜백지옥
const displayLetter = () => {
  console.log("A"); // 외부에서 데이터를 찾아왔음
  setTimeout(() => {
    console.log("B"); // 찾아온 데이터를 출력해줌
    setTimeout(() => {
      console.log("C"); // 찾아온 데이터를 1차 가공해줌
      setTimeout(() => {
        console.log("D"); // 찾아온 데이터를 2차 가공해줌
        setTimeout(() => {
          console.log("Stop!"); // 더이상 처리할 것이 없음
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();
