import { useEffect, useState } from "react";
import { cases, clientPortfolio, education, experience, expertise } from "./content";
import ExpertiseIcon from "./ExpertiseIcon";
import HeroTrend from "./HeroTrend";
import CaseVisual from "./CaseVisual";

const base = import.meta.env.BASE_URL;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -5%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="tech-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="На главную">
          AV <span>/</span><small>ПОРТФОЛИО</small>
        </a>
        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        ><span /><span /></button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Основная навигация">
          <a href="#expertise" onClick={closeMenu}>Экспертиза</a>
          <a href="#clients" onClick={closeMenu}>Клиенты</a>
          <a href="#projects" onClick={closeMenu}>Кейсы</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#education" onClick={closeMenu}>Образование</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Связаться <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Коммерческий директор / CCO · Head of Business Development</p>
          <h1 id="hero-title"><span>Алина</span><span>Васильева</span></h1>
          <p className="hero-lead">Строю коммерческие системы и точки роста: соединяю продажи, маркетинг, процессы, аналитику и команду в управляемую модель результата.</p>
          <p className="hero-profile">Работаю с собственниками и C-level — от диагностики и стратегии до внедрения изменений и измеримого эффекта.</p>
          <div className="hero-actions">
            <a className="button-link" href="#projects">Смотреть кейсы <span>↘</span></a>
            <a className="text-link" href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF <span>↓</span></a>
          </div>
          <dl className="hero-facts">
            <div><dt>8+</dt><dd>лет в коммерции и управлении</dd></div>
            <div><dt>4</dt><dd>управленческих контура</dd></div>
            <div><dt>СПб · РФ</dt><dd>готова к командировкам</dd></div>
          </dl>
        </div>
        <div className="hero-media" aria-hidden="true">
          <HeroTrend />
          <img
            className="hero-portrait"
            src={`${base}assets/alina-portrait.jpg`}
            alt=""
            width="640"
            height="640"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = `${base}assets/alina-portrait-cutout.svg`;
            }}
          />
        </div>
      </section>

      <section className="section expertise" id="expertise" data-reveal>
        <div className="section-heading compact-heading">
          <p>Экспертиза</p>
          <h2>Четыре управленческих контура</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-item" key={item.title}>
              <div className="expertise-icon"><ExpertiseIcon type={item.icon} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section clients" id="clients" data-reveal>
        <p className="section-label client-label">Клиентский портфель</p>
        <div className="client-marquee" tabIndex={0} aria-label="Клиентский портфель: бренды и компании">
          <div className="client-marquee-track">
            {[0, 1].map((copy) => (
              <div className="client-marquee-group" aria-hidden={copy === 1} key={copy}>
                {clientPortfolio.map((client) => <span key={`${copy}-${client}`}>{client}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="projects-intro" data-reveal>
          <div className="section-heading">
            <p>Бизнес-кейсы</p>
            <h2>Результаты, подтверждённые цифрами</h2>
          </div>
          <div className="projects-directions" aria-label="Направления кейсов">
            <span>Коммерция</span>
            <span>Операционное управление</span>
            <span>Маркетинг</span>
            <span>Запуск продукта</span>
          </div>
        </div>
        <div className="project-list">
          {cases.map((project, index) => (
            <article className={`case-panel case-${project.visual}`} key={project.title} data-reveal>
              <div className="case-copy">
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="case-description">{project.text}</p>
                <div className={`metric-grid metric-grid-${project.facts.length}`}>
                  {project.facts.map(([value, caption]) => (
                    <div className={value.length > 7 ? "metric-long" : undefined} key={`${value}-${caption}`}>
                      <strong>{value}</strong><span>{caption}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="visual-shell" aria-label={`Визуализация кейса ${index + 1}`}>
                <CaseVisual type={project.visual} />
              </div>
              <details className="case-details">
                <summary>Подробнее о кейсе <span aria-hidden="true">↓</span></summary>
                <div className="case-details-grid">
                  <section><h4>Проблема</h4><p>{project.details.problem}</p></section>
                  <section><h4>Подход</h4><p>{project.details.approach}</p></section>
                  <section><h4>Решение</h4><p>{project.details.solution}</p></section>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience" data-reveal>
        <div className="section-heading compact-heading"><p>Опыт</p><h2>Управленческий трек</h2></div>
        <div className="experience-track" aria-label="Карьерный трек от 2026 к 2016 году">
          {experience.map(([years, role, company, scope]) => (
            <article className="experience-step" key={`${years}-${company}`}>
              <time>{years}</time>
              <h3>{role}</h3>
              <p className="company">{company}</p>
              <p className="scope">{scope}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education" data-reveal>
        <div className="education-layout">
          <div className="education-heading">
            <p className="section-label">Образование</p>
            <h2>Образование и курсы повышения квалификации</h2>
            <p>Системное управление, маркетинг, аналитика, автоматизация и развитие команд.</p>
          </div>
          <div className="education-list">
            {education.map(([year, title, source]) => (
              <article key={`${year}-${title}`}><time>{year}</time><div><h3>{title}</h3><p>{source}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact" data-reveal>
        <div className="contact-inner">
          <p className="section-label">Контакты</p><h2>Связаться</h2>
          <p className="contact-lead">Обсудить коммерческую задачу, развитие направления или управленческую систему.</p>
          <div className="contact-list">
            <a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong><b>↗</b></a>
            <a href="mailto:alinavasileva.jour@mail.ru"><span>Email</span><strong>alinavasileva.jour@mail.ru</strong><b>↗</b></a>
            <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong><b>↗</b></a>
          </div>
          <footer><span>Алина Васильева · 2026</span><a href="#top">Наверх ↑</a></footer>
        </div>
      </section>
    </main>
  );
}
