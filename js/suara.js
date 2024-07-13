document.addEventListener("DOMContentLoaded", function () {
  var audio1 = document.getElementById("audio-1");
  var playButton1 = document.getElementById("music-1");
  var iconPlay1 = document.getElementById("icon-play-1");
  var iconPause1 = document.getElementById("icon-pause-1");
  var gunakanMusic1 = document.querySelector(".gunakan-music-1");

  var audio2 = document.getElementById("audio-2");
  var playButton2 = document.getElementById("music-2");
  var iconPlay2 = document.getElementById("icon-play-2");
  var iconPause2 = document.getElementById("icon-pause-2");
  var gunakanMusic2 = document.querySelector(".gunakan-music-2");

  function playAudio(audio, iconPlay, iconPause, gunakanMusic) {
    audio.play();
    iconPlay.style.display = "none";
    iconPause.style.display = "block";
    gunakanMusic.style.display = "block";
  }

  function pauseAudio(audio, iconPlay, iconPause, gunakanMusic) {
    audio.pause();
    iconPlay.style.display = "block";
    iconPause.style.display = "none";
    gunakanMusic.style.display = "none";
  }

  function handlePlayPause(button, audio, iconPlay, iconPause, gunakanMusic) {
    if (audio.paused) {
      // Pause all other audios
      if (audio1 !== audio)
        pauseAudio(audio1, iconPlay1, iconPause1, gunakanMusic1);
      if (audio2 !== audio)
        pauseAudio(audio2, iconPlay2, iconPause2, gunakanMusic2);

      playAudio(audio, iconPlay, iconPause, gunakanMusic);
    } else {
      pauseAudio(audio, iconPlay, iconPause, gunakanMusic);
    }
  }

  playButton1.addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubbling ke dokumen
    handlePlayPause(playButton1, audio1, iconPlay1, iconPause1, gunakanMusic1);
  });

  playButton2.addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah event bubbling ke dokumen
    handlePlayPause(playButton2, audio2, iconPlay2, iconPause2, gunakanMusic2);
  });

  audio1.addEventListener("ended", function () {
    pauseAudio(audio1, iconPlay1, iconPause1, gunakanMusic1);
  });

  audio2.addEventListener("ended", function () {
    pauseAudio(audio2, iconPlay2, iconPause2, gunakanMusic2);
  });

  document.addEventListener("click", function (event) {
    if (!playButton1.contains(event.target) && !audio1.paused) {
      pauseAudio(audio1, iconPlay1, iconPause1, gunakanMusic1);
    }
    if (!playButton2.contains(event.target) && !audio2.paused) {
      pauseAudio(audio2, iconPlay2, iconPause2, gunakanMusic2);
    }
  });
});
