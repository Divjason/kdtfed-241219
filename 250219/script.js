const eyeIcon = document.querySelector(".main i");
const input = document.querySelector("input");

eyeIcon.addEventListener("click", () => {
  input.classList.toggle("active");

  if (input.classList.contains("active")) {
    input.type = "text";
    eyeIcon.className = "fas fa-eye-slash";
  } else {
    input.type = "password";
    eyeIcon.className = "fas fa-eye";
  }
});
