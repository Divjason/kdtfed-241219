const result = document.querySelector("#result");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get("search-box");

result.innerText = `${query} 영화 페이지 입니다!`;
