//Array videos
var videosArray = [
  {
    id: "id1",
    name: "Rappi",
    path: "videos/rappi.mp4",
  },
  {
    id: "id2",
    name: "Trivago",
    path: "videos/trivago.mp4",
  },
  {
    id: "id3",
    name: "Apple",
    path: "videos/apple.mp4",
  },
  {
    id: "id4",
    name: "Calm",
    path: "videos/calm.mp4",
  },
  {
    id: "id5",
    name: "Uber",
    path: "videos/uber.mp4",
  },
];

//Random display
function nextDance() {
  const { name, path } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  document.getElementById("hero").innerHTML = name;
  document.getElementById("stage").src = path;
  document.getElementById("menu").classList.remove("h-100-mobile");
  document.getElementById("svg1").classList.remove("hide");
  document.getElementById("svg1").classList.remove("btnOn");
  document.getElementById("svg2").classList.remove("btnOn");
  document.getElementById("svg3").classList.add("hide");
  document.getElementsByTagName("body")[0].removeAttribute("class", "videoOn");
  document.getElementById("tagline").classList.remove("taglineOn");
  document.getElementsByTagName("div")[0].classList.remove("noBg");
}

window.onload = function () {
  const { name, path } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  document.getElementById("hero").innerHTML = name;
  document.getElementById("stage").src = path;
};
