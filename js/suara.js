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
   
     var audio3 = document.getElementById("audio-3");
     var playButton3 = document.getElementById("music-3");
     var iconPlay3 = document.getElementById("icon-play-3");
     var iconPause3 = document.getElementById("icon-pause-3");
     var gunakanMusic3 = document.querySelector(".gunakan-music-3");
   
     var audio4 = document.getElementById("audio-4");
     var playButton4 = document.getElementById("music-4");
     var iconPlay4 = document.getElementById("icon-play-4");
     var iconPause4 = document.getElementById("icon-pause-4");
     var gunakanMusic4 = document.querySelector(".gunakan-music-4");
   
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
         if (audio1 !== audio) pauseAudio(audio1, iconPlay1, iconPause1, gunakanMusic1);
         if (audio2 !== audio) pauseAudio(audio2, iconPlay2, iconPause2, gunakanMusic2);
         if (audio3 !== audio) pauseAudio(audio3, iconPlay3, iconPause3, gunakanMusic3);
         if (audio4 !== audio) pauseAudio(audio4, iconPlay4, iconPause4, gunakanMusic4);
   
         playAudio(audio, iconPlay, iconPause, gunakanMusic);
   
         // Add event listener for when audio finishes
         audio.addEventListener("ended", function () {
           iconPlay.style.display = "block";
           iconPause.style.display = "none";
           gunakanMusic.style.display = "none";
         });
       } else {
         pauseAudio(audio, iconPlay, iconPause, gunakanMusic);
       }
     }
   
     playButton1.addEventListener("click", function () {
       handlePlayPause(playButton1, audio1, iconPlay1, iconPause1, gunakanMusic1);
     });
   
     playButton2.addEventListener("click", function () {
       handlePlayPause(playButton2, audio2, iconPlay2, iconPause2, gunakanMusic2);
     });
   
     playButton3.addEventListener("click", function () {
       handlePlayPause(playButton3, audio3, iconPlay3, iconPause3, gunakanMusic3);
     });
   
     playButton4.addEventListener("click", function () {
       handlePlayPause(playButton4, audio4, iconPlay4, iconPause4, gunakanMusic4);
     });
   
     // Pause all audios if click happens outside play buttons
     document.addEventListener("click", function (event) {
       if (!event.target.closest(".music > button")) {
         pauseAudio(audio1, iconPlay1, iconPause1, gunakanMusic1);
         pauseAudio(audio2, iconPlay2, iconPause2, gunakanMusic2);
         pauseAudio(audio3, iconPlay3, iconPause3, gunakanMusic3);
         pauseAudio(audio4, iconPlay4, iconPause4, gunakanMusic4);
       }
     });
   });
   