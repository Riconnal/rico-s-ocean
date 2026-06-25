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
    { subtitle: '幽影黑客', title: '共鸣接口', rarity: 'SR', gradient: '#7E4DF4 0%, #96AEFE 100%' },
    { subtitle: '光影幻梦', title: '人机接口', rarity: 'R', gradient: '#52BAE7 0%, #7E4DF4 100%' },
    { subtitle: '狂热潜行', title: '人机接口', rarity: 'R', gradient: '#4228FF 0%, #52BAE7 100%' },
    { subtitle: '雷霆突触', title: '反向接口', rarity: 'SR', gradient: '#96AEFE 0%, #7E4DF4 100%' },
    { subtitle: '晶化茧房', title: '线粒体力场', rarity: 'SR', gradient: '#7E4DF4 0%, #4228FF 100%' },
    { subtitle: '无光轴心', title: '精密齿轮', rarity: 'R', gradient: '#52BAE7 0%, #96AEFE 100%' },
    { subtitle: '折射迷宫', title: '无尽齿轮', rarity: 'SR', gradient: '#4228FF 0%, #7E4DF4 100%' },
    { subtitle: '劫火咬合', title: '精密齿轮', rarity: 'R', gradient: '#96AEFE 0%, #52BAE7 100%' },
    { subtitle: '磁暴电涌', title: '雷导齿轮', rarity: 'SR', gradient: '#7E4DF4 0%, #52BAE7 100%' },
    { subtitle: '骨质化石', title: '精密齿轮', rarity: 'R', gradient: '#4228FF 0%, #96AEFE 100%' },
    { subtitle: '幽冥巡航', title: '推进加速瓶', rarity: 'R', gradient: '#52BAE7 0%, #4228FF 100%' },
    { subtitle: '极光飙客', title: '推进加速瓶', rarity: 'R', gradient: '#96AEFE 0%, #4228FF 100%' }
  ];

  const extraTitles = [
    { cn: '尾迹焚毁', en: '爆燃加速瓶', rarity: 'SR' },
    { cn: '电磁弹射', en: '推进加速瓶', rarity: 'R' },
    { cn: '狂野孢子', en: '急擂加速瓶', rarity: 'SR' },
    { cn: '光学隐匿', en: '涂鸦颜料', rarity: 'R' },
    { cn: '烫闪全息', en: '涂鸦颜料', rarity: 'R' },
    { cn: '烙印灼烧', en: '流体火罐', rarity: 'SR' },
    { cn: '导电陷阱', en: '喷涂罐', rarity: 'SR' },
    { cn: '远古共鸣', en: '人机接口', rarity: 'R' },
    { cn: '幽影寂静', en: '超频芯片', rarity: 'R' },
    { cn: '幻象过载', en: '超频芯片', rarity: 'R' },
    { cn: '熔毁边缘', en: '极限芯片', rarity: 'SR' },
    { cn: '雷霆脉冲', en: '超频芯片', rarity: 'R' },
    { cn: '古菌共生', en: '持续芯片', rarity: 'SR' },
    { cn: '镇魂勇探', en: '固化音轨', rarity: 'R' },
    { cn: '循环回响', en: '永久音轨', rarity: 'SR' },
    { cn: '爆燃交响', en: '固化音轨', rarity: 'R' },
    { cn: '高压白噪', en: '干扰音轨', rarity: 'SR' },
    { cn: '旧世回声', en: '固化音轨', rarity: 'R' },
    { cn: '虚无壁垒', en: '黑洞发生器', rarity: 'SR' },
    { cn: '棱镜折射', en: '护盾发生器', rarity: 'R' },
    { cn: '烈阳反甲', en: '护盾发生器', rarity: 'R' },
    { cn: '强磁风暴', en: '护盾发生器', rarity: 'R' },
    { cn: '荧光真菌', en: '涂鸦颜料', rarity: 'R' },
    { cn: '深渊盲区', en: '寻宝星图', rarity: 'SR' },
    { cn: '夜城繁星', en: '观光星图', rarity: 'R' },
    { cn: '烬火危险区', en: '探索星图', rarity: 'SR' },
    { cn: '雷达脉冲', en: '探索星图', rarity: 'R' },
    { cn: '旧神遗迹', en: '探索星图', rarity: 'R' },
  ];

  const gradients = [
    '#7E4DF4 0%, #96AEFE 100%', '#52BAE7 0%, #7E4DF4 100%', '#4228FF 0%, #52BAE7 100%',
    '#96AEFE 0%, #7E4DF4 100%', '#7E4DF4 0%, #4228FF 100%', '#52BAE7 0%, #96AEFE 100%',
    '#4228FF 0%, #7E4DF4 100%', '#96AEFE 0%, #52BAE7 100%', '#7E4DF4 0%, #52BAE7 100%',
    '#4228FF 0%, #96AEFE 100%', '#52BAE7 0%, #4228FF 100%', '#96AEFE 0%, #4228FF 100%',
    '#4f2958ff 0%, #7e51bdff 100%', '#3eaab4ff 0%, #46c2c0ff 100%', '#7b8eb4ff 0%, #38BDF8 100%',
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
