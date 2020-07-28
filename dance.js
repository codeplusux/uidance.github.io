// Loading

let cargando = document.querySelector(".loader");

window.addEventListener("load", function () {
  cargando.style.display = "none";
});

// Video player

var video = document.querySelector(".stage");
var progressBar = document.querySelector(".progressBar");
var btn = document.getElementById("play-pause");

function tooglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
    document.getElementsByTagName("body")[0].setAttribute("class", "videoOn");
  } else {
    btn.className = "play";
    video.pause();
    document
      .getElementsByTagName("body")[0]
      .removeAttribute("class", "videoOn");
  }
}

btn.onclick = function () {
  tooglePlayPause();
};

video.addEventListener("timeupdate", function () {
  var point = video.currentTime / video.duration;
  progressBar.style.width = point * 100 + "%";
  if (video.ended) {
    btn.className = "play";
  }
});
