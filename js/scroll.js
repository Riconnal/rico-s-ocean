function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function initChapterSwitch() {
  const timelineNodes = document.querySelectorAll('.timeline-node');
  const chapterLabels = document.querySelectorAll('.chapter-label');
  const chapterTexts = document.querySelectorAll('.chapter-text');
  const chapterNames = ['序章', '第一章', '第二章', '第三章'];

  timelineNodes.forEach(node => {
    node.addEventListener('click', () => {
      const chapterIndex = node.dataset.chapter;

      // 更新时间线节点状态
      timelineNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      // 更新章节标题
      chapterLabels.forEach(label => {
        label.textContent = chapterNames[chapterIndex];
      });

      // 更新章节正文
      chapterTexts.forEach(text => {
        text.classList.remove('active');
        if (text.dataset.chapter === chapterIndex) {
          text.classList.add('active');
        }
      });
    });
  });
}

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  const toggleBtn = document.getElementById('gallery-toggle-btn');
  const toggleText = toggleBtn.querySelector('.toggle-text');
  const totalCards = 40;
  const visibleCards = 12;

  const cardTemplates = [
    { subtitle: 'DREAM GARDEN', title: '梦境花园', rarity: 'SSR', gradient: '#7E4DF4 0%, #96AEFE 100%' },
    { subtitle: 'STAR DRIFT', title: '星际漫游', rarity: 'SSR', gradient: '#52BAE7 0%, #7E4DF4 100%' },
    { subtitle: 'NEON CITY', title: '霓虹都市', rarity: 'SR', gradient: '#4228FF 0%, #52BAE7 100%' },
    { subtitle: 'DEEP SEA', title: '深海幻想', rarity: 'SR', gradient: '#96AEFE 0%, #7E4DF4 100%' },
    { subtitle: 'MECH HEART', title: '机械心脏', rarity: 'SSR', gradient: '#7E4DF4 0%, #4228FF 100%' },
    { subtitle: 'LIGHT BRINGER', title: '光之使者', rarity: 'SSR', gradient: '#52BAE7 0%, #96AEFE 100%' },
    { subtitle: 'PIXEL MEMORY', title: '像素记忆', rarity: 'R', gradient: '#4228FF 0%, #7E4DF4 100%' },
    { subtitle: 'SKY CITY', title: '云端之城', rarity: 'SR', gradient: '#96AEFE 0%, #52BAE7 100%' },
    { subtitle: 'TIME TRAVELER', title: '时间旅行者', rarity: 'SSR', gradient: '#7E4DF4 0%, #52BAE7 100%' },
    { subtitle: 'SILENT FOREST', title: '寂静森林', rarity: 'R', gradient: '#4228FF 0%, #96AEFE 100%' },
    { subtitle: 'FUTURE WARRIOR', title: '未来战士', rarity: 'SR', gradient: '#52BAE7 0%, #4228FF 100%' },
    { subtitle: 'MAGIC BOOK', title: '魔法书', rarity: 'R', gradient: '#96AEFE 0%, #4228FF 100%' }
  ];

  const extraTitles = [
    { cn: '星空彼岸', en: 'STAR SHORE', rarity: 'SSR' },
    { cn: '暗夜精灵', en: 'NIGHT ELF', rarity: 'SR' },
    { cn: '水晶宫殿', en: 'CRYSTAL PALACE', rarity: 'SSR' },
    { cn: '极光幻境', en: 'AURORA DREAM', rarity: 'SR' },
    { cn: '幻彩蝶舞', en: 'RAINBOW BUTTERFLY', rarity: 'R' },
    { cn: '银河漫步', en: 'GALAXY WALK', rarity: 'SSR' },
    { cn: '月光奏鸣曲', en: 'MOONLIGHT SONATA', rarity: 'SR' },
    { cn: '翡翠梦境', en: 'EMERALD DREAM', rarity: 'R' },
    { cn: '烈焰之心', en: 'FLAME HEART', rarity: 'SSR' },
    { cn: '冰雪奇缘', en: 'SNOW FANTASY', rarity: 'SR' },
    { cn: '神秘遗迹', en: 'MYSTERIOUS RUINS', rarity: 'R' },
    { cn: '云端漫步', en: 'CLOUD WALK', rarity: 'SSR' },
    { cn: '幻影迷踪', en: 'PHANTOM TRACK', rarity: 'SR' },
    { cn: '星河坠落', en: 'STAR RIVER FALL', rarity: 'R' },
    { cn: '永恒之花', en: 'ETERNAL FLOWER', rarity: 'SSR' },
    { cn: '时光沙漏', en: 'TIME HOURGLASS', rarity: 'SR' },
    { cn: '魔法森林', en: 'MAGIC FOREST', rarity: 'R' },
    { cn: '星际之门', en: 'STAR GATE', rarity: 'SSR' },
    { cn: '梦幻泡泡', en: 'DREAM BUBBLE', rarity: 'SR' },
    { cn: '彩虹桥', en: 'RAINBOW BRIDGE', rarity: 'R' },
    { cn: '暗夜玫瑰', en: 'NIGHT ROSE', rarity: 'SSR' },
    { cn: '晨曦之光', en: 'MORNING LIGHT', rarity: 'SR' },
    { cn: '深海珍珠', en: 'DEEP SEA PEARL', rarity: 'R' },
    { cn: '天空之城', en: 'CASTLE IN SKY', rarity: 'SSR' },
    { cn: '绿野仙踪', en: 'WIZARD OF OZ', rarity: 'SR' },
    { cn: '迷雾森林', en: 'MISTY FOREST', rarity: 'R' },
    { cn: '星际穿越', en: 'INTERSTELLAR', rarity: 'SSR' }
  ];

  const gradients = [
    '#7E4DF4 0%, #96AEFE 100%', '#52BAE7 0%, #7E4DF4 100%', '#4228FF 0%, #52BAE7 100%',
    '#96AEFE 0%, #7E4DF4 100%', '#7E4DF4 0%, #4228FF 100%', '#52BAE7 0%, #96AEFE 100%',
    '#4228FF 0%, #7E4DF4 100%', '#96AEFE 0%, #52BAE7 100%', '#7E4DF4 0%, #52BAE7 100%',
    '#4228FF 0%, #96AEFE 100%', '#52BAE7 0%, #4228FF 100%', '#96AEFE 0%, #4228FF 100%',
    '#F472B6 0%, #FB7185 100%', '#FBBF24 0%, #FB923C 100%', '#34D399 0%, #38BDF8 100%',
    '#A78BFA 0%, #C084FC 100%'
  ];

  for (let i = 0; i < totalCards; i++) {
    let cardData;
    if (i < cardTemplates.length) {
      cardData = cardTemplates[i];
    } else {
      const extraIndex = (i - cardTemplates.length) % extraTitles.length;
      const gradientIndex = i % gradients.length;
      cardData = {
        subtitle: extraTitles[extraIndex].en,
        title: extraTitles[extraIndex].cn,
        rarity: extraTitles[extraIndex].rarity,
        gradient: gradients[gradientIndex]
      };
    }

    const cardNum = String(i + 1).padStart(5, '0');
    const card = document.createElement('div');
    card.className = 'art-card';
    const srOverlay = cardData.rarity === 'SR' ? `<div class="art-card-sr-overlay"><img src="assets/images/SR.png" alt="SR" class="art-card-sr-img"></div>` : '';
    card.innerHTML = `
      <div class="art-card-gradient" style="background: linear-gradient(135deg, ${cardData.gradient});"></div>
      <div class="art-card-content">
        <img src="assets/images/cards/mixed_item_alpha_${cardNum}_.png" alt="${cardData.title}" class="art-card-img">
      </div>
      <div class="art-card-overlay">
        <div class="art-card-subtitle">${cardData.subtitle}</div>
        <div class="art-card-title-row">
          <div class="art-card-title">${cardData.title}</div>
          <div class="art-card-rarity">${cardData.rarity}</div>
        </div>
      </div>
      <div class="art-card-inner-frame"></div>
      ${srOverlay}
    `;
    galleryGrid.appendChild(card);
  }

  // 初始状态：折叠
  galleryGrid.classList.add('collapsed');

  // 折叠/展开按钮事件
  toggleBtn.addEventListener('click', () => {
    galleryGrid.classList.toggle('collapsed');
    toggleBtn.classList.toggle('expanded');

    if (galleryGrid.classList.contains('collapsed')) {
      toggleText.textContent = `展开全部 (共 ${totalCards} 件)`;
    } else {
      toggleText.textContent = `收起 (显示前 ${visibleCards} 件)`;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSmoothScroll();
  initChapterSwitch();
  initGallery();
});
