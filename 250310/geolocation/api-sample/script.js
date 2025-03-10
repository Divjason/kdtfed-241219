const button = document.querySelector("button");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerHTML = `
    <b>위도 : </b> ${position.coords.latitude}, <b>경도 : </b> ${position.coords.longitude}
  `;
};

const errorPosition = (err) => {
  alert(err.message);
};

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      // 위치정보에 대한 정확도
      enableHighAccuracy: true,
      // 사용자의 정보확인을 위한 유효시간 설정하는 옵션
      timeout: 5000,
      // 사용자의 바뀐 위치값을 즉각 확인하도록 하는 옵션
      maximumAge: 0,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다!");
  }
});
