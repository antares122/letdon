const lagu = document.getElementById("lagu");
const playBtn = document.getElementById("playBtn");
const wave = document.getElementById("wave");

// Buat elemen bar suara
for (let i = 0; i < 8; i++) {
  const bar = document.createElement("span");
  wave.appendChild(bar);
}

playBtn.addEventListener("click", function() {
  if (lagu.paused) {
    lagu.play();
    playBtn.textContent = "⏸️ Pause Lagu";
    wave.classList.add("active");
  } else {
    lagu.pause();
    playBtn.textContent = "🎵 Putar Lagu";
    wave.classList.remove("active");
  }
});
