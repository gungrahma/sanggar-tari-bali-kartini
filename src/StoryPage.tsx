import { useEffect } from "react";

function StoryPage() {
  useEffect(() => {
    document.title = "Our story — Sanggar Tari Bali Kartini";
  }, []);

  return (
    <main id="main" className="story-page">
      <section className="story-hero section-shell" aria-labelledby="story-page-title">
        <div className="section-kicker"><span>OUR STORY</span><span className="kicker-rule" /><span>SINCE 1960</span></div>
        <div className="story-page-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-star" aria-hidden="true">✳</span> A Balinese dance class with a story</p>
            <h1 id="story-page-title">A tradition in motion.<br /><em>A story still unfolding.</em></h1>
          </div>
          <p className="story-page-intro">Sanggar Tari Bali Kartini is a legendary Balinese dance class, with a history dating back to 1960.</p>
        </div>
        <div className="story-page-art" aria-hidden="true">
          <span className="story-art-sun" />
          <span className="story-art-orbit story-art-orbit-one" />
          <span className="story-art-orbit story-art-orbit-two" />
          <span className="story-art-word">Bali<br />Kartini</span>
          <span className="story-art-year">1960 — TODAY</span>
          <span className="story-art-spark">✳</span>
        </div>
      </section>

      <section className="story-page-copy section-shell" aria-labelledby="story-begins-title">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>THE BEGINNING</span></div>
        <div className="story-page-copy-grid">
          <h2 id="story-begins-title">Since 1960,<br />dance has been<br /><em>at the heart.</em></h2>
          <div>
            <p className="story-page-lead">Sanggar Tari Bali Kartini’s story is rooted in Balinese dance.</p>
            <p>Since 1960, the name has stood for a place to learn this expressive art. A tradition is carried forward each time someone steps in, pays attention, and begins to move.</p>
            <p>We keep the story simple: a dance class, a living practice, and an invitation to discover what the movement means to you.</p>
          </div>
        </div>
      </section>

      <section className="story-values">
        <div className="story-values-inner section-shell">
          <div className="section-kicker section-kicker-light"><span>02</span><span className="kicker-rule" /><span>THE PRACTICE</span></div>
          <div className="story-values-grid">
            <h2>Every journey<br />starts with <em>curiosity.</em></h2>
            <div className="story-value">
              <span>01 / THE ART</span>
              <h3>Balinese dance</h3>
              <p>A dance tradition rich in expression, approached one movement at a time.</p>
            </div>
            <div className="story-value">
              <span>02 / THE INVITATION</span>
              <h3>Come learn</h3>
              <p>Explore the class options and choose a first step that feels right for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-page-end section-shell">
        <p className="eyebrow">The next step is yours</p>
        <h2>A story is better<br />when you’re <em>part of it.</em></h2>
        <a className="button button-dark" href="/classes">Explore our classes <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}

export default StoryPage;
