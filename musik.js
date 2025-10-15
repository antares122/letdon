<script>
  const video = document.getElementById("bgVideo");
  const btn = document.getElementById("playPauseBtn");

  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      btn.textContent = "⏸ Pause";
    } else {
      video.pause();
      btn.textContent = "▶ Play";
    }
  });
</script>