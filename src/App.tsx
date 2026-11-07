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
            <p className="eyebrow"><span className="eyebrow-star" aria-hidden="true"></span> 1980 Hingga sekarang</p>
            <h1 id="hero-title">Sanggar Tari Bali Kartini</h1>
            <p className="hero-description">Sanggar seni yang legendaris hingga mencetak 3000+ lulusan terbaik! Diajarkan oleh tutor professional dengan beberapa kelas yang bisa dipilih! </p>
            <div className="hero-actions">
              <a className="button button-dark" href="/classes">Kelas kami <ArrowUpRight /></a>
              <a className="text-link" href="/hero">Mengenal lebih jauh <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art-wrap">
            <img className="dancer-art" src={dancerArtwork} alt="A colorful illustration of a Balinese dancer in a golden headdress and coral-red costume." />
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track" aria-hidden="true">
            {[0, 1].map((copy) => (
              <span className="marquee-content" key={copy}>
                <span>Sejak 1980</span><i>✳</i><span>Kelas tari bali</span><i>✳</i><span>Bersama melestarikan tari bali</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="story section-shell" id="story" aria-labelledby="story-title">
          <div className="section-kicker"><span>01</span><span>TENTANG KAMI</span></div>
          <div className="story-grid">
            <div className="story-heading">
              <p className="eyebrow">Dimulai dari dua penari profesional</p>
              <h2 id="story-title">Pelestarian<br />dan <em>kesuksesan</em>.</h2>
            </div>
            <div className="story-body">
              <p className="story-lead">Memiliki 3000+ alumnus yang sudah sukses, Sanggar Tari Bali Kartini sudah dikenal dari 1980 hingga sekarang.</p>
              <p>Every gesture has a story. Every movement asks us to listen, observe, and express. Come as you are and discover a practice shaped by rhythm, presence, and the joy of learning together.</p>
              <a className="text-link story-link" href="/story">Baca kisah kami <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="classes-section" id="classes" aria-labelledby="classes-title">
          <div className="classes-inner section-shell">
            <div className="section-kicker section-kicker-light"><span>02</span><span>KELAS KAMI</span></div>
            <div className="classes-intro">
              <div>
                <p className="eyebrow eyebrow-light">Pilihan kelas kami</p>
                <h2 id="classes-title">Dimulai dari langkah<br />awal <em>disini.</em></h2>
              </div>
              <p>Temukan kelas yang paling sesuai dengan kebutuhan dan minat Anda.</p>
            </div>
            <div className="class-cards">
              <article className="class-card class-card-regular">
                <div className="card-topline"><span>01 / BELAJAR REGULER</span><span className="card-spark" aria-hidden="true"></span></div>
                <div className="card-illustration regular-illustration" aria-hidden="true">
                  <span className="mini-orbit orbit-one" /><span className="mini-orbit orbit-two" />
                  <span className="figure-dot dot-one" /><span className="figure-dot dot-two" /><span className="figure-dot dot-three" />
                </div>
                <div className="card-copy">
                  <h3>Kelas reguler</h3>
                  <p>Belajar tari Bali bersama teman-teman dalam lingkungan yang mendukung. Kelas dimulai setiap hari sabtu dan minggu.</p>
                  <a className="card-link" href="#contact">Tanya terkait kelas reguler <ArrowUpRight /></a>
                </div>
              </article>
              <article className="class-card class-card-private">
                <div className="card-topline"><span>02 / PRIVAT</span><span className="card-spark" aria-hidden="true"></span></div>
                <div className="card-illustration private-illustration" aria-hidden="true">
                  <span className="private-sun" />
                  <span className="private-orbit" />
                  <span className="private-figure"><i /><i /><i /><i /></span>
                </div>
                <div className="card-copy">
                  <p className="card-label">LEBIH FOKUS TERHADAP PRIBADI</p>
                  <h3>Kelas privat</h3>
                  <p>Belajar tari Bali secara individu dengan fokus pada kebutuhan dan kemampuan pribadi Anda. Jadwal dapat disesuikan (flexible).</p>
                  <a className="card-link" href="#contact">Tanya terkait kelas privat <ArrowUpRight /></a>
                </div>
              </article>
              <article className="class-card class-card-makeup">
                <div className="card-topline"><span>03 / MAKEUP (BARU)</span><span className="card-spark" aria-hidden="true"></span></div>
                <div className="card-illustration makeup-illustration" aria-hidden="true">
                  <span className="makeup-orbit makeup-orbit-one" />
                  <span className="makeup-orbit makeup-orbit-two" />
                  <span className="makeup-palette"><i /><i /><i /><i /></span>
                  <span className="group-caption">Kelas<br />terbaru dari kami!</span>
                </div>
                <div className="card-copy">
                  <p className="card-label">PEMBELAJARAN BARU</p>
                  <h3>Kelas Makeup</h3>
                  <p>Belajar makeup (terkhususnya makeup tarian bali) secara berkelompok dengan fokus pada pengenalan karakter tari bali. Jadwal tersedia hari minggu.</p>
                  <a className="card-link" href="#contact">Tanya terkait kelas makeup <ArrowUpRight /></a>
                </div>
              </article>
              <article className="class-card class-card-explore">
                <div className="card-topline"><span>LEBIH JAUH LAGI</span><span className="card-spark" aria-hidden="true"></span></div>
                <div className="card-illustration explore-illustration" aria-hidden="true">
                  <span className="explore-sun" />
                  <span className="explore-ring explore-ring-one" />
                  <span className="explore-ring explore-ring-two" />
                  <span className="explore-spark explore-spark-one">✳</span>
                  <span className="explore-spark explore-spark-two">✳</span>
                  <span className="group-caption">Ada pertanyaan <br />lebih lanjut?</span>
                </div>
                <div className="card-copy">
                  <p className="card-label">DISKUSI LEBIH LANJUT</p>
                  <h3>Lebih lanjut</h3>
                  <p>Mari berdiskusi lebih lanjut tentang kelas yang Anda minati lewat whatsapp!</p>
                  <a
                    className="card-link"
                    href={WHATSAPP_ENQUIRY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp (opens in a new tab)"
                  >
                    Kontak kami di WhatsApp <ArrowUpRight />
                  </a>
                  <p className="explore-note">Jika tidak menerima pesan dari WhatsApp, bisa menghubungi email kami.</p>
                </div>
              </article>
            </div>
            <p className="classes-footnote"><span aria-hidden="true"></span> Harga dan ketersediaan kelas dapat dibicarakan melalui kontak kami di WhatsApp.</p>
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="section-kicker"><span>03</span><span>APAKAH SUDAH SIAP</span></div>
          <div className="contact-panel">
            <div className="contact-sun" aria-hidden="true"><span>✳</span></div>
            <div className="contact-content">
              <p className="eyebrow">Dimulai dari anda!</p>
              <h2 id="contact-title">Mari membangun<br /><em>Sanggar</em> bersama kami.</h2>
              <p className="contact-description">Dengan adanya kelas-kelas yang kami sediakan, Anda bisa mulai menjalani perjalanan belajar tari Anda sekarang juga! Mari bersama bergabung membangun sanggar tari bali kartini bersama kami.</p>
            </div>
          </div>
          <p className="contact-note">Kontak kami hanya ada di WhatsApp dan email. Harap gunakan salah satu dari kedua channel tersebut untuk menghubungi kami.</p>
        </section>
      </main>}
      <SiteFooter />
    </>
  );
}

export default App;