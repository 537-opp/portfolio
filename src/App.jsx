import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    name: 'English Bot',
    desc: 'Telegram-бот для изучения английского с AI. Словарный тренажёр, разговорная практика, грамматика, стрики — всё прямо в Telegram.',
    stack: ['Node.js', 'Groq AI', 'PostgreSQL', 'Railway'],
    link: 'https://t.me/The_best_english_helper_bot',
    emoji: '🧠',
    cta: 'Открыть бота',
  },
  {
    name: 'Todo App',
    desc: 'AI-powered менеджер задач. Умные подсказки, приоритеты, чистый интерфейс. Работает прямо в браузере.',
    stack: ['Node.js', 'HTML/CSS', 'AI'],
    link: 'https://537-opp.github.io/todo-app/',
    emoji: '✅',
    cta: 'Открыть приложение',
  },
]

const SKILLS = ['Node.js', 'React', 'Telegram Bot API', 'PostgreSQL', 'Groq AI', 'Git', 'Railway', 'Vite']

const SERVICES = [
  { icon: '🤖', title: 'Telegram-боты', desc: 'Автоматизация, уведомления, AI-ассистенты прямо в мессенджере' },
  { icon: '⚡', title: 'Автоматизация', desc: 'Убираем рутину: парсинг, рассылки, интеграции между сервисами' },
  { icon: '🌐', title: 'Веб-приложения', desc: 'Лендинги, дашборды, инструменты под конкретную задачу' },
  { icon: '🧠', title: 'AI-интеграции', desc: 'Встраиваем GPT/Groq в любой продукт — чат, анализ, генерация' },
]

export default function App() {
  const [visible, setVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Mulish:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --surface: #111111;
          --border: #222222;
          --accent: #e8ff47;
          --accent2: #ff6b6b;
          --text: #f0f0f0;
          --muted: #555;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Mulish', sans-serif;
          overflow-x: hidden;
          width: 100%;
        }

        ::selection { background: var(--accent); color: #000; }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 150px;
        }

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          padding: 20px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(12px);
        }

        .nav-logo {
          font-family: 'Unbounded', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
        }

        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: var(--text); }

        .wrap {
          width: 100%;
          padding: 0 48px;
        }

    

        .divider {
          height: 1px;
          background: var(--border);
          width: 100%;
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 80px;
          position: relative;
          width: 100%;
          padding-left: 48px;
          padding-right: 48px;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--muted);
          text-transform: uppercase;
          margin-bottom: 24px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.1s;
        }

        .hero-label.show { opacity: 1; transform: none; }

        .hero-title {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(36px, 5.5vw, 80px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s ease 0.2s;
          max-width: 900px;
        }

        .hero-title.show { opacity: 1; transform: none; }
        .hero-title .accent { color: var(--accent); }
        .hero-title .dim { color: var(--muted); }

        .hero-sub {
          margin-top: 32px;
          font-size: 16px;
          color: var(--muted);
          font-weight: 300;
          max-width: 520px;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.4s;
        }

        .hero-sub.show { opacity: 1; transform: none; }

        .hero-cta {
          margin-top: 48px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.5s;
        }

        .hero-cta.show { opacity: 1; transform: none; }

        .btn-primary {
          padding: 14px 28px;
          background: var(--accent);
          color: #000;
          font-family: 'Unbounded', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          display: inline-block;
        }

        .btn-primary:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 var(--accent2);
        }

        .btn-ghost {
          padding: 14px 28px;
          background: transparent;
          color: var(--text);
          font-family: 'Unbounded', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-decoration: none;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
        }

        .btn-ghost:hover { border-color: var(--text); }

        .hero-corner {
          position: absolute;
          bottom: 40px;
          right: 48px;
          font-family: 'Unbounded', sans-serif;
          font-size: 11px;
          color: var(--border);
          writing-mode: vertical-rl;
          letter-spacing: 0.15em;
        }

        /* PAIN SECTION */
        .pain {
          padding: 100px 0;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pain-title {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 700;
          margin-bottom: 48px;
          max-width: 600px;
          line-height: 1.3;
        }

        .pain-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .pain-item {
          background: var(--bg);
          padding: 32px;
          transition: background 0.2s;
        }

        .pain-item:hover { background: var(--surface); }

        .pain-icon { font-size: 28px; margin-bottom: 14px; }

        .pain-item h3 {
          font-family: 'Unbounded', sans-serif;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .pain-item p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        /* ABOUT */
        .about {
          padding: 100px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-title {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          line-height: 1.25;
        }

        .about-text {
          color: var(--muted);
          line-height: 1.8;
          font-size: 15px;
          margin-top: 20px;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          padding: 6px 14px;
          border: 1px solid var(--border);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.05em;
          transition: all 0.2s;
          cursor: default;
        }

        .skill-tag:hover { border-color: var(--accent); color: var(--accent); }

        /* PROJECTS */
        .projects { padding: 100px 0; }

        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
        }

        .projects-title {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(22px, 3vw, 36px);
          font-weight: 700;
        }

        .projects-count {
          font-family: 'Unbounded', sans-serif;
          font-size: 64px;
          font-weight: 900;
          color: var(--border);
          line-height: 1;
        }

        .project-card {
          border: 1px solid var(--border);
          padding: 36px;
          margin-bottom: 16px;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .project-card:hover { border-color: var(--accent); background: rgba(232,255,71,0.02); }

        .project-inner {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          gap: 24px;
          align-items: start;
        }

        .project-emoji { font-size: 36px; line-height: 1; }

        .project-name {
          font-family: 'Unbounded', sans-serif;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .project-desc {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .project-stack { display: flex; flex-wrap: wrap; gap: 6px; }

        .stack-tag {
          font-size: 11px;
          padding: 3px 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--muted);
          letter-spacing: 0.05em;
        }

        .project-cta {
          font-family: 'Unbounded', sans-serif;
          font-size: 10px;
          color: var(--accent);
          letter-spacing: 0.1em;
          white-space: nowrap;
          margin-top: 4px;
        }

        /* CONTACT */
        .contact { padding: 100px 0 120px; text-align: center; }

        .contact-title {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .contact-title .accent { color: var(--accent); }
        .contact-sub { color: var(--muted); font-size: 15px; margin-bottom: 48px; }

        .contact-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        footer {
          border-top: 1px solid var(--border);
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        footer span { font-size: 12px; color: var(--border); }

        @media (max-width: 768px) {
          nav { padding: 16px 20px; }
          .nav-links { gap: 20px; }
          .wrap { padding: 0 20px; }
          .hero { padding-left: 20px; padding-right: 20px; }
          .hero-corner { right: 20px; }
          .about { grid-template-columns: 1fr; gap: 40px; }
          .pain-grid { grid-template-columns: 1fr; }
          .project-inner { grid-template-columns: 40px 1fr; gap: 16px; }
          .project-inner > .project-cta { display: none; }
          .projects-header { flex-direction: column; align-items: flex-start; gap: 8px; }
          .projects-count { font-size: 40px; }
          footer { flex-direction: column; gap: 8px; text-align: center; padding: 20px; }
        }
      `}</style>

      <div className="noise" />

      <nav>
        <div className="nav-logo">ILYA.DEV</div>
        <ul className="nav-links">
          <li><a href="#pain">Чем помогу</a></li>
          <li><a href="#projects">Проекты</a></li>
          <li><a href="#contact">Контакт</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className={`hero-label ${visible ? 'show' : ''}`}>Разработка · Автоматизация · AI</div>
          <h1 className={`hero-title ${visible ? 'show' : ''}`}>
            Устал делать<br />
            90% задач <span className="accent">руками?</span><br />
            <span className="dim">Читай ниже.</span>
          </h1>
          <p className={`hero-sub ${visible ? 'show' : ''}`}>
            Строю Telegram-боты, автоматизации и AI-инструменты
            для бизнеса и личных задач. Быстро, без лишнего.
          </p>
          <div className={`hero-cta ${visible ? 'show' : ''}`}>
            <a href="#pain" className="btn-primary">Что я делаю</a>
            <a href="#contact" className="btn-ghost">Написать</a>
          </div>
          <div className="hero-corner">PORTFOLIO 2026</div>
        </div>
      </div>

      <div className="divider" />

      {/* PAIN / SERVICES */}
      <div className="wrap" id="pain">
        <div className="inner">
          <div className="pain">
            <div className="section-label">— Чем помогу</div>
            <h2 className="pain-title">Не хватает клиентов? Устал от рутины? Нужен AI в продукте?</h2>
            <div className="pain-grid">
              {SERVICES.map(s => (
                <div key={s.title} className="pain-item">
                  <div className="pain-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ABOUT */}
      <div className="wrap" id="about">
        <div className="inner">
          <div className="about">
            <div>
              <div className="section-label">— О себе</div>
              <h2 className="about-title">Илья.<br />Учусь кодить<br />делая реальные вещи.</h2>
              <p className="about-text">
                Начал с нуля, дошёл до задеплоенных проектов с реальными пользователями.
                Вайб-кодинг — это не про халяву, это про скорость мысли и итерации.
                Каждый проект — новый уровень.
              </p>
            </div>
            <div>
              <div className="section-label">— Стек</div>
              <div className="skills-grid">
                {SKILLS.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* PROJECTS */}
      <div className="wrap" id="projects">
        <div className="inner">
          <div className="projects">
            <div className="projects-header">
              <div>
                <div className="section-label">— Проекты</div>
                <h2 className="projects-title">Что я построил</h2>
              </div>
              <div className="projects-count">0{PROJECTS.length}</div>
            </div>

            {PROJECTS.map((p) => (
              <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="project-card">
                <div className="project-inner">
                  <div className="project-emoji">{p.emoji}</div>
                  <div>
                    <div className="project-name">{p.name}</div>
                    <div className="project-desc">{p.desc}</div>
                    <div className="project-stack">
                      {p.stack.map(t => (
                        <span key={t} className="stack-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-cta">{p.cta} →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* CONTACT */}
      <div className="wrap" id="contact">
        <div className="inner">
          <div className="contact">
            <h2 className="contact-title">
              Есть идея?<br />
              <span className="accent">Пиши.</span>
            </h2>
            <p className="contact-sub">Всегда открыт для интересных проектов и коллабораций.</p>
            <div className="contact-links">
              <a href="https://t.me/aintdopesmoker" className="btn-primary">Telegram</a>
              <a href="https://github.com/537-opp" className="btn-ghost" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 Илья</span>
        <span>Сделано с AI и кофе ☕</span>
      </footer>
    </>
  )
}