import { useEffect, useRef, useState } from "react";

type CaseSceneType = "scale" | "profit" | "shop" | "product";

type CaseItem = {
  title: string;
  context: string;
  task: string;
  approach: string;
  solution: string;
  scene: CaseSceneType;
};

type ExperienceItem = {
  year: string;
  company: string;
  role: string;
  summary: string;
};

const cases: CaseItem[] = [
  {
    title: "Масштабирование направления",
    context: "операционное управление",
    task: "Увеличить объём направления и сделать процессы управляемыми.",
    approach: "Связать продажи, проекты, отчётность и автоматизацию в один контур.",
    solution: "Настроены Битрикс24, 1С, DataLens и AI-инструменты. Рост выручки — 71%, запущен 41 новый проект.",
    scene: "scale",
  },
  {
    title: "Рост прибыли",
    context: "коммерческое управление",
    task: "Усилить коммерческий результат направления и довести сделки до запуска.",
    approach: "Управление пресейлом, КП, тендерами, прогнозом оборота и маржинальной прибыли.",
    solution: "Оборот направления вырос в 4,7 раза, маржинальная прибыль — в 8,3 раза. Запущено 8 проектов и подготовлено КП более чем на 40 млн ₽.",
    scene: "profit",
  },
  {
    title: "Увеличение продаж интернет-магазина",
    context: "маркетинг / сайт / контент",
    task: "Увеличить поток заявок и повысить эффективность сайта и контент-производства.",
    approach: "Пересобрать связку «контент → сайт → заявка» и ускорить выпуск материалов.",
    solution: "Заявки выросли в 3 раза, производство контента — в 5 раз, конверсия сайта — на 16%.",
    scene: "shop",
  },
  {
    title: "Создание продукта с 0",
    context: "новый бизнес-юнит",
    task: "Запустить самостоятельный продуктовый юнит с понятной экономикой.",
    approach: "Сформировать продукт, упаковку, каналы спроса и коммерческую модель без рекламной зависимости.",
    solution: "Создан продукт с маржинальностью 80%+, потоком 40 лидов в месяц и нулевыми рекламными вложениями.",
    scene: "product",
  },
];

const experience: ExperienceItem[] = [
  { year: "2026", company: "Медиа Инсайт", role: "Коммерческий директор / CCO", summary: "Коммерческий контур, продажи, пресейл, тендеры" },
  { year: "2023 — 2025", company: "Интерэстейт", role: "Исполнительный директор / COO", summary: "P&L, процессы, команда, отчётность" },
  { year: "2019 — 2022", company: "Сетевые коммуникации", role: "Руководитель маркетинга и PR", summary: "Маркетинг, PR, сайт, контент, лидогенерация" },
  { year: "2016 — 2019", company: "Альянс ТМ", role: "Директор по развитию", summary: "Новые продукты, партнёрства, продажи" },
];

const education = [
  { year: "2026", title: "Бизнес-анализ", source: "ASPEX · бизнес-аналитик", level: 11 },
  { year: "2026", title: "Старт в 1С", source: "1С", level: 10 },
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
  return null;
}

const sceneAlt: Record<CaseSceneType, string> = {
  scale: "Автоматизация процессов: рост выручки на 71% и 41 новый проект",
  profit: "Рост прибыли: реальный ноутбук с графиком роста и показателями",
  shop: "Рост продаж интернет-магазина: контент, заявки и конверсия",
  product: "Создание продукта с нуля: дартс и показатели продукта",
};

const sceneSource: Record<CaseSceneType, string> = {
  scale: "assets/case-scale-dashboard.svg",
  profit: "assets/case-profit-photo.svg",
  shop: "assets/case-shop-dashboard.svg",
  product: "assets/case-product-photo.svg",
};

const neonPath: Record<CaseSceneType, string> = {
  scale: "M250 1320 C345 1270 425 1195 510 1170 S660 1080 740 1010 820 950 875 900",
  profit: "M292 712 C350 690 392 652 445 626 S530 568 590 535 680 470 808 390",
  shop: "M160 870 C245 845 320 790 400 730 S520 650 610 565 700 470 810 385",
  product: "M548 565 C575 552 600 536 625 515",
};

const neonViewBox: Record<CaseSceneType, string> = {
  scale: "0 0 900 1599",
  profit: "0 0 900 1200",
  shop: "0 0 900 1200",
  product: "0 0 900 1200",
};

function CaseScene({ type }: { type: CaseSceneType }) {
  return (
    <div className="case-art">
      <img src={sceneSource[type]} alt={sceneAlt[type]} />
      <svg className={`case-neon case-neon-${type}`} viewBox={neonViewBox[type]} aria-hidden="true">
        <path d={neonPath[type]} />
      </svg>
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
      <div className="case-dashboard case-dashboard-shadow">
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <main ref={mainRef}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />

      <header>
        <a className="brand brand-word" href="#top" onClick={closeMenu}>Портфолио</a>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#cases" onClick={closeMenu}>Кейсы</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#education" onClick={closeMenu}>Образование</a>
          <a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Меню"><i /><i /></button>
      </header>

      <section className="hero" id="top">
        <HeroDashboard />
        <div className="hero-copy reveal visible">
          <div className="hero-links hero-links-top">
            <a href="#cases">Кейсы ↓</a>
            <a href="alina-vasileva-resume.pdf" download>Резюме PDF ↓</a>
          </div>
          <h1>Алина<br /><em>Васильева</em></h1>
          <p>Коммерческий директор · CCO · COO</p>
          <div className="hero-fact"><b>12 лет</b><span>в управлении</span></div>
        </div>
        <div className="portrait reveal visible">
          <img src="assets/alina-portrait.jpg" alt="Алина Васильева" />
        </div>
      </section>

      <section className="section cases" id="cases">
        <div className="section-head reveal">
          <h2>Кейсы</h2>
        </div>
        {cases.map((item) => <CaseCard item={item} key={item.title} />)}
      </section>

      <section className="section experience" id="experience">
        <div className="section-head reveal">
          <h2>Опыт работы</h2>
        </div>
        <div className="table table-horizontal">
          {experience.map((row) => (
            <article className="table-row reveal" key={`${row.year}-${row.company}`}>
              <time>{row.year}</time>
              <p>{row.role}</p>
              <h3>{row.company}</h3>
              <span>{row.summary}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <div className="section-head reveal">
          <h2>Обучение</h2>
        </div>
        <div className="education-layout">
          <EducationObject level={activeLevel} />
          <div className="edu-list">
            {education.map((row) => (
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
        <h2>Ваш бизнес<br />должен расти</h2>
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
