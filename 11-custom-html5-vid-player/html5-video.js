const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progBar = player.querySelector(".progress__filled");
const ranges = player.querySelector(".player__slider");
const toggle = player.querySelector(".toggle");
const skipButt = player.querySelector("[data-skip]");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
