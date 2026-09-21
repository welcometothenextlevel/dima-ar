import { useEffect, useRef, useState } from "react";
import { services, business } from "../data/content";
import {
  emptyQuote,
  quoteText,
  submitQuote,
  type QuoteData,
} from "../adapters/quote";
import { href, Arrow } from "./Media";
const labels = [
  "Votre besoin",
  "Votre véhicule",
  "La demande",
  "Vos photos",
  "Vos coordonnées",
  "Récapitulatif",
];
export default function Quote() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteData>(emptyQuote);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{
    sent: boolean;
    reference?: string;
  } | null>(null);
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const slug = new URLSearchParams(location.search).get("service");
    const s = services.find((s) => s.slug === slug);
    if (s) setData((d) => ({ ...d, service: s.name }));
  }, []);
  useEffect(() => {
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
    return () => urls.forEach(URL.revokeObjectURL);
  }, [files]);
  function change<K extends keyof QuoteData>(key: K, value: QuoteData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }
  function go(n: number) {
    setError("");
    setStep(n);
    setTimeout(() => title.current?.focus(), 0);
  }
  function field(
    key: keyof QuoteData,
    label: string,
    type = "text",
    required = true,
  ) {
    return (
      <label>
        {label}
        {!required && <small> Facultatif</small>}
        <input
          name={key}
          type={type}
          required={required}
          value={String(data[key])}
          onChange={(e) => change(key, e.target.value)}
          autoComplete={
            (
              {
                firstName: "given-name",
                lastName: "family-name",
                email: "email",
                phone: "tel",
              } as Record<string, string>
            )[key]
          }
          maxLength={key === "description" ? 3000 : 150}
          {...(key === "year"
            ? { min: 1900, max: new Date().getFullYear() + 1 }
            : {})}
        />
      </label>
    );
  }
  async function next(e: React.FormEvent) {
    e.preventDefault();
    if (step === 0 && !data.service) {
      setError("Choisissez la prestation souhaitée.");
      return;
    }
    if (step < 5) {
      go(step + 1);
      return;
    }
    setBusy(true);
    setError("");
    try {
      const r = await submitQuote(data, files);
      setResult(r);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  function selectFiles(list: FileList | null) {
    if (!list) return;
    const incoming = Array.from(list);
    if (
      incoming.some(
        (f) =>
          !["image/jpeg", "image/png", "image/webp", "image/avif"].includes(
            f.type,
          ),
      )
    ) {
      setError("Utilisez des images JPG, PNG, WebP ou AVIF.");
      return;
    }
    const all = [...files, ...incoming];
    if (
      all.length > 8 ||
      all.some((f) => f.size > 8 * 1024 * 1024) ||
      all.reduce((a, f) => a + f.size, 0) > 30 * 1024 * 1024
    ) {
      setError(
        "Ajoutez au maximum 8 photos, de 8 Mo chacune, et 30 Mo au total.",
      );
      return;
    }
    setFiles(all);
    setError("");
  }
  function download() {
    const blob = new Blob([quoteText(data, files)], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "demande-devis-dima.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  if (result)
    return (
      <div className="quote-result">
        <p className="eyebrow">
          {result.sent ? "Demande transmise" : "Dernière étape"}
        </p>
        <h2>
          {result.sent
            ? "Merci. Votre demande est reçue."
            : "Votre demande est prête."}
        </h2>
        <p>
          {result.sent
            ? "L’atelier dispose des informations transmises pour vous recontacter."
            : "Pour la transmettre à l’atelier, ouvrez votre messagerie avec le récapitulatif ci-dessous. Aucune information n’a encore été envoyée."}
        </p>
        {!result.sent && (
          <>
            <p>
              Ajoutez vos photos en pièces jointes dans votre e-mail avant de
              l’envoyer.
            </p>
            <a
              className="button"
              href={`mailto:${business.email}?subject=${encodeURIComponent("Demande de devis — " + data.service)}&body=${encodeURIComponent(quoteText(data, files))}`}
            >
              Ouvrir mon e-mail <Arrow />
            </a>
            <button className="text-link" onClick={download}>
              Télécharger le récapitulatif ↓
            </button>
            <details>
              <summary>Voir le récapitulatif</summary>
              <pre>{quoteText(data, files)}</pre>
            </details>
          </>
        )}
        {result.reference && <p>Référence : {result.reference}</p>}
        <button className="text-link" onClick={() => setResult(null)}>
          Revenir à ma demande
        </button>
        <a href={"tel:" + business.tel}>Ou appeler le {business.phone}</a>
      </div>
    );
  return (
    <div className="quote-layout">
      <aside>
        <p className="eyebrow">Un devis adapté</p>
        <h2>
          Tout commence
          <br />
          par votre besoin.
        </h2>
        <p>Quelques informations pour préparer l’échange avec l’atelier.</p>
        <ol>
          {labels.map((l, i) => (
            <li
              key={l}
              aria-current={i === step ? "step" : undefined}
              className={i < step ? "done" : ""}
            >
              <span>0{i + 1}</span>
              {i < step ? (
                <button type="button" onClick={() => go(i)}>
                  {l}
                </button>
              ) : (
                l
              )}
            </li>
          ))}
        </ol>
        <p className="quote-aside-note">
          Besoin d’en parler ?<br />
          <a href={"tel:" + business.tel}>{business.phone}</a>
        </p>
      </aside>
      <form className="quote-form" onSubmit={next}>
        <div className="progress-label">
          Étape {step + 1} sur 6{" "}
          <span>{Math.round(((step + 1) / 6) * 100)} %</span>
        </div>
        <progress value={step + 1} max="6" aria-label="Progression du devis" />
        <h2 tabIndex={-1} ref={title}>
          {labels[step]}
        </h2>
        {step === 0 && (
          <fieldset>
            <legend>Que pouvons-nous faire pour votre véhicule ?</legend>
            <div className="service-options">
              {[...services.map((s) => s.name), "Autre demande"].map((s) => (
                <label key={s} className={data.service === s ? "selected" : ""}>
                  <input
                    type="radio"
                    name="service"
                    value={s}
                    checked={data.service === s}
                    onChange={() => change("service", s)}
                    required
                  />
                  <span>{s}</span>
                  <span aria-hidden="true">
                    {data.service === s ? "✓" : "↗"}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        )}
        {step === 1 && (
          <div className="form-fields">
            {field("brand", "Marque")}
            {field("model", "Modèle")}
            {field("year", "Année", "number", false)}
          </div>
        )}
        {step === 2 && (
          <label>
            Décrivez votre besoin
            <textarea
              required
              minLength={10}
              maxLength={3000}
              rows={7}
              value={data.description}
              onChange={(e) => change("description", e.target.value)}
              placeholder="Éléments concernés, dommages visibles, résultat souhaité…"
            />
            <small>
              Au moins 10 caractères. Ne communiquez pas de données d’assurance
              sensibles ici.
            </small>
          </label>
        )}
        {step === 3 && (
          <>
            <p>
              Une vue d’ensemble et des détails facilitent l’évaluation. Cette
              étape est facultative.
            </p>
            <label className="upload-zone">
              Ajouter des photos <span aria-hidden="true">＋</span>
              <input
                aria-label="Ajouter des photos"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                multiple
                onChange={(e) => {
                  selectFiles(e.target.files);
                  e.target.value = "";
                }}
              />
              <small>
                JPG, PNG, WebP, AVIF · 8 photos maximum · 8 Mo par photo
              </small>
            </label>
            <div className="upload-previews">
              {files.map((f, i) => (
                <div key={f.name + i}>
                  <img
                    src={previews[i]}
                    alt={"Photo sélectionnée : " + f.name}
                  />
                  <p>{f.name}</p>
                  <button
                    type="button"
                    onClick={() =>
                      setFiles((fs) => fs.filter((_, n) => i !== n))
                    }
                  >
                    Retirer
                  </button>
                </div>
              ))}
            </div>
            <p className="fine-print">
              Les photos restent sur votre appareil jusqu’à la transmission.
              Dans le mode e-mail, vous devrez les joindre à votre message.
            </p>
          </>
        )}
        {step === 4 && (
          <div className="form-fields">
            {field("firstName", "Prénom")}
            {field("lastName", "Nom")}
            {field("phone", "Téléphone", "tel", data.preferred === "Téléphone")}
            {field("email", "E-mail", "email", data.preferred === "E-mail")}
            <label>
              Contact souhaité
              <select
                value={data.preferred}
                onChange={(e) => change("preferred", e.target.value)}
              >
                <option>Téléphone</option>
                <option>E-mail</option>
              </select>
            </label>
          </div>
        )}
        {step === 5 && (
          <>
            <dl className="recap">
              <dt>Prestation</dt>
              <dd>{data.service}</dd>
              <dt>Véhicule</dt>
              <dd>
                {data.brand} {data.model} {data.year}
              </dd>
              <dt>Votre demande</dt>
              <dd>{data.description}</dd>
              <dt>Photos</dt>
              <dd>{files.length} photo(s) sélectionnée(s)</dd>
              <dt>Contact</dt>
              <dd>
                {data.firstName} {data.lastName}
                <br />
                {data.phone}
                <br />
                {data.email}
                <br />
                Par {data.preferred.toLowerCase()}
              </dd>
            </dl>
            <label className="consent">
              <input
                type="checkbox"
                required
                checked={data.consent}
                onChange={(e) => change("consent", e.target.checked)}
              />
              <span>
                J’accepte que DIMA utilise ces informations pour traiter ma
                demande et me recontacter.{" "}
                <a href={href("/mentions-legales")}>Confidentialité</a>
              </span>
            </label>
            {!import.meta.env?.VITE_QUOTE_ENDPOINT && (
              <p className="fine-print">
                Vous pourrez ensuite ouvrir un e-mail prérempli et y joindre vos
                photos. Cette étape ne transmet pas automatiquement la demande.
              </p>
            )}
          </>
        )}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <div className="form-buttons">
          {step > 0 && (
            <button
              type="button"
              className="back-button"
              onClick={() => go(step - 1)}
            >
              ← Retour
            </button>
          )}
          <button className="button" disabled={busy} type="submit">
            {busy
              ? "Transmission…"
              : step === 5
                ? import.meta.env?.VITE_QUOTE_ENDPOINT
                  ? "Envoyer ma demande"
                  : "Préparer mon e-mail"
                : "Continuer"}
            <Arrow />
          </button>
        </div>
      </form>
    </div>
  );
}
