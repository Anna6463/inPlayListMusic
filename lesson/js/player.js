//data

let playlist_1 = {
  number: 1,
  title: "Hip-Hop Hits",
  coverImageUrl: "/img/playlist_1.png",
  info: {
    totaltrackcount: 4,
    totaltrackDurationInSecond: 733,
  },
  tracks: [
    {
      coverImageUrl: "/img/artict_1.png",
      artistName: "Emenem",
      title: "Rap God",
      fileUrl: "Emenem_-_Rap_God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "/img/artict_2.png",
      artistName: "50 cent",
      title: "50 cent - In da Club",
      fileUrl: "50 cent - In da Club.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "/img/artict_3.png",
      artistName: "DMX - X Gon",
      title: "DMX - X Gon Give It To Ya",
      fileUrl: "DMX - X Gon Give It To Ya.mp3",
      isHot: true,
    },
    {
      coverImageUrl: "/img/artict_4.png",
      artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
      title: "You Dont Know",
      fileUrl: "Eminem feat 50 Cent, Cashis, Lloyd Banks.mp3",
      isHot: false,
    },
  ],
};

let playlist_2 = {
  number: 2,
  title: "Rap Hits 1990s",
  coverImageUrl: "/img/playlist_2.png",
  info: {
    totaltrackcount: 4,
    totaltrackDurationInSecond: 733,
  },
  tracks: [
    {
      coverImageUrl: "/img/artict_2-1.png",
      artistName: "Public Enemy",
      title: "Fight the Power",
      fileUrl:  "Emenem_-_Rap_God.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "/img/artict_2-2.png",
      artistName: "Vanila Ice",
      title: "Ice Ice Baby",
      fileUrl: "50 cent - In da Club.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "/img/artict_2-4.png",
      artistName: "MC Hammer",
      title: "You Can’t Touch This",
      fileUrl: "Eminem feat 50 Cent, Cashis, Lloyd Banks.mp3",
      isHot: false,
    },
    {
      coverImageUrl: "/img/artict_2-3.png",
      artistName: "Brand Nubian",
      title: "Brand Nubian",
      fileUrl: "DMX - X Gon Give It To Ya.mp3",
      isHot: true,
    }
   
  ],
};


//var
let getplaylists = document.querySelector('.playlists');


// render
renderPlaylist(playlist_1);
renderPlaylist(playlist_2);

function renderPlaylist(playlistForRendering) {
  
  renderPlaylistHeader(playlistForRendering);

 
}

function renderPlaylistHeader(playlistForRendering) {
  let playList = document.createElement('div');
  playList.className = (`playlists__playlist playlist`);
  getplaylists.appendChild(playList); 


  let getPlayListHeader = document.createElement('div');
  getPlayListHeader.className = `playlist__header`;
  playList.appendChild(getPlayListHeader); 

  let playListImgElement = document.createElement("img");
  playListImgElement.className = 'playList__img'
  playListImgElement.src = playlistForRendering.coverImageUrl;
  getPlayListHeader.appendChild(playListImgElement);

  let playListHeader = document.createElement('div');
  playListHeader.className = `playlist__title`;
  getPlayListHeader.appendChild(playListHeader);

  let playListTextElement = document.createElement('p');
  playListTextElement.className = `playlist__text`;
  playListTextElement.innerHTML = 'PlayList';
  playListHeader.appendChild(playListTextElement);

  let playListTitleElement = document.createElement("h2");
  playListHeader.append(playlistForRendering.title);

  let playListTrackCount = document.createElement('div');
  playListTrackCount.className = `playList-${playlistForRendering.number}__TrackCount`;
  playListTrackCount.append(playlistForRendering.info.totaltrackcount + ' '  + 'tracks');
  playListHeader.appendChild(playListTrackCount);

  function renderTrack(inputTrackForRendering) {
    let trackElement = document.createElement("div");
    trackElement.className = 'playlist__track';
  
    let coverElement = document.createElement("img");
    coverElement.className = 'track__img';
    coverElement.src = inputTrackForRendering.coverImageUrl;
    trackElement.append(coverElement);
  
      let trackElementName = document.createElement("div");
      trackElementName.className = 'playList__trakName';
      trackElementName.append(
      inputTrackForRendering.artistName + " - " + inputTrackForRendering.title);
  
    let playerElement = document.createElement("audio");
    playerElement.className = 'track__audio';
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;
    trackElementName.append(playerElement);
  
    trackElement.appendChild(trackElementName);
  
    playList.appendChild(trackElement);
  }

  renderTrack(playlistForRendering.tracks[0]);
  renderTrack(playlistForRendering.tracks[1]);
  renderTrack(playlistForRendering.tracks[2]);
  renderTrack(playlistForRendering.tracks[3]);
}



