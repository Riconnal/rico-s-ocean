let bgmAudio = null;
let isPlaying = false;
let isLoaded = false;

const bgmConfig = {
  src: "assets/audio/bgm.m4a",
  autoPlay: true,
  loop: true,
  volume: 0.3
};

function initBGM() {
  const toggleBtn = document.getElementById('bgm-toggle');
  updateButtonState();

  toggleBtn.addEventListener('click', toggleBGM);

  document.addEventListener('click', tryAutoPlay, { once: true });
  document.addEventListener('keydown', tryAutoPlay, { once: true });
  document.addEventListener('touchstart', tryAutoPlay, { once: true });

  window.addEventListener('load', lazyLoadBGM);
}

function lazyLoadBGM() {
  if (isLoaded) return;
  bgmAudio = new Audio();
  bgmAudio.loop = bgmConfig.loop;
  bgmAudio.volume = bgmConfig.volume;
  bgmAudio.preload = 'none';
  isLoaded = true;
}

function ensureLoaded() {
  if (!isLoaded) {
    lazyLoadBGM();
    bgmAudio.src = bgmConfig.src;
    bgmAudio.load();
  }
}

function tryAutoPlay() {
  if (bgmConfig.autoPlay && !isPlaying) {
    playBGM();
  }
}

function toggleBGM() {
  if (isPlaying) {
    pauseBGM();
  } else {
    playBGM();
  }
}

function playBGM() {
  if (!isLoaded) ensureLoaded();
  if (!bgmAudio) return;
  
  bgmAudio.play().then(() => {
    isPlaying = true;
    updateButtonState();
  }).catch(err => {
    console.log('BGM play failed:', err);
  });
}

function pauseBGM() {
  if (!bgmAudio) return;
  
  bgmAudio.pause();
  isPlaying = false;
  updateButtonState();
}

function updateButtonState() {
  const toggleBtn = document.getElementById('bgm-toggle');
  
  if (isPlaying) {
    toggleBtn.classList.add('playing');
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    `;
  } else {
    toggleBtn.classList.remove('playing');
    toggleBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>
    `;
  }
}

document.addEventListener('DOMContentLoaded', initBGM);
