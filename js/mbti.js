const mbtiQuestions = [
  {
    id: 1,
    dimension: "E/I",
    question: "在周末，你更倾向于...",
    options: [
      { label: "参加聚会，和朋友们一起热闹", value: "E" },
      { label: "独自在家，享受安静时光", value: "I" }
    ]
  },
  {
    id: 2,
    dimension: "S/N",
    question: "面对新问题时，你更相信...",
    options: [
      { label: "过去的经验和实际数据", value: "S" },
      { label: "直觉和未来的可能性", value: "N" }
    ]
  },
  {
    id: 3,
    dimension: "T/F",
    question: "做决定时，你更看重...",
    options: [
      { label: "逻辑分析和客观事实", value: "T" },
      { label: "他人感受和人际关系", value: "F" }
    ]
  },
  {
    id: 4,
    dimension: "J/P",
    question: "安排日程时，你更喜欢...",
    options: [
      { label: "提前规划，按计划执行", value: "J" },
      { label: "灵活应变，保持开放", value: "P" }
    ]
  },
  {
    id: 5,
    dimension: "E/I",
    question: "在团队中，你通常是...",
    options: [
      { label: "主动发言，带动气氛的人", value: "E" },
      { label: "倾听思考，默默支持的人", value: "I" }
    ]
  },
  {
    id: 6,
    dimension: "S/N",
    question: "描述一件事时，你倾向于...",
    options: [
      { label: "具体细节，按事实讲述", value: "S" },
      { label: "整体印象，用比喻表达", value: "N" }
    ]
  }
];

// 8种职业数据
const mbtiResults = {
  "INTJ": { 
    name: "战略指挥官", 
    mbti: "INTJ",
    avatar: "assets/images/careers/strategic-commander.png",
    slogan: "一切皆在计划之中",
    description: "富有想象力和战略性思维的思想家，擅长制定长期规划并推动目标实现。",
    traits: ["战略思维", "独立自主", "高标准"],
    outputs: [
      {
        image: "assets/images/outputs/strategic-1.png",
        titleCN: "战略蓝图",
        titleEN: "Strategic Blueprint",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/strategic-2.png",
        titleCN: "决策树图",
        titleEN: "Decision Tree",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/strategic-3.png",
        titleCN: "预测模型",
        titleEN: "Forecast Model",
        rarity: "R"
      }
    ]
  },
  "ENFP": { 
    name: "创意策划师", 
    mbti: "ENFP",
    avatar: "assets/images/careers/creative-planner.png",
    slogan: "灵感点燃无限可能",
    description: "热情、有创造力的策划者，总能带来新颖的想法和解决方案。",
    traits: ["热情", "创造力", "乐观"],
    outputs: [
      {
        image: "assets/images/outputs/creative-1.png",
        titleCN: "创意提案",
        titleEN: "Creative Proposal",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/creative-2.png",
        titleCN: "头脑风暴",
        titleEN: "Brainstorming",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/creative-3.png",
        titleCN: "灵感收集",
        titleEN: "Inspiration Board",
        rarity: "R"
      }
    ]
  },
  "INFJ": { 
    name: "心灵导师", 
    mbti: "INFJ",
    avatar: "assets/images/careers/soul-guide.png",
    slogan: "洞察人心的灯塔",
    description: "安静而神秘，富有洞察力的导师，能够理解他人的深层需求。",
    traits: ["洞察力", "理想主义", "有原则"],
    outputs: [
      {
        image: "assets/images/outputs/soul-1.png",
        titleCN: "心灵对话",
        titleEN: "Soul Dialogue",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/soul-2.png",
        titleCN: "情感分析",
        titleEN: "Emotional Analysis",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/soul-3.png",
        titleCN: "成长路径",
        titleEN: "Growth Path",
        rarity: "R"
      }
    ]
  },
  "INTP": { 
    name: "逻辑架构师", 
    mbti: "INTP",
    avatar: "assets/images/careers/logic-architect.png",
    slogan: "构建完美的逻辑世界",
    description: "具有创造力的发明家，对知识有着永无止境的渴望，擅长构建复杂系统。",
    traits: ["分析能力", "创新思维", "客观理性"],
    outputs: [
      {
        image: "assets/images/outputs/logic-1.png",
        titleCN: "系统架构",
        titleEN: "System Architecture",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/logic-2.png",
        titleCN: "算法设计",
        titleEN: "Algorithm Design",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/logic-3.png",
        titleCN: "流程优化",
        titleEN: "Process Optimization",
        rarity: "R"
      }
    ]
  },
  "ENTJ": { 
    name: "变革领导者", 
    mbti: "ENTJ",
    avatar: "assets/images/careers/change-leader.png",
    slogan: "引领变革的先锋",
    description: "大胆、富有想象力且意志坚强的领导者，总能找到或创造解决办法。",
    traits: ["领导力", "果断", "战略眼光"],
    outputs: [
      {
        image: "assets/images/outputs/leader-1.png",
        titleCN: "变革蓝图",
        titleEN: "Transformation Blueprint",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/leader-2.png",
        titleCN: "团队规划",
        titleEN: "Team Planning",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/leader-3.png",
        titleCN: "目标分解",
        titleEN: "Goal Decomposition",
        rarity: "R"
      }
    ]
  },
  "ESFP": { 
    name: "舞台表演者", 
    mbti: "ESFP",
    avatar: "assets/images/careers/stage-performer.png",
    slogan: "让世界为你喝彩",
    description: "自发的、精力充沛的表演者，生活永远不会在他们身边感到无聊。",
    traits: ["热情", "乐观", "表演天赋"],
    outputs: [
      {
        image: "assets/images/outputs/stage-1.png",
        titleCN: "表演策划",
        titleEN: "Performance Plan",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/stage-2.png",
        titleCN: "舞台设计",
        titleEN: "Stage Design",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/stage-3.png",
        titleCN: "观众互动",
        titleEN: "Audience Interaction",
        rarity: "R"
      }
    ]
  },
  "ISFJ": { 
    name: "守护天使", 
    mbti: "ISFJ",
    avatar: "assets/images/careers/guardian-angel.png",
    slogan: "默默守护，温情相伴",
    description: "非常专注且温暖的守护者，时刻准备着保护爱着的人。",
    traits: ["忠诚", "体贴", "可靠"],
    outputs: [
      {
        image: "assets/images/outputs/guardian-1.png",
        titleCN: "关怀计划",
        titleEN: "Care Plan",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/guardian-2.png",
        titleCN: "支持方案",
        titleEN: "Support Scheme",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/guardian-3.png",
        titleCN: "日常守护",
        titleEN: "Daily Guardian",
        rarity: "R"
      }
    ]
  },
  "ESTP": { 
    name: "冒险先锋", 
    mbti: "ESTP",
    avatar: "assets/images/careers/adventure-pioneer.png",
    slogan: "在冒险中寻找真相",
    description: "聪明、精力充沛且善于感知的人，真心享受冒险的生活。",
    traits: ["行动力", "敏锐", "魅力"],
    outputs: [
      {
        image: "assets/images/outputs/adventure-1.png",
        titleCN: "冒险策划",
        titleEN: "Adventure Plan",
        rarity: "SSR"
      },
      {
        image: "assets/images/outputs/adventure-2.png",
        titleCN: "危机应对",
        titleEN: "Crisis Response",
        rarity: "SR"
      },
      {
        image: "assets/images/outputs/adventure-3.png",
        titleCN: "实时侦察",
        titleEN: "Real-time Recon",
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

function calculateResult() {
  const progressBar = document.getElementById('mbti-progress-bar');
  progressBar.style.width = '100%';

  let result = '';
  result += answers.E >= answers.I ? 'E' : 'I';
  result += answers.S >= answers.N ? 'S' : 'N';
  result += answers.T >= answers.F ? 'T' : 'F';
  result += answers.J >= answers.P ? 'J' : 'P';

  userResult = result;
  showResult(result);
  highlightResultType(result);
}

function showResult(type) {
  const questionCard = document.getElementById('mbti-question-card');
  const data = mbtiResults[type];

  questionCard.innerHTML = `
    <div class="result-header">
      <div class="result-info">
        <div class="result-type">${data.mbti}</div>
        <div class="result-name">${data.name}</div>
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
      <div class="type-item-mbti">${data.mbti}</div>
      <div class="type-item-name">${data.name}</div>
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
        <div class="result-type">${data.mbti}</div>
        <div class="result-name">${data.name}</div>
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
        <div class="result-type">${data.mbti}</div>
        <div class="result-name">${data.name}</div>
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
