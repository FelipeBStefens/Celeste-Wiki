const music = document.getElementById("music");

window.addEventListener("click", () => {

    music.volume = 0.5;
    music.play();

}, { once: true });