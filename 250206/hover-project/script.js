const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem) => {
  liItem.addEventListener("mouseenter", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
