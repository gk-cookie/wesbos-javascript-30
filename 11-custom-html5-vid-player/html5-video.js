const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progBar = player.querySelector(".progress__filled");
const ranges = player.querySelector(".player__slider");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
  console.log("Update the button");
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
