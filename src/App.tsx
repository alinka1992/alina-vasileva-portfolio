import { useEffect, useRef, useState } from "react";

type CaseItem = {
  title: string;
  context: string;
  task: string;
  approach: string;
  solution: string;
  scene: "scale" | "profit" | "shop" | "product";
};

const cases: CaseItem[] = [
  {
    title: "Масштабирование направления",
    context: "операционное управление",
    task: "Увеличить объём направления и сделать процессы управляемыми.",
    approach: "Связать продажи, проекты, отчётность и автоматизацию в один контур.",
    solution: "Настроены CRM, 1С, BI-отчётность и AI-инструменты. Регулярное управление переведено в дашборды.",
    scene: "scale",
  },
  {
    title: "Рост прибыли",
    context: "коммерческое управление",
    task: "Усилить коммерческий результат направления и довести сделки до запуска.",
    approach: "Управление пресейлом, КП, тендерами, прогнозом оборота и маржинальной прибыли.",
    solution: "Собран коммерческий дашборд по обороту, маржинальной прибыли, проектным запускам, тендерам и КП.",
    scene: "profit",
  },
  {
    title: "Увеличение продаж интернет-магазина",
    context: "маркетинг / сайт / контент",
    task: "Увеличить поток заявок и повысить эффективность сайта и контент‑производства.",
    approach: "Работа с сайтом, контентным циклом, рекламными материалами и аналитикой результата.",
    solution: "Усилены посадочные страницы, ускорено производство контента, выстроена связка «контент → сайт → заявка».",
    scene: "shop",
  },
  {
    title: "Создание продукта с 0",
    context: "новый бизнес-юнит",
    task: "Запустить самостоятельный продуктовый юнит с понятной экономикой.",
    approach: "Сформировать продукт, упаковку, каналы входящего спроса и коммерческую модель без рекламной зависимости.",
    solution: "Создан отдельный продуктовый модуль. Настроен поток лидов и экономика с высокой маржинальностью.",
    scene: "product",
  },
];

const experience = [
  ["2026 — н.в.", "Медиа Инсайт", "Коммерческий директор / CCO", "Коммерческий контур, продажи, пресейл, тендеры"],
  ["2023 — 2025", "Интерэстейт / SETEVIE", "Исполнительный директор / COO", "P&L, процессы, команда, отчётность"],
  ["2019 — 2022", "GARWIN", "Руководитель маркетинга и PR", "Маркетинг, PR, сайт, контент, лидогенерация"],
  ["2016 — 2019", "Альянс", "Директор по развитию", "Новые продукты, партнёрства, продажи"],
];

const education = [
  { year: "2026", title: "Бизнес-анализ", source: "ASPEX · бизнес-аналитик", level: 11 },
  { year: "2026", title: "Старт в 1С", source: "1С · 6 академических часов", level: 10 },
  { year: "2025", title: "Управление и мотивация команд", source: "SETTERS", level: 9 },
  { year: "2025", title: "Re:start. Дао-Перезагрузка", source: "Ирина Хакамада", level: 8 },
  { year: "2024", title: "Менторская программа «Новый шаг»", source: "Forbes Woman · ментор Сколково", level: 7 },
  { year: "2023", title: "Формула прибыли", source: "Илья Балахнин", level: 6 },
  { year: "2022", title: "Директор по маркетингу", source: "Qmarketing Academy", level: 5 },
  { year: "2019", title: "Бизнес-школа управления", source: "Visotsky Consulting Inc.", level: 4 },
  { year: "2015", title: "Высшее образование", source: "СПбГУП", level: 3 },
  { year: "2010", title: "Школа журналистики", source: "СПбГУП", level: 2 },
  { year: "2009", title: "Малый журфак", source: "НовГУ им. Ярослава Мудрого", level: 1 },
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
  const source = {
    scale: "assets/case-scale-dashboard.svg",
    profit: "assets/case-profit-dashboard.svg",
    shop: "assets/case-shop-dashboard.svg",
    product: "assets/case-product-dashboard.svg",
  }[type];
  return (
    <div className="case-art">
      <img src={source} alt="" />
    </div>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className={`case-card case-${item.scene}`}>
      <div className="case-copy">
        <p>{item.context}</p>
        <h3>{item.title}</h3>
        <div className="case-logic">
          <div><span>Задача</span><p>{item.task}</p></div>
          <div><span>Подход</span><p>{item.approach}</p></div>
          <div><span>Решение</span><p>{item.solution}</p></div>
        </div>
      </div>
      <div className="case-dashboard">
        <CaseScene type={item.scene} />
      </div>
    </article>
  );
}

function EducationObject({ level }: { level: number }) {
  const fill = Math.max(0, Math.min(100, (level / education.length) * 100));
  const liquidHeight = Math.max(7, Math.min(72, (level / education.length) * 72));
  return (
    <div
      className="edu-vessel"
      aria-hidden="true"
      style={{ "--vessel-fill": `${fill}%`, "--liquid-height": `${liquidHeight}%` } as React.CSSProperties}
    >
      <div className="vessel-liquid" />
      <div className="vessel-glass" />
      {Array.from({ length: education.length }).map((_, index) => (
        <span
          key={index}
          className={`${index < level ? "filled" : ""} ${index === level - 1 ? "active" : ""}`}
          style={{ "--i": index } as React.CSSProperties}
        />
      ))}
      <i className="vessel-highlight" />
    </div>
  );
}

export default function App() {
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(education[0].level);
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
          <h2>Кейсы</h2>
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
          <h2>Обучение</h2>
        </div>
        <div className="education-layout">
          <EducationObject level={activeLevel} />
          <div className="edu-list">
            {education.map((row, index) => (
              <article
                className={activeLevel === row.level ? "edu active" : "edu"}
                key={`${row.year}-${row.title}`}
                onMouseEnter={() => setActiveLevel(row.level)}
                onFocus={() => setActiveLevel(row.level)}
                onClick={() => setActiveLevel(row.level)}
                tabIndex={0}
              >
                <time>{row.year}</time>
                <h3>{row.title}</h3>
                <p>{row.source}</p>
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
