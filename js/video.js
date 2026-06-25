const videos = {
  a: {
    title: "主屏主页",
    src: "https://origin.picgo.net/2026/06/25/main1b5d0112418fc8e7.mp4",
    thumbnail: "linear-gradient(135deg, #e4dcf7ff 0%, #ece9ffff 100%)"
  },
  b: {
    title: "仪表",
    src: "https://origin.picgo.net/2026/06/25/sub39fc292ec19195ff.mp4",
    thumbnail: "linear-gradient(135deg, #d9e0f8ff 0%, #e5f7ffff 100%)"
  },
  c: {
    title: "小憩·香氛",
    src: "https://origin.picgo.net/2026/06/25/play5019886782ca9d91.mp4",
    thumbnail: "linear-gradient(135deg, #ceeaf6ff 0%, #e0d3ffff 100%)"
  }
};

const featuredVideo = {
  title: "宣传视频",
  description: "加入「跃动海洋 | LEAP OCEAN」，一同修复我们的 Moli 宇宙。",
  src: "https://origin.picgo.net/2026/06/25/out111pv84e36a6a9fad2b47.mp4"
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
