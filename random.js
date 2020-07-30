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

  let cargando = document.querySelector(".loader");

  window.addEventListener("load", function () {
    cargando.style.display = "none";
  });
}

window.onload = function () {
  const { name, path } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  document.getElementById("hero").innerHTML = name;
  document.getElementById("stage").src = path;
};
