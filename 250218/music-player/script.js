import { API_UNSPLASH_KEY } from "./env.js";

const getImg = `https://api.unsplash.com/photos/random/?client_id=${API_UNSPLASH_KEY}`;
const figure = document.querySelector("figure");
const loading = document.querySelector(".loading");

fetch(getImg)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    figure.style.backgroundImage = `url(${full})`;
    loading.style.display = "none";
  })
  .catch((error) => {
    console.error("이미지 로드 중 오류 발생!", error);
  });

const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

// article rotation
const deg = 45;
let i = 0;
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  const play = list.querySelector(".play");
  const pause = list.querySelector(".pause");
  const load = list.querySelector(".load");

  list.style.transform = `rotate(${i * deg}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  play.addEventListener("click", (e) => {
    const isActive = e.currentTarget
      .closest("article")
      .classList.contains("on");

    if (isActive) {
      const activePic = e.currentTarget
        .closest("article")
        .querySelector(".pic");

      const activeAudio = e.currentTarget
        .closest("article")
        .querySelector("audio");

      activePic.classList.add("on");
      activeAudio.play();

      activeAudio.addEventListener("ended", () => {
        activePic.classList.remove("on");
      });
    }
  });

  pause.addEventListener("click", (e) => {
    const isActive = e.currentTarget
      .closest("article")
      .classList.contains("on");

    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");

      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });

  load.addEventListener("click", (e) => {
    const isActive = e.currentTarget
      .closest("article")
      .classList.contains("on");

    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");

      e.currentTarget.closest("article").querySelector("audio").load();
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
});

// button event
let num = 0;
let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[index].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});
