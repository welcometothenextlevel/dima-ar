import { useState } from "react";
import { projects } from "../data/content";
import { Photo, href, Arrow } from "./Media";
export function Gallery({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("Tous");
  const items = preview
    ? [projects[3], projects[0], projects[1]]
    : projects.filter((p) => filter === "Tous" || p.category === filter);
  return (
    <>
      {!preview && (
        <div
          className="filters"
          role="group"
          aria-label="Filtrer les réalisations"
        >
          {["Tous", ...new Set(projects.map((p) => p.category))].map((c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div
        className={"gallery " + (preview ? "gallery-preview" : "")}
        aria-live="polite"
      >
        {items.map((p, i) => (
          <a
            className="project"
            href={href("/realisations/" + p.slug)}
            key={p.slug}
          >
            <div className="project-image">
              <Photo
                id={p.image}
                alt={p.title + " — " + p.description}
                sizes={
                  preview
                    ? "(max-width: 700px) 100vw, 50vw"
                    : "(max-width: 700px) 100vw, 50vw"
                }
              />
              {p.video && (
                <span className="film-tag">
                  Film d’atelier <span aria-hidden="true">▷</span>
                </span>
              )}
            </div>
            <div className="project-caption">
              <div>
                <p className="eyebrow">{p.category}</p>
                <h3>{p.title}</h3>
              </div>
              <Arrow />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
