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

const mbtiResults = {
  "INTJ": { name: "建筑师", description: "富有想象力和战略性思维的思想家，一切皆在计划之中。", traits: ["战略思维", "独立自主", "高标准"] },
  "INTP": { name: "逻辑学家", description: "具有创造力的发明家，对知识有着永无止境的渴望。", traits: ["分析能力", "创新思维", "客观理性"] },
  "ENTJ": { name: "指挥官", description: "大胆、富有想象力且意志坚强的领导者，总能找到或创造解决办法。", traits: ["领导力", "果断", "战略眼光"] },
  "ENTP": { name: "辩论家", description: "聪明好奇的思想家，不会放过任何智力挑战。", traits: ["机智", "创新", "辩才"] },
  "INFJ": { name: "提倡者", description: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者。", traits: ["洞察力", "理想主义", "有原则"] },
  "INFP": { name: "调停者", description: "诗意、善良的利他主义者，总是热情地为正当理由提供帮助。", traits: ["共情", "创造力", "理想主义"] },
  "ENFJ": { name: "主人公", description: "富有魅力且鼓舞人心的领导者，有使听众着迷的能力。", traits: ["魅力", "感染力", "利他"] },
  "ENFP": { name: "竞选者", description: "热情、有创造力、社交自由的人，总能找到微笑的理由。", traits: ["热情", "创造力", "乐观"] },
  "ISTJ": { name: "物流师", description: "实际且注重事实的个人，可靠性不容怀疑。", traits: ["可靠", "负责", "务实"] },
  "ISFJ": { name: "守卫者", description: "非常专注且温暖的守护者，时刻准备着保护爱着的人。", traits: ["忠诚", "体贴", "可靠"] },
  "ESTJ": { name: "总经理", description: "出色的管理者，在管理事情或人方面无与伦比。", traits: ["组织能力", "务实", "果断"] },
  "ESFJ": { name: "执政官", description: "极有同情心、爱社交的人，总是热心帮助别人。", traits: ["热心", "社交", "忠诚"] },
  "ISTP": { name: "鉴赏家", description: "大胆而实际的实验家，擅长使用各种工具。", traits: ["动手能力", "冷静", "灵活"] },
  "ISFP": { name: "探险家", description: "灵活有魅力的艺术家，时刻准备探索新事物。", traits: ["艺术感", "温和", "适应性强"] },
  "ESTP": { name: "企业家", description: "聪明、精力充沛且善于感知的人，真心享受冒险的生活。", traits: ["行动力", "敏锐", "魅力"] },
  "ESFP": { name: "表演者", description: "自发的、精力充沛的表演者，生活永远不会在他们身边感到无聊。", traits: ["热情", "乐观", "表演天赋"] }
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
    <div class="result-type">${type}</div>
    <div class="result-name">${data.name}</div>
    <div class="result-description">${data.description}</div>
    <div class="result-traits">
      ${data.traits.map(t => `<span class="result-trait">${t}</span>`).join('')}
    </div>
    <button class="btn btn-outline" style="margin-top: 32px;" onclick="resetMBTI()">重新测试</button>
  `;
}

function renderAllTypes() {
  const grid = document.getElementById('all-types-grid');
  grid.innerHTML = Object.entries(mbtiResults).map(([code, data]) => `
    <div class="type-item" data-type="${code}" onclick="showTypeInfo('${code}')">
      <div class="type-item-code">${code}</div>
      <div class="type-item-name">${data.name}</div>
    </div>
  `).join('');
}

function showTypeInfo(type) {
  const data = mbtiResults[type];
  const resultCard = document.getElementById('result-display');
  
  resultCard.innerHTML = `
    <div class="result-type">${type}</div>
    <div class="result-name">${data.name}</div>
    <div class="result-description">${data.description}</div>
    <div class="result-traits">
      ${data.traits.map(t => `<span class="result-trait">${t}</span>`).join('')}
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
    <div class="result-type">${type}</div>
    <div class="result-name">${data.name}</div>
    <div class="result-description">${data.description}</div>
    <div class="result-traits">
      ${data.traits.map(t => `<span class="result-trait">${t}</span>`).join('')}
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
