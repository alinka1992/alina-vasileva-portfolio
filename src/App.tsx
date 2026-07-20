import { useEffect, useState } from "react";
import { cases, education, experience, expertise } from "./content";
import ExpertiseIcon from "./ExpertiseIcon";
import HeroTrend from "./HeroTrend";
import CaseVisual from "./CaseVisual";

const base = import.meta.env.BASE_URL;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenu(); };
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
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="tech-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="На главную">AV <span>/</span><small>ПОРТФОЛИО</small></a>
        <button className={menuOpen ? "menu-button is-open" : "menu-button"} type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /></button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Основная навигация">
          <a href="#about" onClick={closeMenu}>Профиль</a>
          <a href="#expertise" onClick={closeMenu}>Экспертиза</a>
          <a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#education" onClick={closeMenu}>Обучение</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Связаться <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Коммерческий директор · CCO · COO</p>
          <h1 id="hero-title"><span>Алина</span><span>Васильева</span></h1>
          <p className="hero-lead">Строю коммерческие системы: соединяю стратегию, маркетинг, продажи и процессы в управляемую модель роста.</p>
          <div className="hero-actions">
            <a className="button-link" href="#projects">Смотреть проекты <span>↘</span></a>
            <a className="text-link" href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF <span>↓</span></a>
          </div>
          <dl className="hero-facts">
            <div><dt>12+</dt><dd>лет в управлении</dd></div>
            <div><dt>4</dt><dd>управленческих направления</dd></div>
            <div><dt>СПб · Москва</dt><dd>проекты по России</dd></div>
          </dl>
        </div>
        <div className="hero-media">
          <HeroTrend />
          <div className="portrait-aura" aria-hidden="true" />
          <img className="hero-portrait" src={`${base}assets/alina-portrait-cutout.svg`} alt="Алина Васильева" />
        </div>
      </section>

      <section className="section intro" id="about" data-reveal>
        <div className="section-heading"><p>01 / Профиль</p><h2>Управление ростом на стыке коммерции, маркетинга и операционной системы.</h2></div>
        <p className="wide-copy">Работаю с собственниками и руководителями: определяю точки роста, собираю модель, выстраиваю команду и довожу изменения до измеримого результата.</p>
      </section>

      <section className="section expertise" id="expertise" data-reveal>
        <div className="section-heading"><p>02 / Экспертиза</p><h2>Четыре управленческих контура</h2></div>
        <div className="expertise-grid">
          {expertise.map((item,index) => (
            <article className="expertise-item" key={item.title}>
              <div className="expertise-icon"><ExpertiseIcon type={item.icon} /></div>
              <span className="item-number">0{index+1}</span>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading" data-reveal><p>03 / Проекты</p><h2>Факты и растущие тренды</h2></div>
        <div className="project-list">
          {cases.map((project,index) => (
            <article className={`case-panel case-${project.visual}`} key={project.number} data-reveal>
              <div className="case-copy">
                <p className="project-label">{project.number} · {project.label}</p>
                <h3>{project.title}</h3><p className="case-description">{project.text}</p>
                <div className={`metric-grid metric-grid-${project.facts.length}`}>
                  {project.facts.map(([value,caption]) => <div key={`${value}-${caption}`}><strong>{value}</strong><span>{caption}</span></div>)}
                </div>
              </div>
              <div className="visual-shell" aria-label={`Визуализация кейса ${index+1}`}><CaseVisual type={project.visual} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience" data-reveal>
        <div className="section-heading"><p>04 / Опыт</p><h2>Управленческий трек</h2></div>
        <div className="experience-list">{experience.map(([years,role,company,scope]) => <article key={`${years}-${company}`}><time>{years}</time><h3>{role}</h3><p className="company">{company}</p><p className="scope">{scope}</p></article>)}</div>
      </section>

      <section className="section education" id="education" data-reveal>
        <div className="section-heading"><p>05 / Обучение</p><h2>Актуальные инструменты управления</h2></div>
        <div className="education-list">{education.map(([year,title,source]) => <article key={`${year}-${title}`}><time>{year}</time><h3>{title}</h3><p>{source}</p></article>)}</div>
      </section>

      <section className="contact" id="contact" data-reveal>
        <div className="contact-inner">
          <p className="section-label">06 / Контакты</p><h2>Связаться</h2>
          <p className="contact-lead">Обсудить задачу, коммерческую систему или управленческий контур.</p>
          <div className="contact-list">
            <a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong><b>↗</b></a>
            <a href="mailto:alinavasileva.jour@gmail.com"><span>Email</span><strong>alinavasileva.jour@gmail.com</strong><b>↗</b></a>
            <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong><b>↗</b></a>
          </div>
          <footer><span>Алина Васильева · 2026</span><a href="#top">Наверх ↑</a></footer>
        </div>
      </section>
    </main>
  );
}
