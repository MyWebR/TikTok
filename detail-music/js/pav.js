document.addEventListener("DOMContentLoaded", function () {
  const playMusicButton = document.getElementById("play-music");
  const playIcon = document.getElementById("play");
  const pauseIcon = document.getElementById("pause");
  const audio = document.getElementById("audio");

  playMusicButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (audio.paused) {
      audio.play();
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
    } else {
      audio.pause();
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    }
  });

  audio.addEventListener("ended", function () {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (
      event.target !== playMusicButton &&
      !playMusicButton.contains(event.target)
    ) {
      audio.pause();
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    }
  });
});
