// Main elements
var video = document.querySelector(".srcVideo");
var progressBar = document.querySelector(".progressBar");
var btn = document.getElementById("play-pause");
let currentTime = 0;

// Play Pause
function tooglePlayPause() {
  if (video.paused) {
    currentTime = video.currentTime;
    video.load();
    btn.className = "pause";
    video.play();
    document.getElementsByTagName("body")[0].setAttribute("class", "videoOn");
    document.getElementById("mainFlex").classList.add("noBg");
    document.getElementById("slogan").classList.add("sloganOn");
    document.getElementById("svg1").classList.add("hide");
    document.getElementById("svg3").classList.remove("hide");
    document.getElementById("svg3").classList.add("btnOn");
    document.getElementById("bar").classList.remove("barOff");
    document.getElementById("gallery").classList.add("gridOff");
  } else {
    video.currentTime = currentTime;
    btn.className = "play";
    video.pause();
    document
      .getElementsByTagName("body")[0]
      .removeAttribute("class", "videoOn");
    document.getElementsByTagName("div")[0].classList.remove("noBg");
    document.getElementById("slogan").classList.remove("sloganOn");
    document.getElementById("svg1").classList.remove("hide");
    document.getElementById("svg3").classList.add("hide");
    document.getElementById("bar").classList.add("barOff");
    document.getElementById("gallery").classList.remove("gridOff");
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
    document
      .getElementsByTagName("body")[0]
      .removeAttribute("class", "videoOn");
    document.getElementById("svg1").classList.remove("hide");
    document.getElementById("svg3").classList.add("hide");
    document.getElementsByTagName("div")[0].classList.remove("noBg");
    document.getElementById("slogan").classList.remove("sloganOn");
    document.getElementById("gallery").classList.remove("gridOff");
    document.getElementById("bar").classList.add("barOff");
  }
});
