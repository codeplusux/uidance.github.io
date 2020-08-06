// Loading
let cargando = document.querySelector(".loader");

// window.addEventListener("load", function () {
//   cargando.style.display = "none";
// });

// Video player
var video = document.querySelector(".stage");
var progressBar = document.querySelector(".progressBar");
var btn = document.getElementById("play-pause");

function tooglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
    document.getElementsByTagName("body")[0].setAttribute("class", "videoOn");
    document.getElementsByTagName("div")[0].classList.add("noBg");
    document.getElementById("tagline").classList.add("taglineOn");
    document.getElementById("svg1").classList.add("hide");
    document.getElementById("svg2").classList.add("btnOn");
    document.getElementById("svg3").classList.remove("hide");
    document.getElementById("svg3").classList.add("btnOn");
    document.getElementById("bar").classList.remove("barOff");
    //document.getElementById("next").classList.add("invisible");
  } else {
    btn.className = "play";
    video.pause();
    document
      .getElementsByTagName("body")[0]
      .removeAttribute("class", "videoOn");
    document.getElementsByTagName("div")[0].classList.remove("noBg");
    document.getElementById("tagline").classList.remove("taglineOn");
    document.getElementById("svg1").classList.remove("hide");
    document.getElementById("svg2").classList.remove("btnOn");
    document.getElementById("svg3").classList.add("hide");
    document.getElementById("bar").classList.add("barOff");
    //document.getElementById("next").classList.remove("invisible");
  }
}

btn.onclick = function () {
  tooglePlayPause();
};

// Video duration
// video.addEventListener("loadedmetadata", function () {
//   console.log(video.duration);
// });

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
    document.getElementById("tagline").classList.remove("taglineOn");
  }
});

// window.onload = function () {
//   console.log("test");
//   if (
//     navigator.userAgent.match(/Android/i) ||
//     navigator.userAgent.match(/iPhone/i) ||
//     navigator.userAgent.match(/iPod/i) ||
//     navigator.userAgent.match(/BlackBerry/i) ||
//     navigator.userAgent.match(/Windows Phone/i)
//   ) {
//     document
//       .getElementsByClassName("mobileAlert")
//       .element.classList.remove("hide");
//     console.log("mobile");
//   } else {
//     console.log("desktop");
//   }
// };
