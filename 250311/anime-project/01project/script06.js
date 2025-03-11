const path = anime.path(".svg path");

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: 10000,
  loop: true,
});
