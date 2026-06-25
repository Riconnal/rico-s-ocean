let canvas, ctx;
let particles = [];
let mouseX = 0;
let mouseY = 0;

const config = {
  particleCount: 60,
  maxSize: 4,
  minSize: 1,
  speed: 0.5,
  connectionDistance: 150,
  colors: ['#7E4DF4', '#96AEFE', '#52BAE7', '#4228FF']
};

function initParticles() {
  canvas = document.getElementById('particles-canvas');
  ctx = canvas.getContext('2d');

  resizeCanvas();
  createParticles();
  animate();

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', handleMouseMove);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  for (let i = 0; i < config.particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
      size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      alpha: Math.random() * 0.5 + 0.3
    });
  }
}

function handleMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    const dx = mouseX - p.x;
    const dy = mouseY - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 200) {
      const force = (200 - dist) / 200 * 0.02;
      p.vx += dx / dist * force;
      p.vy += dy / dist * force;
    }

    p.x += p.vx;
    p.y += p.vy;

    p.vx *= 0.99;
    p.vy *= 0.99;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx2 = p.x - p2.x;
      const dy2 = p.y - p2.y;
      const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      if (dist2 < config.connectionDistance) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = (1 - dist2 / config.connectionDistance) * 0.15;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', initParticles);
