// var videosArray = ["videos/rappi.mp4", "videos/trivago.mp4"];

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
];

function nextDance() {
  const { name, path } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  document.getElementById("hero").innerHTML = name;
  document.getElementById("stage").src = path;
}
