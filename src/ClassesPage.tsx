import { useEffect } from "react";

const classOptions = [
  {
    number: "01",
    category: "LEARN TOGETHER",
    title: "Regular class",
    description: "Build your practice alongside other learners in a welcoming group setting. A shared way to explore Balinese dance and learn at a steady, collective pace.",
    note: "Ask the studio about current class details.",
    tone: "regular",
  },
  {
    number: "02",
    category: "YOUR OWN PACE",
    title: "Private class",
    description: "Explore the movements in a focused session shaped around your learning. A one-to-one option for people who would like a more personal class setting.",
    note: "Ask the studio about current class details.",
    tone: "private",
  },
  {
    number: "03",
    category: "NEW CLASS",
    title: "Makeup class",
    description: "A new class option from Sanggar Tari Bali Kartini. Get in touch to learn what the Makeup Class includes and ask for the latest information.",
    note: "Format, availability, and other details have not been provided yet.",
    tone: "makeup",
  },
];

function ClassesPage() {
  useEffect(() => {
    document.title = "Classes — Sanggar Tari Bali Kartini";
  }, []);

  return (
    <main id="main" className="classes-page">
      <section className="classes-page-hero section-shell" aria-labelledby="classes-page-title">
        <div className="section-kicker"><span>THE CLASSES</span><span className="kicker-rule" /><span>LEARN IN PERSON</span></div>
        <div className="classes-page-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-star" aria-hidden="true">✳</span> Find a way to begin</p>
            <h1 id="classes-page-title">Make room<br />for <em>movement.</em></h1>
          </div>
          <p>Explore the class options at Sanggar Tari Bali Kartini. Choose a format that interests you, then contact the studio for the current details.</p>
        </div>
        <a className="text-link classes-page-jump" href="#class-options">Explore the options <span aria-hidden="true">↓</span></a>
      </section>

      <section className="classes-page-options" id="class-options" aria-labelledby="class-options-title">
        <div className="section-shell">
          <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>CHOOSE YOUR CLASS</span></div>
          <h2 className="classes-options-title" id="class-options-title">Three ways to <em>explore.</em></h2>
          <div className="classes-detail-list">
            {classOptions.map((option) => (
              <article className={`class-detail-card class-detail-${option.tone}`} key={option.number}>
                <div className="class-detail-marker">
                  <span>{option.number}</span>
                  <i aria-hidden="true">✳</i>
                </div>
                <div className="class-detail-main">
                  <p className="card-label">{option.category}</p>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>
                <div className="class-detail-aside">
                  <p>{option.note}</p>
                  <a className="card-link" href="/#contact">Ask about this class <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>
          <p className="classes-page-footnote"><span aria-hidden="true">✳</span> Class availability, schedules, and fees can be discussed directly with the studio.</p>
        </div>
      </section>

      <section className="classes-page-contact section-shell" aria-labelledby="classes-contact-title">
        <div>
          <p className="eyebrow">Not sure where to start?</p>
          <h2 id="classes-contact-title">Let’s find your<br /><em>first step.</em></h2>
        </div>
        <div>
          <p>Send an enquiry to learn more about the class options, availability, and current details.</p>
          <a className="button button-dark" href="/#contact">Contact the studio <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}

export default ClassesPage;
