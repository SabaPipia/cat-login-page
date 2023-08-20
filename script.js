const leftHand = document.querySelector(".hand-left");
const rightHand = document.querySelector(".hand-right");
const passwordInput = document.querySelector(".password__input");
const cat = document.querySelector(".cat");

passwordInput.addEventListener("focus", () => {
  leftHand.classList.add("focused-left");
  rightHand.classList.add("focused-right");
});
passwordInput.addEventListener("blur", () => {
  leftHand.classList.remove("focused-left");
  rightHand.classList.remove("focused-right");
});
