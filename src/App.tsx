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
  return (
    <div className="puzzle-system" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => <i key={i} style={{ "--n": i } as React.CSSProperties} />)}
      <div className="system-axis"><span>CRM</span><span>1С</span><span>BI</span><span>AI</span></div>
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
          <p className="index">EXECUTIVE PORTFOLIO / 2026</p>
          <h1>Алина<br/><span>Васильева</span></h1>
          <h2>CCO / COO</h2>
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
        <div className="section-head reveal"><span>01 / ФАКТЫ</span><h2>Измеримые<br/>результаты.</h2><p>Данные из резюме и реализованных проектов.</p></div>
        <div className="fact-grid">
          {facts.map((fact, i) => <article className="fact reveal" key={fact.value}><span>0{i + 1}</span><strong>{fact.value}</strong><h3>{fact.label}</h3><p>{fact.note}</p><i /></article>)}
        </div>
        <div className="control-table reveal">
          <div className="table-title"><span>УПРАВЛЕНЧЕСКИЙ КОНТУР</span><b>STATUS / ACTIVE</b></div>
          {["Стратегия и P&L", "Продажи и лидогенерация", "Маркетинг и PR", "Процессы и автоматизация", "Команда и мотивация"].map((item, i) => <div className="table-row" key={item}><span>0{i + 1}</span><strong>{item}</strong><i><b style={{ width: `${74 + i * 4}%` }} /></i><em>CONTROLLED</em></div>)}
        </div>
      </section>

      <section className="cases section" id="cases">
        <div className="section-head reveal"><span>02 / КЕЙСЫ</span><h2>Задача.<br/>Система. Результат.</h2><p>Без оценочных формулировок. Только контекст, действия и показатели.</p></div>

        <article className="case commercial reveal">
          <div className="case-copy"><div className="case-no">CASE 01 / 2026</div><p>Медиа Инсайт · коммерческий директор</p><h3>Пересборка коммерческого управления digital-направлением.</h3><ul><li>Лидогенерация и квалификация</li><li>Пресейл, тендеры и переговоры</li><li>Запуск проектов и контроль маржи</li></ul><div className="case-metrics"><b>69<span>встреч</span></b><b>40+<span>КП</span></b><b>22,5%<span>КП → сделка</span></b><b>8 / 2<span>запуски / тендеры</span></b></div></div>
          <div className="case-viz"><div className="viz-label">SALES PIPELINE / LIVE</div><Funnel /><div className="funnel-legend"><span>INPUT</span><span>QUALIFY</span><span>OUTPUT</span></div></div>
        </article>

        <article className="case systems reveal">
          <div className="case-copy"><div className="case-no">CASE 02 / 2023—2025</div><p>Интерэстейт / SETEVIE · исполнительный директор</p><h3>Переход от ручного управления к системе.</h3><ul><li>Стратегия продуктовых направлений и P&L</li><li>Регламенты и кросс-функциональные процессы</li><li>CRM, 1С, DataLens и AI</li></ul><div className="case-metrics"><b>+71%<span>выручка</span></b><b>41<span>проект</span></b><b>5×<span>меньше операционки</span></b></div></div>
          <div className="case-viz"><div className="viz-label">OPERATING SYSTEM / ASSEMBLY</div><PuzzleSystem /></div>
        </article>

        <div className="case-pair">
          <article className="compact-case reveal"><span>CASE 03 / GARWIN</span><h3>Маркетинг и PR</h3><div className="bar-chart"><i/><i/><i/><i/><i/></div><dl><div><dt>×4</dt><dd>трафик</dd></div><div><dt>×3</dt><dd>сумма заявок</dd></div><div><dt>÷2</dt><dd>CPO</dd></div></dl></article>
          <article className="compact-case reveal"><span>CASE 04 / АЛЬЯНС</span><h3>Новое направление</h3><div className="line-chart"><svg viewBox="0 0 500 160"><path d="M0 145 C80 135 95 120 150 125 S245 105 290 78 S380 66 500 15"/></svg></div><dl><div><dt>+86%</dt><dd>выручка и прибыль</dd></div><div><dt>80%</dt><dd>маржинальность юнита</dd></div></dl></article>
        </div>
      </section>

      <section className="career section" id="career">
        <div className="section-head reveal"><span>03 / ОПЫТ</span><h2>2016—2026.</h2><p>Развитие бизнеса → маркетинг → операционное управление → CCO.</p></div>
        <div className="career-table">
          {experience.map((row, i) => <article className="career-row reveal" key={row[1]}><span>0{i + 1}</span><time>{row[0]}</time><h3>{row[1]}</h3><p>{row[2]}</p><b>{row[3]}</b></article>)}
        </div>
      </section>

      <section className="education section" id="education">
        <div className="section-head reveal"><span>04 / ОБРАЗОВАНИЕ</span><h2>Управление.<br/>Аналитика. Маркетинг.</h2><p>Высшее образование и программы повышения квалификации.</p></div>
        <div className="edu-grid">
          {education.map((row, i) => <article className="edu reveal" key={`${row[0]}-${row[1]}`}><span>{String(i + 1).padStart(2, "0")}</span><time>{row[0]}</time><h3>{row[1]}</h3><p>{row[2]}</p><i>↗</i></article>)}
        </div>
        <div className="certificate-strip reveal"><span>ПОДТВЕРЖДЕНИЯ</span><div><b>ASPEX TECH CAMP</b><small>Business Analyst · 2026</small></div><div><b>1С-ОБРАЗОВАНИЕ</b><small>Старт в 1С · № DK387416</small></div><div><b>ЯНДЕКС.ДИРЕКТ</b><small>Электронный сертификат · 2022</small></div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-dashboard" aria-hidden="true"><MiniDashboard /></div>
        <div className="contact-copy reveal"><span>05 / КОНТАКТЫ</span><h2>Алина<br/>Васильева.</h2><p>Коммерческий директор · CCO · COO</p><div><a href="mailto:alinavasileva.jour@gmail.com">alinavasileva.jour@gmail.com ↗</a><a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">Telegram ↗</a><a href="alina-vasileva-resume.pdf" download>Резюме PDF ↓</a></div></div>
        <footer><span>Санкт-Петербург · 2026</span><span>12 лет в управлении</span><span>© Алина Васильева</span></footer>
      </section>
    </main>
  );
}
