document.querySelector("#userId").addEventListener("focus", () => {
  this.style.backgroundColor = "pink";
});

document.querySelector("#userId").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});
