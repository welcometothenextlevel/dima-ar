import { business, services } from "../data/content";
export type Reply = { text: string; link?: string; label?: string };
export function localAnswer(input: string): Reply {
  const q = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (/(horaire|ouvert|ferme|samedi|dimanche)/.test(q))
    return {
      text:
        "Pour confirmer les horaires et organiser votre passage, appelez l’atelier au " +
        business.phone +
        ".",
      link: "tel:" + business.tel,
      label: "Appeler l’atelier",
    };
  if (/(prix|cout|tarif|combien|devis)/.test(q))
    return {
      text: "Le devis dépend du véhicule et de l’intervention. Décrivez votre besoin et ajoutez des photos dans le parcours de devis. Aucun tarif ne peut être confirmé sans évaluation.",
      link: "/devis",
      label: "Préparer mon devis",
    };
  if (/(adresse|trouver|ou etes|situe|venir|localis)/.test(q))
    return {
      text: `L’atelier se trouve au ${business.address}, ${business.city}, dans le canton de Vaud.`,
      link: business.maps,
      label: "Voir l’itinéraire",
    };
  if (/(contact|telephone|appeler|email|mail)/.test(q))
    return {
      text: `Vous pouvez joindre DIMA au ${business.phone} ou par e-mail à ${business.email}.`,
      link: "/contact",
      label: "Coordonnées de l’atelier",
    };
  const keys = [
    /sinistre|assuran|accident/,
    /carrosser|tolerie|bosse|deboss|pare.choc/,
    /peint|couleur|vernis/,
    /pneu|equilibr|roue/,
    /jante/,
    /entretien|vidange|filtre|diagnosti|moteur/,
    /nettoy|detail|cuir|lavage/,
    /poliss|micro.ray|lustr/,
    /phare|optiqu/,
  ];
  let index = keys.findIndex((r) => r.test(q));
  if (index >= 0) {
    const s = services[index];
    return {
      text:
        s.intro +
        " " +
        (index === 0
          ? "La prise en charge reste soumise à la validation de votre assureur."
          : index === 4
            ? "La faisabilité et le délai sont confirmés après examen."
            : ""),
      link: "/services/" + s.slug,
      label: s.name,
    };
  }
  if (/bonjour|salut|bonsoir|merci/.test(q))
    return {
      text: "Bonjour. Je peux vous renseigner sur les prestations, la gestion des sinistres et les coordonnées de l’atelier. Quel est votre besoin ?",
    };
  return {
    text: "Je n’ai pas d’information vérifiée pour répondre précisément. L’équipe DIMA peut vous renseigner au 021 869 71 41.",
    link: "/contact",
    label: "Contacter l’atelier",
  };
}
export async function answer(input: string): Promise<Reply> {
  const endpoint = import.meta.env?.VITE_ASSISTANT_ENDPOINT;
  if (!endpoint) return localAnswer(input);
  const r = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
    signal: AbortSignal.timeout(15000),
  });
  if (!r.ok) throw Error("Service indisponible");
  const data = await r.json();
  if (typeof data.text !== "string") throw Error("Réponse invalide");
  return { text: data.text };
}
