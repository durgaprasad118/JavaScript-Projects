const IncrementBtn = document.getElementById("inc");
const DecrementBtn = document.getElementById("dec");
const ResetBtn = document.getElementById("res");
let text = document.getElementById("text");
let value = 0;
IncrementBtn.addEventListener("click", () => {
  value++;
  text.innerHTML = value;
});
DecrementBtn.addEventListener("click", () => {
  value--;
  text.innerHTML = value;
});
ResetBtn.addEventListener("click", () => {
  value = 0;
  text.innerHTML = value;
});
