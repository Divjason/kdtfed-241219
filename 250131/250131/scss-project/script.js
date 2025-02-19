// Slick Slider - 1
$(".history-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  infinite: false,
  dots: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

// Slick Slider - 2
$(".project-photo").slick({
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
});
