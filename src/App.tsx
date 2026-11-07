import dancerArtwork from "./assets/balinese-dancer.svg";
import StoryPage from "./StoryPage";
import ClassesPage from "./ClassesPage";
import { SiteFooter, SiteHeader } from "./SiteChrome";

const WHATSAPP_ENQUIRY_URL = `https://wa.me/?text=${encodeURIComponent(
  "Hello! I’d like to learn more about Sanggar Tari Bali Kartini’s classes.",
)}`;

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const isStoryPage = path === "/story";
  const isClassesPage = path === "/classes";

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />

      {isStoryPage ? <StoryPage /> : isClassesPage ? <ClassesPage /> : <main id="main">
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-star" aria-hidden="true">✳</span> A living tradition, since 1960</p>
            <h1 id="hero-title">A story told<br />one <span>step</span> at a time.</h1>
            <p className="hero-description">Find your rhythm in the expressive world of Balinese dance. Learn in person, move with intention, and carry a beautiful tradition forward.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="/classes">Explore our classes <ArrowUpRight /></a>
              <a className="text-link" href="/story">Get to know us <span aria-hidden="true">↗</span></a>
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
            <img className="dancer-art" src={dancerArtwork} alt="A colorful illustration of a Balinese dancer in a golden headdress and coral-red costume." />
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
              <a className="text-link story-link" href="/story">Read our story <span aria-hidden="true">↗</span></a>
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
              <p>Explore the class options and ask the studio for details about the way you’d like to learn.</p>
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
              <article className="class-card class-card-makeup">
                <div className="card-topline"><span>03 / MAKEUP</span><span className="card-spark" aria-hidden="true">✳</span></div>
                <div className="card-illustration makeup-illustration" aria-hidden="true">
                  <span className="makeup-orbit makeup-orbit-one" />
                  <span className="makeup-orbit makeup-orbit-two" />
                  <span className="makeup-palette"><i /><i /><i /><i /></span>
                  <span className="group-caption">A new<br />way to explore</span>
                </div>
                <div className="card-copy">
                  <p className="card-label">NEW CLASS</p>
                  <h3>Makeup class</h3>
                  <p>Ask the studio about the Makeup Class and available details.</p>
                  <a className="card-link" href="#contact">Ask about makeup class <ArrowUpRight /></a>
                </div>
              </article>
              <article className="class-card class-card-explore">
                <div className="card-topline"><span>04 / KEEP EXPLORING</span><span className="card-spark" aria-hidden="true">✳</span></div>
                <div className="card-illustration explore-illustration" aria-hidden="true">
                  <span className="explore-sun" />
                  <span className="explore-ring explore-ring-one" />
                  <span className="explore-ring explore-ring-two" />
                  <span className="explore-spark explore-spark-one">✳</span>
                  <span className="explore-spark explore-spark-two">✳</span>
                  <span className="group-caption">There’s more<br />to discover</span>
                </div>
                <div className="card-copy">
                  <p className="card-label">LET’S TALK</p>
                  <h3>Explore more</h3>
                  <p>Open WhatsApp with a ready-to-send message about the classes.</p>
                  <a
                    className="card-link"
                    href={WHATSAPP_ENQUIRY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp (opens in a new tab)"
                  >
                    Contact us on WhatsApp <ArrowUpRight />
                  </a>
                  <p className="explore-note">A direct studio chat link can be added when its WhatsApp number is available.</p>
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
              <p className="contact-description">Interested in a regular, private, or makeup class? We’d love to help you take the first step.</p>
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
      </main>}
      <SiteFooter />
    </>
  );
}

export default App;
