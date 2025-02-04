const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;

newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(autoVideo);
container.appendChild(newVideo);

newVideo.addEventListener("click", function () {
  if (this.paused) this.play();
  else this.pause();
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});
