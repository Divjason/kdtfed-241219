const quotesURL = "http://dummyjson.com/quotes";
const result = document.querySelector("#result");

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // 1~30명언 // 랜덤
    // 명언 => 배열 => 인덱스 // 0~29
    // 배열[인덱스]
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `- ${data.quotes[random].author}`;
  })
  .catch(console.log);
