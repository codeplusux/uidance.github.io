var videosArray = [
  {
    id: "id1",
    name: "Rappi",
    poster: "posters/rappi.png",
    path: "videos/rappi.mp4",
  },
  {
    id: "id2",
    name: "Trivago",
    poster: "posters/trivago.png",
    path: "videos/trivago.mp4",
  },
  {
    id: "id3",
    name: "Apple",
    poster: "posters/apple.png",
    path: "videos/apple.mp4",
  },
  {
    id: "id4",
    name: "Calm",
    poster: "posters/calm.png",
    path: "videos/calm.mp4",
  },
  {
    id: "id5",
    name: "Uber",
    poster: "posters/uber.png",
    path: "videos/uber.mp4",
  },
  {
    id: "id6",
    name: "Kindle",
    poster: "posters/kindle.png",
    path: "videos/kindle.mp4",
  },
  {
    id: "id7",
    name: "Pinterest",
    poster: "posters/pinterest.png",
    path: "videos/pinterest.mp4",
  },
  {
    id: "id8",
    name: "Shazam",
    poster: "posters/shazam.png",
    path: "videos/shazam.mp4",
  },
  {
    id: "id9",
    name: "Apple Music",
    poster: "posters/music.png",
    path: "videos/appleMusic.mp4",
  },
  {
    id: "id10",
    name: "Apple awards",
    poster: "posters/appleAwards.png",
    path: "videos/sportApple.mp4",
  },
  {
    id: "id11",
    name: "Duoling",
    poster: "posters/duolingo.png",
    path: "videos/duolingo.mp4",
  },
  {
    id: "id12",
    name: "Facebook",
    poster: "posters/facebook.png",
    path: "videos/facebook.mp4",
  },
  {
    id: "id13",
    name: "Swarm",
    poster: "posters/swarm.png",
    path: "videos/swarmNew.mp4",
  },
  {
    id: "id14",
    name: "Flickr",
    poster: "posters/flickr.png",
    path: "videos/flickr.mp4",
  },
  {
    id: "id15",
    name: "Santander",
    poster: "posters/santander.png",
    path: "videos/santander.mp4",
  },
  {
    id: "id16",
    name: "Mercado libre",
    poster: "posters/mercadoLibre.png",
    path: "videos/mercadoLibre.mp4",
  },
  {
    id: "id17",
    name: "Cabify",
    poster: "posters/cabify.png",
    path: "videos/cabify.mp4",
  },
  {
    id: "id18",
    name: "Apple",
    poster: "posters/coverflow.png",
    path: "videos/coverflow.mp4",
  },
  {
    id: "id19",
    name: "Apple",
    poster: "posters/activity.png",
    path: "videos/activity.mp4",
  },
  {
    id: "id20",
    name: "Google",
    poster: "posters/calendarGoogle.png",
    path: "videos/calendarGoogle.mp4",
  },
  {
    id: "id21",
    name: "Google",
    poster: "posters/translate.png",
    path: "videos/translate.mp4",
  },
  {
    id: "id22",
    name: "Emirates",
    poster: "posters/emirates.png",
    path: "videos/emirates.mp4",
  },
  {
    id: "id23",
    name: "Match 3D",
    poster: "posters/match3d.png",
    path: "videos/match3d.mp4",
  },
  {
    id: "id24",
    name: "American Airlines",
    poster: "posters/americanAirlines.png",
    path: "videos/americanAirlines.mp4",
  },
];

var i = videosArray.length;

window.onload = function () {
  const { name, path, poster } = videosArray[
    Math.floor(Math.random() * videosArray.length)
  ];
  // document.getElementById("title").innerHTML = name;
  document.getElementById("srcVideo").src = path;
  document.getElementById("srcVideo").poster = poster;

  // GALLERY BUTTONS
  var gallery = document.getElementById("gallery");

  function remplazar(i) {
    document.getElementById("srcVideo").src = videosArray[i].path;
    document.getElementById("srcVideo").poster = videosArray[i].poster;
  }

  function createListItem(i) {
    const itemContainer = document.createElement("div");
    itemContainer.className = "item";
    const replaceButton = document.createElement("button");
    replaceButton.onclick = () => remplazar(i);

    const placeHolderImg = document.createElement("img");
    placeHolderImg.className = "img-fluid";
    placeHolderImg.src = videosArray[i].poster;
    itemContainer.appendChild(replaceButton);
    replaceButton.appendChild(placeHolderImg);

    return itemContainer;
  }

  for (var i = 0; i < videosArray.length; i++) {
    gallery.appendChild(createListItem(i));
  }
};

// Function next video
// function nextDance() {
//   if (i < videosArray.length) {
//     i = i + 1;
//   } else {
//     i = 0;
//   }

//   document.getElementById("title").innerHTML = videosArray[i].name;
//   document.getElementById("srcVideo").src = videosArray[i].path;
//   document.getElementById("svg1").classList.remove("hide");
//   document.getElementById("svg1").classList.remove("btnOn");
//   document.getElementById("svg3").classList.add("hide");
//   document.getElementsByTagName("body")[0].removeAttribute("class", "videoOn");
//   document.getElementById("slogan").classList.remove("sloganOn");
//   document.getElementsByTagName("div")[0].classList.remove("noBg");
//   document.getElementById("bar").classList.add("barOff");
// }

// BUILD PLAYLIST
// var playList = document.getElementById("playlist");
// var list = "";

// for (var i = 0; i < videosArray.length; i++) {
//   list +=
//     "<li>" + "<video src=" + videosArray[i].path + ">" + "</video></li>";
// }

// playList.innerHTML = list;
