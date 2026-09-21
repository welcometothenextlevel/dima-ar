import { useState } from "react";
import mediaData from "../data/media.json";
export const base =
  import.meta.env?.BASE_URL || process.env.SITE_BASE || "/dima-ar/";
export const href = (path: string) => base + path.replace(/^\//, "");
const media = mediaData as Record<
  string,
  { width: number; height: number; widths: number[]; source: string }
>;
export function Photo({
  id,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 700px) 100vw, 60vw",
}: {
  id: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
}) {
  const m = media[id];
  return (
    <img
      className={className}
      src={href(`/media/${id}-${m.widths.at(-1)}.webp`)}
      srcSet={m.widths
        .map(
          (w) => `${href(`/media/${id}-${w}.webp`)} ${Math.min(w, m.width)}w`,
        )
        .join(",")}
      sizes={sizes}
      width={m.width}
      height={m.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}
export function Film({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <figure className="film">
      <div className="film-frame">
        {play ? (
          <video
            autoPlay
            controls
            muted
            playsInline
            preload="none"
            poster={href(`/media/${id}-480.webp`)}
            aria-label={title}
          >
            <source src={href(`/media/${id}.mp4`)} type="video/mp4" />
          </video>
        ) : (
          <>
            <Photo id={id} alt={title} />
            <button
              className="play-button"
              onClick={() => setPlay(true)}
              aria-label={`Voir le film : ${title}`}
            >
              <span aria-hidden="true">▷</span> Voir le film
            </button>
          </>
        )}
      </div>
      <figcaption>
        {title}
        <span>Images de l’atelier DIMA AR · Film sans son</span>
      </figcaption>
    </figure>
  );
}
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Link({
  to,
  children,
  className = "text-link",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href(to)}>
      {children}
      <Arrow />
    </a>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="red-dash" />
      {children}
    </p>
  );
}
export function FAQ({ items }: { items: [string, string][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
