"use client";

import Link from "next/link";

type Lang = "uk" | "en";

const COPY = {
  uk: {
    title: <>Від ідеї до компанії.</>,
    sub: "Я Андрій. ШІ-агенти та стратегія штучного інтелекту, автоматизація, вирішення проблем, запуск, архітектура, дизайн, навчання, команда, код — закриваю end-to-end. Одна людина замість цілого відділу — це нова реальність. Напиши — обговоримо.",
    email: "Написати",
    pay: "Реквізити",
    ogTitle: "Андрій — Інженер та підприємець",
    ogDesc: "AI-агенти та стратегія штучного інтелекту, запуск, архітектура, дизайн, команда, код, автоматизація, Gov-tech — end-to-end.",
  },
  en: {
    title: <>From idea to company.</>,
    sub: "I'm Andrii. AI agents and applied AI strategy, automation, problem solving, launch, architecture, design, training, team, code — I close it all end-to-end. One person instead of a whole department — this is the new reality. Reach out and let's talk.",
    email: "Email me",
    pay: "Pay me",
    ogTitle: "Andrii — Engineer & Entrepreneur",
    ogDesc: "AI agents and applied AI strategy, launch, architecture, design, team, code, automation, Gov-tech — end-to-end.",
  },
} as const;

export default function HomePage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const prefix = lang === "en" ? "/en" : "";

  return (
    <>
    <head>
      <title>{t.ogTitle}</title>
      <meta property="og:title" content={t.ogTitle} />
      <meta property="og:description" content={t.ogDesc} />
      <meta property="og:image" content={`https://andri.website/api/og?lang=${lang}`} />
      <meta name="description" content={t.ogDesc} />
      <meta name="twitter:image" content={`https://andri.website/api/og?lang=${lang}`} />
    </head>
    <main className="home-landing">
      <div className="home-float home-float--figma" aria-hidden title="Figma">
        <img src="/icons/figma.png" alt="" />
      </div>
      <div className="home-float home-float--claude" aria-hidden title="Claude">
        <img src="/icons/claude-tile.png" alt="" />
      </div>
      <div className="home-float home-float--chatgpt" aria-hidden title="ChatGPT">
        <img src="/icons/chatgpt.png" alt="" />
      </div>
      <div className="home-float home-float--gemini" aria-hidden title="Gemini">
        <img src="/icons/gemini.png" alt="" />
      </div>
      <div className="home-float home-float--vercel" aria-hidden title="Vercel">
        <img src="/icons/vercel-tile.png" alt="" />
      </div>
      <div className="home-float home-float--n8n" aria-hidden title="n8n">
        <img src="/icons/n8n.png" alt="" />
      </div>

      <div className="home-lang-switch" role="tablist" aria-label="Language switch">
        <Link
          href="/"
          className={`home-lang-button ${lang === "uk" ? "active" : ""}`}
          role="tab"
          aria-selected={lang === "uk"}
        >
          UA
        </Link>
        <Link
          href="/en"
          className={`home-lang-button ${lang === "en" ? "active" : ""}`}
          role="tab"
          aria-selected={lang === "en"}
        >
          EN
        </Link>
      </div>

      <div className="home-stage">
        <div className="home-avatar" aria-hidden>
          <video
            src="/avatar.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>

        <h1 className="home-title">{t.title}</h1>
        <p className="home-sub">{t.sub}</p>

        <div className="home-actions">
          <a className="home-btn home-btn--dark" href="mailto:sukhariev.andrii@gmail.com">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 6h16v12H4z" />
              <path d="M4 6l8 7 8-7" />
            </svg>
            {t.email}
          </a>
        </div>

        <nav className="home-links" aria-label="Links">
          <Link href={`${prefix}/requisites`} className="home-linkitem home-linkitem--active">
            {t.pay}
          </Link>
          <a href="https://www.linkedin.com/in/andrii-sukhariev-011a03b3/" target="_blank" rel="noopener noreferrer" className="home-linkitem">LinkedIn</a>
          <a href="https://github.com/asukhariev" target="_blank" rel="noopener noreferrer" className="home-linkitem">GitHub</a>
        </nav>
      </div>

    </main>
    </>
  );
}
