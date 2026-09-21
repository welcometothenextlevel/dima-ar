export const business = {
  name: "DIMA AR Carrosserie Sàrl",
  phone: "021 869 71 41",
  tel: "+41218697141",
  email: "info@dimacarrosserie.ch",
  address: "Chemin du Coteau 21a",
  city: "1123 Aclens",
  instagram: "https://www.instagram.com/dima.ar.carrosserie/",
  maps: "https://www.google.com/maps/search/?api=1&query=DIMA+AR+Carrosserie+Chemin+du+Coteau+21a+1123+Aclens",
};
export type Service = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  image: string;
  items: string[];
  process: string[];
  faq: [string, string][];
  variant: string;
  video?: string;
};
export const services: Service[] = [
  {
    slug: "gestion-des-sinistres",
    name: "Gestion des sinistres",
    short: "Un interlocuteur, de l’évaluation à la restitution.",
    headline: "La suite, ensemble.",
    intro:
      "Après un dommage, DIMA évalue les réparations et vous accompagne dans les échanges avec votre assurance. Un dossier précis pour avancer avec une vision claire.",
    image: "03",
    items: [
      "Évaluation des dégâts et devis",
      "Constitution du dossier avec photographies",
      "Transmission à votre assurance",
      "Réparations après validation",
    ],
    process: [
      "Décrire le sinistre",
      "Évaluer et documenter",
      "Obtenir la validation",
      "Réparer et restituer",
    ],
    faq: [
      [
        "Mon assurance accepte-t-elle automatiquement le devis ?",
        "La prise en charge dépend de votre contrat et de la validation de votre assureur. L’atelier vous accompagne dans la constitution du dossier.",
      ],
      [
        "Comment commencer ?",
        "Appelez le 021 869 71 41 ou préparez votre demande de devis avec des photos des dommages.",
      ],
    ],
    variant: "split",
  },
  {
    slug: "carrosserie-tolerie",
    name: "Carrosserie & tôlerie",
    short: "Retrouver la justesse des lignes.",
    headline: "Chaque ligne compte.",
    intro:
      "Bosse, rayure, déformation ou élément endommagé : nous examinons la carrosserie pour définir une remise en état adaptée, du redressage à la finition.",
    image: "28",
    video: "28",
    items: [
      "Réparation des bosses, rayures et déformations",
      "Débosselage sans peinture lorsque le dommage le permet",
      "Redressage de tôle",
      "Réparation des éléments en plastique",
      "Retouches et mise en peinture",
      "Traitement anticorrosion",
    ],
    process: [
      "Examiner les dommages",
      "Préparer et redresser",
      "Peindre et protéger",
      "Contrôler la finition",
    ],
    faq: [
      [
        "Peut-on réparer une bosse sans repeindre ?",
        "Le débosselage sans peinture est possible dans certains cas. La forme du dommage et l’état de la peinture doivent être examinés.",
      ],
      [
        "Réparez-vous les pare-chocs ?",
        "La réparation des éléments en plastique fait partie des prestations de l’atelier.",
      ],
    ],
    variant: "wide",
  },
  {
    slug: "peinture",
    name: "Peinture automobile",
    short: "La matière, la teinte, la lumière.",
    headline: "La couleur. Au détail près.",
    intro:
      "Une retouche discrète ou une peinture complète : la qualité du résultat commence par la préparation. L’application en cabine et la cuisson font partie de notre travail de peinture.",
    image: "20",
    video: "20",
    items: [
      "Peinture partielle ou complète",
      "Retouches de rayures et d’éclats",
      "Teintes et finitions personnalisées",
      "Vernis de protection",
      "Application en cabine professionnelle",
      "Cuisson et polissage après peinture",
    ],
    process: [
      "Définir la teinte",
      "Préparer les surfaces",
      "Appliquer et cuire",
      "Polir et contrôler",
    ],
    faq: [
      [
        "Proposez-vous une peinture complète ?",
        "Oui. L’atelier propose la peinture complète, les retouches et la personnalisation de la couleur.",
      ],
      [
        "Où la peinture est-elle appliquée ?",
        "DIMA dispose d’une cabine de peinture professionnelle et d’un processus de cuisson.",
      ],
    ],
    variant: "portrait",
  },
  {
    slug: "pneus-equilibrage",
    name: "Pneus & équilibrage",
    short: "Un contact précis avec la route.",
    headline: "Le soin commence au sol.",
    intro:
      "Montage saisonnier, équilibrage, pression et contrôle d’usure : les roues méritent la même attention que la carrosserie.",
    image: "01",
    items: [
      "Montage et démontage été, hiver et toutes saisons",
      "Équilibrage des roues",
      "Contrôle de l’usure et des déformations",
      "Réglage de la pression",
      "Remplacement des valves",
      "Conseils selon votre véhicule et votre usage",
    ],
    process: [
      "Contrôler les pneus",
      "Monter et équilibrer",
      "Ajuster la pression",
    ],
    faq: [
      [
        "Effectuez-vous le changement saisonnier ?",
        "Oui, DIMA réalise le montage et le démontage des pneus été, hiver et toutes saisons. Contactez l’atelier pour convenir d’un créneau.",
      ],
      [
        "Une vibration peut-elle venir des roues ?",
        "Un déséquilibre peut provoquer des vibrations. L’atelier contrôle les roues pour identifier l’intervention appropriée.",
      ],
    ],
    variant: "split",
  },
  {
    slug: "reparation-jantes",
    name: "Réparation des jantes",
    short: "Restaurer la forme et la finition.",
    headline: "Le détail qui change tout.",
    intro:
      "Une rayure de trottoir, un impact ou une jante voilée : nous évaluons les possibilités de réparation avant de travailler la forme, la couleur et la protection.",
    image: "21",
    video: "21",
    items: [
      "Dévoilage après examen de la jante",
      "Réparation des rayures et impacts",
      "Ponçage et restauration esthétique",
      "Peinture personnalisée",
      "Finition et vernis protecteur",
    ],
    process: [
      "Évaluer la réparabilité",
      "Restaurer la surface",
      "Appliquer la finition",
    ],
    faq: [
      [
        "Quel délai prévoir ?",
        "Certaines réparations sont possibles en 24 à 48 heures selon les dégâts. Le délai est à confirmer avec l’atelier ; il ne s’agit pas d’une garantie.",
      ],
      [
        "Puis-je changer la couleur des jantes ?",
        "Oui, la peinture personnalisée des jantes est proposée. La teinte et la finition sont définies avec l’atelier.",
      ],
    ],
    variant: "portrait",
  },
  {
    slug: "entretien-vehicule",
    name: "Entretien du véhicule",
    short: "Les contrôles qui font la différence.",
    headline: "Prendre soin de la mécanique.",
    intro:
      "Vidange, filtres et diagnostic : nous expliquons les interventions nécessaires pour adapter l’entretien à votre véhicule.",
    image: "25",
    video: "25",
    items: [
      "Vidange moteur et remplacement du filtre",
      "Contrôle et ajustement des fluides",
      "Inspection générale : freins, pneus, éclairage, batterie",
      "Remplacement des filtres selon les besoins",
      "Diagnostic électronique",
    ],
    process: [
      "Faire le point",
      "Contrôler et diagnostiquer",
      "Effectuer l’entretien",
      "Expliquer les interventions",
    ],
    faq: [
      [
        "Réalisez-vous les vidanges ?",
        "Oui, l’entretien comprend la vidange moteur et le remplacement du filtre.",
      ],
      [
        "Pouvez-vous lire un code défaut ?",
        "Oui, le diagnostic électronique fait partie des prestations proposées.",
      ],
    ],
    variant: "split",
  },
  {
    slug: "nettoyage-detailing",
    name: "Nettoyage & detailing",
    short: "L’attention portée à chaque surface.",
    headline: "Le propre, dans les détails.",
    intro:
      "Habitacle, carrosserie, jantes : un soin adapté à l’état de chaque surface. Du nettoyage courant à une remise en état plus approfondie.",
    image: "07",
    items: [
      "Lavage extérieur et nettoyage des jantes",
      "Aspiration, vitres et soin des plastiques",
      "Shampoing des sièges et moquettes",
      "Nettoyage du compartiment moteur",
      "Rénovation des plastiques et chromes",
      "Soins des cuirs et protection céramique sur demande",
    ],
    process: [
      "Définir les besoins",
      "Nettoyer en profondeur",
      "Soigner les surfaces",
      "Vérifier les détails",
    ],
    faq: [
      [
        "Nettoyez-vous l’intérieur ?",
        "Oui : aspiration, vitres, plastiques, sièges et moquettes font partie des prestations.",
      ],
      [
        "Peut-on préparer un véhicule avant une vente ?",
        "Oui, le nettoyage peut être adapté à une préparation avant vente. Décrivez l’état du véhicule pour établir le devis.",
      ],
    ],
    variant: "wide",
  },
  {
    slug: "polissage",
    name: "Polissage",
    short: "Révéler la profondeur de la peinture.",
    headline: "La lumière retrouve sa place.",
    intro:
      "Micro-rayures, traces circulaires ou oxydation de surface : un polissage adapté à l’état du vernis peut redonner profondeur et éclat à la peinture.",
    image: "05",
    items: [
      "Décontamination et dégoudronnage",
      "Correction des défauts légers de surface",
      "Polissage en plusieurs passes",
      "Lustrage de finition",
      "Protection : cire ou traitement adapté",
    ],
    process: [
      "Examiner le vernis",
      "Décontaminer",
      "Corriger et lustrer",
      "Protéger",
    ],
    faq: [
      [
        "Toutes les rayures disparaissent-elles ?",
        "Le polissage vise les défauts légers de surface. Une rayure profonde peut nécessiter une réparation ou une peinture ; un examen permet de le déterminer.",
      ],
      [
        "Une protection est-elle possible après polissage ?",
        "Oui, l’atelier propose une protection adaptée, notamment par cire ou traitement céramique.",
      ],
    ],
    variant: "wide",
  },
  {
    slug: "restauration-phares",
    name: "Restauration des phares",
    short: "Retrouver la transparence.",
    headline: "Rendre leur clarté aux optiques.",
    intro:
      "Le voile, le jaunissement et les micro-rayures peuvent altérer les optiques. La rénovation travaille la surface avant l’application d’une protection UV.",
    image: "07",
    items: [
      "Examen de l’état des optiques",
      "Ponçage et polissage contrôlés",
      "Rénovation de la transparence",
      "Finition et protection UV",
    ],
    process: [
      "Examiner les optiques",
      "Rénover la surface",
      "Polir et protéger",
    ],
    faq: [
      [
        "Rénovez-vous les phares jaunis ?",
        "Oui, le polissage et la rénovation des optiques font partie des services DIMA. La faisabilité est évaluée selon leur état.",
      ],
      [
        "Protégez-vous les phares après rénovation ?",
        "Une protection UV est appliquée dans le cadre de la restauration.",
      ],
    ],
    variant: "split",
  },
];
export const faqs: [string, string][] = [
  [
    "Prenez-vous en charge les démarches après un sinistre ?",
    "DIMA évalue les dommages, prépare le dossier et le transmet à votre assurance. Les réparations suivent la validation de la prise en charge.",
  ],
  [
    "Comment demander un devis ?",
    "Décrivez votre besoin dans le parcours de devis ou appelez le 021 869 71 41. Des photos et les informations du véhicule facilitent l’évaluation.",
  ],
  [
    "Où se trouve l’atelier ?",
    "Au Chemin du Coteau 21a, 1123 Aclens, dans le canton de Vaud.",
  ],
  [
    "Quels sont les horaires ?",
    "Contactez l’atelier au 021 869 71 41 pour confirmer les horaires et organiser votre passage.",
  ],
  ...services
    .filter((s) => !["gestion-des-sinistres"].includes(s.slug))
    .map((s) => s.faq[0]),
];
export const nav = [
  ["Services", "/services"],
  ["Réalisations", "/realisations"],
  ["L’atelier", "/atelier"],
  ["À propos", "/a-propos"],
  ["Avis", "/avis"],
  ["Contact", "/contact"],
];
export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  images: string[];
  video?: string;
  description: string;
  stages: [string, string][];
};
export const projects: Project[] = [
  {
    slug: "peinture-en-cabine",
    title: "Le geste de peinture",
    category: "Peinture",
    image: "22",
    images: ["20", "22"],
    video: "20",
    description:
      "Une séquence de travail dans la cabine DIMA : véhicule masqué et application de peinture. Les images montrent le soin porté à la préparation et au geste.",
    stages: [
      [
        "Préparation",
        "Les zones à préserver sont masquées avant l’application.",
      ],
      ["Application", "Le peintre travaille les surfaces en cabine."],
      [
        "À l’image",
        "Une étape du travail de peinture, documentée par l’atelier.",
      ],
    ],
  },
  {
    slug: "finition-jantes",
    title: "Une nouvelle finition",
    category: "Jantes",
    image: "21",
    images: ["21"],
    video: "21",
    description:
      "De la jante démontée à sa finition en cabine, une séquence consacrée au travail de surface et à la mise en peinture.",
    stages: [
      ["La pièce", "La jante est présentée avant son passage en cabine."],
      [
        "La finition",
        "La séquence montre la peinture et les détails de la surface.",
      ],
    ],
  },
  {
    slug: "travail-carrosserie",
    title: "Sous la surface",
    category: "Carrosserie",
    image: "28",
    images: ["28"],
    video: "28",
    description:
      "Un regard sur la remise en état d’un élément de carrosserie : préparation localisée, masquage et travail de surface.",
    stages: [
      [
        "Le dommage",
        "La séquence montre une zone de carrosserie en cours de réparation.",
      ],
      [
        "Le travail",
        "Le masquage délimite les surfaces travaillées avant la suite de l’intervention.",
      ],
    ],
  },
  {
    slug: "regards-atelier",
    title: "Lignes & reflets",
    category: "À l’atelier",
    image: "05",
    images: ["07", "05", "06"],
    description:
      "Une série photographique réalisée à l’atelier. Les lignes d’un coupé noir, les reflets de la carrosserie et les personnes derrière le travail DIMA.",
    stages: [],
  },
  {
    slug: "entretien-en-images",
    title: "Le soin mécanique",
    category: "Entretien",
    image: "25",
    images: ["25"],
    video: "25",
    description:
      "Capot ouvert, contrôle et intervention : un aperçu filmé du travail d’entretien à l’atelier.",
    stages: [
      ["Accès mécanique", "Le véhicule est ouvert pour l’intervention."],
      [
        "Le geste",
        "La séquence documente le travail sur le véhicule, sans diagnostic client publié.",
      ],
    ],
  },
  {
    slug: "preparation-en-cabine",
    title: "Avant la couleur",
    category: "Carrosserie",
    image: "27",
    images: ["27"],
    video: "27",
    description:
      "Le véhicule dans l’atelier, puis le masquage et la préparation en cabine : les étapes visibles d’un travail de carrosserie.",
    stages: [
      [
        "Protection",
        "Le masquage protège les parties qui ne sont pas travaillées.",
      ],
      [
        "Préparation",
        "Les surfaces sont préparées avant leur mise en peinture.",
      ],
    ],
  },
];
export const routeTitles: Record<string, string> = {
  "/": "Carrosserie à Aclens · DIMA AR",
  "/services": "Nos expertises",
  "/realisations": "Réalisations",
  "/sinistres-assurances": "Sinistres & assurances",
  "/a-propos": "Rizah & Arlind, l’histoire DIMA",
  "/atelier": "L’atelier à Aclens",
  "/avis": "Vos retours",
  "/faq": "Questions fréquentes",
  "/devis": "Demander un devis",
  "/contact": "Contacter l’atelier",
  "/mentions-legales": "Mentions légales & confidentialité",
  "/404": "Page introuvable",
};
export const routes = [
  ...Object.keys(routeTitles).filter((r) => r != "/404"),
  ...services.map((s) => "/services/" + s.slug),
  ...projects.map((p) => "/realisations/" + p.slug),
];
export function pageMeta(path: string) {
  const s = services.find((s) => path === "/services/" + s.slug);
  const p = projects.find((p) => path === "/realisations/" + p.slug);
  return {
    title: s
      ? `${s.name} à Aclens`
      : p
        ? p.title
        : routeTitles[path] || routeTitles["/404"],
    description: s
      ? s.intro
      : p
        ? p.description
        : path === "/a-propos"
          ? "Rizah Dibrani et Arlind Mamuti : deux carrossiers-peintres, plus de 15 ans d’expérience cumulée et un atelier à Aclens."
          : `Découvrez ${routeTitles[path] || "DIMA AR"}, carrosserie, peinture et soin automobile au Chemin du Coteau 21a à Aclens. Contact : 021 869 71 41.`,
  };
}
