const visitorKey = "zhiwo_visitor_id";
const sessionKey = "zhiwo_current_result";

const timeThemes = [
  {
    id: "water-wood",
    name: "水木意象",
    label: "流动与生长",
    keywords: "流动 · 生长 · 感知 · 连接",
    reading:
      "你可能更容易感知环境和关系中的变化，也更需要通过清晰的节奏和边界来稳定自己。完整报告会进一步展开你的内在模式、关系倾向和适合你的行动方式。"
  },
  {
    id: "wood-fire",
    name: "木火意象",
    label: "表达与展开",
    keywords: "生发 · 表达 · 热情 · 创造",
    reading:
      "你可能对新鲜事物和自我表达更敏感，也容易在热情启动后被节奏消耗。完整报告会帮助你看见行动动力和稳定持续之间的关系。"
  },
  {
    id: "earth-metal",
    name: "土金意象",
    label: "秩序与承载",
    keywords: "稳定 · 边界 · 秩序 · 判断",
    reading:
      "你可能更在意安全感、结构和可控性，也容易在责任与自我需要之间拉扯。完整报告会帮助你梳理压力来源和更适合自己的决策方式。"
  },
  {
    id: "metal-water",
    name: "金水意象",
    label: "洞察与沉静",
    keywords: "洞察 · 冷静 · 边界 · 深度",
    reading:
      "你可能习惯先观察再行动，对关系和环境中的细节很敏感。完整报告会进一步拆解你的思考模式、情绪保护方式和近期关注方向。"
  }
];

const profiles = {
  "clear-boundary": {
    id: "clear-boundary",
    name: "清醒边界型",
    label: "洞察与边界",
    themeName: "金水意象",
    keywords: ["判断", "边界", "复盘", "深度"],
    summary:
      "你不是软弱随波逐流型。你的底层有很强的判断、边界、审美和自尊，也很擅长把混乱的问题重新整理出结构。",
    coreTension:
      "你常常想得很清楚，但行动会慢于理解。真正消耗你的不是事情本身，而是长期处在粗糙、含糊或不尊重边界的环境里。",
    strength:
      "你适合做“把混乱变清楚”的事：内容策略、产品定位、用户洞察、咨询、品牌和自我认知类产品。",
    blindSpot:
      "你真正要修的不是能力，而是停止把所有事都想明白之后才开始。"
  },
  "soft-supported": {
    id: "soft-supported",
    name: "柔性承托型",
    label: "感受与承托",
    themeName: "水木意象",
    keywords: ["感受", "顺势", "关系", "安定"],
    summary:
      "你不是没有感受，而是太容易先感受到别人，也容易被环境牵动。关系、氛围和评价会明显影响你的状态，你常常先照顾外界，再回头才发现自己真正想要什么。",
    coreTension:
      "你需要被托住，但也需要慢慢长出自己的判断。越是强势、混乱或评价感很重的环境，越容易让你失去节奏。",
    strength:
      "你适合在清晰、温和、有支持感的结构里稳定发挥。有人把步骤拆清楚，你会更容易进入状态。",
    blindSpot:
      "你容易把稳定误认为安全，把委屈误认为懂事。完整版会重点帮你拆出边界和真实需求。"
  },
  "responsible-pressure": {
    id: "responsible-pressure",
    name: "责任推进型",
    label: "秩序与压力",
    themeName: "土金意象",
    keywords: ["责任", "秩序", "稳定", "承担"],
    summary:
      "你不是不累，只是太习惯先处理问题，再处理自己。你的现实感、责任感和风险意识都很强，常常会本能地把事情扛起来。",
    coreTension:
      "你很能承担，但也容易被责任推着走。真正需要调整的不是能力，而是哪些事情必须由你负责，哪些事情可以放回它原来的位置。",
    strength:
      "你适合建立流程、管理资源、推进长期目标。只要压力不过载，你的稳定性会形成很强的信任感。",
    blindSpot:
      "你容易把安全感全部压在结果上。完整版会帮你区分必要责任和过度兜底。"
  },
  "value-growth": {
    id: "value-growth",
    name: "价值生长型",
    label: "生发与兑现",
    themeName: "木火意象",
    keywords: ["生长", "表达", "价值", "方向"],
    summary:
      "你不是单纯追求热闹的人。你真正想要的是一条能把能力、兴趣和现实结果连起来的路；没有意义、没有成长、没有反馈的事会很快消耗你。",
    coreTension:
      "你一边想要自由展开，一边又需要确认这条路真的值得。方向不清楚时，你会被很多可能性消耗。",
    strength:
      "你适合做能表达观点、创造内容、连接资源或把想法变成产品的事情。",
    blindSpot:
      "你需要避免只追求新鲜感。完整版会帮你把灵感收束成可执行的阶段计划。"
  }
};

const profileSections = {
  "clear-boundary": [
    {
      title: "整体判断",
      body:
        "你不是容易被环境带走的人。你虽然敏感，但不软弱；虽然想很多，但不是空想。你真正的特点是清醒、有判断、有边界，能看见细节，也能看见别人没说出口的东西。"
    },
    {
      title: "你的优势",
      body:
        "你适合靠认知、审美和结构化能力发展。越是复杂、模糊、需要重新定义的问题，越能体现你的价值。你能把混乱变清楚，也能把感受整理成方法。"
    },
    {
      title: "需要注意",
      body:
        "你的问题不是看不懂，而是太想看透。不要等所有事都想明白再行动；先做一次小验证。关系里也要少解释，多守边界。"
    }
  ],
  "soft-supported": [
    {
      title: "整体判断",
      body:
        "你不是没有主见，而是太容易被环境、关系和评价牵动。你会先看别人是否满意，再慢慢意识到自己其实并不轻松。"
    },
    {
      title: "你的优势",
      body:
        "你的感受力很强，也更容易理解别人。你适合在清晰、稳定、有支持感的结构里发挥；有人把步骤拆清楚，你会更容易进入状态。"
    },
    {
      title: "需要注意",
      body:
        "不要把委屈误认为懂事，也不要把稳定误认为安全。你需要先确认自己真正想要什么，再决定要不要配合别人。"
    }
  ],
  "responsible-pressure": [
    {
      title: "整体判断",
      body:
        "你不是没有情绪，而是太习惯承担。你会先解决问题，再处理自己；久了以后，压力会变成一种默认状态。"
    },
    {
      title: "你的优势",
      body:
        "你现实感强、责任感强，对钱、秩序、稳定和长期安全感都很敏感。你适合建立流程、管理资源、推进长期目标。"
    },
    {
      title: "需要注意",
      body:
        "你的关键不是再多扛一点，而是分清哪些事真的属于你，哪些事应该放回它原来的位置。"
    }
  ],
  "value-growth": [
    {
      title: "整体判断",
      body:
        "你不是单纯不安分，而是很难长期待在没有价值感的地方。你需要一条能让能力、兴趣和结果互相连接的路径。"
    },
    {
      title: "你的优势",
      body:
        "你对机会、表达、回报和成长都很敏感。方向对了，你会很快被点燃；你适合做能表达观点、创造内容、连接资源或把想法变成产品的事。"
    },
    {
      title: "需要注意",
      body:
        "你的关键不是追更多可能性，而是收束出一条可以连续推进的路线。不要只被新鲜感点燃，要让灵感落到结果。"
    }
  ]
};

const previewDisplayCopy = {
  "clear-boundary": {
    strengths: ["判断准", "有审美", "有标准", "能复盘", "能看出风险", "不容易被随便带偏"],
    attention: ["容易想太多", "行动慢于理解", "对人和事要求高", "安全感不容易满足", "不舒服时容易冷处理", "有时会困在分析里"],
    quote: "你不是软弱的人。你内心其实有自己的判断，只是不一定马上说出来。",
    state: {
      name: "紧绷但清醒",
      summary: "你正处于高负荷运转中，保持清醒，但身心处于紧绷状态。",
      signals: ["想确认方向是对的", "容易反复权衡", "对模糊关系更敏感", "需要更清晰的反馈"],
      drain: "不是事情本身，而是长期处在粗糙、混乱、边界不清的环境里。",
      action: "先做一次小验证，不要等所有事都想明白。"
    }
  },
  "soft-supported": {
    strengths: ["感受细腻", "共情力强", "能照顾关系", "对氛围敏感", "适合稳定协作", "容易建立信任"],
    attention: ["容易受评价影响", "怕冲突", "先照顾别人", "不容易表达真实需求", "容易把委屈当懂事", "需要明确支持"],
    quote: "你不是没有主见，只是太容易先感受到别人。真正重要的是慢慢把自己的声音放回中心。",
    state: {
      name: "敏感但想稳定",
      summary: "你最近更容易被关系、评价和环境气氛牵动，需要一个清晰稳定的支点。",
      signals: ["容易先看别人反应", "对语气和态度更敏感", "想保持稳定", "需要被明确回应"],
      drain: "真正消耗你的不是选择本身，而是不确定的回应和需要反复猜测的关系氛围。",
      action: "先写下自己的真实需要，再决定要不要配合别人。"
    }
  },
  "responsible-pressure": {
    strengths: ["责任感强", "现实感强", "能推进事情", "重视秩序", "抗压能力强", "适合管理资源"],
    attention: ["容易硬扛", "把结果看太重", "不容易求助", "休息时也紧绷", "容易过度兜底", "安全感压在结果上"],
    quote: "你不是不累，只是太习惯先解决问题。你需要把不属于自己的责任放回原位。",
    state: {
      name: "高压但能撑住",
      summary: "你最近更像是在用责任感推动自己，能做事，但身体和情绪已经在提醒你减负。",
      signals: ["很多事想自己扛", "对结果更紧张", "休息也不踏实", "容易反复确认风险"],
      drain: "真正消耗你的不是任务数量，而是你默认所有事最后都要由自己兜底。",
      action: "先划出一件可以不由你负责到底的事，把边界说清。"
    }
  },
  "value-growth": {
    strengths: ["有表达欲", "对机会敏感", "能连接资源", "重视成长", "容易被价值点燃", "适合创造内容"],
    attention: ["容易分散", "追新鲜感", "方向不清时消耗大", "反馈少会失速", "想法多于沉淀", "需要持续路径"],
    quote: "你不是单纯不安分，而是需要一条能让兴趣、能力和现实结果连接起来的路。",
    state: {
      name: "想展开但未收束",
      summary: "你最近更容易被很多可能性吸引，但真正需要的是把一个方向落到可验证的小结果。",
      signals: ["想尝试新方向", "需要价值反馈", "容易同时想很多事", "不想待在无意义感里"],
      drain: "真正消耗你的不是没有机会，而是机会太多却还没有形成连续推进的路线。",
      action: "先选一个最小切口，做出一次能收到反馈的交付。"
    }
  }
};

const answerScores = {
  decisionPattern: {
    "clear-but-overthink": { "clear-boundary": 3, "value-growth": 1 },
    "external-expectation": { "soft-supported": 3 },
    "unclear-self": { "soft-supported": 4 },
    "acts-first": { "value-growth": 3, "responsible-pressure": 1 },
    "compare-and-delay": { "clear-boundary": 1, "responsible-pressure": 2 }
  },
  relationshipPattern: {
    "needs-boundary": { "clear-boundary": 3 },
    "avoid-conflict": { "soft-supported": 3 },
    "quiet-sensitive": { "clear-boundary": 2, "soft-supported": 1 },
    "drawn-by-strong": { "soft-supported": 3 },
    "over-responsible": { "responsible-pressure": 3 }
  },
  realizationPattern: {
    "understands-before-acts": { "clear-boundary": 3 },
    "needs-structure": { "soft-supported": 3 },
    "value-sensitive": { "value-growth": 3 },
    "responsibility-heavy": { "responsible-pressure": 3 },
    "searching-own-way": { "value-growth": 2, "clear-boundary": 1 }
  }
};

const timeOrder = ["zi", "chou", "yin", "mao", "chen", "si", "wu", "wei", "shen", "you", "xu", "hai"];

const strategyBiasProfiles = ["clear-boundary", "soft-supported", "responsible-pressure", "value-growth"];

const frictionSignals = [
  {
    id: "delayed-action",
    adjustment: "理解很快，但真正启动会慢一拍，需要把目标拆成更小的验证动作。"
  },
  {
    id: "relationship-noise",
    adjustment: "外界评价和关系氛围会放大你的摇摆，需要先确认自己的真实标准。"
  },
  {
    id: "resource-pressure",
    adjustment: "你对稳定和回报很敏感，越焦虑越容易把所有责任揽到自己身上。"
  },
  {
    id: "expression-gap",
    adjustment: "你有表达和创造的冲动，但需要把灵感收束到可以连续推进的路径。"
  }
];

const birthPlaces = window.zhiwoBirthPlaces || {};

const fallbackCalibrationPlan = {
  confidence: "中",
  candidates: [],
  questions: [
    {
      field: "decisionPattern",
      title: "你更常卡在哪里？",
      options: [
        { value: "clear-but-overthink", label: "我有判断，但常常想清楚后才行动" },
        { value: "acts-first", label: "我需要确认这件事有价值，才会真正投入" },
        { value: "responsibility-first", label: "我会先把事情扛起来，做着做着才发现自己很累" }
      ]
    },
    {
      field: "relationshipPattern",
      title: "什么最容易消耗你？",
      options: [
        { value: "needs-boundary", label: "粗糙、混乱或不尊重边界的环境" },
        { value: "needs-expression-feedback", label: "长期没有成长感、反馈感和价值感" },
        { value: "over-responsible", label: "责任太多，很多事最后都落到我身上" }
      ]
    }
  ]
};

const fullReportCopy = {
  "clear-boundary": {
    oneLine: "你是一个以判断力、边界感和深度复盘为核心能力的人。",
    strengths: ["能在复杂信息里抓重点", "对关系边界和质量很敏感", "适合做需要洞察、审美、策略和结构化表达的事"],
    weaknesses: ["容易想得太深，行动慢于判断", "对粗糙环境容忍度低", "关系里容易解释过多、消耗过多"],
    careerCurrent: "当前阶段更适合把已有认知沉淀成稳定方法，不宜频繁换方向。你越能把复杂问题讲清楚，越容易形成个人价值。",
    careerNext: "下一阶段会更强调影响力和可复制能力，适合把经验产品化、内容化或咨询化。",
    careerCaution: "注意不要因为看见问题太多而迟迟不动，先用小项目验证，再做长期投入。",
    emotionalNeeds: "你需要被尊重、被认真对待，也需要关系里有清晰边界和稳定回应。",
    partnerPortrait: "适合成熟、稳定、愿意沟通、有边界感的人；不适合强控制、模糊承诺或情绪反复的人。",
    relationshipMode: "关系中你会先观察、再投入。真正稳定的模式是彼此坦诚，但不过度侵入对方节奏。",
    wealthPattern: "你的财富更适合来自认知、专业判断、内容策略、咨询服务和长期复利型能力。",
    financeCurrent: "当前阶段要少做情绪化投入，把现金流、定价和交付边界先立稳。",
    financeDirections: "适合知识产品、咨询、品牌策略、用户洞察、内容资产和长期可复用的方法论。",
    financeCaution: "避免把安全感全部放在一个结果上，也不要为了确定性放弃高质量机会。",
    closing: "这个画像的核心是清醒、敏感、有判断。你的优势在于把复杂变清楚，但真正的突破来自更快验证、更少内耗，以及更坚定地守住边界。"
  },
  "soft-supported": {
    oneLine: "你是一个感受力强、需要稳定支持才能持续发挥的人。",
    strengths: ["很容易理解他人的情绪和需求", "适合在清晰流程中稳定输出", "能在关系和氛围里捕捉细节"],
    weaknesses: ["容易被评价和期待牵动", "怕冲突，容易先委屈自己", "独自承压时会变得迟疑"],
    careerCurrent: "当前阶段更适合进入有规则、有反馈、有支持的环境。不要急着证明自己强，而是先找到能托住你的结构。",
    careerNext: "下一阶段会更适合建立自己的判断和节奏，从配合别人逐渐转向主动选择。",
    careerCaution: "注意不要把稳定误认为适合，也不要因为害怕变化而留在消耗你的环境里。",
    emotionalNeeds: "你需要温和、稳定、可确认的回应，也需要对方尊重你的节奏。",
    partnerPortrait: "适合情绪稳定、有责任感、愿意给你空间的人；不适合忽冷忽热、强势压迫或只让你迁就的人。",
    relationshipMode: "关系中你容易先照顾对方。更好的模式是先说清自己的需要，再决定如何靠近。",
    wealthPattern: "你的财富更适合来自稳定协作、服务体验、审美表达、陪伴型产品和长期信任。",
    financeCurrent: "当前阶段适合先稳定收入和基本盘，不宜在压力下做大额冒险。",
    financeDirections: "适合服务、内容、社群、咨询助理、审美相关和需要细腻体验的方向。",
    financeCaution: "注意不要因为不好意思谈钱而低估自己的价值，定价和边界要提前说清。",
    closing: "这个画像的核心是感受、承托和稳定。你的成长不是变得强硬，而是建立自己的判断，在被支持的结构里慢慢长出主动性。"
  },
  "responsible-pressure": {
    oneLine: "你是一个现实感强、能承担、但容易压力过载的人。",
    strengths: ["责任感强，能推进长期目标", "重视秩序、安全和实际结果", "适合管理资源、流程和复杂事务"],
    weaknesses: ["容易把不属于自己的事也扛起来", "对结果过度紧绷", "休息时也很难真正放松"],
    careerCurrent: "当前阶段适合做结构搭建、资源整合和稳定推进。你的优势不是冲得快，而是能把事情做扎实。",
    careerNext: "下一阶段会更强调角色升级和资源调度，你需要从亲自承担转向建立机制。",
    careerCaution: "注意不要只靠硬扛解决问题，能授权、能定规则，才会真正释放能力。",
    emotionalNeeds: "你需要可靠、稳定、说到做到的关系，也需要对方理解你的压力来源。",
    partnerPortrait: "适合成熟务实、情绪稳定、能一起面对现实问题的人；不适合只索取、不负责或长期制造不确定的人。",
    relationshipMode: "关系中你容易进入照顾者角色。更健康的模式是共同承担，而不是你一个人兜底。",
    wealthPattern: "你的财富更适合来自稳定经营、管理能力、资源配置、流程优化和长期积累。",
    financeCurrent: "当前阶段适合稳住现金流、控制风险、优化投入产出，不宜为了短期回报透支自己。",
    financeDirections: "适合运营管理、项目推进、供应链、财务规划、长期资产和稳定服务型业务。",
    financeCaution: "注意别把钱变成唯一安全感，也别因为过度保守错过可以小步试错的机会。",
    closing: "这个画像的核心是责任、秩序和承载。你的能力在稳定推进中显现，但真正要升级的是边界、授权和长期节奏。"
  },
  "value-growth": {
    oneLine: "你是一个需要价值感、成长感和表达出口的人。",
    strengths: ["对机会和趋势反应快", "有表达、创造和连接资源的能力", "方向对时行动力会被快速点燃"],
    weaknesses: ["容易被太多可能性分散", "热情启动快，持续节奏需要管理", "不喜欢低反馈、低价值感的环境"],
    careerCurrent: "当前阶段适合把兴趣、能力和现实回报连起来。不要只看热不热爱，要看能不能持续形成结果。",
    careerNext: "下一阶段会更适合扩大表达面和商业化能力，把个人能力变成可售卖、可复用的产品或服务。",
    careerCaution: "注意不要频繁换赛道。先选一个能验证价值的切口，跑出反馈后再放大。",
    emotionalNeeds: "你需要被看见、被回应，也需要关系里保留成长空间和自由感。",
    partnerPortrait: "适合开放、积极、愿意共同成长的人；不适合长期打压、否定或只追求控制稳定的人。",
    relationshipMode: "关系中你需要热度，也需要空间。更好的模式是一起成长，而不是彼此消耗自由。",
    wealthPattern: "你的财富更适合来自表达、产品化、资源连接、内容商业化和创意转化。",
    financeCurrent: "当前阶段适合做轻量验证，把想法快速变成可收费的小产品或服务。",
    financeDirections: "适合内容产品、个人品牌、教育咨询、社群、创意服务和轻资产项目。",
    financeCaution: "注意控制投入，不要为新鲜感买单。所有投入都要对应明确反馈。",
    closing: "这个画像的核心是生长、表达和兑现。你需要一条能把热情变成结果的路径，少追可能性，多做能收费的小验证。"
  }
};

function deriveInternalStrategy(formData) {
  const birthDate = formData.birthDate || "";
  const timeIndex = Math.max(0, timeOrder.indexOf(formData.birthTime));
  const seed =
    birthDate
      .replaceAll("-", "")
      .split("")
      .reduce((sum, char) => sum + Number(char || 0), 0) + timeIndex;
  const biasProfileId = strategyBiasProfiles[seed % strategyBiasProfiles.length];
  const friction = frictionSignals[(seed + timeIndex) % frictionSignals.length];

  return {
    exactBirthTime: Boolean(formData.birthTime) && formData.birthTime !== "unknown",
    biasProfileId,
    friction
  };
}

function getLifePeriods(formData) {
  const nowYear = new Date().getFullYear();
  const birthYear = Number((formData.birthDate || "").slice(0, 4));
  if (!birthYear || Number.isNaN(birthYear)) {
    return {
      current: `${nowYear}-${nowYear + 9}`,
      next: `${nowYear + 10}-${nowYear + 19}`
    };
  }

  const age = Math.max(0, nowYear - birthYear);
  const currentAgeStart = Math.floor(age / 10) * 10;
  const currentStart = birthYear + currentAgeStart;
  const currentEnd = currentStart + 9;

  return {
    current: `${currentStart}-${currentEnd}`,
    next: `${currentEnd + 1}-${currentEnd + 10}`
  };
}

function buildFullReport(formData, profile, strategy) {
  const copy = fullReportCopy[profile.id] || fullReportCopy["clear-boundary"];
  const periods = getLifePeriods(formData);
  const ownerLabel = formData.accountPhone || formData.phone || formData.nickname || "已登录用户";
  const calibrationNote = strategy.exactBirthTime
    ? strategy.friction.adjustment
    : "出生时段会影响细节判断，建议补全后再做完整版复核。";
  const closingSummary = copy.closing.slice(0, 150);

  return {
    title: `知我 InnerMap 完整报告 - ${ownerLabel}`,
    phone: formData.accountPhone || formData.phone || "",
    sections: [
      {
        title: "性格与能力",
        summary: copy.oneLine,
        strengths: copy.strengths,
        weaknesses: copy.weaknesses
      },
      {
        title: "工作与行动模式",
        currentPeriod: periods.current,
        current: `${copy.careerCurrent} ${calibrationNote}`,
        nextPeriod: periods.next,
        next: copy.careerNext,
        caution: copy.careerCaution
      },
      {
        title: "关系互动模式",
        emotionalNeeds: copy.emotionalNeeds,
        partnerPortrait: copy.partnerPortrait,
        relationshipPattern: copy.relationshipMode
      },
      {
        title: "资源感与风险偏好",
        wealthPattern: copy.wealthPattern,
        currentPeriod: periods.current,
        current: copy.financeCurrent,
        suitableDirections: copy.financeDirections,
        caution: copy.financeCaution
      }
    ],
    closingSummary
  };
}

function getVisitorId() {
  let id = localStorage.getItem(visitorKey);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(visitorKey, id);
  }
  return id;
}

function getSource() {
  const params = new URLSearchParams(window.location.search);
  return params.get("source") || document.referrer || "direct";
}

function padDatePart(value) {
  return String(value).padStart(2, "0");
}

function buildBirthDateFromParts(formData) {
  if (formData.birthDate) return formData.birthDate;
  const year = formData.birthYear;
  const month = formData.birthMonth;
  const day = formData.birthDay;
  if (!year || !month || !day) return formData.birthDate || "";
  return `${year}-${padDatePart(month)}-${padDatePart(day)}`;
}

function getDaysInMonth(year, month) {
  if (!year || !month) return 31;
  return new Date(Number(year), Number(month), 0).getDate();
}

function createOption(value, label = value) {
  const option = document.createElement("option");
  option.value = String(value);
  option.textContent = label;
  return option;
}

function fillSelect(select, values, placeholder) {
  if (!select) return;
  select.innerHTML = "";
  const placeholderOption = createOption("", placeholder);
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  select.append(placeholderOption, ...values.map(([value, label]) => createOption(value, label)));
}

function setupValueToggles(form) {
  form.querySelectorAll(".value-toggle[data-toggle-input]").forEach((button) => {
    const input = form.querySelector(`[name="${button.dataset.toggleInput}"]`);
    const values = (button.dataset.values || "").split(",");
    const labels = (button.dataset.labels || "").split(",");
    const labelTarget = button.querySelector("strong");
    if (!input || values.length < 2 || !labelTarget) return;

    const refresh = () => {
      const index = Math.max(0, values.indexOf(input.value));
      labelTarget.textContent = labels[index] || input.value;
    };

    button.addEventListener("click", () => {
      const currentIndex = Math.max(0, values.indexOf(input.value));
      input.value = values[(currentIndex + 1) % values.length];
      refresh();
      input.dispatchEvent(new Event("input", { bubbles: true }));
    });

    refresh();
  });
}

function setupBirthPlaceSelectors(form) {
  const provinceSelect = form.querySelector('[name="birthProvince"]');
  const citySelect = form.querySelector('[name="birthCity"]');
  const hint = document.querySelector("#solar-time-hint");
  if (!provinceSelect || !citySelect) return;

  const provinces = Object.keys(birthPlaces).map((province) => [province, province]);
  fillSelect(provinceSelect, provinces, "省份");

  const refreshHint = () => {
    const longitude = birthPlaces[provinceSelect.value]?.[citySelect.value];
    if (!hint || !longitude) return;
    const offsetMinutes = Math.round((longitude - 120) * 4);
    const distance = Math.abs(offsetMinutes);
    hint.textContent =
      distance >= 15
        ? `出生地与北京时间基准约有 ${distance} 分钟差异，完整版会做真太阳时复核。`
        : "出生地与北京时间基准差异较小；若出生时间接近时段边界，完整版仍会复核。";
  };

  const refreshCities = () => {
    const cities = Object.keys(birthPlaces[provinceSelect.value] || {}).map((city) => [city, city]);
    fillSelect(citySelect, cities, "城市");
    refreshHint();
  };

  provinceSelect.addEventListener("change", refreshCities);
  citySelect.addEventListener("change", refreshHint);
}

function setupBirthDateSelectors(form) {
  const dateInput = form.querySelector('[name="birthDate"]');
  if (dateInput) {
    const currentYear = new Date().getFullYear();
    dateInput.min = `${currentYear - 85}-01-01`;
    dateInput.max = `${currentYear}-12-31`;
  }

  const yearSelect = form.querySelector('[name="birthYear"]');
  const monthSelect = form.querySelector('[name="birthMonth"]');
  const daySelect = form.querySelector('[name="birthDay"]');
  if (!yearSelect || !monthSelect || !daySelect) return;

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 86 }, (_, index) => {
    const year = currentYear - index;
    return [year, `${year}`];
  });
  const months = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return [month, `${month}`];
  });

  fillSelect(yearSelect, years, "年");
  fillSelect(monthSelect, months, "月");

  const refreshDays = () => {
    const selectedDay = daySelect.value;
    const dayCount = getDaysInMonth(yearSelect.value, monthSelect.value);
    const days = Array.from({ length: dayCount }, (_, index) => {
      const day = index + 1;
      return [day, `${day}`];
    });
    fillSelect(daySelect, days, "日");
    if (selectedDay && Number(selectedDay) <= dayCount) {
      daySelect.value = selectedDay;
    }
  };

  refreshDays();
  yearSelect.addEventListener("change", refreshDays);
  monthSelect.addEventListener("change", refreshDays);
}

function normalizeFormData(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  return {
    ...data,
    birthDate: buildBirthDateFromParts(data)
  };
}

function track(name, extra = {}) {
  fetch("/api/event", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name,
      page: document.body.dataset.page,
      visitorId: getVisitorId(),
      source: getSource(),
      ...extra
    })
  }).catch(() => {});
}

function pickTimeTheme(formData) {
  const date = formData.birthDate || "";
  const gender = formData.gender || "";
  const time = formData.birthTime || "";
  const seed =
    date
      .replaceAll("-", "")
      .split("")
      .reduce((sum, char) => sum + Number(char || 0), 0) +
    gender.length +
    time.length;
  return timeThemes[seed % timeThemes.length];
}

function buildInnerMapReport(formData) {
  const scores = Object.fromEntries(Object.keys(profiles).map((key) => [key, 0]));
  const strategy = deriveInternalStrategy(formData);

  Object.entries(answerScores).forEach(([field, profileScores]) => {
    const answer = formData[field];
    const matchedScores = profileScores[answer] || {};
    Object.entries(matchedScores).forEach(([profileId, value]) => {
      scores[profileId] += value;
    });
  });

  scores[strategy.biasProfileId] += 1;

  const fallbackTheme = pickTimeTheme(formData);
  const profileId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const profile = profiles[profileId] || profiles["clear-boundary"];
  const birthDate = formData.birthDate ? new Date(`${formData.birthDate}T00:00:00`) : null;
  const month = birthDate && !Number.isNaN(birthDate.getTime()) ? birthDate.getMonth() + 1 : 0;
  const season =
    month >= 3 && month <= 5
      ? "生发"
      : month >= 6 && month <= 8
        ? "展开"
        : month >= 9 && month <= 11
          ? "收束"
          : "沉潜";

  return {
    ...profile,
    profileId: profile.id,
    sections: profileSections[profile.id],
    fullReport: buildFullReport(formData, profile, strategy),
    internalStrategy: strategy,
    timeTheme: fallbackTheme.name,
    timeLabel: fallbackTheme.label,
    season,
    subtitle: `这是一份基于你的出生时间坐标与动态校准题生成的初步画像。`
  };
}

async function requestStructuredPreview(formData) {
  const response = await fetch("/api/preview", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(formData)
  });
  const result = await response.json();
  if (!response.ok || !result.ok || !result.report) {
    throw new Error(result.error || "preview failed");
  }
  return result.report;
}

async function requestCalibrationPlan(formData) {
  const response = await fetch("/api/calibration", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(formData)
  });
  const result = await response.json();
  if (!response.ok || !result.ok || !result.plan) {
    throw new Error(result.error || "calibration failed");
  }
  return result.plan;
}

function renderCalibrationPlan(plan) {
  const container = document.querySelector("#dynamic-questions");
  const context = document.querySelector("#calibration-context");
  if (!container) return;

  const questions = plan?.questions?.length ? plan.questions : fallbackCalibrationPlan.questions;
  container.dataset.questionIndex = "0";
  container.dataset.questionCount = String(questions.length);
  container.__questions = questions;
  if (context) {
    context.textContent = "辅助寻找最真实的你";
  }

  renderCalibrationQuestion(0);
}

function renderCalibrationQuestion(index) {
  const container = document.querySelector("#dynamic-questions");
  const nextQuestion = document.querySelector("#next-question");
  const submitButton = document.querySelector("#submit-report");
  const countLabel = document.querySelector(".calibration-count");
  const progressItems = document.querySelectorAll(".calibration-progress span");
  const questions = container?.__questions || fallbackCalibrationPlan.questions;
  const question = questions[index];
  if (!container || !question) return;

  container.dataset.questionIndex = String(index);
  if (countLabel) countLabel.textContent = `${index + 1} / ${questions.length}`;
  progressItems.forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex <= index);
  });

  const options = question.options
    .map((option, optionIndex) => {
      return `<label>
        <input type="radio" name="${escapeHtml(question.field)}" value="${escapeHtml(option.value)}" ${optionIndex === 0 ? "required" : ""} />
        <span>${escapeHtml(option.label)}</span>
      </label>`;
    })
    .join("");

  container.innerHTML = `<fieldset class="question-card">
    <legend>${escapeHtml(question.title)}</legend>
    <div class="choice-card-row">
      ${options}
    </div>
  </fieldset>`;

  if (nextQuestion) {
    nextQuestion.hidden = index >= questions.length - 1;
  }
  if (submitButton) {
    submitButton.hidden = index < questions.length - 1;
  }
}

function setupHome() {
  const form = document.querySelector("#birth-form");
  if (!form) return;

  const birthStep = document.querySelector("#birth-step");
  const calibrationStep = document.querySelector("#calibration-step");
  const startCalibration = document.querySelector("#start-calibration");
  const backToBirth = document.querySelector("#back-to-birth");
  const submitButton = document.querySelector("#submit-report");
  const nextQuestion = document.querySelector("#next-question");

  setupBirthDateSelectors(form);
  setupValueToggles(form);
  setupBirthPlaceSelectors(form);
  track("page_view");

  let started = false;
  form.addEventListener("input", () => {
    if (started) return;
    started = true;
    track("form_start");
  });

  startCalibration?.addEventListener("click", async () => {
    const requiredFields = form.querySelectorAll("#birth-step [required]");
    const invalidField = Array.from(requiredFields).find((field) => !field.checkValidity());
    if (invalidField) {
      invalidField.reportValidity();
      return;
    }

    const birthData = normalizeFormData(form);
    startCalibration.disabled = true;
    startCalibration.textContent = "正在校准...";
    try {
      const plan = await requestCalibrationPlan(birthData);
      renderCalibrationPlan(plan);
      track("calibration_plan_loaded", {
        confidence: plan.confidence,
        questionCount: plan.questions?.length || 0
      });
    } catch {
      renderCalibrationPlan(fallbackCalibrationPlan);
      track("calibration_plan_fallback");
    } finally {
      startCalibration.disabled = false;
      startCalibration.textContent = "生成我的 InnerMap";
    }

    birthStep.hidden = true;
    calibrationStep.hidden = false;
    startCalibration.hidden = true;
    track("calibration_start");
    calibrationStep.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  nextQuestion?.addEventListener("click", () => {
    const container = document.querySelector("#dynamic-questions");
    const currentFieldset = container?.querySelector("fieldset");
    if (currentFieldset && !currentFieldset.checkValidity()) {
      currentFieldset.reportValidity();
      return;
    }
    const questions = container?.__questions || fallbackCalibrationPlan.questions;
    const currentIndex = Number(container?.dataset.questionIndex || "0");
    if (currentIndex >= questions.length - 1) {
      submitButton?.click();
      return;
    }
    renderCalibrationQuestion(currentIndex + 1);
    calibrationStep.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  backToBirth?.addEventListener("click", () => {
    birthStep.hidden = false;
    calibrationStep.hidden = true;
    submitButton.hidden = true;
    nextQuestion.hidden = true;
    startCalibration.hidden = false;
    birthStep.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (calibrationStep?.hidden) {
      startCalibration?.click();
      return;
    }

    if (!form.reportValidity()) return;

    const data = normalizeFormData(form);
    let report;
    try {
      report = await requestStructuredPreview(data);
    } catch {
      report = buildInnerMapReport(data);
      track("preview_structured_fallback");
    }
    const payload = {
      ...data,
      profileId: report.profileId,
      profileName: report.name,
      themeName: report.themeName,
      structuralPreview: report.structuralPreview,
      fullReport: report.fullReport,
      visitorId: getVisitorId(),
      source: getSource()
    };

    sessionStorage.setItem(sessionKey, JSON.stringify({ form: data, report }));

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.leadId) {
        sessionStorage.setItem("zhiwo_lead_id", result.leadId);
      }
      if (result.reportUrl) {
        sessionStorage.setItem("zhiwo_report_url", result.reportUrl);
      }
    } catch {
      track("form_submit_local_only", { profileName: report.name });
    }

    window.location.href = "result.html";
  });
}

function setupResult() {
  if (document.body.dataset.page !== "result") return;
  track("page_view");

  const stored = sessionStorage.getItem(sessionKey);
  const result = stored ? JSON.parse(stored) : { report: buildInnerMapReport({}), form: {} };
  const report = result.report || buildInnerMapReport(result.form || {});

  const subtitle = document.querySelector("#result-subtitle");
  const profileLabel = document.querySelector("#profile-label");
  const profileName = document.querySelector("#profile-name");
  const profileSummary = document.querySelector("#profile-summary");
  const strengthList = document.querySelector("#strength-list");
  const attentionList = document.querySelector("#attention-list");
  const personalityQuote = document.querySelector("#personality-quote");
  const stateName = document.querySelector("#state-name");
  const stateSummary = document.querySelector("#state-summary");
  const stateSignals = document.querySelector("#state-signals");
  const stateDrain = document.querySelector("#state-drain");
  const stateAction = document.querySelector("#state-action");
  const qrBox = document.querySelector("#qr-box");
  const qrImage = qrBox?.querySelector("img");
  const wechatAction = document.querySelector("#wechat-action");
  const displayCopy = previewDisplayCopy[report.profileId] || previewDisplayCopy["clear-boundary"];

  subtitle.textContent = report.subtitle;
  profileLabel.textContent = report.label;
  profileName.textContent = report.name;
  profileSummary.textContent = report.summary;
  strengthList.innerHTML = displayCopy.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  attentionList.innerHTML = displayCopy.attention.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  personalityQuote.textContent = displayCopy.quote;
  stateName.textContent = displayCopy.state.name;
  stateSummary.textContent = displayCopy.state.summary;
  stateSignals.innerHTML = displayCopy.state.signals.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  stateDrain.textContent = displayCopy.state.drain;
  stateAction.textContent = displayCopy.state.action;

  track("wechat_qr_view", { profileName: report.name });

  if (qrImage) {
    qrImage.addEventListener("error", () => {
      qrBox.classList.add("is-fallback");
    });
  }

  wechatAction?.addEventListener("click", () => {
    track("wechat_qr_click", {
      profileName: report.name,
      leadId: sessionStorage.getItem("zhiwo_lead_id")
    });
    window.alert("请长按或截图保存二维码，添加时备注：InnerMap + 你的昵称。");
  });
}

async function setupAdmin() {
  if (document.body.dataset.page !== "admin") return;
  const grid = document.querySelector("#stats-grid");
  const rows = document.querySelector("#lead-rows");
  const response = await fetch("/api/stats");
  const data = await response.json();
  const items = [
    ["总 PV", data.totals.pageViews],
    ["总 UV", data.totals.uniqueVisitors],
    ["首页 PV", data.totals.homeViews],
    ["结果页 PV", data.totals.resultViews],
    ["开始填写", data.totals.formStarts],
    ["提交信息", data.totals.formSubmits],
    ["二维码曝光", data.totals.qrViews],
    ["二维码点击", data.totals.qrClicks],
    ["线索数", data.totals.leads]
  ];

  grid.innerHTML = items
    .map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  rows.innerHTML = data.latestLeads
    .map((lead) => {
      return `<tr>
        <td>${new Date(lead.ts).toLocaleString()}</td>
        <td>${escapeHtml(lead.nickname || "-")}</td>
        <td>${escapeHtml(lead.phone || "-")}</td>
	        <td>${escapeHtml(lead.birthDate || "-")}</td>
	        <td>${escapeHtml(lead.calendarType === "lunar" ? "阴历" : "阳历")}</td>
	        <td>${escapeHtml(lead.birthTime || "-")}</td>
	        <td>${escapeHtml(`${lead.birthProvince || ""}${lead.birthCity || ""}` || "-")}</td>
	        <td>${escapeHtml(lead.gender || "-")}</td>
        <td>${escapeHtml(lead.profileName || lead.themeName || "-")}</td>
        <td>${lead.reportUrl ? `<a href="${escapeHtml(lead.reportUrl)}" target="_blank" rel="noreferrer">打开</a>` : "-"}</td>
        <td>${escapeHtml(String(lead.source || "-").slice(0, 60))}</td>
      </tr>`;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return map[char];
  });
}

globalThis.buildInnerMapReport = buildInnerMapReport;
globalThis.buildBirthDateFromParts = buildBirthDateFromParts;

setupHome();
setupResult();
setupAdmin();
