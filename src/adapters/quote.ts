export type QuoteData = {
  service: string;
  brand: string;
  model: string;
  year: string;
  description: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferred: string;
  consent: boolean;
};
export const emptyQuote: QuoteData = {
  service: "",
  brand: "",
  model: "",
  year: "",
  description: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  preferred: "Téléphone",
  consent: false,
};
export function quoteText(d: QuoteData, files: File[]) {
  return `Demande de devis DIMA AR\n\nPrestation : ${d.service}\nVéhicule : ${d.brand} ${d.model} ${d.year}\n\n${d.description}\n\n${d.firstName} ${d.lastName}\nTéléphone : ${d.phone}\nE-mail : ${d.email}\nContact souhaité : ${d.preferred}\nPhotos à joindre : ${files.map((f) => f.name).join(", ") || "Aucune"}\n\nAccord donné pour être recontacté au sujet de cette demande.`;
}
export async function submitQuote(
  data: QuoteData,
  files: File[],
): Promise<{ sent: boolean; reference?: string }> {
  const endpoint = import.meta.env?.VITE_QUOTE_ENDPOINT;
  if (!endpoint) return { sent: false };
  const body = new FormData();
  body.append("request", JSON.stringify(data));
  files.forEach((f) => body.append("photos", f));
  const response = await fetch(endpoint, {
    method: "POST",
    body,
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok)
    throw Error(
      "La demande n’a pas pu être transmise. Réessayez ou appelez l’atelier.",
    );
  const result = await response.json();
  if (result.success !== true)
    throw Error("La réception n’a pas été confirmée. Contactez l’atelier.");
  return {
    sent: true,
    reference:
      typeof result.reference === "string" ? result.reference : undefined,
  };
}
