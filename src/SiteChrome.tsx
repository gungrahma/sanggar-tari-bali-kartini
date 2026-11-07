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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Sanggar Tari Bali Kartini home" onClick={closeMenu}>
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
          <a href="/story" onClick={closeMenu}>Our story</a>
          <a href="/classes" onClick={closeMenu}>Classes</a>
          <a className="nav-cta" href="/#contact" onClick={closeMenu}>Get in touch <ArrowUpRight /></a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="brand footer-brand" href="/">
          <BrandMark />
          <span className="brand-name">Sanggar Tari<br /><strong>Bali Kartini</strong></span>
        </a>
        <p>Dance, passed on with care.</p>
        <a className="back-top" href="/#home">Back to top <span aria-hidden="true">↑</span></a>
        <span className="footer-year">EST. 1960</span>
      </div>
    </footer>
  );
}
