anime({
  targets: ".svg1 path",
  easing: "easeInOutSine",
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 10000,
  delay: anime.stagger(250),
  loop: true,
  direction: "alternate",
});
