import { lazy, Suspense } from "react";
import {
  business,
  services,
  projects,
  faqs,
  reviews,
  silentReviewers,
  googleRating,
  type Service,
  type Project,
  type Review,
} from "./data/content";
import {
  Photo,
  Film,
  Link,
  Eyebrow,
  FAQ,
  href,
  Arrow,
} from "./components/Media";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowIcon,
  ClockIcon,
  GoogleMark,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  Stars,
} from "./components/Icons";
import { Gallery } from "./components/Gallery";
import { QuoteCTA } from "./components/Shell";
const Quote = lazy(() => import("./components/Quote"));
export function PageIntro({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={"page-intro section" + (dark ? " page-intro-dark" : "")}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 data-split>{title}</h1>
      {text && <p className="intro-copy">{text}</p>}
    </section>
  );
}
const marqueeItems = [
  "Carrosserie",
  "Peinture",
  "Sinistres & assurances",
  "Detailing",
  "Jantes",
  "Pneus",
  "Entretien",
  "Polissage",
  "Phares",
  "Toutes marques",
];
function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div className="marquee-group" key={k}>
            {marqueeItems.map((m) => (
              <span key={m}>
                {m}
                <i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
function ReviewCard({ r, i }: { r: Review; i: number }) {
  return (
    <article
      className="review-card"
      style={{ "--i": i } as React.CSSProperties}
    >
      <div className="review-head">
        <span className="review-avatar" aria-hidden="true">
          {r.name.charAt(0)}
        </span>
        <div>
          <h3>{r.name}</h3>
          <span className="review-when">{r.when}</span>
        </div>
        <GoogleMark size={18} />
      </div>
      <Stars size={13} />
      <p>{r.text}</p>
      {r.tag && <span className="review-tag">{r.tag}</span>}
    </article>
  );
}
function GoogleBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={"google-badge" + (compact ? " google-badge-compact" : "")}
      href={business.reviewsUrl}
      target="_blank"
      rel="noreferrer"
    >
      <GoogleMark size={compact ? 18 : 22} />
      <span className="google-badge-score">
        {googleRating.value.toFixed(1)}
      </span>
      <Stars size={compact ? 12 : 15} />
      <span className="google-badge-count">
        {googleRating.count} avis Google
      </span>
    </a>
  );
}
export function Home() {
  return (
    <>
      <section className="hero" data-glow>
        <div className="hero-copy">
          <Eyebrow>Carrosserie · Aclens, Vaud</Eyebrow>
          <h1>
            <span className="line">
              <span>Le sens</span>
            </span>
            <span className="line">
              <span>
                du <em>détail.</em>
              </span>
            </span>
          </h1>
          <p>
            Carrosserie. Peinture. Soin automobile.
            <br />
            L’exigence du geste, à chaque étape.
          </p>
          <div className="hero-actions">
            <Link to="/devis" className="button button-light">
              Demander un devis
            </Link>
            <Link to="/realisations" className="hero-secondary">
              Explorer nos réalisations
            </Link>
          </div>
          <GoogleBadge compact />
        </div>
        <div className="hero-image">
          <Photo
            id="07"
            alt="Coupé noir dans l’atelier DIMA AR, devant la cabine de peinture"
            eager
            parallax
            sizes="(max-width: 700px) 100vw, 65vw"
          />
          <span className="hero-scan" aria-hidden="true" />
          <span className="hero-image-note">À l’atelier / DIMA AR</span>
        </div>
        <div className="hero-baseline">
          <span>Réparer. Préserver. Révéler.</span>
          <a href="#introduction">
            Dans les règles de l’art <ArrowDownIcon size={14} />
          </a>
          <span>Aclens · Vaud · CH</span>
        </div>
      </section>
      <Marquee />
      <section className="intro section" id="introduction">
        <Eyebrow>01 / L’esprit DIMA</Eyebrow>
        <div>
          <h2>
            Un regard précis.
            <br />
            Des mains expertes.
            <br />
            <span className="muted">Le respect de votre véhicule.</span>
          </h2>
          <div className="intro-bottom">
            <p>
              À Aclens, Rizah Dibrani et Arlind Mamuti réunissent plus de 15 ans
              d’expérience cumulée. De la carrosserie à la peinture, de
              l’entretien aux finitions, le même soin guide chaque intervention,
              sur toutes les marques.
            </p>
            <Link to="/a-propos">Les visages de DIMA</Link>
          </div>
        </div>
        <ul className="stats" aria-label="DIMA AR en chiffres">
          <li>
            <strong>
              <span data-count="5" data-decimals="1">
                5,0
              </span>
            </strong>
            <span>Note Google</span>
          </li>
          <li>
            <strong>
              <span data-count="23">23</span>
            </strong>
            <span>Avis cinq étoiles</span>
          </li>
          <li>
            <strong>
              <span data-count="9">9</span>
            </strong>
            <span>Expertises</span>
          </li>
          <li>
            <strong>
              <span data-count="15">15</span>+
            </strong>
            <span>Ans d’expérience cumulée</span>
          </li>
        </ul>
      </section>
      <section className="expertise section">
        <div className="section-heading">
          <div>
            <Eyebrow>02 / Nos expertises</Eyebrow>
            <h2>
              De la ligne
              <br />à la finition.
            </h2>
          </div>
          <p>
            Un atelier. Neuf savoir-faire.
            <br />
            Une attention constante.
          </p>
        </div>
        <div className="expertise-layout">
          <div className="expertise-visual">
            <div className="frame">
              <Photo
                id="05"
                alt="Reflets sur la carrosserie d’un coupé noir dans l’atelier DIMA AR"
                sizes="(max-width: 700px) 100vw, 40vw"
                parallax
              />
            </div>
            <p>
              La maîtrise se voit.
              <br />
              Elle commence bien avant la finition.
            </p>
          </div>
          <div className="service-index" data-stagger>
            {services.map((s, i) => (
              <a
                href={href("/services/" + s.slug)}
                key={s.slug}
                style={{ "--i": i } as React.CSSProperties}
              >
                <small>0{i + 1}</small>
                <span>{s.name}</span>
                <ArrowIcon size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="craft section" data-glow>
        <div className="craft-copy">
          <Eyebrow>03 / Dans l’atelier</Eyebrow>
          <h2>
            La maîtrise
            <br />
            du geste.
          </h2>
          <p>
            Préparer. Ajuster. Appliquer.
            <br />
            Le résultat se construit dans les étapes que l’on ne voit plus une
            fois le travail terminé.
          </p>
          <Link to="/atelier">Entrer dans l’atelier</Link>
        </div>
        <Film id="20" title="L’application en cabine" />
      </section>
      <section className="selected section">
        <div className="section-heading">
          <div>
            <Eyebrow>04 / Réalisations</Eyebrow>
            <h2>
              Le travail
              <br />
              parle de lui-même.
            </h2>
          </div>
          <Link to="/realisations">Toute la sélection</Link>
        </div>
        <Gallery preview />
      </section>
      <section className="insurance-band section">
        <Eyebrow>Un dommage, une solution à construire</Eyebrow>
        <div>
          <h2>
            Après le sinistre,
            <br />
            un interlocuteur.
          </h2>
          <div>
            <p>
              Évaluation des dégâts, dossier, échanges avec votre assurance :
              nous vous accompagnons jusqu’à la remise en état. Devis gratuit.
            </p>
            <Link to="/sinistres-assurances">
              Comprendre la prise en charge
            </Link>
          </div>
        </div>
        <ol data-stagger>
          <li style={{ "--i": 0 } as React.CSSProperties}>
            <span>01</span>Évaluer
          </li>
          <li style={{ "--i": 1 } as React.CSSProperties}>
            <span>02</span>Documenter
          </li>
          <li style={{ "--i": 2 } as React.CSSProperties}>
            <span>03</span>Faire valider
          </li>
          <li style={{ "--i": 3 } as React.CSSProperties}>
            <span>04</span>Réparer
          </li>
        </ol>
      </section>
      <section className="founders section">
        <div className="founders-photo frame">
          <Photo
            id="32"
            alt="Rizah Dibrani et Arlind Mamuti dans l’atelier DIMA AR"
            parallax
          />
        </div>
        <div>
          <Eyebrow>05 / Deux parcours, une vision</Eyebrow>
          <h2>
            Rizah &<br />
            Arlind.
          </h2>
          <p>
            Une formation de carrossier-peintre, le CFC, puis des années dans
            les garages de Suisse romande. Après Performance Detailing à
            Bussigny, ils créent DIMA AR : un atelier où leur savoir-faire prend
            toute sa place.
          </p>
          <Link to="/a-propos">Notre histoire</Link>
        </div>
      </section>
      <section className="reviews-band section">
        <div className="section-heading">
          <div>
            <Eyebrow>06 / Avis Google</Eyebrow>
            <h2>
              Ils nous ont
              <br />
              confié leur véhicule.
            </h2>
          </div>
          <GoogleBadge />
        </div>
        <div className="reviews-scroller" data-stagger>
          {reviews.slice(0, 6).map((r, i) => (
            <ReviewCard r={r} i={i} key={r.name} />
          ))}
        </div>
        <Link to="/avis">Lire les {googleRating.count} avis</Link>
      </section>
      <QuoteCTA />
    </>
  );
}
export function Services() {
  return (
    <>
      <PageIntro
        eyebrow="L’expertise DIMA AR"
        title="Le soin automobile, dans son ensemble."
        text="De la réparation à l’entretien, choisissez la prestation adaptée à votre véhicule. Nous en définissons les contours avec vous. Toutes marques, devis gratuit."
      />
      <section className="service-overview section">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={"service-feature service-feature-" + i}
          >
            <a
              href={href("/services/" + s.slug)}
              className="service-feature-image frame"
            >
              <Photo
                id={s.image}
                alt={s.name + " — images de l’atelier DIMA"}
                sizes="(max-width:700px) 100vw, 38vw"
              />
            </a>
            <div>
              <p className="eyebrow">0{i + 1} / Expertise</p>
              <h2>
                <a href={href("/services/" + s.slug)}>{s.name}</a>
              </h2>
              <p className="service-short">{s.short}</p>
              <p>{s.intro}</p>
              <Link to={"/services/" + s.slug}>Découvrir cette expertise</Link>
            </div>
          </article>
        ))}
      </section>
      <QuoteCTA />
    </>
  );
}
export function ServicePage({ service: s }: { service: Service }) {
  const related = services
    .filter((x) => x.slug !== s.slug)
    .slice(s.variant === "wide" ? 2 : 0, s.variant === "wide" ? 5 : 3);
  return (
    <>
      <section className={"service-hero section " + s.variant}>
        <div>
          <a className="back-link" href={href("/services")}>
            <ArrowLeftIcon size={14} /> Toutes les expertises
          </a>
          <Eyebrow>{s.name} · Aclens</Eyebrow>
          <h1>{s.headline}</h1>
          <p>{s.intro}</p>
          <Link className="button" to={"/devis?service=" + s.slug}>
            Parlons de votre véhicule
          </Link>
        </div>
        <div className="frame">
          <Photo
            id={s.image}
            alt={s.name + " : vue réelle de l’atelier DIMA"}
            eager
            parallax
          />
        </div>
      </section>
      <section className="service-body section">
        <div>
          <Eyebrow>Les interventions</Eyebrow>
          <h2>{s.name}</h2>
          <p>
            Une réponse adaptée à l’état de votre véhicule et au travail à
            réaliser.
          </p>
        </div>
        <ul data-stagger>
          {s.items.map((item, i) => (
            <li key={item} style={{ "--i": i } as React.CSSProperties}>
              <span>0{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="service-plus section">
        <Eyebrow>Ce qui fait la différence</Eyebrow>
        <div className="plus-grid" data-stagger>
          {s.plus.map(([t, d], i) => (
            <article key={t} style={{ "--i": i } as React.CSSProperties}>
              <span className="plus-index">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      {s.video && (
        <section className="service-film section" data-glow>
          <div>
            <Eyebrow>Le travail en images</Eyebrow>
            <h2>
              Au plus près
              <br />
              de l’intervention.
            </h2>
            <p>
              Une séquence réelle de l’atelier, pour voir les gestes derrière la
              prestation.
            </p>
          </div>
          <Film id={s.video} title={s.name + " à l’atelier"} />
        </section>
      )}
      <section className="process section">
        <Eyebrow>Notre approche</Eyebrow>
        <h2>Les étapes font le résultat.</h2>
        <ol data-stagger>
          {s.process.map((p, i) => (
            <li key={p} style={{ "--i": i } as React.CSSProperties}>
              <span>0{i + 1}</span>
              <h3>{p}</h3>
            </li>
          ))}
        </ol>
        <p>
          Deux fondateurs formés au métier de carrossier-peintre, plus de 15 ans
          d’expérience cumulée et un échange direct avec l’atelier pour définir
          votre intervention.
        </p>
      </section>
      <section className="faq-section section">
        <div>
          <Eyebrow>Avant de nous confier votre véhicule</Eyebrow>
          <h2>Vos questions.</h2>
        </div>
        <FAQ items={s.faq} />
      </section>
      <section className="related section">
        <Eyebrow>Le soin continue</Eyebrow>
        <h2>À découvrir aussi.</h2>
        {related.map((r) => (
          <Link key={r.slug} to={"/services/" + r.slug}>
            {r.name}
          </Link>
        ))}
      </section>
      <QuoteCTA />
    </>
  );
}
export function Realisations() {
  return (
    <>
      <PageIntro
        eyebrow="Le portfolio de l’atelier"
        title="De près. Pour de vrai."
        text="Les gestes, les étapes et les véhicules photographiés chez DIMA. Une sélection issue des images de l’atelier."
      />
      <section className="section portfolio">
        <Gallery />
      </section>
      <section className="instagram section" data-glow>
        <InstagramIcon size={34} />
        <h2>
          La vie de l’atelier,
          <br />
          au fil des jours.
        </h2>
        <a
          className="text-link"
          href={business.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <span className="link-label">Suivre {business.instagramHandle}</span>{" "}
          <Arrow />
        </a>
      </section>
      <QuoteCTA />
    </>
  );
}
export function ProjectPage({ project: p }: { project: Project }) {
  return (
    <>
      <PageIntro
        eyebrow={"Réalisations / " + p.category}
        title={p.title}
        text={p.description}
      />
      <section className="project-detail section">
        {p.video ? (
          <Film id={p.video} title={p.title} />
        ) : (
          <div className="frame">
            <Photo id={p.image} alt={p.title} eager />
          </div>
        )}
        <div className="project-notes">
          <Eyebrow>Un regard sur le travail</Eyebrow>
          {p.stages.length ? (
            p.stages.map(([t, d]) => (
              <article key={t}>
                <h2>{t}</h2>
                <p>{d}</p>
              </article>
            ))
          ) : (
            <p>
              Une série de vues réalisées chez DIMA AR. Les photographies
              témoignent de l’atmosphère de l’atelier et des véhicules qui y
              sont présentés.
            </p>
          )}
          <p className="fine-print">
            Les images documentent les étapes visibles. Le dossier technique et
            les informations du client ne sont pas publiés.
          </p>
        </div>
      </section>
      {p.images.length > 1 && (
        <section className="project-more section">
          {p.images
            .filter((id) => id !== p.image)
            .map((id) => (
              <div className="frame" key={id}>
                <Photo id={id} alt={"Autre vue : " + p.title} />
              </div>
            ))}
        </section>
      )}
      <section className="related section">
        <Eyebrow>Poursuivre la visite</Eyebrow>
        {projects
          .filter((r) => r.slug !== p.slug)
          .slice(0, 2)
          .map((r) => (
            <Link key={r.slug} to={"/realisations/" + r.slug}>
              {r.title}
            </Link>
          ))}
        <Link to="/realisations">Toutes les réalisations</Link>
      </section>
      <QuoteCTA />
    </>
  );
}
export function About() {
  return (
    <>
      <PageIntro
        eyebrow="Rizah Dibrani & Arlind Mamuti"
        title="Deux parcours. Le même soin."
      />
      <section className="about-opening section">
        <div className="frame">
          <Photo
            id="32"
            alt="Rizah Dibrani et Arlind Mamuti dans l’atelier DIMA AR"
            eager
            parallax
          />
        </div>
        <div>
          <Eyebrow>À l’origine de DIMA</Eyebrow>
          <h2>
            Le métier,
            <br />
            avant tout.
          </h2>
          <p>
            Rizah Dibrani et Arlind Mamuti sont deux passionnés d’automobile
            unis par une vision commune : transformer leur savoir-faire en un
            service de qualité supérieure. Tous deux carrossiers-peintres
            titulaires du CFC, ils ont accumulé leur expérience dans différents
            garages de Suisse romande.
          </p>
          <p>
            Ensemble, ils cumulent plus de 15 ans d’expérience. Leur projet
            commun prolonge ce travail : prendre soin d’un véhicule dans son
            ensemble, avec une attention particulière aux détails.
          </p>
        </div>
      </section>
      <section className="timeline section">
        <Eyebrow>Un parcours construit à deux</Eyebrow>
        <article>
          <span>01</span>
          <h2>Apprendre le métier.</h2>
          <p>
            La formation de carrossier-peintre et le CFC constituent la base.
            Les garages de Suisse romande apportent l’expérience du terrain, la
            rigueur et l’ambition de faire mieux.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Performance Detailing, Bussigny.</h2>
          <p>
            Leur premier projet : un atelier spécialisé dans le detailing
            automobile haut de gamme. L’engagement, le souci du détail et la
            satisfaction des clients construisent rapidement une réputation
            solide.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Créer DIMA AR, Aclens.</h2>
          <p>
            Poussés par ce succès, ils créent leur propre carrosserie au Chemin
            du Coteau 21a, un lieu à leur image, inauguré le 4 mai 2025. La
            réparation, la peinture, l’entretien et la finition se retrouvent
            dans un même atelier.
          </p>
        </article>
      </section>
      <section className="about-pillars section">
        <Eyebrow>Ce que l’atelier vous propose</Eyebrow>
        <div className="plus-grid" data-stagger>
          {[
            [
              "Travaux de carrosserie",
              "Réparations après sinistre, débosselage, redressage, remise en état.",
            ],
            [
              "Peinture automobile",
              "Peinture partielle ou complète avec finitions haut de gamme, cabine et four de cuisson.",
            ],
            [
              "Detailing intérieur et extérieur",
              "Polissage, traitement céramique, rénovation des cuirs, nettoyage en profondeur.",
            ],
            [
              "Service rapide",
              "Changement de pneus, entretien, petites réparations mécaniques, phares.",
            ],
            [
              "Accompagnement complet",
              "Gestion des sinistres avec les assurances, conseils personnalisés, devis transparents et gratuits.",
            ],
          ].map(([t, d], i) => (
            <article key={t} style={{ "--i": i } as React.CSSProperties}>
              <span className="plus-index">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-duo section">
        <div className="frame">
          <Photo
            id="33"
            alt="L’équipe réunie devant les véhicules à l’atelier"
            parallax
          />
        </div>
        <div>
          <h2>
            Des personnes.
            <br />
            Des gestes.
            <br />
            Un atelier.
          </h2>
          <p>
            Chaque véhicule est une opportunité de faire la différence. Le
            meilleur point de départ reste une conversation autour du vôtre.
          </p>
          <div className="founder-cards">
            {business.founders.map((f) => (
              <a key={f.name} href={"tel:" + f.tel} className="founder-card">
                <span className="eyebrow">{f.role}</span>
                <strong>{f.name}</strong>
                <span className="founder-phone">
                  <PhoneIcon size={14} /> {f.phone}
                </span>
              </a>
            ))}
          </div>
          <Link to="/contact">Rencontrons-nous</Link>
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
export function Atelier() {
  return (
    <>
      <PageIntro
        eyebrow="Chemin du Coteau 21a · Aclens"
        title="Ici, le détail se travaille."
      />
      <section className="workshop-entry section">
        <div className="frame">
          <Photo
            id="17"
            alt="Façade de DIMA AR avec l’entrée de l’atelier et les véhicules"
            eager
            parallax
          />
        </div>
        <div>
          <Eyebrow>Un lieu de métier</Eyebrow>
          <h2>
            De la porte
            <br />à la cabine.
          </h2>
          <p>
            L’atelier réunit le travail de carrosserie, la cabine de peinture et
            son four de cuisson, l’entretien et les finitions. Un lieu moderne,
            chaleureux et bien situé, à quelques minutes de Morges.
          </p>
          <a
            className="text-link"
            href={business.maps}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-label">Venir à Aclens</span> <Arrow />
          </a>
        </div>
      </section>
      <section className="workshop-sequence section">
        <article>
          <div className="frame">
            <Photo id="28" alt="Préparation d’un élément de carrosserie" />
          </div>
          <div>
            <span className="eyebrow">01 / La préparation</span>
            <h2>Construire la surface.</h2>
            <p>
              Examiner, protéger et préparer les éléments avant la mise en
              peinture.
            </p>
          </div>
        </article>
        <article>
          <div className="frame">
            <Photo id="20" alt="Application de peinture dans la cabine DIMA" />
          </div>
          <div>
            <span className="eyebrow">02 / La peinture</span>
            <h2>Maîtriser l’application.</h2>
            <p>
              La cabine professionnelle et la cuisson accompagnent le travail de
              teinte et de finition.
            </p>
          </div>
        </article>
        <article>
          <div className="frame">
            <Photo
              id="07"
              alt="Reflets du coupé noir photographié à l’atelier"
            />
          </div>
          <div>
            <span className="eyebrow">03 / La finition</span>
            <h2>Regarder de plus près.</h2>
            <p>
              Le polissage, la protection et le contrôle visuel donnent à
              l’intervention sa dernière mesure.
            </p>
          </div>
        </article>
      </section>
      <section className="craft section" data-glow>
        <div>
          <Eyebrow>Le quotidien DIMA</Eyebrow>
          <h2>
            Les visages
            <br />
            de l’atelier.
          </h2>
          <p>Une visite filmée dans les espaces de travail, avec l’équipe.</p>
        </div>
        <Film
          id="26"
          title="Présentation de l’atelier DIMA AR"
          label="Visiter l’atelier"
        />
      </section>
      <QuoteCTA />
    </>
  );
}
export function Insurance() {
  const steps = [
    [
      "Le premier échange",
      "Expliquez les dommages et transmettez les informations utiles à l’atelier.",
    ],
    [
      "L’évaluation",
      "Le véhicule est inspecté pour estimer précisément les dommages et établir un devis détaillé, gratuit.",
    ],
    [
      "Le dossier",
      "Le rapport d’évaluation, les photos et le coût estimé sont transmis directement à votre assurance.",
    ],
    [
      "La validation",
      "L’assureur accepte le devis, demande une contre-expertise ou ajuste selon votre contrat.",
    ],
    [
      "La réparation",
      "Dès validation, les réparations sont lancées immédiatement.",
    ],
    [
      "La restitution",
      "Une éventuelle franchise se règle à l’atelier ; le solde est traité avec l’assureur. Vous êtes contacté dès que le véhicule est prêt.",
    ],
  ];
  return (
    <>
      <section className="insurance-hero section">
        <Eyebrow>Sinistres & assurances</Eyebrow>
        <h1>
          Un dommage.
          <br />
          Ne restez pas
          <br />
          seul avec la suite.
        </h1>
        <div>
          <p>
            Nous vous accompagnons de l’évaluation des dégâts à la remise en
            état, avec un dossier préparé pour votre assurance.
          </p>
          <a className="button" href={"tel:" + business.tel}>
            <span className="link-label">Parler à l’atelier</span> <Arrow />
          </a>
          <Link to="/devis?service=gestion-des-sinistres">
            Demander une prise en charge
          </Link>
        </div>
      </section>
      <section className="insurance-process section">
        <div className="frame">
          <Photo
            id="03"
            alt="Échange autour d’un dossier dans les bureaux DIMA"
            parallax
          />
        </div>
        <div data-stagger>
          {steps.map(([t, d], i) => (
            <article key={t} style={{ "--i": i } as React.CSSProperties}>
              <span>0{i + 1}</span>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="faq-section section">
        <div>
          <Eyebrow>Pour avancer sereinement</Eyebrow>
          <h2>Les points à clarifier.</h2>
        </div>
        <FAQ
          items={[
            ...services[0].faq,
            [
              "La franchise est-elle prise en charge ?",
              "Si une franchise est prévue par votre contrat, vous la réglez directement à l’atelier. L’assurance prend en charge le reste directement avec nous lorsqu’elle est partenaire ; sinon, vous pourriez devoir avancer les frais avant remboursement.",
            ],
            [
              "Que se passe-t-il si l’assurance refuse certaines réparations ?",
              "L’assureur peut négocier ou refuser des réparations non couvertes par votre contrat. L’atelier vous explique les options avant de commencer les travaux.",
            ],
          ]}
        />
      </section>
      <QuoteCTA />
    </>
  );
}
export function Reviews() {
  return (
    <>
      <section className="reviews-hero section" data-glow>
        <div>
          <Eyebrow>Avis Google · DIMA AR Carrosserie Sàrl</Eyebrow>
          <h1>
            La confiance
            <br />
            se lit ici.
          </h1>
          <p className="intro-copy">
            Vingt-trois avis, tous à cinq étoiles. Les retours publiés sur
            Google par les personnes qui nous ont confié leur véhicule.
          </p>
          <div className="reviews-hero-actions">
            <a
              className="button button-light"
              href={business.reviewsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-label">Voir sur Google</span> <Arrow />
            </a>
            <a
              className="text-link"
              href={business.maps}
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-label">Laisser un avis</span> <Arrow />
            </a>
          </div>
        </div>
        <div className="rating-panel">
          <GoogleMark size={26} />
          <span className="rating-score">
            <span data-count="5" data-decimals="1">
              5,0
            </span>
          </span>
          <Stars size={22} />
          <span className="rating-count">{googleRating.count} avis Google</span>
          <ul className="rating-bars" aria-label="Répartition des notes">
            {[5, 4, 3, 2, 1].map((n) => (
              <li key={n}>
                <span>{n}</span>
                <i
                  style={
                    { "--w": n === 5 ? "100%" : "0%" } as React.CSSProperties
                  }
                />
                <span>{n === 5 ? googleRating.count : 0}</span>
              </li>
            ))}
          </ul>
          <div className="rating-themes">
            {googleRating.themes.map(([t, n]) => (
              <span key={t}>
                {t} <b>{n}</b>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="reviews-grid section">
        <div className="reviews-masonry" data-stagger>
          {reviews.map((r, i) => (
            <ReviewCard r={r} i={i % 6} key={r.name} />
          ))}
        </div>
        <p className="reviews-silent">
          Cinq étoiles également, sans commentaire :{" "}
          {silentReviewers.join(", ")}.
        </p>
        <p className="fine-print">
          Avis publiés sur Google. Les textes sont reproduits tels que rédigés
          par leurs auteurs, à la ponctuation près. Note et nombre d’avis
          relevés le 21 septembre 2026.
        </p>
      </section>
      <section className="review-invite section">
        <div className="frame">
          <Photo
            id="06"
            alt="Deux membres de l’équipe auprès d’un véhicule à l’atelier"
            parallax
          />
        </div>
        <div>
          <Eyebrow>Vous êtes passé chez DIMA ?</Eyebrow>
          <h2>
            Votre retour
            <br />
            compte.
          </h2>
          <p>
            Un avis Google aide les prochains clients à nous trouver et nous
            aide à progresser. Quelques lignes suffisent.
          </p>
          <a
            className="button"
            href={business.maps}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-label">Écrire un avis Google</span> <Arrow />
          </a>
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
export function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="DIMA AR · Aclens, Vaud"
        title="Un échange. Puis les bonnes décisions."
      />
      <section className="contact-layout section">
        <div className="contact-main">
          <p className="eyebrow">
            <span className="red-dash" />
            L’atelier vous répond
          </p>
          <a className="contact-phone" href={"tel:" + business.tel}>
            {business.phone}
          </a>
          <a className="contact-email" href={"mailto:" + business.email}>
            <MailIcon size={18} /> {business.email}
          </a>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">
                <PinIcon size={14} /> Adresse
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
                className="text-link"
                href={business.maps}
                target="_blank"
                rel="noreferrer"
              >
                <span className="link-label">Ouvrir l’itinéraire</span>{" "}
                <Arrow />
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
              <p className="fine-print">{business.hoursNote}</p>
            </div>
          </div>
          <div className="founder-cards">
            {business.founders.map((f) => (
              <a key={f.name} href={"tel:" + f.tel} className="founder-card">
                <span className="eyebrow">{f.role}</span>
                <strong>{f.name}</strong>
                <span className="founder-phone">
                  <PhoneIcon size={14} /> {f.phone}
                </span>
              </a>
            ))}
          </div>
          <div className="contact-social">
            <a href={business.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon size={16} /> {business.instagramHandle}
            </a>
            <a href={business.reviewsUrl} target="_blank" rel="noreferrer">
              <GoogleMark size={16} /> {googleRating.value.toFixed(1)} ·{" "}
              {googleRating.count} avis
            </a>
          </div>
          <Link className="button" to="/devis">
            Préparer une demande de devis
          </Link>
        </div>
        <div className="contact-visual">
          <div className="frame">
            <Photo
              id="14"
              alt="Entrée de l’atelier DIMA et véhicule violet devant la façade"
              eager
              parallax
            />
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="map-caption">
          <Eyebrow>Nous trouver</Eyebrow>
          <h2>
            {business.address},
            <br />
            {business.city}.
          </h2>
          <p>
            À Aclens, entre Morges et Cossonay, à quelques minutes de la sortie
            autoroutière. L’atelier vous accueille sur rendez-vous ou pendant
            les horaires d’ouverture.
          </p>
          <a
            className="text-link"
            href={business.maps}
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-label">Itinéraire Google Maps</span> <Arrow />
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Plan d’accès à DIMA AR Carrosserie, Chemin du Coteau 21a, 1123 Aclens"
            src={business.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
export function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="Les réponses de l’atelier"
        title="Avant de nous rendre visite."
        text="Prestations, devis, horaires et coordonnées : les informations utiles pour préparer votre échange avec DIMA."
      />
      <section className="section faq-page">
        <FAQ items={faqs} />
      </section>
      <QuoteCTA />
    </>
  );
}
export function QuotePage() {
  return (
    <>
      <PageIntro
        eyebrow="Parlons de votre véhicule"
        title="Votre devis commence ici."
        text="Gratuit et sans engagement."
      />
      <section className="section quote-page">
        <Suspense fallback={<p>Chargement du parcours de devis…</p>}>
          <Quote />
        </Suspense>
      </section>
    </>
  );
}
export function Legal() {
  return (
    <>
      <PageIntro
        eyebrow="Informations du site"
        title="Mentions légales & confidentialité."
      />
      <section className="legal section">
        <h2>Éditeur</h2>
        <p>
          {business.name}
          <br />
          {business.address}, {business.city}
          <br />
          IDE : {business.uid}
          <br />
          <a href={"mailto:" + business.email}>{business.email}</a>
          <br />
          {business.phone}
        </p>
        <h2>Vos demandes</h2>
        <p>
          Les coordonnées et les informations que vous choisissez de transmettre
          sont destinées à l’atelier pour traiter votre demande. Dans le
          parcours par e-mail, rien n’est transmis avant l’envoi depuis votre
          messagerie. Les images sélectionnées restent dans la page et doivent
          être jointes à votre e-mail. Ne transmettez pas de données sensibles
          inutiles à l’évaluation.
        </p>
        <h2>Assistant</h2>
        <p>
          Le guide automatique répond à partir des informations de DIMA. Il ne
          peut confirmer ni prix, ni délai, ni prise en charge par une
          assurance. Pour une réponse adaptée à votre véhicule, contactez
          l’atelier.
        </p>
        <h2>Navigation et services tiers</h2>
        <p>
          Cette version du site n’utilise pas de cookies publicitaires ni de
          suivi analytique. Les vidéos et les photographies sont hébergées avec
          le site. La page Contact intègre une carte Google Maps ; son
          chargement transmet votre adresse IP à Google, selon les règles de
          confidentialité de Google. Les liens vers Instagram et Google ouvrent
          des services externes soumis à leurs propres règles.
        </p>
        <h2>Avis</h2>
        <p>
          Les avis reproduits sur la page Avis Google sont publics et
          proviennent de la fiche Google de l’atelier. Ils sont cités avec le
          prénom et le nom affichés par leurs auteurs. Pour toute demande de
          retrait, contactez {business.email}.
        </p>
        <h2>Vos informations</h2>
        <p>
          Pour toute question concernant les informations confiées à l’atelier
          ou pour demander leur rectification ou suppression, contactez{" "}
          {business.email}.
        </p>
        <h2>Images et contenus</h2>
        <p>
          Les photographies et vidéos présentées proviennent des médias DIMA AR
          fournis pour ce site. Leur réutilisation nécessite une autorisation.
          Les informations concernant les prestations sont indicatives ; la
          faisabilité et les conditions d’intervention sont confirmées avec
          l’atelier.
        </p>
      </section>
    </>
  );
}
export function NotFound() {
  return (
    <section className="not-found section">
      <Eyebrow>404 / Page introuvable</Eyebrow>
      <h1>
        Reprenons
        <br />
        la bonne route.
      </h1>
      <p>Cette page n’existe pas ou a changé d’adresse.</p>
      <Link className="button" to="/">
        Revenir à l’accueil
      </Link>
      <Link to="/services">Voir les prestations</Link>
    </section>
  );
}
