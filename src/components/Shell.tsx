import { useEffect, useRef, useState } from "react";
import { business, nav, services, googleRating } from "../data/content";
import { href, Photo, Link, Arrow } from "./Media";
import {
  ArrowIcon,
  InstagramIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  StarIcon,
} from "./Icons";
const headerLinks = [
  ["Expertises", "/services"],
  ["Réalisations", "/realisations"],
  ["Avis", "/avis"],
  ["Contact", "/contact"],
];
export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add("menu-open");
    const t = setTimeout(() => panel.current?.focus(), 350);
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", key);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", key);
      document.documentElement.classList.remove("menu-open");
      trigger.current?.focus();
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <header className="header" data-header>
        <span className="scroll-progress" aria-hidden="true" />
        <a href={href("/")} className="brand" aria-label="DIMA AR, accueil">
          <Photo id="29" alt="DIMA AR Carrosserie Aclens" eager sizes="170px" />
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {headerLinks.map(([label, to]) => (
            <a
              key={to}
              href={href(to)}
              aria-current={
                path === to || path.startsWith(to + "/") ? "page" : undefined
              }
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="header-right">
          <a className="header-phone" href={"tel:" + business.tel}>
            <PhoneIcon size={15} />
            <span>{business.phone}</span>
          </a>
          <a className="header-cta" href={href("/devis")}>
            <span>Demander un devis</span>
            <ArrowIcon size={15} />
          </a>
          <button
            className="menu-trigger"
            ref={trigger}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className="menu-word">
              <span>Menu</span>
              <span>Fermer</span>
            </span>
            <span className="burger" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <div
        id="site-menu"
        className={"site-menu" + (open ? " is-open" : "")}
        role="dialog"
        aria-modal="true"
        aria-label="Menu du site"
        aria-hidden={!open}
        inert={!open}
        tabIndex={-1}
        ref={panel}
      >
        <div className="site-menu-backdrop" aria-hidden="true">
          <Photo
            id="16"
            alt="Vue depuis l’atelier DIMA AR vers les véhicules"
            sizes="60vw"
            className="site-menu-photo"
          />
        </div>
        <div className="site-menu-inner">
          <nav className="site-menu-primary" aria-label="Pages">
            {nav.map(([label, to], i) => (
              <a
                key={to}
                href={href(to)}
                style={{ "--i": i } as React.CSSProperties}
                aria-current={path === to ? "page" : undefined}
              >
                <small>0{i + 1}</small>
                <span className="site-menu-label">{label}</span>
                <ArrowIcon size={22} />
              </a>
            ))}
          </nav>
          <div className="site-menu-side">
            <div className="site-menu-services">
              <p className="eyebrow">Neuf expertises</p>
              <ul>
                {services.map((s, i) => (
                  <li
                    key={s.slug}
                    style={{ "--i": i + 7 } as React.CSSProperties}
                  >
                    <a href={href("/services/" + s.slug)}>{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="site-menu-contact">
              <a href={"tel:" + business.tel} className="site-menu-phone">
                {business.phone}
              </a>
              <a href={"mailto:" + business.email}>{business.email}</a>
              <p>
                {business.address}, {business.city}
              </p>
              <p className="site-menu-hours">
                {business.hours[0][0]} · {business.hours[0][1]}
              </p>
              <div className="site-menu-social">
                <a href={business.instagram} target="_blank" rel="noreferrer">
                  <InstagramIcon size={16} /> Instagram
                </a>
                <a href={business.reviewsUrl} target="_blank" rel="noreferrer">
                  <StarIcon size={14} /> {googleRating.value.toFixed(1)} ·{" "}
                  {googleRating.count} avis
                </a>
              </div>
            </div>
          </div>
          <div className="site-menu-foot">
            <Link className="button button-light" to="/devis">
              Demander un devis
            </Link>
            <span>Aclens · Vaud · Suisse</span>
          </div>
        </div>
      </div>
    </>
  );
}
export function QuoteCTA() {
  return (
    <section className="quote-cta section" data-glow>
      <div className="quote-cta-grid">
        <div>
          <p className="eyebrow">
            <span className="red-dash" />
            Votre véhicule, votre projet
          </p>
          <h2>
            Parlons de
            <br />
            la suite.
          </h2>
        </div>
        <div className="quote-cta-actions">
          <p>
            Devis gratuit et sans engagement. Décrivez votre besoin, ajoutez
            quelques photos, l’atelier vous répond.
          </p>
          <Link className="button button-light" to="/devis">
            Demander un devis
          </Link>
          <a className="cta-phone" href={"tel:" + business.tel}>
            <PhoneIcon size={18} />
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a href={href("/")} className="brand footer-brand">
              <Photo id="29" alt="DIMA AR Carrosserie Aclens" sizes="240px" />
            </a>
            <p>
              Carrosserie, peinture et soin automobile.
              <br />
              Toutes marques, à Aclens.
            </p>
            <a
              className="footer-google"
              href={business.reviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} size={13} />
                ))}
              </span>
              {googleRating.value.toFixed(1)} sur Google · {googleRating.count}{" "}
              avis
            </a>
          </div>
          <div>
            <p className="eyebrow">
              <PinIcon size={14} /> Nous trouver
            </p>
            <address>
              {business.name}
              <br />
              {business.address}
              <br />
              {business.city}
              <br />
              {business.region}
            </address>
            <a
              className="footer-link"
              href={business.maps}
              target="_blank"
              rel="noreferrer"
            >
              Itinéraire <Arrow size={15} />
            </a>
          </div>
          <div>
            <p className="eyebrow">
              <ClockIcon size={14} /> Horaires
            </p>
            <dl className="hours">
              {business.hours.map(([d, h]) => (
                <div key={d}>
                  <dt>{d}</dt>
                  <dd>{h}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <p className="eyebrow">
              <PhoneIcon size={14} /> Contact
            </p>
            <a className="footer-phone" href={"tel:" + business.tel}>
              {business.phone}
            </a>
            <a className="footer-link" href={"mailto:" + business.email}>
              <MailIcon size={15} /> {business.email}
            </a>
            <a
              className="footer-link"
              href={business.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={15} /> {business.instagramHandle}
            </a>
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
            <a href={href("/devis")}>Devis</a>
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
          <span>
            © {new Date().getFullYear()} {business.name} · {business.uid}
          </span>
          <a href={href("/mentions-legales")}>
            Mentions légales & confidentialité
          </a>
          <span>Aclens · Vaud · Suisse</span>
        </div>
      </footer>
      <div className="mobile-conversion">
        <a href={"tel:" + business.tel}>
          <PhoneIcon size={16} /> Appeler
        </a>
        <a href={href("/devis")}>
          Demander un devis <ArrowIcon size={15} />
        </a>
      </div>
    </>
  );
}
