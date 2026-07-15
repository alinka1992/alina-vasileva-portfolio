import { useEffect, useState } from "react";

const facts = [
  { value: "×4,7", label: "оборот направления", note: "за 4 месяца" },
  { value: "×8,3", label: "маржа направления", note: "за тот же период" },
  { value: "+71%", label: "выручка агентства", note: "год к году" },
  { value: "+86%", label: "выручка и прибыль", note: "проект развития" },
];

const experience = [
  ["2026 — н.в.", "Медиа Инсайт", "Коммерческий директор (CCO)", "Коммерческая система digital-направления"],
  ["2023 — 2025", "Интерэстейт / SETEVIE", "Заместитель генерального / исполнительный директор", "P&L, стратегия, процессы, команда"],
  ["2019 — 2022", "GARWIN", "Руководитель маркетинга и PR", "Маркетинг, PR, лидогенерация"],
  ["2016 — 2019", "Альянс", "Директор по развитию / Head of Growth", "Новые направления и партнёрства"],
];

const education = [
  ["2026", "Бизнес-анализ", "ASPEX · бизнес-аналитик"],
  ["2026", "Старт в 1С", "1С · 6 академических часов"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman · ментор Сколково"],
  ["2023", "Формула прибыли", "Илья Балахнин"],
  ["2022", "Директор по маркетингу", "Qmarketing Academy"],
  ["2022", "Яндекс.Директ", "Электронный сертификат"],
  ["2019", "Бизнес-школа управления", "Visotsky Consulting Inc."],
  ["2015", "Высшее образование", "СПбГУП"],
  ["2010", "Школа журналистики", "СПбГУП"],
  ["2009", "Малый журфак", "НовГУ им. Ярослава Мудрого"],
];

const managementAreas = [
  ["Стратегия и P&L", "Планирование · бюджетирование · юнит-экономика · управленческая отчётность"],
  ["Коммерческое управление", "Продажи · лидогенерация · пресейл · тендеры · переговоры"],
  ["Маркетинг и PR", "Стратегия · performance · контент · репутация · аналитика"],
  ["Процессы и автоматизация", "CRM · 1С · BI · регламенты · интеграция AI"],
  ["Команда и мотивация", "Оргструктура · KPI · подбор · развитие · кросс-функциональная работа"],
];

function MiniDashboard() {
  return (
    <div className="dashboard" aria-hidden="true">
      <div className="dash-top">
        <span>EXECUTIVE CONTROL / 2026</span><i /><i /><i />
      </div>
      <div className="dash-chart">
        <svg viewBox="0 0 600 190" preserveAspectRatio="none">
          <path className="grid-line" d="M0 35H600M0 80H600M0 125H600M0 170H600" />
          <path className="trend-shadow" d="M0 164 C70 150 80 155 125 132 S190 129 226 105 S300 104 340 75 S415 85 455 54 S530 55 600 16" />
          <path className="trend" d="M0 164 C70 150 80 155 125 132 S190 129 226 105 S300 104 340 75 S415 85 455 54 S530 55 600 16" />
        </svg>
        <span className="dash-caption">DYNAMICS</span>
      </div>
      <div className="dash-flow">
        <div><b>01</b><span>LEAD</span></div><i /><div><b>02</b><span>QUALIFY</span></div><i /><div><b>03</b><span>DEAL</span></div>
      </div>
      <div className="dash-table">
        {["SALES", "MARKETING", "OPERATIONS", "TEAM"].map((item, i) => (
          <div key={item}><span>{item}</span><i style={{ width: `${52 + i * 12}%` }} /><b>{i + 1}/4</b></div>
        ))}
      </div>
      <div className="dash-nodes"><i /><i /><i /><i /><span /></div>
    </div>
  );
}

function Funnel() {
  return (
    <div className="funnel" aria-hidden="true">
      <div className="funnel-ring r1"><i /><i /><i /><i /></div>
      <div className="funnel-ring r2"><i /><i /><i /></div>
      <div className="funnel-ring r3"><i /><i /></div>
      <div className="funnel-core" />
      <span className="funnel-out" />
    </div>
  );
}

function PuzzleSystem() {
  const modules = ["P&L", "CRM", "1С", "BI", "KPI", "SALES", "TEAM", "AI", "REPORTS"];
  return (
    <div className="puzzle-system" aria-hidden="true">
      {modules.map((module, i) => <i key={module} style={{ "--n": i } as React.CSSProperties}><span>{module}</span></i>)}
      <div className="system-axis"><span>CRM</span><span>1С</span><span>BI</span><span>AI</span></div>
    </div>
  );
}

function SalesFunnel() {
  const stages = [
    ["69", "квалифицированных встреч"],
    ["40+", "КП в pipeline"],
    ["8", "запусков проектов"],
    ["2", "тендерные победы"],
  ];
  return (
    <div className="sales-funnel" aria-label="Показатели коммерческой воронки">
      {stages.map((stage, i) => <div className="sales-stage" key={stage[1]} style={{ "--stage": i } as React.CSSProperties}><b>{stage[0]}</b><span>{stage[1]}</span></div>)}
      <div className="conversion-pair"><span><b>37,5%</b> лид / встреча → КП</span><span><b>22,5%</b> КП → сделка</span></div>
    </div>
  );
}

function OperationsDashboard() {
  return (
    <div className="operations-dashboard" aria-label="Показатели операционного управления">
      <div className="ops-main"><span>ВЫРУЧКА / ГОД К ГОДУ</span><b>+71%</b><i /></div>
      <div className="ops-row"><span><b>41</b> новый проект</span><span><b>5×</b> ниже занятость собственника в операционных задачах</span></div>
      <div className="ops-stack"><span>Битрикс24</span><span>1С</span><span>DataLens</span><span>AI</span></div>
    </div>
  );
}

function MarketingDashboard() {
  const rows = [["Трафик", "×4", 92], ["Сумма заявок", "×3", 72], ["Эффективность контента", "×5", 100], ["CPO", "÷2", 48]];
  return <div className="metric-dashboard" aria-label="Результаты маркетинга">{rows.map((row, i) => <div key={row[0]}><span>{row[0]}</span><i><b style={{ "--metric": `${row[2]}%`, "--delay": i } as React.CSSProperties} /></i><strong>{row[1]}</strong></div>)}</div>;
}

function GrowthDashboard() {
  const metrics = [["+86%", "выручка и прибыль"], ["40", "лидов в месяц"], ["+150%", "охват"], ["80%", "маржинальность нового юнита"]];
  return <div className="growth-dashboard" aria-label="Результаты развития направления">{metrics.map((metric, i) => <div key={metric[1]} style={{ "--delay": i } as React.CSSProperties}><b>{metric[0]}</b><span>{metric[1]}</span></div>)}</div>;
}

function CaseText({ task, approach, solution }: { task: string; approach: string; solution: string }) {
  return (
    <div className="case-structure">
      <div><span>Задача</span><p>{task}</p></div>
      <div><span>Подход</span><p>{approach}</p></div>
      <div><span>Решение</span><p>{solution}</p></div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max ? scrollY / max : 0);
      document.documentElement.style.setProperty("--scroll", String(scrollY));
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <main>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header>
        <a className="brand" href="#top">AV<span>/ CCO</span></a>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#facts">Факты</a><a href="#cases">Кейсы</a><a href="#career">Опыт</a><a href="#education">Образование</a>
        </nav>
        <a className="contact-link" href="mailto:alinavasileva.jour@gmail.com">Контакты ↗</a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню"><i /><i /></button>
      </header>

      <section className="hero" id="top">
        <MiniDashboard />
        <div className="hero-copy reveal">
          <p className="index">ПОРТФОЛИО / 2026</p>
          <h1>Алина<br/><span>Васильева</span></h1>
          <h2>Коммерческий и операционный директор</h2>
          <div className="hero-fact"><strong>12 лет</strong><span>в управлении</span></div>
          <div className="hero-links"><a href="#cases">Кейсы ↓</a><a href="alina-vasileva-resume.pdf" download>Резюме PDF ↓</a></div>
        </div>
        <div className="portrait reveal">
          <img src="assets/alina-portrait.jpg" alt="Алина Васильева" />
        </div>
        <div className="location">САНКТ-ПЕТЕРБУРГ · ГОТОВА К КОМАНДИРОВКАМ</div>
        <div className="scroll-cue"><span /> SCROLL</div>
      </section>

      <section className="facts section" id="facts">
        <div className="section-head reveal"><span>01 / ПОКАЗАТЕЛИ</span><h2>Ключевые<br/>показатели</h2><p>Результаты по завершённым периодам и проектам.</p></div>
        <div className="fact-grid">
          {facts.map((fact, i) => <article className="fact reveal" key={fact.value}><span>0{i + 1}</span><strong>{fact.value}</strong><h3>{fact.label}</h3><p>{fact.note}</p><i /></article>)}
        </div>
        <div className="control-table reveal">
          <div className="table-title"><span>УПРАВЛЕНЧЕСКИЙ КОНТУР</span><b>ЗОНЫ ОТВЕТСТВЕННОСТИ</b></div>
          {managementAreas.map((item, i) => <div className="table-row" key={item[0]}><span>0{i + 1}</span><strong>{item[0]}</strong><p>{item[1]}</p><em>IN SCOPE</em></div>)}
        </div>
      </section>

      <section className="cases section" id="cases">
        <div className="section-head reveal"><span>02 / КЕЙСЫ</span><h2>Реализованные<br/>задачи</h2><p>Контекст, зона ответственности, выполненные действия и результат.</p></div>

        <article className="case commercial reveal">
          <div className="case-copy"><div className="case-no">КЕЙС 01 / 2026</div><p>Медиа Инсайт · коммерческий директор</p><h3>Коммерческое управление digital-направлением</h3><CaseText task="Сформировать управляемый коммерческий контур digital-направления: от привлечения и квалификации лида до запуска проекта." approach="Единый цикл продаж, пресейла и тендерной работы с контролем прогнозной выручки, маржинальности и следующих шагов в CRM." solution="Планы продаж по выручке и марже; подготовка и защита КП; управление пресейлом; переговоры на C-level; контроль экономики сделок и запуска проектов." /></div>
          <div className="case-viz"><div className="viz-label">РЕЗУЛЬТАТ / 4 МЕСЯЦА</div><SalesFunnel /><div className="result-strip"><b>×4,7<span>оборот направления</span></b><b>×8,3<span>маржа направления</span></b></div></div>
        </article>

        <article className="case systems reveal">
          <div className="case-copy"><div className="case-no">КЕЙС 02 / 2023—2025</div><p>Интерэстейт / SETEVIE · исполнительный директор</p><h3>Систематизация операционного управления</h3><CaseText task="Обеспечить рост агентства и снизить зависимость ежедневной работы от участия собственника." approach="Управление продуктовой стратегией, бюджетами, P&L, топ-менеджментом и кросс-функциональными командами." solution="Внедрение Битрикс24, 1С, DataLens и AI; настройка процессов и управленческой отчётности; комплектование штата; KPI и OKR; управление тендерами и контрактами." /></div>
          <div className="case-viz"><div className="viz-label">РЕЗУЛЬТАТ / 2,5 ГОДА</div><OperationsDashboard /><PuzzleSystem /></div>
        </article>

        <div className="case-pair">
          <article className="compact-case reveal"><span>КЕЙС 03 / GARWIN / 2019—2022</span><h3>Маркетинг и PR федерального поставщика</h3><CaseText task="Управлять маркетингом и онлайн-продажами компании с ассортиментом более 100 000 SKU." approach="Многоканальные кампании, медиапланирование, бюджетирование и управление рекламой, PR и производством контента." solution="Сформирована команда; организовано производство контента; настроено управление кампаниями и контроль расходов." /><MarketingDashboard /></article>
          <article className="compact-case reveal"><span>КЕЙС 04 / АЛЬЯНС / 2016—2019</span><h3>Развитие бизнеса и нового направления</h3><CaseText task="Создать стабильный поток клиентов и запустить новое направление юридической компании." approach="Стратегии привлечения, партнёрский маркетинг, корпоративные коммуникации и PR." solution="Партнёрства с Торгово-промышленной палатой, Центром помощи мигрантам и migranto.ru; запуск нового бизнес-юнита." /><GrowthDashboard /></article>
        </div>
      </section>

      <section className="career section" id="career">
        <div className="section-head reveal"><span>03 / ОПЫТ</span><h2>Опыт работы</h2><p>Должности и зоны ответственности с 2016 года.</p></div>
        <div className="career-table">
          {experience.map((row, i) => <article className="career-row reveal" key={row[1]}><span>0{i + 1}</span><time>{row[0]}</time><h3>{row[1]}</h3><p>{row[2]}</p><b>{row[3]}</b></article>)}
        </div>
      </section>

      <section className="education section" id="education">
        <div className="section-head reveal"><span>04 / ОБРАЗОВАНИЕ</span><h2>Образование<br/>и программы</h2><p>Высшее образование и дополнительное обучение.</p></div>
        <div className="edu-grid">
          {education.map((row, i) => <article className="edu reveal" key={`${row[0]}-${row[1]}`}><span>{String(i + 1).padStart(2, "0")}</span><time>{row[0]}</time><h3>{row[1]}</h3><p>{row[2]}</p><i>↗</i></article>)}
        </div>
        <div className="certificate-strip reveal"><span>ПОДТВЕРЖДЕНИЯ</span><div><b>ASPEX TECH CAMP</b><small>Business Analyst · 2026</small></div><div><b>1С-ОБРАЗОВАНИЕ</b><small>Старт в 1С · № DK387416</small></div><div><b>ЯНДЕКС.ДИРЕКТ</b><small>Электронный сертификат · 2022</small></div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-dashboard" aria-hidden="true"><MiniDashboard /></div>
        <div className="contact-copy reveal"><span>05 / КОНТАКТЫ</span><h2>Контакты</h2><p>Коммерческий директор</p><div><a href="mailto:alinavasileva.jour@gmail.com">alinavasileva.jour@gmail.com ↗</a><a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">Telegram ↗</a><a href="alina-vasileva-resume.pdf" download>Резюме PDF ↓</a></div></div>
        <footer><span>Санкт-Петербург · 2026</span><span>Коммерческий директор</span><span>alinavasileva.jour@gmail.com</span></footer>
      </section>
    </main>
  );
}
