import { useState } from "react";
import mediaData from "../data/media.json";
import { ArrowIcon, PlayIcon, PlusIcon } from "./Icons";
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
  parallax = false,
}: {
  id: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
  parallax?: boolean;
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
      data-parallax={parallax ? "" : undefined}
    />
  );
}
export function Film({
  id,
  title,
  label = "Voir le travail",
}: {
  id: string;
  title: string;
  label?: string;
}) {
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
            <span className="film-corner" aria-hidden="true" />
            <button
              className="play-button"
              onClick={() => setPlay(true)}
              aria-label={`${label} : ${title}`}
            >
              <span className="play-ring">
                <PlayIcon size={16} />
              </span>
              {label}
            </button>
          </>
        )}
      </div>
      <figcaption>
        {title}
        <span>Séquence filmée à l’atelier · sans son</span>
      </figcaption>
    </figure>
  );
}
export function Arrow({ size = 18 }: { size?: number }) {
  return <ArrowIcon size={size} />;
}
export function Link({
  to,
  children,
  className = "text-link",
  external = false,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      className={className}
      href={external ? to : href(to)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="link-label">{children}</span>
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
            <PlusIcon size={20} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
