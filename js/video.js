const videos = {
  a: {
    title: "创作过程 A",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "linear-gradient(135deg, #7E4DF4 0%, #4228FF 100%)"
  },
  b: {
    title: "作品展示 B",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "linear-gradient(135deg, #96AEFE 0%, #52BAE7 100%)"
  },
  c: {
    title: "幕后花絮 C",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "linear-gradient(135deg, #52BAE7 0%, #7E4DF4 100%)"
  }
};

const featuredVideo = {
  title: "精选作品 · 幻梦之境",
  description: "这是一段关于创作与想象的旅程，穿越虚实之间的边界，探索艺术的无限可能。",
  src: "https://www.w3schools.com/html/movie.mp4"
};

let currentVideo = 'a';

function initVideoSelector() {
  initThumbs();
  initFeaturedVideo();
}

function initThumbs() {
  const thumbsContainer = document.getElementById('video-thumbs');
  thumbsContainer.innerHTML = Object.entries(videos).map(([key, video]) => `
    <div class="video-thumb ${key === currentVideo ? 'active' : ''}" data-video="${key}" onclick="switchVideo('${key}')">
      <div class="video-thumb-image" style="background: ${video.thumbnail};"></div>
      <div class="video-thumb-overlay">
        <div class="play-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div class="video-thumb-label">${video.title}</div>
    </div>
  `).join('');
}

function switchVideo(key) {
  currentVideo = key;
  const player = document.getElementById('main-video-player');
  const videoData = videos[key];

  player.src = videoData.src;
  player.play();

  document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.classList.remove('active');
    if (thumb.dataset.video === key) {
      thumb.classList.add('active');
    }
  });
}

function initFeaturedVideo() {
  const container = document.getElementById('featured-video-container');
  const titleEl = document.getElementById('featured-video-title');
  const descEl = document.getElementById('featured-video-desc');

  container.innerHTML = `
    <video id="featured-video-player" controls poster="">
      <source src="${featuredVideo.src}" type="video/mp4">
    </video>
  `;

  titleEl.textContent = featuredVideo.title;
  descEl.textContent = featuredVideo.description;
}

document.addEventListener('DOMContentLoaded', initVideoSelector);
