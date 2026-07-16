import { useEffect, useRef, useState } from "react";

type CaseItem = {
  title: string;
  company: string;
  lead: string;
  task: string;
  approach: string;
  solution: string;
  scene: "scale" | "profit" | "shop" | "product";
  metrics: Array<{ value: string; label: string }>;
};

const cases: CaseItem[] = [
  {
    title: "Масштабирование направления",
    company: "операционное управление",
    lead: "+71% рост выручки год к году",
    task: "Увеличить объём направления и сделать процессы управляемыми.",
    approach: "Связать продажи, проекты, отчётность и автоматизацию в один контур.",
    solution: "Настроены процессы в Битрикс24, 1С, DataLens и AI. Контур управления переведён в дашборды и регулярный контроль.",
    scene: "scale",
    metrics: [
      { value: "+71%", label: "рост выручки год к году" },
      { value: "41", label: "новый проект" },
      { value: "Битрикс24 · 1С · DataLens · AI", label: "автоматизация процессов" },
    ],
  },
  {
    title: "Рост прибыли",
    company: "коммерческое управление",
    lead: "×4,7 оборот направления",
    task: "Усилить коммерческий результат направления и довести сделки до запуска.",
    approach: "Управление пресейлом, КП, тендерами, прогнозом оборота и маржинальной прибыли.",
    solution: "Собран коммерческий дашборд: рост оборота, маржинальная прибыль, проектные запуски, тендерные победы и сумма КП.",
    scene: "profit",
    metrics: [
      { value: "×4,7", label: "оборот направления" },
      { value: "×8,3", label: "маржинальная прибыль направления" },
      { value: "8", label: "проектных запусков" },
      { value: "2", label: "тендерные победы" },
      { value: "40+ млн ₽", label: "коммерческих предложений" },
    ],
  },
  {
    title: "Увеличение продаж интернет-магазина",
    company: "маркетинг / сайт / контент",
    lead: "×3 заявки в интернет‑магазин",
    task: "Увеличить поток заявок и повысить эффективность сайта и контент‑производства.",
    approach: "Работа с сайтом, контентным циклом, рекламными материалами и аналитикой результата.",
    solution: "Усилены посадочные страницы, ускорено производство контента, выстроена связка «контент → сайт → заявка».",
    scene: "shop",
    metrics: [
      { value: "×3", label: "заявки в интернет-магазин за год" },
      { value: "×5", label: "производство контента" },
      { value: "0,4 → 0,86", label: "конверсия сайта" },
    ],
  },
  {
    title: "Создание продукта с 0",
    company: "новый бизнес‑юнит",
    lead: "80+% маржинальность",
    task: "Запустить самостоятельный продуктовый юнит с понятной экономикой.",
    approach: "Сформировать продукт, упаковку, каналы входящего спроса и коммерческую модель без рекламной зависимости.",
    solution: "Создан отдельный продуктовый модуль. Настроен поток лидов и экономика с высокой маржинальностью.",
    scene: "product",
    metrics: [
      { value: "80+%", label: "маржинальность" },
      { value: "40", label: "лидов в месяц" },
      { value: "0 ₽", label: "рекламных вложений" },
    ],
  },
];

const experience = [
  ["2026 — н.в.", "Медиа Инсайт", "Коммерческий директор / CCO", "Коммерческий контур, продажи, пресейл, тендеры"],
  ["2023 — 2025", "Интерэстейт / SETEVIE", "Исполнительный директор / COO", "P&L, процессы, команда, отчётность"],
  ["2019 — 2022", "GARWIN", "Руководитель маркетинга и PR", "Маркетинг, PR, сайт, контент, лидогенерация"],
  ["2016 — 2019", "Альянс", "Директор по развитию", "Новые продукты, партнёрства, продажи"],
];

const education = [
  ["2026", "Бизнес-анализ", "ASPEX · бизнес-аналитик"],
  ["2026", "Старт в 1С", "1С · 6 академических часов"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman · ментор Сколково"],
  ["2023", "Формула прибыли", "Илья Балахнин"],
  ["2022", "Директор по маркетингу", "Qmarketing Academy"],
  ["2019", "Бизнес-школа управления", "Visotsky Consulting Inc."],
  ["2015", "Высшее образование", "СПбГУП"],
  ["2010", "Школа журналистики", "СПбГУП"],
  ["2009", "Малый журфак", "НовГУ им. Ярослава Мудрого"],
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      document.querySelectorAll<HTMLElement>(".case-card").forEach((node) => {
        const rect = node.getBoundingClientRect();
        const value = Math.min(1, Math.max(0, (window.innerHeight * 0.8 - rect.top) / Math.max(rect.height, 1)));
        node.style.setProperty("--case-progress", value.toFixed(3));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard" aria-hidden="true">
      <div className="glass-panel panel-a">
        <span>REVENUE</span>
        <i />
      </div>
      <div className="glass-panel panel-b">
        <span>PROJECTS</span>
        <b>41</b>
      </div>
      <svg viewBox="0 0 640 280" className="hero-line">
        <path d="M20 240 C100 215 120 225 178 184 S268 172 324 126 418 122 468 78 550 72 620 22" />
      </svg>
      <div className="hero-system">
        <span>CRM</span>
        <span>1C</span>
        <span>BI</span>
        <span>AI</span>
      </div>
    </div>
  );
}

function CaseScene({ type }: { type: CaseItem["scene"] }) {
  if (type === "scale") {
    return (
      <div className="scene scene-scale">
        <div className="hands-bridge" aria-hidden="true">
          <svg className="robot-hand" viewBox="0 0 320 170">
            <path d="M12 120 C62 92 95 88 132 84" />
            <path d="M130 84 C158 82 178 78 202 64" />
            <path d="M202 64 C226 50 250 48 284 55" />
            <path d="M146 82 L172 114" />
            <path d="M166 78 L198 108" />
            <path d="M186 70 L224 96" />
            <circle cx="134" cy="84" r="12" />
            <circle cx="202" cy="64" r="9" />
          </svg>
          <span />
          <svg className="human-hand" viewBox="0 0 320 170">
            <path d="M308 116 C250 88 218 84 184 82" />
            <path d="M186 82 C158 80 135 76 112 62" />
            <path d="M112 62 C88 48 62 46 28 55" />
            <path d="M174 80 L146 112" />
            <path d="M154 76 L122 106" />
            <path d="M132 70 L94 96" />
          </svg>
        </div>
        <svg className="scene-curve" viewBox="0 0 650 360">
          <path d="M24 310 C110 294 145 258 198 248 S302 190 360 158 450 128 508 74 590 48 630 22" />
        </svg>
        <div className="system-board">
          {["Битрикс24", "1С", "DataLens", "AI"].map((item, index) => <span key={item} style={{ "--i": index } as React.CSSProperties}>{item}</span>)}
        </div>
      </div>
    );
  }

  if (type === "profit") {
    return (
      <div className="scene scene-profit">
        <div className="stairs">
          {Array.from({ length: 7 }).map((_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties}><b>₽</b></i>)}
        </div>
        <svg className="stair-line" viewBox="0 0 620 420">
          <path d="M20 390 L88 345 L150 300 L218 245 L292 208 L358 155 L448 112 L595 28" />
        </svg>
      </div>
    );
  }

  if (type === "shop") {
    return (
      <div className="scene scene-shop">
        <div className="site-frame">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="content-strip">
          {Array.from({ length: 5 }).map((_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties} />)}
        </div>
        <div className="order-pulses">
          <b />
          <b />
          <b />
        </div>
        <svg className="conversion-path" viewBox="0 0 620 260">
          <path d="M28 210 C120 190 150 166 218 156 S342 118 404 86 514 66 592 22" />
        </svg>
      </div>
    );
  }

  return (
    <div className="scene scene-product">
      <div className="product-core">
        <i />
        <i />
        <i />
      </div>
      <div className="lead-orbit">
        {Array.from({ length: 12 }).map((_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties} />)}
      </div>
      <div className="product-stack">
        <span>IDEA</span>
        <span>MVP</span>
        <span>SALES</span>
        <span>UNIT</span>
      </div>
    </div>
  );
}

function MetricList({ metrics }: { metrics: CaseItem["metrics"] }) {
  return (
    <div className="metrics">
      {metrics.map((metric, index) => (
        <div className="metric" key={`${metric.value}-${metric.label}`} style={{ "--i": index } as React.CSSProperties}>
          <b>{metric.value}</b>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className={`case-card case-${item.scene}`}>
      <div className="case-copy">
        <p>{item.company}</p>
        <h3>{item.title}</h3>
        <strong>{item.lead}</strong>
        <div className="case-logic">
          <div><span>Задача</span><p>{item.task}</p></div>
          <div><span>Подход</span><p>{item.approach}</p></div>
          <div><span>Решение</span><p>{item.solution}</p></div>
        </div>
      </div>
      <div className="case-dashboard">
        <CaseScene type={item.scene} />
        <MetricList metrics={item.metrics} />
      </div>
    </article>
  );
}

function EducationObject({ active }: { active: number }) {
  const fill = Math.max(0, Math.min(100, ((active + 1) / education.length) * 100));
  return (
    <div className="edu-brain" aria-hidden="true" style={{ "--brain-fill": `${fill}%` } as React.CSSProperties}>
      {Array.from({ length: education.length }).map((_, index) => (
        <span
          key={index}
          className={`${index <= active ? "filled" : ""} ${index === active ? "active" : ""}`}
          style={{ "--i": index } as React.CSSProperties}
        />
      ))}
      <i />
    </div>
  );
}

function Cursor() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => setPoint({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="cursor pen-cursor" style={{ transform: `translate3d(${point.x}px, ${point.y}px, 0)` }} aria-hidden="true">
      <span className="pen-hand" />
      <span className="pen-body" />
      <span className="pen-tip" />
      <i className="pen-line" />
    </div>
  );
}

export default function App() {
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });
    mainRef.current?.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef}>
      <Cursor />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />

      <header>
        <a className="brand" href="#top">AV <span>/ CCO</span></a>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#cases">Кейсы</a>
          <a href="#experience">Опыт</a>
          <a href="#education">Образование</a>
          <a href="#contact">Контакты</a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Меню"><i /><i /></button>
      </header>

      <section className="hero" id="top">
        <HeroDashboard />
        <div className="hero-copy reveal visible">
          <span>ПОРТФОЛИО / 2026</span>
          <h1>Алина<br /><em>Васильева</em></h1>
          <p>Коммерческий директор · CCO · COO</p>
          <div className="hero-fact"><b>12 лет</b><span>в управлении</span></div>
          <div className="hero-links">
            <a href="#cases">Кейсы ↓</a>
            <a href="alina-vasileva-resume.pdf" download>Резюме PDF ↓</a>
          </div>
        </div>
        <div className="portrait reveal visible">
          <img src="assets/alina-portrait.jpg" alt="Алина Васильева" />
        </div>
        <div className="location">Санкт-Петербург · готова к командировкам</div>
      </section>

      <section className="section cases" id="cases">
        <div className="section-head reveal">
          <span>КЕЙСЫ</span>
          <h2>Кейсы по завершённым периодам.</h2>
        </div>
        {cases.map((item) => <CaseCard item={item} key={item.title} />)}
      </section>

      <section className="section experience" id="experience">
        <div className="section-head reveal">
          <span>ОПЫТ</span>
          <h2>Опыт работы</h2>
        </div>
        <div className="table">
          {experience.map((row) => (
            <article className="table-row reveal" key={`${row[0]}-${row[1]}`}>
              <time>{row[0]}</time>
              <h3>{row[1]}</h3>
              <p>{row[2]}</p>
              <span>{row[3]}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <div className="section-head reveal">
          <span>ОБРАЗОВАНИЕ</span>
          <h2>Образование и обучение</h2>
        </div>
        <div className="education-layout">
          <EducationObject active={activeCourse} />
          <div className="edu-list">
            {education.map((row, index) => (
              <article
                className={activeCourse === index ? "edu active" : "edu"}
                key={`${row[0]}-${row[1]}`}
                onMouseEnter={() => setActiveCourse(index)}
                onFocus={() => setActiveCourse(index)}
                onClick={() => setActiveCourse(index)}
                tabIndex={0}
              >
                <time>{row[0]}</time>
                <h3>{row[1]}</h3>
                <p>{row[2]}</p>
                <span>↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <span>КОНТАКТЫ</span>
        <h2>Коммерческий директор</h2>
        <div>
          <a href="mailto:alinavasileva.jour@gmail.com">alinavasileva.jour@gmail.com ↗</a>
          <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href="alina-vasileva-resume.pdf" download>Резюме PDF ↓</a>
        </div>
        <footer>Алина Васильева · CCO / COO · 2026</footer>
      </section>
    </main>
  );
}
