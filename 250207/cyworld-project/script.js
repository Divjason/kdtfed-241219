// button event
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #fff; color: #000";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #fff; color: #000";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);

// count event
const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = "0" + (date.getMonth() + 1);
  const day = "0" + date.getDate();
  return `${year}-${month}-${day}`;
};

const todayDate = getFormattedDate();
const dailyCookieName = `pageHit_${todayDate}`;

const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 1);
const expireDateString = expireDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dailyHitCt = parseInt(cookieVal(dailyCookieName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}
dailyHitCt++;
document.cookie = `${dailyCookieName}=${dailyHitCt}; expires=${expireDateString}`;

let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
/*
쿠키값은 어떻게 생겼을까?

"쿠키네임=쿠키값; expires=만료날짜"
"pageHit_2025-02-07=5; expires=2025-02-08"
*/

document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;
