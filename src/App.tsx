import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

const expertise = [
  { title: "Коммерческая стратегия", text: "Бизнес-модель, экономика направления, план продаж и управленческий контур." },
  { title: "Управление продажами", text: "Пресейл, воронка, тендеры, прогнозирование и развитие команды." },
  { title: "Маркетинг и бренд", text: "Позиционирование, продуктовая упаковка, контент и система привлечения спроса." },
  { title: "Автоматизация и аналитика", text: "CRM, 1С, DataLens, AI и управленческие дашборды." },
];

const cases = [
  {
    number: "01",
    label: "Операционное управление",
    title: "Автоматизация коммерческого контура",
    text: "CRM, 1С, DataLens и AI связаны в единую систему управления продажами, проектами и отчётностью.",
    facts: [["+71%", "рост выручки год к году"], ["41", "новый проект"]],
    visual: "automation",
  },
  {
    number: "02",
    label: "Коммерческое управление",
    title: "Рост направления и прибыли",
    text: "Пересобраны пресейл, тендерный процесс, коммерческие предложения и прогнозирование сделок.",
    facts: [["×4,7", "оборот направления"], ["×8,3", "маржинальная прибыль"], ["8", "проектных запусков"], ["40+ млн ₽", "коммерческих предложений"]],
    visual: "growth",
  },
  {
    number: "03",
    label: "Маркетинг / сайт / контент",
    title: "Рост интернет-магазина",
    text: "Связка контента, сайта и заявки стала измеримой: путь клиента, производство материалов и конверсия управляются в одном контуре.",
    facts: [["×3", "заявки"], ["×5", "производство контента"], ["+16%", "конверсия сайта"]],
    visual: "funnel",
  },
  {
    number: "04",
    label: "Запуск продукта",
    title: "Новый бизнес-юнит",
    text: "Продукт создан с нуля, проверен на рынке и выведен на устойчивую экономику без рекламных вложений.",
    facts: [["80%+", "маржинальность"], ["40", "лидов в месяц"], ["0 ₽", "рекламных вложений"]],
    visual: "pipeline",
  },
] as const;

const experience = [
  ["2026 — н.в.", "Коммерческий директор / CCO", "Медиа Инсайт", "Продажи, пресейл, тендеры, коммерческий контур"],
  ["2023 — 2025", "Исполнительный директор / COO", "Интерэстейт", "P&L, процессы, команда, отчётность"],
  ["2019 — 2022", "Руководитель маркетинга и PR", "Сетевые коммуникации", "Маркетинг, PR, сайт, контент, лидогенерация"],
  ["2016 — 2019", "Директор по развитию", "Альянс ТМ", "Новые продукты, партнёрства, продажи"],
] as const;

const education = [
  ["2026", "Бизнес-анализ", "ASPEX"],
  ["2026", "Старт в 1С", "1С"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman"],
] as const;

function HeroTrend() {
  return (
    <svg className="hero-trend" viewBox="0 0 760 620" aria-hidden="true">
      <defs>
        <linearGradient id="heroTrendStroke" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0a3144" />
          <stop offset="0.55" stopColor="#0f91ad" />
          <stop offset="1" stopColor="#76eefe" />
        </linearGradient>
        <filter id="heroGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g className="hero-grid-lines">
        {Array.from({ length: 8 }).map((_, index) => <line key={`v-${index}`} x1={72 + index * 84} y1="78" x2={72 + index * 84} y2="566" />)}
        {Array.from({ length: 7 }).map((_, index) => <line key={`h-${index}`} x1="46" y1={110 + index * 70} x2="728" y2={110 + index * 70} />)}
      </g>
      <path className="hero-path hero-path-muted" d="M54 535 C150 520 184 466 252 454 S368 438 430 372 S534 318 596 231 S672 150 714 92" />
      <path className="hero-path hero-path-main" filter="url(#heroGlow)" d="M54 542 C132 527 178 498 232 474 S344 446 402 398 S510 346 564 278 S646 210 712 94" />
      <g className="hero-nodes">
        <circle cx="232" cy="474" r="6" />
        <circle cx="402" cy="398" r="6" />
        <circle cx="564" cy="278" r="6" />
        <circle cx="712" cy="94" r="7" />
      </g>
    </svg>
  );
}

function AutomationVisual() {
  const nodes = [
    { x: 142, y: 124, label: "CRM" },
    { x: 496, y: 124, label: "1С" },
    { x: 142, y: 386, label: "DataLens" },
    { x: 496, y: 386, label: "AI" },
  ];
  return (
    <svg className="data-visual automation-visual" viewBox="0 0 640 520" role="img" aria-label="Схема единого коммерческого контура">
      <defs>
        <radialGradient id="hubFill" cx="50%" cy="42%" r="70%"><stop offset="0" stopColor="#18394a" stopOpacity="0.95" /><stop offset="1" stopColor="#07131d" stopOpacity="0.92" /></radialGradient>
        <filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="network-lines">{nodes.map((node) => <path key={node.label} d={`M320 260 C320 260 ${node.x} ${node.y} ${node.x} ${node.y}`} />)}</g>
      <circle className="hub-ring hub-ring-outer" cx="320" cy="260" r="110" />
      <circle className="hub-ring hub-ring-inner" cx="320" cy="260" r="78" />
      <circle className="hub-core" cx="320" cy="260" r="60" fill="url(#hubFill)" />
      <text className="hub-title" x="320" y="252" textAnchor="middle">ЕДИНЫЙ</text>
      <text className="hub-title" x="320" y="278" textAnchor="middle">КОНТУР</text>
      {nodes.map((node) => (
        <g className="system-node" key={node.label} transform={`translate(${node.x} ${node.y})`}>
          <circle className="system-node-halo" r="42" /><circle className="system-node-core" r="31" filter="url(#nodeGlow)" /><text x="0" y="5" textAnchor="middle">{node.label}</text>
        </g>
      ))}
    </svg>
  );
}

function GrowthDashboard() {
  return (
    <svg className="data-visual growth-visual" viewBox="0 0 680 500" role="img" aria-label="Аналитический дашборд роста направления">
      <defs>
        <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#18c9e7" stopOpacity="0.32" /><stop offset="1" stopColor="#18c9e7" stopOpacity="0" /></linearGradient>
        <linearGradient id="growthStroke" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#25677d" /><stop offset="0.55" stopColor="#1bc7e4" /><stop offset="1" stopColor="#9af6ff" /></linearGradient>
        <filter id="growthGlow" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="chart-grid">
        {Array.from({ length: 8 }).map((_, index) => <line key={`x-${index}`} x1={58 + index * 80} y1="60" x2={58 + index * 80} y2="430" />)}
        {Array.from({ length: 6 }).map((_, index) => <line key={`y-${index}`} x1="58" y1={70 + index * 72} x2="622" y2={70 + index * 72} />)}
      </g>
      <path className="chart-area" d="M60 405 C112 392 144 366 190 352 S256 336 300 288 S364 268 410 222 S482 178 526 132 S580 104 620 64 L620 430 L60 430 Z" fill="url(#growthArea)" />
      <path className="chart-line chart-line-secondary" d="M60 382 C130 356 166 360 222 322 S314 300 366 262 S472 238 520 188 S574 166 620 142" />
      <path className="chart-line chart-line-main" filter="url(#growthGlow)" d="M60 405 C112 392 144 366 190 352 S256 336 300 288 S364 268 410 222 S482 178 526 132 S580 104 620 64" stroke="url(#growthStroke)" />
      <g className="chart-points">{[[60,405],[190,352],[300,288],[410,222],[526,132],[620,64]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />)}</g>
      <g className="mini-bars">{[54,82,68,112,128,164].map((height,index) => <rect key={`${height}-${index}`} x={76 + index * 46} y={425 - height} width="18" height={height} rx="4" />)}</g>
    </svg>
  );
}

function FunnelDashboard() {
  const stages = [
    { x: 70, y: 58, width: 540, label: "КОНТЕНТ", tone: 0 },
    { x: 105, y: 178, width: 470, label: "САЙТ", tone: 1 },
    { x: 150, y: 298, width: 380, label: "ЗАЯВКА", tone: 2 },
    { x: 205, y: 418, width: 270, label: "СДЕЛКА", tone: 3 },
  ];
  return (
    <svg className="data-visual funnel-visual" viewBox="0 0 680 560" role="img" aria-label="Вертикальная воронка интернет-магазина от контента до сделки">
      <defs>
        <linearGradient id="funnelGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#173445" stopOpacity="0.72" /><stop offset="1" stopColor="#07131d" stopOpacity="0.9" /></linearGradient>
        <linearGradient id="funnelEdge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#2a7088" stopOpacity="0.45" /><stop offset="0.55" stopColor="#24c7e4" stopOpacity="0.9" /><stop offset="1" stopColor="#9bf6ff" stopOpacity="0.75" /></linearGradient>
        <filter id="funnelGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="funnel-grid">
        {Array.from({ length: 7 }).map((_, index) => <line key={`fv-${index}`} x1={80 + index * 86} y1="38" x2={80 + index * 86} y2="522" />)}
        {Array.from({ length: 6 }).map((_, index) => <line key={`fh-${index}`} x1="48" y1={70 + index * 92} x2="632" y2={70 + index * 92} />)}
      </g>
      <path className="funnel-spine" d="M340 126 C340 168 340 196 340 246 S340 316 340 366 S340 436 340 486" />
      <g className="funnel-stage-list">
        {stages.map((stage) => (
          <g className={`funnel-stage funnel-stage-${stage.tone + 1}`} key={stage.label} transform={`translate(${stage.x} ${stage.y})`}>
            <rect className="funnel-stage-glass" width={stage.width} height="72" rx="18" fill="url(#funnelGlass)" />
            <rect className="funnel-stage-edge" x="1" y="1" width={stage.width - 2} height="70" rx="17" stroke="url(#funnelEdge)" />
            <line className="funnel-reflection" x1="24" y1="14" x2={stage.width - 24} y2="14" />
            <text x={stage.width / 2} y="44" textAnchor="middle">{stage.label}</text>
          </g>
        ))}
      </g>
      <g className="funnel-flow-points" filter="url(#funnelGlow)">
        {[126,246,366,486].map((y,index) => <circle key={y} cx="340" cy={y} r={index === 3 ? 8 : 6} />)}
      </g>
      <g className="conversion-index">
        <text x="520" y="510">conversion index</text>
        <path d="M506 480 C538 470 552 446 574 438 S610 404 628 382" />
        <circle cx="506" cy="480" r="4" /><circle cx="574" cy="438" r="4" /><circle cx="628" cy="382" r="5" />
      </g>
    </svg>
  );
}

function PipelineDashboard() {
  return (
    <svg className="data-visual pipeline-visual" viewBox="0 0 680 520" role="img" aria-label="Дорожная карта развития нового бизнес-юнита">
      <defs>
        <linearGradient id="pipelineArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#25cae6" stopOpacity="0.24" /><stop offset="1" stopColor="#25cae6" stopOpacity="0" /></linearGradient>
        <filter id="pipelineGlow" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="6" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <path className="pipeline-baseline" d="M72 360 H610" />
      <path className="pipeline-area" d="M72 350 C136 338 164 302 216 294 S312 254 354 218 S444 190 484 142 S556 100 610 72 L610 360 H72 Z" fill="url(#pipelineArea)" />
      <path className="pipeline-line" filter="url(#pipelineGlow)" d="M72 350 C136 338 164 302 216 294 S312 254 354 218 S444 190 484 142 S556 100 610 72" />
      <g className="pipeline-milestones">
        {[[96,350,"ИДЕЯ"],[218,294,"MVP"],[354,218,"ПЕРВЫЕ КЛИЕНТЫ"],[484,142,"PIPELINE"],[610,72,"УСТОЙЧИВАЯ МОДЕЛЬ"]].map(([x,y,label], index) => (
          <g key={String(label)} transform={`translate(${x} ${y})`}>
            <circle className="milestone-halo" r={30 + index * 2} /><circle className="milestone-core" r="8" /><text y="58" textAnchor="middle">{label}</text>
          </g>
        ))}
      </g>
      <g className="client-stream">{[0,1,2,3,4,5].map((index) => <g key={index} transform={`translate(${126 + index * 74} ${430 - (index % 2) * 16})`}><circle r="13" /><path d="M-18 24 C-8 12 8 12 18 24" /></g>)}</g>
    </svg>
  );
}

function CaseVisual({ type }: { type: string }) {
  if (type === "automation") return <AutomationVisual />;
  if (type === "growth") return <GrowthDashboard />;
  if (type === "funnel") return <FunnelDashboard />;
  return <PipelineDashboard />;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="tech-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="На главную">AV <span>/</span><small>ПОРТФОЛИО</small></a>
        <button className={menuOpen ? "menu-button is-open" : "menu-button"} type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /></button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>Профиль</a><a href="#expertise" onClick={closeMenu}>Экспертиза</a><a href="#projects" onClick={closeMenu}>Проекты</a><a href="#experience" onClick={closeMenu}>Опыт</a><a href="#education" onClick={closeMenu}>Обучение</a><a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Коммерческий директор · CCO · COO</p>
          <h1 id="hero-title"><span>Алина</span><span>Васильева</span></h1>
          <p className="hero-lead">Строю коммерческие системы: соединяю стратегию, маркетинг, продажи и процессы в управляемую модель роста.</p>
          <div className="hero-actions"><a className="button-link" href="#projects">Смотреть проекты <span>↓</span></a><a className="text-link" href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF <span>↓</span></a></div>
          <dl className="hero-facts"><div><dt>12+</dt><dd>лет в управлении</dd></div><div><dt>4</dt><dd>управленческих направления</dd></div><div><dt>СПб · Москва</dt><dd>проекты по России</dd></div></dl>
        </div>
        <div className="hero-media" aria-hidden="true"><HeroTrend /><div className="portrait-wrap"><img src={`${base}assets/alina-portrait.jpg`} alt="" /></div></div>
      </section>

      <section className="section intro" id="about"><div className="section-heading"><p>01 / Профиль</p><h2>Управление ростом на стыке коммерции, маркетинга и операционной системы.</h2></div><p className="wide-copy">Работаю с собственниками и руководителями: определяю точки роста, собираю модель, выстраиваю команду и довожу изменения до измеримого результата.</p></section>

      <section className="section expertise" id="expertise"><div className="section-heading"><p>02 / Экспертиза</p><h2>Четыре управленческих контура</h2></div><div className="expertise-grid">{expertise.map((item,index) => <article className="glass-card" key={item.title}><span className="item-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <section className="section projects" id="projects"><div className="section-heading"><p>03 / Проекты</p><h2>Факты и растущие тренды</h2></div><div className="project-list">{cases.map((project) => <article className="case-panel" key={project.number}><div className="case-copy"><p className="project-label">{project.number} · {project.label}</p><h3>{project.title}</h3><p className="case-description">{project.text}</p><div className={`metric-grid metric-grid-${project.facts.length}`}>{project.facts.map(([value,caption]) => <div key={`${value}-${caption}`}><strong>{value}</strong><span>{caption}</span></div>)}</div></div><div className="visual-shell"><CaseVisual type={project.visual} /></div></article>)}</div></section>

      <section className="section experience" id="experience"><div className="section-heading"><p>04 / Опыт</p><h2>Управленческий трек</h2></div><div className="experience-list">{experience.map(([years,role,company,scope]) => <article key={`${years}-${company}`}><time>{years}</time><h3>{role}</h3><p className="company">{company}</p><p className="scope">{scope}</p></article>)}</div></section>

      <section className="section education" id="education"><div className="section-heading"><p>05 / Обучение</p><h2>Актуальные инструменты управления</h2></div><div className="education-list">{education.map(([year,title,source]) => <article key={`${year}-${title}`}><time>{year}</time><h3>{title}</h3><p>{source}</p></article>)}</div></section>

      <section className="contact" id="contact"><p className="section-label">06 / Контакты</p><h2>Связаться</h2><div className="contact-list"><a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong><b>↗</b></a><a href="mailto:alinavasileva.jour@gmail.com"><span>Email</span><strong>alinavasileva.jour@gmail.com</strong><b>↗</b></a><a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong><b>↗</b></a></div><footer><span>Алина Васильева · 2026</span><a href="#top">Наверх ↑</a></footer></section>
    </main>
  );
}
