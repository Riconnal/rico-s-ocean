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

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSmoothScroll();
  initChapterSwitch();
});
