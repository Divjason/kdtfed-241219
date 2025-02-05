const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value === "" || author.value === "") alert("정보를 입력해주세요!");
  else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;

    bookList.appendChild(liItem);

    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll("span");

    console.log(typeof delButtons);

    delButtons.forEach((delButton) => {
      delButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});
