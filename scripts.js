// skrypt dodający i odejmujący flagę "active" z przycisków

let activeButton = null;

function activateButton(buttonNumber) {
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  let button = document.querySelector(`button:nth-child(${buttonNumber})`);
  button.classList.add("active");
  activeButton = button;
}

function submit() {
  if (activeButton !== null) {
    document.querySelector(".rating-state").classList.add("hidden");
    document.querySelector(".thank-you-state").classList.remove("hidden");
    document.querySelector(".error-message").classList.add("hidden");
    const ratingDisplay = document.querySelector(".score-display-text");

    ratingDisplay.textContent = ratingDisplay.textContent.replace(
      "X",
      activeButton.value
    );
  } else {
    document.querySelector(".error-message").classList.remove("hidden");
  }
}
