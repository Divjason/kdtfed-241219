import { API_KEY } from "./env.js";

// Document Items
const nowplayingUl = document.querySelector(".nowplaying ul");
const upcomingUl = document.querySelector(".upcoming ul");
const topratedUl = document.querySelector(".toprated ul");

// Common URL
const tmdbCommand = "https://api.themoviedb.org/3";

// Create Element
const createElement = (movie, index, category) => {
  const {
    adult,
    genre_ids,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const li = document.createElement("li");
  const moviePoster = document.createElement("div");
  const movieTitle = document.createElement("div");
  const movieDesc = document.createElement("div");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const ageLimit = document.createElement("span");
  const movieNum = document.createElement("span");
  const release = document.createElement("span");
  const vote = document.createElement("span");

  moviePoster.className = "moviePoster";
  movieTitle.className = "movieTitle";
  movieDesc.className = "movieDesc";

  let adultKo = adult === false ? "ALL" : "18";
  ageLimit.innerText = adultKo;
  movieNum.innerText = index + 1;

  release.innerText = release_date;
  vote.innerText = `⭐️${parseFloat(vote_average).toFixed(2)}`;

  li.className = id;
  li.setAttribute("data-category", category);

  moviePoster.append(img, ageLimit, movieNum);
  movieTitle.innerText = title;
  movieDesc.append(release, vote);
  li.append(moviePoster, movieTitle, movieDesc);

  if (category === "nowplaying") {
    nowplayingUl.appendChild(li);
  } else if (category === "upcoming") {
    upcomingUl.appendChild(li);
  } else if (category === "toprated") {
    topratedUl.appendChild(li);
  }
};

// NowPlaying DB
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// UpComing DB
const upComing = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// TopRated DB
const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
};

// Generes DB
const movieGeneres = async () => {
  const url = `${tmdbCommand}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`;
  const response = await fetch(url);
  const { genres } = await response.json();
  return genres;
};

// Youtube DB
const youtubeTrailers = async (movieId) => {
  const url = `${tmdbCommand}/movie/${movieId}/videos?api_key=${API_KEY}&language=ko-KR`;
  const response = await fetch(url);
  const { results: trailers } = await response.json();
  console.log(trailers);
  return trailers;
};

// Promise DBs
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, topRatedMovie, generes] =
    await Promise.all([nowPlaying(), upComing(), topRated(), movieGeneres()]);

  // Movie Items
  nowPlayingMovie.forEach((movie, index) => {
    createElement(movie, index, "nowplaying");
  });

  upComingMovie.forEach((movie, index) => {
    createElement(movie, index, "upcoming");
  });

  topRatedMovie.forEach((movie, index) => {
    createElement(movie, index, "toprated");
  });

  // Item Slider
  // 전체 총 영화 아이템 개수 : 20개
  // 한 번에 보여지는 영화 개수 : 5개
  // 좌 혹은 우측 슬라이드 버튼 클릭 시: 5개 이동
  // 각 영화의 너비값 : 160
  // 영화와 영화사이 간격 : 25
  // 한 번에 보여지는 공간 : 900
  // (160 + 25) * 4 + 160 => 20개의 영화 아이템을 가지고 있는 ul태그가 슬라이드 버튼 클릭 시, 이동해야하는 거리!!!
  // 무한 슬라이드를 실행하기 위해서 아래와 같이 노드를 복제!
  // 15~19번째 인덱스 영화아이템 + 20개의 영화 아이템 + 0~4번째 인덱스 영화아이템
  // 1 2 3 4 5
  // 6 7 8 9 10
  // 11 12 13 14 15
  // 16 17 18 19 20

  const initializeSlider = (
    slideSelector,
    rightArrowSelector,
    leftArrowSelector
  ) => {
    const slider = document.querySelector(slideSelector);
    const slides = slider.querySelectorAll("li");
    const slideToShow = 5;
    const slideWidth = 160;
    const slideMargin = 25;
    let currentIndex = 0;
    let isTransitioning = false;

    const firstClones = Array.from(slides)
      .slice(0, slideToShow)
      .map((slide) => slide.cloneNode(true));

    const lastClones = Array.from(slides)
      .slice(-slideToShow)
      .map((slide) => slide.cloneNode(true));

    slider.append(...firstClones);
    slider.prepend(...lastClones);

    const updateSlider = () => {
      const offset = -(slideWidth + slideMargin) * (currentIndex + slideToShow);
      slider.style.transform = `translateX(${offset}px)`;
    };

    slider.style.transition = "none";
    updateSlider();

    document.querySelector(rightArrowSelector).addEventListener("click", () => {
      if (isTransitioning) return;

      isTransitioning = true;
      currentIndex += slideToShow;

      if (currentIndex === slides.length) {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = 0;
          updateSlider();
          isTransitioning = false;
        }, 500);
      } else {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    });

    document.querySelector(leftArrowSelector).addEventListener("click", () => {
      if (isTransitioning) return;

      isTransitioning = true;
      currentIndex -= slideToShow;

      if (currentIndex < 0) {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = slides.length - slideToShow;
          updateSlider();
          isTransitioning = false;
        }, 500);
      } else {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          isTransitioning = false;
        }, 500);
      }
    });
  };

  initializeSlider(
    ".nowplaying ul",
    "#nowPlayingRightArrow",
    "#nowPlayingLeftArrow"
  );

  initializeSlider(".upcoming ul", "#upcomingRightArrow", "#upcomingLeftArrow");

  initializeSlider(".toprated ul", "#topRatedRightArrow", "#topRatedLeftArrow");

  // Popup Modal
  const movieItems = document.querySelectorAll(".movie li");
  const movieModal = document.querySelector(".modal-overlay");

  movieItems.forEach((movieItem) => {
    movieItem.addEventListener("click", async () => {
      movieModal.innerHTML = "";
      movieModal.classList.add("active");
      const id = parseInt(movieItem.className);
      const category = movieItem.getAttribute("data-category");
      let movie;

      switch (category) {
        case "nowplaying":
          movie = nowPlayingMovie.find((movie) => movie.id === id);
          break;
        case "upcoming":
          movie = upComingMovie.find((movie) => movie.id === id);
          break;
        case "toprated":
          movie = topRatedMovie.find((movie) => movie.id === id);
          break;
      }

      if (!movie) {
        console.error("Movie Not Found");
        return;
      }

      console.log(movie);

      let {
        adult,
        backdrop_path,
        genre_ids,
        original_language,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count,
      } = movie;

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      adult = adult === false ? "전체관람가" : "18세이상";
      switch (original_language) {
        case "en":
          original_language = "영어";
          break;
        case "es":
          original_language = "스페인어";
          break;
        case "lv":
          original_language = "라트비아";
          break;
        case "zh":
          original_language = "중국";
          break;
        case "ko":
          original_language = "한국";
          break;
        case "ja":
          original_language = "일본어";
          break;
        case "hi":
          original_language = "힌두어";
          break;
      }

      const genreNames = genre_ids.map((id) => {
        const genre = generes.find((g) => g.id === id);
        return genre ? genre.name : "Unknown";
      });

      modalContent.innerHTML = `
      <div class="modal-content">
        <div class="modal-top">
          <div class="modal-photo">
            <img
              src="https://image.tmdb.org/t/p/original/${poster_path}"
              alt="modal-photo"
            />
          </div>
          <form action="#" method="get">
            <section class="modal-info">
              <h1>${title}</h1>
              <div>
                <span><em>${release_date} 개봉</em></span>
                <span><em>${adult}</em></span>
                <span>인기평점 <em>${parseFloat(vote_average).toFixed(
                  2
                )}</em></span>
                <span>투표자수 <em>${vote_count.toLocaleString()}명</em></span>
              </div>
            </section>
            <section class="modal-button">
              <a href="#"><i class="fas fa-circle-play"></i> 예고편 재생 </a>
              <a href="#"><i class="fas fa-comment"></i> ${vote_count.toLocaleString()} </a>
              <a href="#"><i class="fas fa-share-nodes"></i> 공유하기 </a>
            </section>
            <section class="modal-desc">
              <p>
               ${overview}
              </p>
            </section>
            <input type="submit" value="결제하기" />
          </form>
        </div>
        <div class="modal-bottom">
          <section class="modal-detail">
            <h1>영화정보</h1>
            <div>
              <span>장르</span>
              <span>${genreNames}</span>
            </div>
            <div>
              <span>언어</span>
              <span>${original_language}</span>
            </div>
            <div>
              <span>인기점수</span>
              <span>${popularity.toLocaleString()} / 10000점</span>
            </div>
          </section>
          <section class="modal-poster">
            <img
              src="https://image.tmdb.org/t/p/original/${backdrop_path}"
              alt="modal-poster"
            />
          </section>
          <section class="modal-trailer"></section>
        </div>
        <div class="modal-close">
          <i class="fas fa-xmark"></i>
        </div>
      </div>
      `;
      movieModal.appendChild(modalContent);
      const modalclose = document.querySelector(".modal-close");
      modalclose.addEventListener("click", () => {
        movieModal.classList.remove("active");
      });

      // Youtube Trailer
      try {
        const trailers = await youtubeTrailers(movie.id);
        if (trailers.length > 0) {
          const firstTrailer = trailers[0];
          if (firstTrailer.site === "YouTube") {
            const videoId = firstTrailer.key;
            const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

            const modalTrailer = modalContent.querySelector(".modal-trailer");
            const iframe = document.createElement("iframe");
            iframe.width = "1000";
            iframe.height = "500";
            iframe.src = youtubeUrl;
            iframe.allowFullscreen = true;
            // iframe.frameBorder = "0";
            modalTrailer.innerHTML = "";
            modalTrailer.appendChild(iframe);
          }
        } else {
          console.log("해당 영화의 예고편이 존재하지 않습니다.");
        }
      } catch (error) {
        console.error(
          `영화 ID ${movie.id}의 예고편을 가져오지 못했습니다 : `,
          error
        );
      }
    });
  });

  // Main Slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`;
    mainSlider.appendChild(figure);
  });

  // Fade Effect
  const figures = mainSlider.querySelectorAll("figure");
  let currentIndex = 0;

  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };

  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

// GNB li Event
const naviLis = document.querySelectorAll(".gnb > ul > li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });

  naviLi.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});

// Accordion Event
const contents = document.querySelectorAll(".accordion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((item) => {
      item.style.display = "none";
    });
    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// Search Modal
const searchBtn = document.querySelector(".search-box .fa-magnifying-glass");
const closeBtn = document.querySelector(".close");
const modalSearch = document.querySelector(".modal-search");

searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
