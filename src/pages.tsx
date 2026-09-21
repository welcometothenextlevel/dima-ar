import { lazy, Suspense } from "react";
import {
  business,
  services,
  projects,
  faqs,
  type Service,
  type Project,
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
import { Gallery } from "./components/Gallery";
import { QuoteCTA } from "./components/Shell";
const Quote = lazy(() => import("./components/Quote"));
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="page-intro section">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {text && <p className="intro-copy">{text}</p>}
    </section>
  );
}
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>Carrosserie · Aclens, Vaud</Eyebrow>
          <h1>
            Le sens
            <br />
            du <em>détail.</em>
          </h1>
          <p>
            Carrosserie. Peinture. Soin automobile.
            <br />
            L’exigence du geste, à chaque étape.
          </p>
          <Link to="/devis" className="button">
            Demander un devis
          </Link>
          <Link to="/realisations" className="hero-secondary">
            Explorer nos réalisations
          </Link>
        </div>
        <div className="hero-image">
          <Photo
            id="07"
            alt="Coupé noir dans l’atelier DIMA AR, devant la cabine de peinture"
            eager
            sizes="(max-width: 700px) 100vw, 65vw"
          />
          <span className="hero-image-note">À l’atelier / DIMA AR</span>
        </div>
        <div className="hero-baseline">
          <span>RÉPARER. PRÉSERVER. RÉVÉLER.</span>
          <a href="#introduction">
            Dans les règles de l’art <span aria-hidden="true">↓</span>
          </a>
          <span>ACLENS · VAUD · CH</span>
        </div>
      </section>
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
              l’entretien aux finitions, le même soin guide chaque intervention.
            </p>
            <Link to="/a-propos">Les visages de DIMA</Link>
          </div>
        </div>
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
            <Photo
              id="22"
              alt="Préparation de la carrosserie et masquage en cabine"
            />
            <p>
              La maîtrise se voit.
              <br />
              Elle commence bien avant la finition.
            </p>
          </div>
          <div className="service-index">
            {services.map((s, i) => (
              <a href={href("/services/" + s.slug)} key={s.slug}>
                <small>0{i + 1}</small>
                <span>{s.name}</span>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="craft section">
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
              nous vous accompagnons jusqu’à la remise en état.
            </p>
            <Link to="/sinistres-assurances">
              Comprendre la prise en charge
            </Link>
          </div>
        </div>
        <ol>
          <li>
            <span>01</span>Évaluer
          </li>
          <li>
            <span>02</span>Documenter
          </li>
          <li>
            <span>03</span>Faire valider
          </li>
          <li>
            <span>04</span>Réparer
          </li>
        </ol>
      </section>
      <section className="founders section">
        <div className="founders-photo">
          <Photo id="32" alt="Les visages de DIMA dans l’atelier" />
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
      <section className="review-teaser section">
        <Eyebrow>La confiance se construit</Eyebrow>
        <h2>
          Un échange direct.
          <br />
          Un travail que vous pouvez voir.
        </h2>
        <div>
          <p>
            Découvrez les gestes de l’atelier, posez vos questions et partagez
            votre expérience avec l’équipe.
          </p>
          <Link to="/avis">Vos retours</Link>
        </div>
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
        text="De la réparation à l’entretien, choisissez la prestation adaptée à votre véhicule. Nous en définissons les contours avec vous."
      />
      <section className="service-overview section">
        {services.map((s, i) => (
          <article
            key={s.slug}
            className={"service-feature service-feature-" + i}
          >
            <a
              href={href("/services/" + s.slug)}
              className="service-feature-image"
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
              <p>{s.short}</p>
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
            ← Toutes les expertises
          </a>
          <Eyebrow>{s.name} · Aclens</Eyebrow>
          <h1>{s.headline}</h1>
          <p>{s.intro}</p>
          <Link className="button" to={"/devis?service=" + s.slug}>
            Parlons de votre véhicule
          </Link>
        </div>
        <Photo
          id={s.image}
          alt={s.name + " : vue réelle de l’atelier DIMA"}
          eager
        />
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
        <ul>
          {s.items.map((item, i) => (
            <li key={item}>
              <span>0{i + 1}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
      {s.video && (
        <section className="service-film section">
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
        <ol>
          {s.process.map((p, i) => (
            <li key={p}>
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
      <section className="instagram section">
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
          Suivre DIMA sur Instagram <Arrow />
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
          <Photo id={p.image} alt={p.title} eager />
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
              <Photo key={id} id={id} alt={"Autre vue : " + p.title} />
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
        <Photo id="32" alt="L’équipe dans l’atelier DIMA AR" eager />
        <div>
          <Eyebrow>À l’origine de DIMA</Eyebrow>
          <h2>
            Le métier,
            <br />
            avant tout.
          </h2>
          <p>
            Rizah Dibrani et Arlind Mamuti partagent une formation de
            carrossier-peintre, un CFC et une expérience acquise dans différents
            garages de Suisse romande.
          </p>
          <p>
            Leurs parcours réunissent plus de 15 ans d’expérience cumulée. Leur
            projet commun prolonge ce travail : prendre soin d’un véhicule dans
            son ensemble, avec une attention particulière aux détails.
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
            Les garages de Suisse romande apportent l’expérience du terrain.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Affiner le regard.</h2>
          <p>
            À Bussigny, ils développent Performance Detailing, leur premier
            atelier consacré au soin esthétique automobile.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Créer DIMA AR.</h2>
          <p>
            À Aclens, la carrosserie et la peinture viennent prolonger cette
            approche. La réparation, l’entretien et la finition se retrouvent
            dans un même atelier.
          </p>
        </article>
      </section>
      <section className="about-duo section">
        <Photo id="33" alt="L’équipe réunie devant les véhicules à l’atelier" />
        <div>
          <h2>
            Des personnes.
            <br />
            Des gestes.
            <br />
            Un atelier.
          </h2>
          <p>
            Le meilleur point de départ reste une conversation autour de votre
            véhicule.
          </p>
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
        <Photo
          id="17"
          alt="Façade de DIMA AR avec l’entrée de l’atelier et les véhicules"
          eager
        />
        <div>
          <Eyebrow>Un lieu de métier</Eyebrow>
          <h2>
            De la porte
            <br />à la cabine.
          </h2>
          <p>
            L’atelier réunit le travail de carrosserie, la peinture, l’entretien
            et les finitions. Les images racontent le lieu tel qu’il est :
            vivant, technique et habité par les gestes du métier.
          </p>
          <a className="text-link" href={business.maps}>
            Venir à Aclens <Arrow />
          </a>
        </div>
      </section>
      <section className="workshop-sequence section">
        <article>
          <Photo id="28" alt="Préparation d’un élément de carrosserie" />
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
          <Photo id="20" alt="Application de peinture dans la cabine DIMA" />
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
          <Photo id="07" alt="Reflets du coupé noir photographié à l’atelier" />
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
      <section className="craft section">
        <div>
          <Eyebrow>Le quotidien DIMA</Eyebrow>
          <h2>
            Les visages
            <br />
            de l’atelier.
          </h2>
          <p>Une visite filmée dans les espaces de travail, avec l’équipe.</p>
        </div>
        <Film id="26" title="Présentation de l’atelier DIMA AR" />
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
      "Le véhicule est examiné pour estimer les réparations et établir le devis.",
    ],
    [
      "Le dossier",
      "Photos et éléments d’évaluation sont préparés pour votre assurance.",
    ],
    [
      "La validation",
      "L’assureur examine la prise en charge selon votre contrat.",
    ],
    [
      "La réparation",
      "L’intervention est organisée après validation du devis.",
    ],
    [
      "La restitution",
      "L’atelier vous contacte lorsque le véhicule est prêt à être récupéré.",
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
            Parler à l’atelier <Arrow />
          </a>
          <Link to="/devis?service=gestion-des-sinistres">
            Demander une prise en charge
          </Link>
        </div>
      </section>
      <section className="insurance-process section">
        <Photo
          id="03"
          alt="Échange autour d’un dossier dans les bureaux DIMA"
        />
        <div>
          {steps.map(([t, d], i) => (
            <article key={t}>
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
              "Le montant de la franchise et les modalités de règlement dépendent de votre contrat et de la réponse de l’assureur. Clarifiez ces points avant les travaux.",
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
      <PageIntro
        eyebrow="La confiance, au quotidien"
        title="Votre expérience compte."
        text="Le travail se voit dans les réalisations. La relation se construit dans les échanges avec l’atelier."
      />
      <section className="reviews-empty section">
        <div>
          <Eyebrow>Vos retours</Eyebrow>
          <h2>
            Du concret,
            <br />
            avant les étoiles.
          </h2>
          <p>
            Vous avez confié votre véhicule à DIMA ? Partagez votre retour
            directement avec l’équipe.
          </p>
          <a
            className="text-link"
            href={
              "mailto:" +
              business.email +
              "?subject=Mon%20exp%C3%A9rience%20chez%20DIMA"
            }
          >
            Écrire à l’atelier <Arrow />
          </a>
          <p className="fine-print">
            Aucun avis ni aucune note agrégée n’est reproduit ici sans
            provenance confirmée.
          </p>
          <Link to="/realisations">Voir le travail de l’atelier</Link>
        </div>
        <Photo
          id="06"
          alt="Deux membres de l’équipe auprès d’un véhicule à l’atelier"
        />
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
        <div>
          <p className="eyebrow">L’atelier vous répond</p>
          <a className="contact-phone" href={"tel:" + business.tel}>
            {business.phone}
          </a>
          <a className="contact-email" href={"mailto:" + business.email}>
            {business.email}
          </a>
          <div className="contact-address">
            <h2>Nous trouver.</h2>
            <address>
              {business.name}
              <br />
              {business.address}
              <br />
              {business.city}
              <br />
              Vaud, Suisse
            </address>
            <a
              className="text-link"
              href={business.maps}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir l’itinéraire <Arrow />
            </a>
          </div>
          <p>
            Contactez l’atelier pour confirmer les horaires et organiser votre
            passage.
          </p>
          <details>
            <summary>Contacter les fondateurs</summary>
            <p>
              Arlind Mamuti : <a href="tel:+41772186766">077 218 67 66</a>
            </p>
            <p>
              Rizah Dibrani : <a href="tel:+41763381002">076 338 10 02</a>
            </p>
          </details>
          <Link className="button" to="/devis">
            Préparer une demande de devis
          </Link>
        </div>
        <Photo
          id="14"
          alt="Entrée de l’atelier DIMA et véhicule violet devant la façade"
          eager
        />
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
        text="Prestations, devis et coordonnées : les informations utiles pour préparer votre échange avec DIMA."
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
        <h2>Navigation</h2>
        <p>
          Cette version du site n’utilise pas de cookies publicitaires ni de
          suivi analytique. Les vidéos et les photographies sont hébergées avec
          le site. Les liens vers Instagram et Google Maps ouvrent des services
          externes, soumis à leurs propres règles de confidentialité.
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
