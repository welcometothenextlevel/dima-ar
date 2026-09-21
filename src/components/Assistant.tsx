import { useEffect, useRef, useState } from "react";
import { answer, localAnswer, type Reply } from "../adapters/assistant";
import { business } from "../data/content";
import { href } from "./Media";
export default function Assistant() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<(Reply & { user?: boolean })[]>([
    {
      text: "Bonjour. Une question sur votre véhicule ? Je vous renseigne à partir des informations de l’atelier.",
    },
  ]);
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight });
  }, [messages, busy]);
  async function send(text: string) {
    if (!text.trim() || busy) return;
    setMessages((v) => [...v, { text, user: true }]);
    setValue("");
    setBusy(true);
    try {
      const reply = await answer(text);
      setMessages((v) => [...v, reply]);
    } catch {
      setMessages((v) => [
        ...v,
        {
          ...localAnswer(text),
          text:
            "Le service en ligne est indisponible. " + localAnswer(text).text,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }
  function open() {
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <button
        className="assistant-trigger"
        ref={trigger}
        onClick={open}
        aria-label="Ouvrir DIMA Assistant"
      >
        <span className="assistant-symbol" aria-hidden="true">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M4 2h4a6 6 0 0 1 0 12H4V2Zm3 3v6h1a3 3 0 0 0 0-6H7Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span>DIMA Assistant</span>
        <span aria-hidden="true">+</span>
      </button>
      <dialog
        ref={dialog}
        className="assistant"
        aria-label="DIMA Assistant"
        onClose={() => {
          document.body.style.overflow = "";
          trigger.current?.focus();
        }}
      >
        <div className="assistant-head">
          <div>
            <p className="eyebrow">À votre écoute</p>
            <h2>DIMA Assistant</h2>
          </div>
          <button
            aria-label="Fermer DIMA Assistant"
            onClick={() => dialog.current?.close()}
          >
            ×
          </button>
        </div>
        <p className="assistant-notice">
          Guide automatique · Informations de l’atelier
        </p>
        <div
          className="chat-log"
          ref={log}
          role="log"
          aria-live="polite"
          aria-label="Conversation"
        >
          {messages.map((m, i) => (
            <div className={"chat-message " + (m.user ? "user" : "")} key={i}>
              <span className="chat-author">{m.user ? "Vous" : "DIMA"}</span>
              <p>{m.text}</p>
              {m.link && (
                <a href={m.link.startsWith("/") ? href(m.link) : m.link}>
                  {m.label} ↗
                </a>
              )}
            </div>
          ))}
          {busy && <p role="status">Recherche en cours…</p>}
        </div>
        <div className="quick-questions">
          <button onClick={() => send("Gestion des sinistres")}>
            Un sinistre
          </button>
          <button onClick={() => send("Réparation des jantes")}>
            Mes jantes
          </button>
          <button onClick={() => send("Vos horaires")}>Horaires</button>
        </div>
        <form
          className="chat-input"
          onSubmit={(e) => {
            e.preventDefault();
            (document.activeElement as HTMLElement)?.blur();
            void send(value);
          }}
        >
          <label className="sr-only" htmlFor="chat-message">
            Votre question
          </label>
          <input
            id="chat-message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Votre question…"
            maxLength={1000}
            autoComplete="off"
          />
          <button
            aria-label="Envoyer la question"
            disabled={busy || !value.trim()}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="m5 12 14-7-4 14-3-6-7-1Z M12 13l7-8" />
            </svg>
          </button>
        </form>
        <div className="assistant-actions">
          <a href={href("/devis")}>Devis</a>
          <a href={"tel:" + business.tel}>Appeler</a>
          <a href={href("/services")}>Services</a>
          <a href={business.maps}>Nous trouver</a>
        </div>
      </dialog>
    </>
  );
}
