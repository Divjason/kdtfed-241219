const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=gocamping&serviceKey=CuAlxFk4X9hrpjAZJOxUXITv2sHUHz6qGPZnJpKDukU1hn%2F8hR00dMwF6%2FiKNk7ORF2ItTjRGWo06TIkuH9ECw%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => console.log(result));

const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  var container = document.getElementById("map");

  var options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  var map = new kakao.maps.Map(container, options);

  var clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 10,
  });

  var positions = [
    {
      title: `<div style="padding: 10px; font-size: 0.8rem">EZEN DX CENTER</div>`,
      latlng: new kakao.maps.LatLng(latitude, longitude),
    },
    {
      title: `<div style="padding: 10px; font-size: 0.8rem">하이미디어 강남캠퍼스</div>`,
      latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
    },
    {
      title: `<div style="padding: 10px; font-size: 0.8rem">그린아카데미 강남캠퍼스</div>`,
      latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
    },
    {
      title: `<div style="padding: 10px; font-size: 0.8rem">SBS아카데미 강남캠퍼스</div>`,
      latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
    },
  ];

  let markers = [];

  for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title,
    });

    markers.push(marker);

    var infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }

    kakao.maps.event.addListener(
      marker,
      "mouseover",
      makeOverListener(map, marker, infowindow)
    );

    kakao.maps.event.addListener(
      marker,
      "mouseout",
      makeOutListener(infowindow)
    );
  }

  clusterer.addMarkers(markers);
};

const errorPosition = (err) => {
  alert(err.message);
};

window.navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
