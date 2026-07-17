import { useState } from "react";

const base = import.meta.env.BASE_URL;

const clients = [
  "ЛСР",
  "Ленстройтрест",
  "Аквилон",
  "КВС",
  "Пионер",
  "Element Development",
  "October Group",
  "King & Sons",
  "LAR Development",
  "RANTA Residence",
  "Кронфорт",
  "SKYLARK",
  "SAMI",
  "PLG",
  "GeoLine",
  "Компакт",
  "Евгеньевский",
  "SAAN",
  "Моменты Репино",
  "Инносоциум",
  "Ostankino",
  "Media Insight",
];

const expertise = [
  "Коммерческая стратегия",
  "Маркетинг и бренд",
  "Управление командой",
  "Партнёрства и развитие",
  "Аналитика и экономика",
];

const cases = [
  {
    number: "01",
    category: "Операционное управление",
    title: "Масштабирование направления",
    text: "Связала продажи, проекты, отчётность и автоматизацию в единый управляемый контур. Внедрила CRM, 1С, DataLens и AI-инструменты.",
    metrics: ["+71% выручки", "41 новый проект", "CRM · 1С · BI · AI"],
  },
  {
    number: "02",
    category: "Коммерческое управление",
    title: "Рост прибыли",
    text: "Пересобрала пресейл, коммерческие предложения, тендерный процесс и прогнозирование. Сфокусировала команду на маржинальности и запуске сделок.",
    metrics: ["×4,7 оборот", "×8,3 прибыль", "40+ млн ₽ КП"],
  },
  {
    number: "03",
    category: "Маркетинг / сайт / контент",
    title: "Увеличение продаж интернет-магазина",
    text: "Перестроила путь от контента к заявке, ускорила производство материалов и повысила эффективность сайта без усложнения пользовательского сценария.",
    metrics: ["×3 заявки", "×5 контент", "+16% конверсия"],
  },
  {
    number: "04",
    category: "Новый бизнес-юнит",
    title: "Создание продукта с нуля",
    text: "Сформировала продукт, коммерческую модель и каналы спроса. Запустила самостоятельный юнит с устойчивой экономикой без рекламной зависимости.",
    metrics: ["80%+ маржинальность", "40 лидов в месяц", "0 ₽ рекламы"],
  },
];

const experience = [
  {
    years: "2026",
    role: "Коммерческий директор / CCO",
    company: "Медиа Инсайт",
    scope: "Коммерческий контур, продажи, пресейл, тендеры",
  },
  {
    years: "2023 — 2025",
    role: "Исполнительный директор / COO",
    company: "Интерэстейт",
    scope: "P&L, процессы, команда, автоматизация",
  },
  {
    years: "2019 — 2022",
    role: "Руководитель маркетинга и PR",
    company: "Сетевые коммуникации",
    scope: "Маркетинг, PR, digital, контент, лидогенерация",
  },
  {
    years: "2016 — 2019",
    role: "Директор по развитию",
    company: "Альянс ТМ",
    scope: "Новые продукты, партнёрства, продажи",
  },
];

const education = [
  ["2026", "Бизнес-анализ", "ASPEX"],
  ["2026", "Старт в 1С", "1С"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman"],
  ["2023", "Формула прибыли", "Илья Балахнин"],
  ["2022", "Директор по маркетингу", "Qmarketing Academy"],
  ["2019", "Бизнес-школа управления", "Visotsky Consulting"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="brutal-site">
      <header className="brutal-header">
        <a className="brutal-logo" href="#top" onClick={closeMenu}>AV.</a>
        <button
          className={menuOpen ? "brutal-menu brutal-menu--open" : "brutal-menu"}
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "brutal-nav brutal-nav--open" : "brutal-nav"}>
          <a href="#about" onClick={closeMenu}>Обо мне</a>
          <a href="#expertise" onClick={closeMenu}>Экспертиза</a>
          <a href="#cases" onClick={closeMenu}>Кейсы</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
        <a className="resume-link" href={`${base}alina-vasileva-resume.pdf`} download>
          Скачать резюме <span>↗</span>
        </a>
      </header>

      <section className="brutal-hero" id="top">
        <div className="hero-copy">
          <p className="hero-index">/ 01</p>
          <h1>Алина<br />Васильева</h1>
          <p className="hero-role">Коммерческий директор <i>/</i> CCO <i>/</i> COO</p>
          <p className="hero-text">
            Строю коммерческие системы, развиваю продукты и превращаю маркетинг
            в управляемый бизнес-результат.
          </p>
          <a className="text-link" href="#about">Обо мне <span>⟶</span></a>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <span className="hero-mark__plus">+</span>
          <strong>AV</strong>
          <span className="hero-mark__side">Стратегия · Маркетинг · Рост</span>
          <span className="hero-mark__blue" />
        </div>
      </section>

      <section className="metric-band" aria-label="Ключевые показатели">
        <article>
          <strong>12+</strong>
          <span>лет в управлении</span>
        </article>
        <article>
          <strong>41</strong>
          <span>новый проект</span>
        </article>
        <article>
          <strong>+71%</strong>
          <span>рост выручки год к году</span>
        </article>
        <article className="metric-band__blue">
          <strong>40+ млн ₽</strong>
          <span>коммерческих предложений</span>
        </article>
      </section>

      <section className="manifesto-grid" id="about">
        <div className="manifesto-list" id="expertise">
          <p className="block-label">Экспертиза</p>
          <ul>
            {expertise.map((item) => (
              <li key={item}><span>{item}</span><b>+</b></li>
            ))}
          </ul>
        </div>

        <div className="manifesto-blue">
          <span className="corner corner--tl" />
          <span className="corner corner--tr" />
          <span className="corner corner--bl" />
          <span className="corner corner--br" />
          <strong>Стратегия<br />Фокус<br />Команда<br />Результат</strong>
          <b>+</b>
        </div>

        <div className="manifesto-copy">
          <p className="block-label">Подход</p>
          <h2>Соединяю стратегическое мышление, аналитику и управление, чтобы создавать устойчивые точки роста.</h2>
          <a className="text-link" href="#cases">Узнать больше <span>⟶</span></a>
        </div>
      </section>

      <section className="client-strip" aria-label="Клиентский портфель">
        <span>С кем я работаю</span>
        <div>
          {clients.map((client) => <b key={client}>{client}</b>)}
        </div>
      </section>

      <section className="brutal-cases" id="cases">
        <div className="section-title-row">
          <p>/ 02</p>
          <h2>Кейсы</h2>
          <span>Выбранные проекты</span>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className={index === 1 ? "brutal-case brutal-case--blue" : "brutal-case"} key={item.number}>
              <header>
                <span>{item.number}</span>
                <p>{item.category}</p>
              </header>
              <h3>{item.title}</h3>
              <p className="brutal-case__text">{item.text}</p>
              <div className="brutal-case__metrics">
                {item.metrics.map((metric) => <strong key={metric}>{metric}</strong>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brutal-experience" id="experience">
        <div className="section-title-row section-title-row--light">
          <p>/ 03</p>
          <h2>Опыт работы</h2>
          <span>Управленческий трек</span>
        </div>

        <div className="experience-row">
          {experience.map((item) => (
            <article key={item.years}>
              <time>{item.years}</time>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <span>{item.scope}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="brutal-education" id="education">
        <div className="section-title-row">
          <p>/ 04</p>
          <h2>Обучение</h2>
          <span>Постоянное развитие</span>
        </div>
        <div className="education-table">
          {education.map(([year, title, source]) => (
            <article key={`${year}-${title}`}>
              <time>{year}</time>
              <h3>{title}</h3>
              <p>{source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brutal-contact" id="contact">
        <div className="contact-blue">
          <p>/ 05</p>
          <h2>Ваш бизнес<br />должен расти</h2>
        </div>
        <div className="contact-black">
          <p>Открыта к сильным проектам, управленческим задачам и партнёрствам.</p>
          <div className="contact-links">
            <a href="mailto:alinavasileva.jour@gmail.com">Email ↗</a>
            <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">Telegram ↗</a>
            <a href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF ↓</a>
          </div>
          <footer>Алина Васильева · CCO / COO · 2026</footer>
        </div>
      </section>
    </main>
  );
}
