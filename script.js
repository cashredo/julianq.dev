// ── Radiant glow follows mouse ──
const radiant = document.querySelector('.radiant');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  radiant.style.setProperty('--x', x + '%');
  radiant.style.setProperty('--y', y + '%');
});

// ── Play local source.mp3 using the HTML audio element ──
const rainToggle = document.getElementById('rain-toggle');
const rainAudio = document.getElementById('rain-audio');

if (rainAudio) {
  rainAudio.volume = 0.45;
}

if (rainToggle) {
  rainToggle.textContent = '▶ source.mp3';
  rainToggle.addEventListener('click', () => {
    if (!rainAudio) return;

    if (rainAudio.paused) {
      rainAudio.play().catch((e) => console.error('Audio play blocked:', e));
      rainToggle.textContent = '⏸ source.mp3';
    } else {
      rainAudio.pause();
      rainToggle.textContent = '▶ source.mp3';
    }
  });
}
