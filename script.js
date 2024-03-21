// Variables
const splashscreen = document.getElementById("splashscreen");
const splashText = document.getElementById("splashtext");
const eventSplash = document.getElementById("splashscreen").addEventListener("click", splashScreen);

// Music
const music = document.getElementById("music");
const audio = new Audio("audio/music.mp3");
music.volume = 0.01;


// Splashscreen function
function splashScreen(){
    splashscreen.style.opacity = 0;
    setTimeout(function(){splashscreen.classList.remove("splashscreen");
    splashText.remove();}, 300);
    music.play();
}
