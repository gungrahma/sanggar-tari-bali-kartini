import { useState } from "react";

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function BrandMark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="currentColor" />
      <path d="M20 6c1 3.3 3 5.1 6.2 5.1-1.8 1.7-2.6 3.5-2.3 5.4 2.9-1.9 6-1.7 9.2.7-4.1.9-6.3 2.7-6.7 5.3 3-.5 5.3.3 6.9 2.4-3.6-.3-6.2.8-7.7 3.1 2.7.5 4.4 2 5.2 4.5-3.5-1.7-7-1.9-10.4-.8-3.4-1.1-6.9-.9-10.4.8.8-2.5 2.5-4 5.2-4.5-1.5-2.3-4.1-3.4-7.7-3.1 1.6-2.1 3.9-2.9 6.9-2.4-.4-2.6-2.6-4.4-6.7-5.3 3.2-2.4 6.3-2.6 9.2-.7.3-1.9-.5-3.7-2.3-5.4C17 11.1 19 9.3 20 6Z" fill="#f7e9be" />
    </svg>
  );
}

function DancerArtwork() {
  return (
    <svg
      className="dancer-art"
      viewBox="0 0 620 680"
      role="img"
      aria-labelledby="dancer-title dancer-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="dancer-title">A colorful illustration of a Balinese dancer</title>
      <desc id="dancer-description">A dancer in a golden headdress and coral-red costume, poised against a warm sunset stage.</desc>
      <defs>
        <linearGradient id="stage" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f19467" />
          <stop offset="1" stopColor="#ca4d3e" />
        </linearGradient>
        <linearGradient id="skirt" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8c3444" />
          <stop offset="1" stopColor="#492d42" />
        </linearGradient>
        <pattern id="dots" width="17" height="17" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.7" fill="#fff3d2" fillOpacity=".42" />
        </pattern>
      </defs>
      <rect width="620" height="680" rx="30" fill="url(#stage)" />
      <circle cx="468" cy="132" r="151" fill="#f6ca7a" fillOpacity=".7" />
      <circle cx="468" cy="132" r="108" fill="none" stroke="#fff0d0" strokeOpacity=".42" strokeWidth="1.5" />
      <path d="M0 500c104-72 205-66 305 1s197 70 315-3v182H0Z" fill="#8d594c" fillOpacity=".3" />
      <path d="M0 558c127-58 251-33 373 11 89 32 168 24 247-13v124H0Z" fill="#f2bc6e" fillOpacity=".4" />
      <path d="M35 90c42 7 61 39 52 96M574 310c-43-1-63 25-64 75" stroke="#fff1d2" strokeOpacity=".44" strokeWidth="2" strokeLinecap="round" />
      <path d="m66 154 12-17 13 17-13 18ZM546 395l12-17 13 17-13 18Z" fill="#f7d27c" fillOpacity=".85" />
      <g className="dancer-figure" stroke="#482c36" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M283 286c-55-20-94-48-129-91-22-27-36-54-42-78M393 291c54-21 98-54 143-101 20-21 34-45 44-70" fill="none" stroke="#f7d27c" strokeWidth="13" />
        <path d="M112 117c-7-9-17-10-24-5-8 7-6 19 2 24l23 13M580 121c7-10 18-11 25-5 7 7 6 18-2 24l-23 13" fill="#f7d27c" strokeWidth="5" />
        <path d="M265 266c2-29 17-50 47-61h46c31 11 46 32 48 61l20 127-95 43-91-43Z" fill="#e65d4c" />
        <path d="M300 205c12 10 23 14 35 14s23-4 35-14l-13 28h-44Z" fill="#f7d27c" strokeWidth="5" />
        <path d="M273 384c-17 68-31 137-61 204 54 19 109 24 168 14 55-9 99-26 143-53-37-29-61-64-77-106-12-32-19-63-22-92-54 28-99 39-151 33Z" fill="url(#skirt)" />
        <path d="M236 485c67 21 135 24 201 5M219 535c85 22 161 17 251-12" fill="none" stroke="#e8b55e" strokeWidth="7" />
        <path d="M317 216c-2 28-2 49-1 67M352 216c2 28 2 49 1 67" fill="none" stroke="#f7d27c" strokeWidth="6" />
        <path d="M289 271c19 22 34 31 48 31s29-9 48-31" fill="none" stroke="#482c36" strokeWidth="5" />
        <path d="M299 237c-15 0-27 4-36 12M369 249c9-8 21-12 36-12" fill="none" stroke="#482c36" strokeWidth="5" />
        <path d="M326 304c-26 22-38 48-37 79M345 304c27 22 39 48 38 79" fill="none" stroke="#482c36" strokeWidth="7" />
        <path d="M291 377c-34 2-66-7-99-29M383 378c39 4 72-4 102-23" fill="none" stroke="#f7d27c" strokeWidth="11" />
        <circle cx="190" cy="348" r="10" fill="#f7d27c" strokeWidth="4" />
        <circle cx="485" cy="349" r="10" fill="#f7d27c" strokeWidth="4" />
        <path d="M308 596c-18 17-43 26-75 27M420 598c23 13 49 18 77 13" fill="none" stroke="#482c36" strokeWidth="9" />
        <path d="M307 111c3-29 20-44 47-45 31-1 49 17 51 49l-14 40c-14 14-29 21-45 21-18 0-33-8-46-24Z" fill="#f0bd83" strokeWidth="5" />
        <path d="M300 123c-10-38 3-77 31-92 3 22 15 33 32 33 13-16 21-35 22-58 35 15 48 52 38 108l-14 17c0-23-8-39-22-49-16 18-45 29-87 41Z" transform="translate(0 41)" fill="#f3c45f" strokeWidth="5" />
        <path d="M296 142c28-7 54-22 75-44 13 13 25 21 42 23" transform="translate(0 38)" fill="none" stroke="#9e553d" strokeWidth="6" />
        <circle cx="334" cy="134" r="4" fill="#482c36" stroke="none" />
        <circle cx="369" cy="134" r="4" fill="#482c36" stroke="none" />
        <path d="M337 156c9 7 18 7 27 0" fill="none" stroke="#a94e44" strokeWidth="4" />
        <path d="M310 101c-26-18-32-42-18-71 17 8 27 21 30 41M366 82c8-32 28-48 59-48 0 27-9 46-29 60M330 69c-2-27 9-45 34-55 12 23 11 41-4 57" fill="#efc263" strokeWidth="5" />
        <path d="M315 175c16 9 44 10 64 1" fill="none" stroke="#f8df99" strokeWidth="5" />
      </g>
      <path d="M78 624h464" stroke="url(#dots)" strokeWidth="25" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Sanggar Tari Bali Kartini home" onClick={closeMenu}>
            <BrandMark />
            <span className="brand-name">Sanggar Tari<br /><strong>Bali Kartini</strong></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden="true" className={`menu-icon${menuOpen ? " is-open" : ""}`}><i /><i /></span>
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#story" onClick={closeMenu}>Our story</a>
            <a href="#classes" onClick={closeMenu}>Classes</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-star" aria-hidden="true">✳</span> A living tradition, since 1960</p>
            <h1 id="hero-title">A story told<br />one <span>step</span> at a time.</h1>
            <p className="hero-description">Find your rhythm in the expressive world of Balinese dance. Learn in person, move with intention, and carry a beautiful tradition forward.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#classes">Explore our classes <ArrowUpRight /></a>
              <a className="text-link" href="#story">Get to know us <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <p>For curious beginners<br />and returning dancers alike</p>
            </div>
          </div>
          <div className="hero-art-wrap">
            <div className="art-stamp" role="img" aria-label="Dance with meaning, since 1960">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <defs><path id="stamp-circle" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" /></defs>
                <text><textPath href="#stamp-circle">DANCE WITH MEANING · SINCE 1960 · </textPath></text>
              </svg>
              <span aria-hidden="true">✳</span>
            </div>
            <DancerArtwork />
            <span className="art-caption">Grace. Story. Connection.</span>
          </div>
          <a className="scroll-cue" href="#story"><span aria-hidden="true">↓</span> Scroll to discover</a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <span className="marquee-content" key={copy}>
                <span>Move with meaning</span><i>✳</i><span>Learn together</span><i>✳</i><span>Carry tradition forward</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="story section-shell" id="story" aria-labelledby="story-title">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>THE STUDIO</span></div>
          <div className="story-grid">
            <div className="story-heading">
              <p className="eyebrow">A heritage in motion</p>
              <h2 id="story-title">Some stories<br />are <em>felt</em>, not told.</h2>
            </div>
            <div className="story-body">
              <p className="story-lead">Sanggar Tari Bali Kartini has been a place to learn Balinese dance since 1960.</p>
              <p>Every gesture has a story. Every movement asks us to listen, observe, and express. Come as you are and discover a practice shaped by rhythm, presence, and the joy of learning together.</p>
              <a className="text-link story-link" href="#classes">Find your way into dance <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="story-bottom">
            <span className="story-year">1960<span>—</span></span>
            <p>More than a starting point.<br />A tradition still in motion.</p>
            <div className="story-sun" aria-hidden="true"><span>✳</span></div>
          </div>
        </section>

        <section className="classes-section" id="classes" aria-labelledby="classes-title">
          <div className="classes-inner section-shell">
            <div className="section-kicker section-kicker-light"><span>02</span><span className="kicker-rule" /><span>FIND YOUR RHYTHM</span></div>
            <div className="classes-intro">
              <div>
                <p className="eyebrow eyebrow-light">Learn in person</p>
                <h2 id="classes-title">Your first step<br />starts <em>here.</em></h2>
              </div>
              <p>Choose the way you’d like to learn. Both options are held offline; details can be shared when you get in touch.</p>
            </div>
            <div className="class-cards">
              <article className="class-card class-card-regular">
                <div className="card-topline"><span>01 / TOGETHER</span><span className="card-spark" aria-hidden="true">✳</span></div>
                <div className="card-illustration regular-illustration" aria-hidden="true">
                  <span className="mini-orbit orbit-one" /><span className="mini-orbit orbit-two" />
                  <span className="figure-dot dot-one" /><span className="figure-dot dot-two" /><span className="figure-dot dot-three" />
                  <span className="group-caption">A shared<br />practice</span>
                </div>
                <div className="card-copy">
                  <p className="card-label">LEARN TOGETHER</p>
                  <h3>Regular class</h3>
                  <p>Build your practice alongside other learners in a welcoming group setting.</p>
                  <a className="card-link" href="#contact">Ask about regular class <ArrowUpRight /></a>
                </div>
              </article>
              <article className="class-card class-card-private">
                <div className="card-topline"><span>02 / ONE TO ONE</span><span className="card-spark" aria-hidden="true">✳</span></div>
                <div className="card-illustration private-illustration" aria-hidden="true">
                  <span className="private-sun" />
                  <span className="private-orbit" />
                  <span className="private-figure"><i /><i /><i /><i /></span>
                  <span className="group-caption">Space to<br />focus</span>
                </div>
                <div className="card-copy">
                  <p className="card-label">YOUR OWN PACE</p>
                  <h3>Private class</h3>
                  <p>Explore the movements in a focused session shaped around your learning.</p>
                  <a className="card-link" href="#contact">Ask about private class <ArrowUpRight /></a>
                </div>
              </article>
            </div>
            <p className="classes-footnote"><span aria-hidden="true">✳</span> Class availability, schedules, and fees can be discussed directly with the studio.</p>
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>LET’S BEGIN</span></div>
          <div className="contact-panel">
            <div className="contact-sun" aria-hidden="true"><span>✳</span></div>
            <div className="contact-content">
              <p className="eyebrow">Your next chapter</p>
              <h2 id="contact-title">Curiosity looks<br /><em>good</em> on you.</h2>
              <p className="contact-description">Interested in a regular or private class? We’d love to help you take the first step.</p>
              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">↗</span>
                <div><strong>Class enquiries</strong><p>The studio’s preferred contact details haven’t been provided yet.</p></div>
              </div>
            </div>
            <div className="contact-side">
              <span className="contact-asterisk" aria-hidden="true">✳</span>
              <p>Every dancer<br />begins somewhere.</p>
              <span className="contact-caption">SANGGAR TARI BALI KARTINI · SINCE 1960</span>
            </div>
          </div>
          <p className="contact-note">Official booking details can be added here when they’re available.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#home">
            <BrandMark />
            <span className="brand-name">Sanggar Tari<br /><strong>Bali Kartini</strong></span>
          </a>
          <p>Dance, passed on with care.</p>
          <a className="back-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
          <span className="footer-year">EST. 1960</span>
        </div>
      </footer>
    </>
  );
}

export default App;
