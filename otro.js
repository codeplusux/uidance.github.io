var videos = ["videos/rappi.mp4", "videos/trivago.mp4"];
var playedVideos = [];

var videoId = getRandomInt(0, 9);
var elemVideo = document.getElementById("video");
video.setAttribute("src", "/" + videos[videoId]);
var btn = document.getElementById("playRandom");

btn.addEventListener("click", playRandom);

function playRandom(e) {
  var nextId = getRandomInt(0, 9);

  if (nextId != videoId) {
    if (!playNext(nextId)) {
      playRandom(e);
    }
  } else {
    while (nextId == videoId) {
      nextId = getRandomInt(0, 9);
    }

    if (!playNext(nextId)) {
      playRandom(e);
    }
  }
}

/* gets random whole number between 0 and 9 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playNext(id) {
  // checks if the video has already been played
  for (var src in playedVideos) {
    if (src == videos[id]) {
      return false;
    }
  }

  video.setAttribute("src", "/" + videos[id]);
  video.play();

  // adds src to arr of played videos
  playedVideos.push(videos[id]);

  /*
   * Everything from here on is optional depending on whether you want to
   * - iterate over the arr of videos and play each videos at least once before starting over or
   * - you want to stop playing videos after playing each at least once
   */

  // empties the played videos arr and allows you to start playing a new set of random videos
  if (playedVideos.length() == 10) {
    playedVideos = [];
    // if you'd like to stop playing videos altogether at this, point delete the previous statement and display a prompt saying the playlist is over
    // or if you'd like to reset the playlist, then remove the event listener ('playRandom') and display a reset button that starts everything over from the beginning.
  }

  return true;
}
