const mbtiQuestions = [
  {
    id: 1,
    dimension: "E/I",
    question: "在名爵一年一度的\"MG Live!\"大型车友狂欢节上，面对人声鼎沸的赛道日活动，你通常会如何参与？",
    options: [
      { label: "站在舞台中央或赛道起跑线前，与志同道合的车友热烈交流改装心得，享受人群的欢呼。", value: "E" },
      { label: "在看台角落或车内静静观察每一台车的线条，沉浸在机械美学中。", value: "I" }
    ]
  },
  {
    id: 2,
    dimension: "T/F",
    question: "在为你的 MG7 选择改装方案时，面对\"极致性能\"与\"潮流审美\"的冲突，你会如何抉择？",
    options: [
      { label: "查阅大量风阻系数数据和动力总成报告，选择能让 2.0T 引擎发挥最大效率的方案。", value: "T" },
      { label: "跟随自己的内心直觉，选择那款最能表达我独特个性和情感温度的涂装或内饰配色。", value: "F" }
    ]
  },
  {
    id: 3,
    dimension: "N/S",
    question: "当你第一次见到名爵 Cyberster 纯电跑车时，最先吸引你并让你决定是否喜欢它的因素是？",
    options: [
      { label: "它所代表的未来生活方式，以及名爵如何将百年跑车基因与电动智能化结合的宏大愿景。", value: "N" },
      { label: "它的剪刀门设计、软顶敞篷的触感以及 0-100km/h 加速 3.2 秒的实打实性能参数。", value: "S" }
    ]
  },
  {
    id: 4,
    dimension: "S/N",
    question: "名爵提倡\"Always Young\"，如果有人质疑你的选择过于叛逆或不实用，你会如何回应？",
    options: [
      { label: "用行动证明，在赛道上用更快的圈速或在街头用更高的回头率直接击碎对方的质疑。", value: "S" },
      { label: "内心坚定地认为平庸才是最大的危险，不屑于解释，继续按自己的步调打造梦想之车。", value: "N" }
    ]
  },
  {
    id: 5,
    dimension: "P/J",
    question: "准备驾驶名爵去一场跨城长途旅行前，你的准备工作通常是怎样的？",
    options: [
      { label: "只选定一个大概的方向，启动引擎，根据当下的路况和心情随意切换目的地，享受未知的冒险。", value: "P" },
      { label: "规划好每一段路线，精确计算充电站的位置，并确立好每一站的打卡时间节点。", value: "J" }
    ]
  },
  {
    id: 6,
    dimension: "T/F",
    question: "名爵的智能座舱提供了\"沉浸式电竞模式\"，在体验这种跨界黑科技时，你更在意什么？",
    options: [
      { label: "硬件的流畅度、界面的交互逻辑以及功能切换的响应速度是否符合直觉。", value: "T" },
      { label: "这种设计带来的氛围感、虚拟与现实边界模糊带来的精神快感以及它背后的潮流文化价值。", value: "F" }
    ]
  }
];

const mbtiResults = {
  "INTP": { 
    name: "数据骇客", 
    mbti: "INTP / ENTP",
    avatar: "https://origin.picgo.net/2026/06/25/data-hacker6171c9f600383519.png",
    slogan: "规则是用来重写的，极限是用来突破的。",
    description: "跃动海洋宇宙中的极客先锋。他们热衷于破解枯燥的日常通勤数据，能从拥堵的红绿灯和起停数据中发现隐藏的算法捷径，将无序的代码重组为高效的能源。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/1-3cfe078039de59d47.png",
        titleCN: "破译密钥",
        titleEN: "Key Cracking",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/1-22b87f6c7850a987d.png",
        titleCN: "虚拟逻辑主板",
        titleEN: "Virtual Logic Board",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/1-142d4f540d5237b0b.png",
        titleCN: "超频芯片",
        titleEN: "Overclocking Chipset",
        rarity: "C"
      }
    ]
  },
  "ISTJ": { 
    name: "动能雕刻师", 
    mbti: "ISTJ / ESTJ",
    avatar: "https://origin.picgo.net/2026/06/25/kinetic-sculptorf6c6c988cec33ef3.png",
    slogan: "每一焦耳的能量，都必须精准落位。",
    description: "跃动海洋宇宙中严谨的物理构造者。他们是秩序的化身，能够将汽车行驶时产生的狂暴物理动能，通过极其精密的手法，压缩、切割、打磨成稳定且高密度的能量模块。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/2-38fbb486b429992e6.png",
        titleCN: "高密度动能块",
        titleEN: "High-Density Kinetic Energy Block",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/2-211328de054cb2f5c.png",
        titleCN: "悬挂阻尼核心",
        titleEN: "Suspension Damping Core",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/2-1d8002ddefd96b24e.png",
        titleCN: "精密机械齿轮",
        titleEN: "Precision Mechanical Gearbox",
        rarity: "C"
      }
    ]
  },
  "INFP": { 
    name: "声浪调校员", 
    mbti: "INFP / ENFP",
    avatar: "https://origin.picgo.net/2026/06/25/sound-tunerd372b0c1cb64a178.png",
    slogan: "听见了吗？那是引擎在唱歌。",
    description: "跃动海洋宇宙中的艺术家与情绪捕手。他们对声音和震动极其敏感，能将内燃机的轰鸣、电机的高频电流声，甚至是风噪，转化为带有强烈情绪感染力的数字音轨。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/3-330dfa28ffe25faac.png",
        titleCN: "情感共鸣胶囊",
        titleEN: "Emotion Resonance Capsule",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/3-28fff108a03bdceec.png",
        titleCN: "声学放大阵列",
        titleEN: "Sound Amplifier Array",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/3-14cb8467f10df25dd.png",
        titleCN: "固化音轨",
        titleEN: "Fixed Sound Track",
        rarity: "C"
      }
    ]
  },
  "ISTP": { 
    name: "极速游侠", 
    mbti: "ISTP / ESTP",
    avatar: "https://origin.picgo.net/2026/06/25/speed-rangerbc55770f4236637c.png",
    slogan: "肾上腺素就是我们唯一的燃料。",
    description: "跃动海洋宇宙中追求极致推背感与离心力的发烧友。他们天生爱冒险，只有在急加速和极限过弯时才会感到兴奋。他们能从极端的G值中提取出最纯粹的爆发能量。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/4-305533ef8e82fd230.png",
        titleCN: "肾上腺素激活液",
        titleEN: "Adrenaline Activator",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/4-2bef256dec2c18450.png",
        titleCN: "空动尾翼模块",
        titleEN: "Active Tail Wing Module",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/4-109a594b65ed95bca.png",
        titleCN: "N₂加速瓶",
        titleEN: "N₂ Accelerator",
        rarity: "C"
      }
    ]
  },
  "INTJ": { 
    name: "星轨架构师", 
    mbti: "INTJ / ENTJ",
    avatar: "https://origin.picgo.net/2026/06/25/star-architect4e5efd034838696f.png",
    slogan: "出发之前，终点早已被我计算完毕。",
    description: "跃动海洋宇宙中极具前瞻性的宏观规划者。他们不关注当下的碎石，只注视远方的星图。他们擅长解析车辆的导航路径，将未来的行驶轨迹具象化为复杂的空间坐标产物。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/5-392c7dca4f5fe015a.png",
        titleCN: "空间跃迁信标",
        titleEN: "Space Migration Beacon",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/5-2e1947c7ad7d4cced.png",
        titleCN: "算力矩阵",
        titleEN: "Computational Matrix",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/5-1e28e0f3d2362d9e1.png",
        titleCN: "全息导航星图",
        titleEN: "Holographic Navigation Star Map",
        rarity: "C"
      }
    ]
  },
  "ISFP": { 
    name: "幻彩涂装师", 
    mbti: "ISFP / ESFP",
    avatar: "https://origin.picgo.net/2026/06/25/color-painter8311d369b9b890fe.png",
    slogan: "钢铁只有一种颜色，但钢铁之心不是。",
    description: "跃动海洋宇宙绝对的外观党与视觉动物。他们将沿途的霓虹灯、路灯的残影、甚至是天空的晚霞，收集并融合进喷漆罐中，致力于让整个跃动宇宙变得光怪陆离。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/6-33a07cd8156aaee6b.png",
        titleCN: "视网膜滤镜",
        titleEN: "Retinal Filter Glass",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/6-28d88762b34bd0343.png",
        titleCN: "全息痛车贴膜",
        titleEN: "Holographic Car Sticker",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/6-1921b1d3b2c9ffe7d.png",
        titleCN: "霓虹颜料罐",
        titleEN: "Neon Paint Can",
        rarity: "C"
      }
    ]
  },
  "ISFJ": { 
    name: "引力护航员", 
    mbti: "ISFJ / ESFJ",
    avatar: "https://origin.picgo.net/2026/06/25/gravity-guardian5007b1023de7bd45.png",
    slogan: "速度固然重要，但安全抵达才是一切的前提。",
    description: "跃动海洋宇宙的守护车机系统稳定运行之后盾。当极速游侠们在狂飙时，他们负责稳定跃动宇宙的引力场。他们能从平稳的刹车和安全的驾驶行为中汲取力量。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/7-32c45bab3a91a1b86.png",
        titleCN: "平稳立场结晶",
        titleEN: "Stable Positional Crystal",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/7-2701629c5f5d6864d.png",
        titleCN: "重力定位锚点",
        titleEN: "Gravity Location Anchor",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/7-112dc7a2c0538619c.png",
        titleCN: "护盾发生器",
        titleEN: "Guardian Shield Generator",
        rarity: "C"
      }
    ]
  },
  "INFJ": { 
    name: "心智共鸣者", 
    mbti: "INFJ / ENFJ",
    avatar: "https://origin.picgo.net/2026/06/25/mind-resonatord0d9a085583c7427.png",
    slogan: "人车合一才是跃动海洋宇宙的终极浪漫。",
    description: "跃动海洋宇宙连接物理人类与数字生命的精神桥梁。他们极具洞察力，能够感知车主心情状态，将车主的疲惫、兴奋或专注，转化为抚慰人心的数字神经链接。",
    outputs: [
      {
        image: "https://origin.picgo.net/2026/06/25/8-35eadf996a33465f8.png",
        titleCN: "灵魂波段发生器",
        titleEN: "Soul Wave Generator",
        rarity: "UR"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/8-275b8db37d5add89e.png",
        titleCN: "同理心结晶",
        titleEN: "Empathy Crystal",
        rarity: "R"
      },
      {
        image: "https://origin.picgo.net/2026/06/25/8-182ecd05cef60d21f.png",
        titleCN: "神经链接单元",
        titleEN: "Neural Link Unit",
        rarity: "C"
      }
    ]
  }
};

let currentQuestion = 0;
let answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let userResult = null;

function initMBTI() {
  renderQuestion();
  renderAllTypes();
}

function renderQuestion() {
  const questionCard = document.getElementById('mbti-question-card');
  const progressBar = document.getElementById('mbti-progress-bar');

  if (currentQuestion >= mbtiQuestions.length) {
    calculateResult();
    return;
  }

  const q = mbtiQuestions[currentQuestion];
  const progress = ((currentQuestion) / mbtiQuestions.length) * 100;

  progressBar.style.width = progress + '%';

  questionCard.innerHTML = `
    <div class="mbti-question-number">问题 ${currentQuestion + 1} / ${mbtiQuestions.length}</div>
    <div class="mbti-question">${q.question}</div>
    <div class="mbti-options">
      <div class="mbti-option" onclick="selectOption('${q.options[0].value}')">
        <span class="mbti-option-letter">A</span>${q.options[0].label}
      </div>
      <div class="mbti-option" onclick="selectOption('${q.options[1].value}')">
        <span class="mbti-option-letter">B</span>${q.options[1].label}
      </div>
    </div>
  `;
}

function selectOption(value) {
  answers[value]++;
  currentQuestion++;
  renderQuestion();
}

// 16种MBTI到8种职业的映射
const mbtiToCareer = {
  "INTP": "INTP",
  "ENTP": "INTP",
  "ISTJ": "ISTJ",
  "ESTJ": "ISTJ",
  "INFP": "INFP",
  "ENFP": "INFP",
  "ISTP": "ISTP",
  "ESTP": "ISTP",
  "INTJ": "INTJ",
  "ENTJ": "INTJ",
  "ISFP": "ISFP",
  "ESFP": "ISFP",
  "ISFJ": "ISFJ",
  "ESFJ": "ISFJ",
  "INFJ": "INFJ",
  "ENFJ": "INFJ"
};

function calculateResult() {
  const progressBar = document.getElementById('mbti-progress-bar');
  progressBar.style.width = '100%';

  // E/I 维度：第1题
  const ei = answers.E >= answers.I ? 'E' : 'I';

  // S/N 维度：第3、4题，次数多的为主导；各1次则为S
  let sn;
  if (answers.N > answers.S) {
    sn = 'N';
  } else {
    sn = 'S';
  }

  // T/F 维度：第2、6题，次数多的为主导；各1次则为T
  let tf;
  if (answers.F > answers.T) {
    tf = 'F';
  } else {
    tf = 'T';
  }

  // J/P 维度：第5题
  const jp = answers.J >= answers.P ? 'J' : 'P';

  const result = ei + sn + tf + jp;

  // 映射到8种职业类型
  const careerType = mbtiToCareer[result] || "INTJ";

  userResult = careerType;
  showResult(careerType);
  highlightResultType(careerType);
}

function showResult(type) {
  const questionCard = document.getElementById('mbti-question-card');
  const data = mbtiResults[type];

  questionCard.innerHTML = `
    <div class="result-header">
      <div class="result-info">
        <div class="result-name">${data.name}</div>
        <div class="result-type">${data.mbti}</div>
        <div class="result-slogan">"${data.slogan}"</div>
      </div>
      <div class="result-avatar">
        <img src="${data.avatar || 'https://origin.picgo.net/2026/06/25/kinetic-sculptorf6c6c988cec33ef3.png'}" alt="${data.name}">
      </div>
    </div>
    <button class="btn btn-outline" style="margin-top: 32px;" onclick="resetMBTI()">重新测试</button>
  `;
}

function renderAllTypes() {
  const grid = document.getElementById('all-types-grid');
  const careers = Object.entries(mbtiResults);
  grid.innerHTML = careers.map(([code, data]) => `
    <div class="type-item" data-type="${code}" onclick="showTypeInfo('${code}')">
      <div class="type-item-name">${data.name}</div>
      <div class="type-item-mbti">${data.mbti}</div>
      <div class="type-item-slogan">${data.slogan}</div>
    </div>
  `).join('');
}

function showTypeInfo(type) {
  const data = mbtiResults[type];
  const resultCard = document.getElementById('result-display');
  
  resultCard.innerHTML = `
    <div class="result-header">
      <div class="result-info">
        <div class="result-name">${data.name}</div>
        <div class="result-type">${data.mbti}</div>
        <div class="result-slogan">"${data.slogan}"</div>
      </div>
      <div class="result-avatar">
        <img src="${data.avatar || 'https://origin.picgo.net/2026/06/25/kinetic-sculptorf6c6c988cec33ef3.png'}" alt="${data.name}">
      </div>
    </div>
    <div class="result-description">${data.description}</div>
    <div class="result-outputs">
      <h4 class="outputs-title">工作产出倾向</h4>
      <div class="outputs-grid">
        ${data.outputs.map(output => `
          <div class="output-item">
            <div class="output-image">
              <img src="${output.image}" alt="${output.titleCN}">
              <span class="output-rarity rarity-${output.rarity}">${output.rarity}</span>
            </div>
            <div class="output-info">
              <div class="output-title-cn">${output.titleCN}</div>
              <div class="output-title-en">${output.titleEN}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.type-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.type === type) {
      item.classList.add('active');
    }
  });
}

function highlightResultType(type) {
  document.querySelectorAll('.type-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.type === type) {
      item.classList.add('active');
    }
  });

  const resultDisplay = document.getElementById('result-display');
  const data = mbtiResults[type];
  resultDisplay.innerHTML = `
    <div class="result-header">
      <div class="result-info">
        <div class="result-name">${data.name}</div>
        <div class="result-type">${data.mbti}</div>
        <div class="result-slogan">"${data.slogan}"</div>
      </div>
      <div class="result-avatar">
        <img src="${data.avatar || 'https://origin.picgo.net/2026/06/25/kinetic-sculptorf6c6c988cec33ef3.png'}" alt="${data.name}">
      </div>
    </div>
    <div class="result-description">${data.description}</div>
    <div class="result-outputs">
      <h4 class="outputs-title">工作产出倾向</h4>
      <div class="outputs-grid">
        ${data.outputs.map(output => `
          <div class="output-item">
            <div class="output-image">
              <img src="${output.image}" alt="${output.titleCN}">
              <span class="output-rarity rarity-${output.rarity}">${output.rarity}</span>
            </div>
            <div class="output-info">
              <div class="output-title-cn">${output.titleCN}</div>
              <div class="output-title-en">${output.titleEN}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function resetMBTI() {
  currentQuestion = 0;
  answers = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  userResult = null;
  renderQuestion();
  document.querySelectorAll('.type-item').forEach(item => {
    item.classList.remove('active');
  });
}

document.addEventListener('DOMContentLoaded', initMBTI);
