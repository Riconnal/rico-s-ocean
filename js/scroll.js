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
    { subtitle: '幽影黑客', title: '共鸣接口', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00001_c9925b0d92d8df3d.png', gradient: '#7E4DF4 0%, #96AEFE 100%' },
    { subtitle: '光影幻梦', title: '人机接口', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00002_e83b4f12e55110f9.png', gradient: '#52BAE7 0%, #7E4DF4 100%' },
    { subtitle: '狂热潜行', title: '人机接口', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00003_a736937e3cd296c1.png', gradient: '#4228FF 0%, #52BAE7 100%' },
    { subtitle: '雷霆突触', title: '反向接口', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00004_de9fe14559f8d88b.png'', gradient: '#96AEFE 0%, #7E4DF4 100%' },
    { subtitle: '晶化茧房', title: '线粒体力场', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00005_ba17987f4c453498.png', gradient: '#7E4DF4 0%, #4228FF 100%' },
    { subtitle: '无光轴心', title: '精密齿轮', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00006_a09a239c5903ebb8.png', gradient: '#52BAE7 0%, #96AEFE 100%' },
    { subtitle: '折射迷宫', title: '无尽齿轮', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00007_83de5d8c2255c896.png', gradient: '#4228FF 0%, #7E4DF4 100%' },
    { subtitle: '劫火咬合', title: '精密齿轮', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00008_420db83e8ef8fbd3.png', gradient: '#96AEFE 0%, #52BAE7 100%' },
    { subtitle: '磁暴电涌', title: '雷导齿轮', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00009_b735fe9dd987ccce.png', gradient: '#7E4DF4 0%, #52BAE7 100%' },
    { subtitle: '骨质化石', title: '精密齿轮', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00010_87cf76694f252431.png', gradient: '#4228FF 0%, #96AEFE 100%' },
    { subtitle: '幽冥巡航', title: '推进加速瓶', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00011_11ccd1c1ee16f39d.png', gradient: '#52BAE7 0%, #4228FF 100%' },
    { subtitle: '极光飙客', title: '推进加速瓶', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00012_f27f891c9d30dcde.png', gradient: '#96AEFE 0%, #4228FF 100%' }
  ];

  const extraTitles = [
    { cn: '尾迹焚毁', en: '爆燃加速瓶', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00013_f9dda5a8bca661d3.png' },
    { cn: '电磁弹射', en: '推进加速瓶', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00014_4c979d8ff80a91f9.png' },
    { cn: '狂野孢子', en: '急擂加速瓶', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00015_f6db067a7e5f7307.png' },
    { cn: '光学隐匿', en: '涂鸦颜料', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00016_6fe5ea2532f54882.png'  },
    { cn: '烫闪全息', en: '涂鸦颜料', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00017_ded82f87bb51b7ed.png'  },
    { cn: '烙印灼烧', en: '流体火罐', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00018_7eb78dea0af28095.png'  },
    { cn: '导电陷阱', en: '喷涂罐', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00019_8d573235481117a9.png'  },
    { cn: '远古共鸣', en: '人机接口', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00020_02cc89b7a328ea52.png'  },
    { cn: '幽影寂静', en: '超频芯片', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00021_4c8e2335faafb3ad.png''  },
    { cn: '幻象过载', en: '超频芯片', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00022_b855915dd9ccb209.png'  },
    { cn: '熔毁边缘', en: '极限芯片', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00023_5bf90fe56808d4db.png'  },
    { cn: '雷霆脉冲', en: '超频芯片', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00024_cd76d3e4edb2abdb.png'  },
    { cn: '古菌共生', en: '持续芯片', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00025_8fbc7d2685b91906.png'  },
    { cn: '镇魂勇探', en: '固化音轨', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00026_b7f11aa7af9c88f6.png'  },
    { cn: '循环回响', en: '永久音轨', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00027_88a71ffdef00ab2d.png'  },
    { cn: '爆燃交响', en: '固化音轨', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00028_6a16145d60ff6edb.png'  },
    { cn: '高压白噪', en: '干扰音轨', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00029_8da799b44ef6f805.png'  },
    { cn: '旧世回声', en: '固化音轨', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00030_3dfe4140d119366c.png'  },
    { cn: '虚无壁垒', en: '黑洞发生器', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00031_70a0a9914c340a3e.png'  },
    { cn: '棱镜折射', en: '护盾发生器', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00032_80ce39255d87628b.png'  },
    { cn: '烈阳反甲', en: '护盾发生器', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00033_4094854db2518aa1.png'  },
    { cn: '强磁风暴', en: '护盾发生器', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alhpa_00034_65add515481fa3de.png'  },
    { cn: '荧光真菌', en: '涂鸦颜料', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00035_9aab10f4cf20dcc3.png'  },
    { cn: '深渊盲区', en: '寻宝星图', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00036_7a49b6695a332de3.png'  },
    { cn: '夜城繁星', en: '观光星图', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00037_9c69f674ddc14b13.png'  },
    { cn: '烬火危险区', en: '探索星图', rarity: 'SR',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00038_c1fc3be2de97d68b.png'  },
    { cn: '雷达脉冲', en: '探索星图', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00039_31f3c36fa5f07e72.png'  },
    { cn: '旧神遗迹', en: '探索星图', rarity: 'R',image:'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00040_75a3d19b70826063.png'  },
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

    const cardImgMap = {
  1:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00001_c9925b0d92d8df3d.png',
  2:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00002_e83b4f12e55110f9.png',
  3:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00003_a736937e3cd296c1.png',
  4:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00004_de9fe14559f8d88b.png',
  5:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00005_ba17987f4c453498.png',
  6:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00006_a09a239c5903ebb8.png',
  7:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00007_83de5d8c2255c896.png',
  8:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00008_420db83e8ef8fbd3.png',
  9:  'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00009_b735fe9dd987ccce.png',
  10: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00010_87cf76694f252431.png',
  11: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00011_11ccd1c1ee16f39d.png',
  12: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00012_f27f891c9d30dcde.png',
  13: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00013_f9dda5a8bca661d3.png',
  14: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00014_4c979d8ff80a91f9.png',
  15: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00015_f6db067a7e5f7307.png',
  16: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00016_6fe5ea2532f54882.png',
  17: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00017_ded82f87bb51b7ed.png',
  18: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00018_7eb78dea0af28095.png',
  19: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00019_8d573235481117a9.png',
  20: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00020_02cc89b7a328ea52.png',
  21: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00021_4c8e2335faafb3ad.png',
  22: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00022_b855915dd9ccb209.png',
  23: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00023_5bf90fe56808d4db.png',
  24: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00024_cd76d3e4edb2abdb.png',
  25: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00025_8fbc7d2685b91906.png',
  26: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00026_b7f11aa7af9c88f6.png',
  27: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00027_88a71ffdef00ab2d.png',
  28: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00028_6a16145d60ff6edb.png',
  29: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00029_8da799b44ef6f805.png',
  30: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00030_3dfe4140d119366c.png',
  31: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00031_70a0a9914c340a3e.png',
  32: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00032_80ce39255d87628b.png',
  33: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00033_4094854db2518aa1.png',
  34: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00034_65add515481fa3de.png',
  35: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00035_9aab10f4cf20dcc3.png',
  36: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00036_7a49b6695a332de3.png',
  37: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00037_9c69f674ddc14b13.png',
  38: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00038_c1fc3be2de97d68b.png',
  39: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00039_31f3c36fa5f07e72.png',
  40: 'https://origin.picgo.net/2026/06/25/mixed_item_alpha_00040_75a3d19b70826063.png',
};
    
    const cardNum = String(i + 1).padStart(5, '0');
    const card = document.createElement('div');
    card.className = 'art-card';
    const srOverlay = cardData.rarity === 'SR' ? `<div class="art-card-sr-overlay"><img src="assets/images/SR.png" alt="SR" class="art-card-sr-img"></div>` : '';
    card.innerHTML = `
      <div class="art-card-gradient" style="background: linear-gradient(135deg, ${cardData.gradient});"></div>
      <div class="art-card-content">
  <img src="${cardData.image}" alt="${cardData.title}" class="art-card-img">
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
