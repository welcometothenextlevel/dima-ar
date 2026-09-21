import { useEffect, useRef, useState } from "react";
import { business, nav, services } from "../data/content";
import { href, Photo, Link, Arrow } from "./Media";
export function Header({ path }: { path: string }) {
  const [mega, setMega] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") setMega(false);
    }
    function outside(e: MouseEvent) {
      if (!megaRef.current?.contains(e.target as Node)) setMega(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("click", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", outside);
    };
  }, []);
  function open() {
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function close() {
    dialog.current?.close();
  }
  function restore() {
    document.body.style.overflow = "";
    opener.current?.focus();
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <header className="header">
        <a href={href("/")} className="brand" aria-label="DIMA AR, accueil">
          <Photo id="29" alt="DIMA AR Carrosserie Aclens" eager sizes="170px" />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <div className="nav-services" ref={megaRef}>
            <button
              aria-expanded={mega}
              aria-controls="mega-services"
              onClick={() => setMega(!mega)}
            >
              Services <span aria-hidden="true">⌄</span>
            </button>
            {mega && (
              <div className="mega" id="mega-services">
                <div>
                  <p className="eyebrow">Le soin automobile</p>
                  <h2>
                    Une même exigence.
                    <br />
                    Neuf expertises.
                  </h2>
                  <Link to="/services">Toutes les prestations</Link>
                </div>
                <div className="mega-links">
                  {services.map((s, i) => (
                    <a key={s.slug} href={href("/services/" + s.slug)}>
                      <small>0{i + 1}</small>
                      {s.name}
                      <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.slice(1).map(([label, to]) => (
            <a
              key={to}
              href={href(to)}
              aria-current={path === to ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={href("/devis")}>
          Demander un devis <Arrow />
        </a>
        <button
          className="menu-trigger"
          ref={opener}
          onClick={open}
          aria-label="Ouvrir le menu"
        >
          Menu <span aria-hidden="true">☰</span>
        </button>
      </header>
      <dialog className="mobile-menu" ref={dialog} onClose={restore}>
        <div className="mobile-menu-top">
          <a href={href("/")} className="brand">
            <Photo id="29" alt="DIMA AR" sizes="160px" />
          </a>
          <button onClick={close} aria-label="Fermer le menu">
            Fermer ×
          </button>
        </div>
        <nav aria-label="Navigation mobile">
          {nav.map(([label, to], i) => (
            <a key={to} href={href(to)}>
              <small>0{i + 1}</small>
              {label}
              <Arrow />
            </a>
          ))}
          <details>
            <summary>Nos neuf prestations</summary>
            {services.map((s) => (
              <a key={s.slug} href={href("/services/" + s.slug)}>
                {s.name}
              </a>
            ))}
          </details>
        </nav>
        <div className="mobile-menu-bottom">
          <Link className="button" to="/devis">
            Demander un devis
          </Link>
          <a href={"tel:" + business.tel}>{business.phone}</a>
          <p>Aclens · Vaud, Suisse</p>
        </div>
      </dialog>
    </>
  );
}
export function QuoteCTA() {
  return (
    <section className="quote-cta section">
      <p className="eyebrow">Votre véhicule, votre projet</p>
      <div>
        <h2>
          Parlons de
          <br />
          la suite.
        </h2>
        <Link className="button" to="/devis">
          Demander un devis
        </Link>
      </div>
      <a className="cta-phone" href={"tel:" + business.tel}>
        {business.phone}
      </a>
    </section>
  );
}
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div>
            <a href={href("/")} className="brand footer-brand">
              <Photo id="29" alt="DIMA AR Carrosserie Aclens" sizes="240px" />
            </a>
            <p>
              Le soin automobile.
              <br />
              Dans les règles de l’art.
            </p>
          </div>
          <div>
            <p className="eyebrow">Nous trouver</p>
            <address>
              {business.name}
              <br />
              {business.address}
              <br />
              {business.city}
            </address>
            <a href={business.maps} target="_blank" rel="noreferrer">
              Itinéraire <Arrow />
            </a>
          </div>
          <div>
            <p className="eyebrow">Parlons de votre véhicule</p>
            <a className="footer-phone" href={"tel:" + business.tel}>
              {business.phone}
            </a>
            <a href={"mailto:" + business.email}>{business.email}</a>
            <p>
              Horaires : contactez l’atelier
              <br />
              pour organiser votre passage.
            </p>
          </div>
        </div>
        <div className="footer-links">
          <nav aria-label="Navigation de pied de page">
            {nav.map(([n, p]) => (
              <a key={p} href={href(p)}>
                {n}
              </a>
            ))}
            <a href={href("/faq")}>FAQ</a>
            <a href={href("/sinistres-assurances")}>Sinistres & assurances</a>
          </nav>
          <nav aria-label="Prestations">
            {services.map((s) => (
              <a key={s.slug} href={href("/services/" + s.slug)}>
                {s.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DIMA AR Carrosserie Sàrl</span>
          <a href={href("/mentions-legales")}>
            Mentions légales & confidentialité
          </a>
          <a href={business.instagram} target="_blank" rel="noreferrer">
            Instagram <Arrow />
          </a>
          <span>Aclens, CH</span>
        </div>
      </footer>
      <div className="mobile-conversion">
        <a href={"tel:" + business.tel}>Appeler l’atelier</a>
        <a href={href("/devis")}>
          Demander un devis <Arrow />
        </a>
      </div>
    </>
  );
}
