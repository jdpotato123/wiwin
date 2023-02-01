let imageIndex = 0;
const images = ['love1.jpg', 'love2.jpg', 'love3.jpg', 'love4.jpg', 'love5.jpg', 'love6.jpg', 'love7.jpg', 'love8.jpg', 'love9.jpg', 'love10.jpg', 'love11.jpg'];

const switchImage = () => {
	imageIndex = (imageIndex + 1) % images.length;
	document.getElementById("image").src = images[imageIndex];
};

document.getElementById("switchImage").addEventListener("click", switchImage);
var audio = document.getElementById("bg-music");
var playPauseBtn = document.getElementById("play-pause-btn");

playPauseBtn.addEventListener("click", function(){
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = "Pause";
  } else {
    audio.pause();
    playPauseBtn.innerHTML = "Play";
  }
});

