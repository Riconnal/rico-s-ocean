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
    avatar: "assets/images/careers/data-hacker.png",
    slogan: "代码即力量，数据即信仰",
    description: "对汽车电子系统有着近乎偏执的钻研精神，擅长用代码改写车辆的底层逻辑。在他们眼中，每一个ECU参数都是可以优化的变量，每一行代码都能释放隐藏的性能。",
    outputs: [
      {
        image: "assets/images/outputs/hacker-1.png",
        titleCN: "ECU 重写",
        titleEN: "ECU Rewrite",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/hacker-2.png",
        titleCN: "数据可视化",
        titleEN: "Data Visualization",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/hacker-3.png",
        titleCN: "漏洞挖掘",
        titleEN: "Bug Hunting",
        rarity: "R"
      }
    ]
  },
  "ISTJ": { 
    name: "动能雕刻师", 
    mbti: "ISTJ / ESTJ",
    avatar: "assets/images/careers/kinetic-sculptor.png",
    slogan: "每一匹马力都有其归宿",
    description: "严谨务实的动力调校专家，坚信数据是不会说谎的。他们像雕刻家一样，精确地打磨每一个动力输出曲线，让引擎的每一滴燃油都转化为最纯粹的推进力。",
    outputs: [
      {
        image: "assets/images/outputs/sculptor-1.png",
        titleCN: "动力蓝图",
        titleEN: "Power Blueprint",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/sculptor-2.png",
        titleCN: "曲线调校",
        titleEN: "Curve Tuning",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/sculptor-3.png",
        titleCN: "工况分析",
        titleEN: "Condition Analysis",
        rarity: "R"
      }
    ]
  },
  "INFP": { 
    name: "声浪调校员", 
    mbti: "INFP / ENFP",
    avatar: "assets/images/careers/sound-tuner.png",
    slogan: "让引擎唱出灵魂的旋律",
    description: "用耳朵和心灵去调校排气声浪的艺术家。他们相信每一辆车都有自己独特的嗓音，而他们的使命就是找到那最能触动人心的频率，让驾驶成为一场听觉的盛宴。",
    outputs: [
      {
        image: "assets/images/outputs/sound-1.png",
        titleCN: "声浪图谱",
        titleEN: "Sound Spectrum",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/sound-2.png",
        titleCN: "共鸣设计",
        titleEN: "Resonance Design",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/sound-3.png",
        titleCN: "情感频率",
        titleEN: "Emotion Frequency",
        rarity: "R"
      }
    ]
  },
  "ISTP": { 
    name: "极速游侠", 
    mbti: "ISTP / ESTP",
    avatar: "assets/images/careers/speed-ranger.png",
    slogan: "风的方向，就是我的方向",
    description: "天生的驾驭者，对车辆的操控有着近乎直觉的感知。他们享受在极限边缘游走的刺激，每一次入弯、每一次换挡都是与机械的深度对话。",
    outputs: [
      {
        image: "assets/images/outputs/ranger-1.png",
        titleCN: "赛道蓝图",
        titleEN: "Track Blueprint",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/ranger-2.png",
        titleCN: "走线规划",
        titleEN: "Racing Line",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/ranger-3.png",
        titleCN: "极限测试",
        titleEN: "Limit Test",
        rarity: "R"
      }
    ]
  },
  "INTJ": { 
    name: "星轨架构师", 
    mbti: "INTJ / ENTJ",
    avatar: "assets/images/careers/star-architect.png",
    slogan: "在蓝图之上，构建未来",
    description: "具有宏大视野的战略家，擅长从全局出发规划车辆的整体架构。他们不满足于局部的优化，而是要打造一台从设计理念到工程实现都完美统一的终极座驾。",
    outputs: [
      {
        image: "assets/images/outputs/architect-1.png",
        titleCN: "整车架构",
        titleEN: "Vehicle Architecture",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/architect-2.png",
        titleCN: "战略规划",
        titleEN: "Strategic Plan",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/architect-3.png",
        titleCN: "系统整合",
        titleEN: "System Integration",
        rarity: "R"
      }
    ]
  },
  "ISFP": { 
    name: "幻彩涂装师", 
    mbti: "ISFP / ESFP",
    avatar: "assets/images/careers/color-painter.png",
    slogan: "让车身成为流动的画布",
    description: "用色彩和质感赋予车辆独特灵魂的艺术家。他们对美学有着敏锐的直觉，每一道涂装、每一处细节都经过精心打磨，让车辆不仅仅是交通工具，更是一件移动的艺术品。",
    outputs: [
      {
        image: "assets/images/outputs/painter-1.png",
        titleCN: "色彩方案",
        titleEN: "Color Scheme",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/painter-2.png",
        titleCN: "质感设计",
        titleEN: "Texture Design",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/painter-3.png",
        titleCN: "光影呈现",
        titleEN: "Light & Shadow",
        rarity: "R"
      }
    ]
  },
  "ISFJ": { 
    name: "引力护航员", 
    mbti: "ISFJ / ESFJ",
    avatar: "assets/images/careers/gravity-guardian.png",
    slogan: "你的每一次出发，都有我守护",
    description: "默默守护着车辆安全与性能的可靠伙伴。他们细致入微地检查每一个螺丝、每一条管线，确保每一次出发都能平安归来，是车队中最值得信赖的后盾。",
    outputs: [
      {
        image: "assets/images/outputs/guardian-1.png",
        titleCN: "安全矩阵",
        titleEN: "Safety Matrix",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/guardian-2.png",
        titleCN: "维护方案",
        titleEN: "Maintenance Plan",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/guardian-3.png",
        titleCN: "应急响应",
        titleEN: "Emergency Response",
        rarity: "R"
      }
    ]
  },
  "INFJ": { 
    name: "心智共鸣者", 
    mbti: "INFJ / ENFJ",
    avatar: "assets/images/careers/mind-resonator.png",
    slogan: "读懂车，更懂你",
    description: "能够洞察人车之间深层联结的心灵导师。他们相信车辆不仅仅是冰冷的机械，而是有灵魂的伙伴。他们的使命是帮助每一位驾驶者找到与自己车辆最完美的共鸣方式。",
    outputs: [
      {
        image: "assets/images/outputs/resonator-1.png",
        titleCN: "人车共鸣",
        titleEN: "Human-Car Resonance",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/resonator-2.png",
        titleCN: "驾驶心理",
        titleEN: "Driving Psychology",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/resonator-3.png",
        titleCN: "情感联结",
        titleEN: "Emotional Bond",
        rarity: "R"
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
        <img src="${data.avatar || 'assets/images/default-avatar.png'}" alt="${data.name}">
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
        <img src="${data.avatar || 'assets/images/default-avatar.png'}" alt="${data.name}">
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
        <img src="${data.avatar || 'assets/images/default-avatar.png'}" alt="${data.name}">
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
