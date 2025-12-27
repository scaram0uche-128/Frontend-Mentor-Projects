const ratingButtons = document.querySelectorAll(".rating-card");
const submitButton = document.querySelector(".submit");

const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRatingText = document.getElementById("selected-rating");

const restartButton = document.querySelector(".restart");


let selectedRating = null;

ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    ratingButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedRating = button.textContent;
  });
});

submitButton.addEventListener("click", () => {
  if (!selectedRating) return;

  selectedRatingText.textContent = selectedRating;
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");
});

restartButton.addEventListener("click", () => {
  window.location.reload();
});