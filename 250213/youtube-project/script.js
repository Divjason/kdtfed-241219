// hashlist sticky event
window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY;
  if (scrollY > 268) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

// touch event
// 586 스크롤자체 컨텐츠 너비
// 226 스크롤이 가능하도록 하기위해서 준 여백의 공간
// 812 전체공간 확보

const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

let startX = 0;

let nowX = 0;

let endX = 0;

let listX = 0;

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
};

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translateX(${x}px)`;
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX);
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd);
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart);
