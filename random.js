var videosArray = ["videos/rappi.mp4", "videos/trivago.mp4"];

function nextDance() {
  var rand = Math.floor(Math.random() * videosArray.length);
  document.getElementById("stage").src = videosArray[rand];
}
