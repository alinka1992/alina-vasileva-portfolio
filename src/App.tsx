import { useEffect, useState } from "react";

const clients = [
  "A101",
  "ФК ЗЕНИТ",
  "ГАЗПРОМНЕФТЬ",
  "METRO",
  "SOKOLOV",
  "DANONE",
  "СИБУР",
  "ЛСР",
  "LEVEL",
  "RWB",
  "АЗБУКА ВКУСА",
];

const timeline = [
  {
    years: "2026 — н.в.",
    company: "Медиа Инсайт",
    role: "Коммерческий директор (CCO)",
    result: "×4,7 оборот · ×8,3 маржа",
  },
  {
    years: "2023 — 2025",
    company: "Интерэстейт / SETEVIE",
    role: "Зам. генерального / исполнительный директор",
    result: "+71% выручка · +41 проект",
  },
  {
    years: "2019 — 2022",
    company: "GARWIN",
    role: "Руководитель маркетинга и PR",
    result: "×3 сумма заявок · CPO ÷2",
  },
  {
    years: "2016 — 2019",
    company: "Альянс",
    role: "Директор по развитию / Head of Growth",
    result: "+86% выручка и прибыль",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={diagonal ? "arrow diagonal" : "arrow"}
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="В начало страницы">
          AV<span>®</span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Основная навигация">
          <a href="#impact" onClick={closeMenu}>Результаты</a>
          <a href="#cases" onClick={closeMenu}>Кейсы</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#about" onClick={closeMenu}>Обо мне</a>
        </nav>
        <a className="header-cta" href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">
          Связаться <span>↗</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <img className="hero-liquid" src="assets/hero-liquid.webp" alt="Абстрактная стеклянная форма — метафора роста" />

        <div className="hero-kicker reveal">
          <span className="status-dot" />
          CCO · Business Development · Санкт-Петербург
        </div>

        <div className="hero-copy">
          <p className="eyebrow reveal">Алина Васильева · Executive portfolio / 2026</p>
          <h1 className="reveal">
            Создаю системы,
            <span>которые растут.</span>
          </h1>
          <p className="hero-lead reveal">
            Коммерческий директор, операционный лидер и growth‑стратег. Соединяю продажи,
            маркетинг, процессы и людей в предсказуемый бизнес‑результат.
          </p>
          <div className="hero-actions reveal">
            <a className="button button-dark" href="#cases">
              Смотреть кейсы <Arrow />
            </a>
            <a className="button button-light" href="alina-vasileva-resume.pdf" download>
              Резюме, PDF <span className="download-icon">↓</span>
            </a>
          </div>
        </div>

        <div className="portrait-card reveal">
          <img src="assets/alina-portrait.jpg" alt="Алина Васильева" />
          <div>
            <strong>9 лет</strong>
            <span>в росте, маркетинге и коммерции</span>
          </div>
        </div>

        <div className="hero-footnote">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>55°45′ N · 37°37′ E</span>
        </div>
      </section>

      <section className="statement section-pad">
        <div className="section-label reveal"><span>01</span> Мой фокус</div>
        <div className="statement-copy reveal">
          <p>Я прихожу туда, где амбиции уже большие,</p>
          <h2>
            а системе нужно
            <em>успеть за ними.</em>
          </h2>
        </div>
        <p className="statement-note reveal">
          Не «управляю функцией», а собираю работающую конструкцию: стратегия → команда →
          воронка → экономика → результат.
        </p>
      </section>

      <section className="impact" id="impact">
        <div className="impact-glow" />
        <div className="section-pad impact-inner">
          <div className="section-label light reveal"><span>02</span> Impact</div>
          <div className="impact-heading reveal">
            <p>Результат — не обещание.</p>
            <h2>Это цифры.</h2>
          </div>

          <div className="metric-grid">
            <article className="metric reveal">
              <span>01 / Оборот</span>
              <strong>×4,7</strong>
              <p>рост направления за 4 месяца</p>
            </article>
            <article className="metric reveal">
              <span>02 / Маржа</span>
              <strong>×8,3</strong>
              <p>рост за тот же период</p>
            </article>
            <article className="metric reveal lime">
              <span>03 / Выручка</span>
              <strong>+71%</strong>
              <p>годовая динамика агентства</p>
            </article>
            <article className="metric reveal">
              <span>04 / Growth</span>
              <strong>+86%</strong>
              <p>выручка и прибыль бизнеса</p>
            </article>
          </div>

          <div className="clients-row reveal" aria-label="Клиенты и бренды">
            <span>Портфель /</span>
            <div className="marquee">
              <div className="marquee-track">
                {[...clients, ...clients].map((client, index) => (
                  <b key={`${client}-${index}`}>{client}</b>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cases section-pad" id="cases">
        <div className="cases-head reveal">
          <div className="section-label"><span>03</span> Избранные кейсы</div>
          <h2>Рост — это<br /><i>спроектированный</i> результат.</h2>
          <p>Три контекста. Одна логика: найти точку роста, собрать систему, довести до цифр.</p>
        </div>

        <article className="case case-dark reveal">
          <div className="case-copy">
            <div className="case-meta">
              <span>CASE 01</span><span>2026 — н.в.</span>
            </div>
            <div>
              <p className="case-company">Медиа Инсайт · CCO</p>
              <h3>Коммерческое ускорение за 4 месяца.</h3>
              <p className="case-description">
                Пересобрала коммерческое управление digital‑направлением: лидогенерацию,
                квалификацию, пресейл, тендеры, переговоры и запуск проектов.
              </p>
            </div>
            <div className="case-facts">
              <div><strong>69</strong><span>квалифицированных встреч</span></div>
              <div><strong>40+</strong><span>коммерческих предложений</span></div>
              <div><strong>22,5%</strong><span>КП → сделка</span></div>
              <div><strong>8 / 2</strong><span>запусков / победы в тендерах</span></div>
            </div>
          </div>
          <div className="case-visual dark-visual">
            <img src="assets/case-growth.webp" alt="Абстрактная визуализация коммерческого роста" />
            <div className="case-badge">×8,3 <span>маржа</span></div>
          </div>
        </article>

        <article className="case case-pale reveal">
          <div className="case-copy">
            <div className="case-meta">
              <span>CASE 02</span><span>2023 — 2025</span>
            </div>
            <div>
              <p className="case-company">Интерэстейт / SETEVIE · Executive director</p>
              <h3>Из агентства — в управляемую бизнес‑систему.</h3>
              <p className="case-description">
                Стратегия продуктовых направлений, P&amp;L, кросс‑функциональная команда,
                CRM, 1С, DataLens и AI. Собственник вышел из большей части операционных задач.
              </p>
            </div>
            <div className="case-facts">
              <div><strong>+71%</strong><span>динамика выручки</span></div>
              <div><strong>+41</strong><span>новый проект</span></div>
              <div><strong>5×</strong><span>меньше операционки собственника</span></div>
              <div><strong>C‑level</strong><span>защиты и контракты</span></div>
            </div>
          </div>
          <div className="case-visual pale-visual">
            <img src="assets/case-systems.webp" alt="Абстрактная визуализация бизнес-системы" />
            <div className="system-tags">
              <span>CRM</span><span>1С</span><span>BI</span><span>AI</span>
            </div>
          </div>
        </article>

        <div className="split-cases">
          <article className="mini-case reveal">
            <div className="case-meta"><span>CASE 03</span><span>2019 — 2022</span></div>
            <p>GARWIN · Head of Marketing &amp; PR</p>
            <h3>×4 трафик.<br />CPO в 2 раза ниже.</h3>
            <div className="mini-graph" aria-hidden="true">
              <i style={{ height: "28%" }} /><i style={{ height: "42%" }} /><i style={{ height: "61%" }} /><i style={{ height: "88%" }} />
            </div>
            <span>Сумма заявок выросла в 3 раза за 9 месяцев</span>
          </article>
          <article className="mini-case mini-case-accent reveal">
            <div className="case-meta"><span>CASE 04</span><span>2016 — 2019</span></div>
            <p>Альянс · Head of Growth</p>
            <h3>Новый бизнес‑юнит<br />с маржинальностью 80%.</h3>
            <div className="orbit" aria-hidden="true"><i /><i /><b>+86%</b></div>
            <span>Рост выручки и прибыли компании</span>
          </article>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="kinetic-line" aria-hidden="true">BUSINESS · GROWTH · OPERATIONS ·</div>
        <div className="section-pad experience-inner">
          <div className="section-label light reveal"><span>04</span> Карьера</div>
          <div className="experience-title reveal">
            <h2>Четыре этапа.<br />Одна траектория — <i>вверх.</i></h2>
            <p>Business development → marketing → operations → CCO</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-item reveal" key={item.company}>
                <div className="timeline-index">0{index + 1}</div>
                <time>{item.years}</time>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method section-pad">
        <div className="section-label reveal"><span>05</span> Как я работаю</div>
        <div className="method-grid">
          <div className="method-intro reveal">
            <h2>Вижу бизнес<br />целиком.</h2>
            <p>Не отделяю коммерцию от продукта, процессы от людей, а стратегию от P&amp;L.</p>
          </div>
          <article className="method-card method-card-wide reveal">
            <span>01</span>
            <h3>Диагностирую</h3>
            <p>Воронка, экономика, продукт, клиентский путь, ограничения команды и процессов.</p>
            <div className="scan-lines" aria-hidden="true" />
          </article>
          <article className="method-card dark reveal">
            <span>02</span>
            <h3>Проектирую</h3>
            <p>Стратегия, целевая модель, роли, KPI / OKR, ритм управления и точки контроля.</p>
            <div className="node-map" aria-hidden="true"><i /><i /><i /><i /></div>
          </article>
          <article className="method-card lime-card reveal">
            <span>03</span>
            <h3>Запускаю</h3>
            <p>Собираю команду, синхронизирую функции и довожу решения до работающей практики.</p>
            <Arrow diagonal />
          </article>
          <article className="method-card method-card-wide reveal">
            <span>04</span>
            <h3>Масштабирую</h3>
            <p>Автоматизация, CRM / ERP / BI / AI, прозрачная управленческая отчетность.</p>
            <div className="scale-number">×5</div>
          </article>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-photo reveal">
          <img src="assets/alina-portrait.jpg" alt="Портрет Алины Васильевой" />
          <span>Санкт-Петербург · готова к командировкам</span>
        </div>
        <div className="about-copy">
          <div className="section-label reveal"><span>06</span> За цифрами</div>
          <h2 className="reveal">Моя суперсила —<br /><i>продавать идеи</i> и собирать людей вокруг них.</h2>
          <p className="reveal">
            Я лидер‑стратег и кризис‑менеджер. Люблю динамику, сложные переговоры и задачи,
            в которых нужно не поддерживать статус‑кво, а менять систему.
          </p>
          <div className="about-quote reveal">
            <span>—</span>
            <p>«Создала уникальный продукт и сделала из этого бизнес»</p>
          </div>
          <div className="interest-row reveal">
            <span>Хайкинг</span><span>Японизм</span><span>AI</span><span>Путь Сантьяго</span>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orb" />
        <div className="contact-copy reveal">
          <p>Открыта к сильным бизнес‑задачам</p>
          <h2>Давайте создавать<br />рост <i>вместе.</i></h2>
          <div className="contact-actions">
            <a className="button button-dark" href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">
              Написать в Telegram <Arrow diagonal />
            </a>
            <a className="text-link" href="mailto:alinavasileva.jour@gmail.com">alinavasileva.jour@gmail.com <span>↗</span></a>
            <a className="text-link" href="alina-vasileva-resume.pdf" download>Скачать полное резюме <span>↓</span></a>
          </div>
        </div>
        <footer>
          <div className="monogram footer-logo">AV<span>®</span></div>
          <p>Коммерческий директор · Head of Business Development</p>
          <p>© 2026 Алина Васильева · alinavasileva.jour@gmail.com</p>
        </footer>
      </section>
    </main>
  );
}
