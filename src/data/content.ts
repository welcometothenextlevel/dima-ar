export const business = {
  name: "DIMA AR Carrosserie Sàrl",
  shortName: "DIMA AR",
  phone: "021 869 71 41",
  tel: "+41218697141",
  email: "info@dimacarrosserie.ch",
  address: "Chemin du Coteau 21a",
  city: "1123 Aclens",
  region: "Vaud, Suisse",
  plusCode: "HG9C+5C Aclens",
  uid: "CHE-272.432.842",
  instagram: "https://www.instagram.com/dima.ar.carrosserie/",
  instagramHandle: "@dima.ar.carrosserie",
  maps: "https://www.google.com/maps/search/?api=1&query=DIMA+AR+Carrosserie+S%C3%A0rl+Chemin+du+Coteau+21a+1123+Aclens",
  mapsEmbed:
    "https://www.google.com/maps?q=DIMA%20AR%20Carrosserie%20S%C3%A0rl%2C%20Chemin%20du%20Coteau%2021a%2C%201123%20Aclens&z=15&hl=fr&output=embed",
  reviewsUrl:
    "https://www.google.com/search?q=DIMA+AR+Carrosserie+S%C3%A0rl+Aclens+avis",
  hours: [
    ["Lundi – Vendredi", "08:00 – 12:00 · 13:20 – 18:15"],
    ["Samedi – Dimanche", "Fermé"],
  ] as [string, string][],
  hoursNote: "Sur rendez-vous en dehors de ces horaires, selon disponibilité.",
  founders: [
    {
      name: "Rizah Dibrani",
      role: "Co-fondateur · Carrossier-peintre CFC",
      phone: "076 338 10 02",
      tel: "+41763381002",
    },
    {
      name: "Arlind Mamuti",
      role: "Co-fondateur · Carrossier-peintre CFC",
      phone: "077 218 67 66",
      tel: "+41772186766",
    },
  ],
};
export const googleRating = {
  value: 5.0,
  count: 23,
  themes: [
    ["travail", 9],
    ["équipe", 4],
    ["prix", 3],
    ["personne de confiance", 2],
  ] as [string, number][],
};
export type Review = { name: string; when: string; text: string; tag?: string };
export const reviews: Review[] = [
  {
    name: "Jithurshan Lingam",
    when: "il y a 3 mois",
    text: "Très satisfait du travail réalisé chez Dima AR Carrosserie ! Accueil professionnel, travail soigné et dans les délais. Je recommande vivement cette carrosserie pour leur sérieux et la qualité du service.",
    tag: "Délais respectés",
  },
  {
    name: "Soh Bella",
    when: "il y a 6 mois",
    text: "Super carrosserie. Ma maman a amené son véhicule, elle a été très satisfaite du travail fourni. Le véhicule a été rendu dans un délai très rapide et surtout impeccable. Je recommande fortement.",
    tag: "Local Guide",
  },
  {
    name: "Jeremy Schmid",
    when: "il y a 9 mois",
    text: "J’ai amené mon véhicule dans cette carrosserie et je suis vraiment impressionné par la qualité du travail. Deux jeunes passionnés qui font les choses avec sérieux, soin et professionnalisme. L’accueil est top, les explications sont claires et le résultat final est impeccable : ma voiture est ressortie comme neuve. Ça fait plaisir de voir des personnes aussi motivées et investies dans leur métier. Je recommande à 100.",
    tag: "Équipe passionnée",
  },
  {
    name: "Mélick Transocier",
    when: "il y a un an",
    text: "Service impeccable ! J’ai confié ma voiture à cette carrosserie après un accrochage, et le résultat est bluffant : peinture parfaite, aucun défaut visible, on dirait qu’elle sort du concessionnaire. L’équipe est professionnelle, à l’écoute et très réactive. Les délais ont été respectés et le prix est tout à fait raisonnable. Je recommande les yeux fermés !",
    tag: "Peinture",
  },
  {
    name: "Blerim Ljika",
    when: "il y a un an",
    text: "Travail impeccable ! Ma voiture est ressortie comme neuve, on ne voit plus aucune trace du choc. Service rapide et de grande qualité, je recommande vivement cette carrosserie.",
    tag: "Carrosserie",
  },
  {
    name: "Bardh Dibrani",
    when: "il y a un an",
    text: "Un vrai coup de cœur ! Une équipe jeune, passionnée et pleine d’énergie qui redonne vie à votre voiture comme par magie. Leur professionnalisme se ressent dans chaque détail, et l’ambiance à l’atelier est aussi accueillante qu’efficace. On sent qu’on est entre de bonnes mains dès la première minute. Résultat : une carrosserie nickel et une super expérience client. Si vous cherchez des pros qui bossent avec le sourire (et du talent !), foncez sans hésiter.",
    tag: "Expérience client",
  },
  {
    name: "Fina Murseli",
    when: "il y a 9 mois",
    text: "Franchement au top, accueil sympa, réparations de qualité et prix raisonnables. On voit qu’ils prennent leur travail à cœur. Je reviendrai sans hésiter.",
    tag: "Prix",
  },
  {
    name: "Dardan Jashari",
    when: "il y a un an",
    text: "Un service au top du top chez DIMA AR CARROSSERIE ! Travail de carrosserie impeccable, finition parfaite, et une équipe passionnée et pro. Ma voiture est comme neuve. Je recommande les yeux fermés !",
    tag: "Finition",
  },
  {
    name: "Almira Selmanaj",
    when: "il y a un an",
    text: "Prise en charge rapide, travail top, professionnel et sérieux. Rien à redire, 5 étoiles méritées ! Équipe dynamique ! Je recommande.",
    tag: "Prise en charge",
  },
  {
    name: "Enver Mamuti",
    when: "il y a un an",
    text: "Magnifique ! Ces deux jeunes entrepreneurs sont très motivés et proposent un boulot de qualité, je recommande fortement cette carrosserie !",
  },
  {
    name: "Vincent Caraça",
    when: "il y a un an",
    text: "Personnes de confiance, rapide et efficace, ils rassurent le client, c’est un super garage et ce sont des super personnes, je recommande à 100 %. Merci pour tout Dima.",
    tag: "Confiance",
  },
  {
    name: "Rems",
    when: "il y a 11 mois",
    text: "Carrosserie dynamique, personnel très sympathique et professionnel ! Endroit chaleureux, moderne et très bien situé, bravo.",
    tag: "Local Guide",
  },
  {
    name: "Nart Agushi",
    when: "il y a 5 mois",
    text: "Équipe au top, professionnels, je recommande les yeux fermés !",
  },
  {
    name: "Diamant Halimi",
    when: "il y a un an",
    text: "Excellente qualité, deux jeunes à l’écoute de leur clientèle et professionnels dans leur travail. Je recommande cette carrosserie.",
  },
  {
    name: "Anthony Bocca",
    when: "il y a 11 mois",
    text: "Un service de grande qualité, véhicule récupéré et livré après les réparations. Merci à vous !",
    tag: "Véhicule livré",
  },
  {
    name: "Deniz Karakus",
    when: "il y a un an",
    text: "Service rapide et pro, ma voiture est comme neuve. Prix honnête, merci.",
    tag: "Prix",
  },
  {
    name: "Bibi O.",
    when: "il y a un an",
    text: "Travail excellent. Je les suis depuis leur premier box, deux personnes de confiance. Je vous les conseille.",
    tag: "Confiance",
  },
  {
    name: "Devan Madzabou",
    when: "il y a un an",
    text: "Un service au top du top, à recommander fortement !",
  },
];
export const silentReviewers = [
  "Mirsad Shala",
  "El Msh",
  "dlc",
  "Ludovic Ludovic",
  "SelimPiano",
];
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
  plus: [string, string][];
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
    plus: [
      [
        "Un seul interlocuteur",
        "L’atelier évalue, documente et transmet le dossier à votre assurance, avec photos et estimation détaillée.",
      ],
      [
        "Franchise réglée sur place",
        "Si une franchise est prévue, elle se règle directement à l’atelier ; le solde est traité avec l’assureur partenaire.",
      ],
      [
        "Devis gratuit",
        "L’évaluation des dommages et le devis ne vous engagent à rien.",
      ],
      [
        "Véhicule restitué prêt",
        "Vous êtes contacté dès que le véhicule est prêt à être récupéré dans les meilleures conditions.",
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
    plus: [
      [
        "Prise en charge rapide",
        "Intervenir vite pour limiter l’immobilisation de votre véhicule.",
      ],
      [
        "Démarches assurance",
        "Les échanges administratifs avec votre compagnie sont pris en charge par l’atelier.",
      ],
      [
        "Équipements de pointe",
        "Redressage, débosselage et préparation avec un outillage professionnel.",
      ],
      [
        "Toutes marques",
        "Véhicules de tourisme, utilitaires et véhicules premium.",
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
    plus: [
      [
        "Cabine de peinture",
        "Application homogène dans une cabine professionnelle, à l’abri des poussières.",
      ],
      [
        "Four de cuisson",
        "La cuisson garantit l’adhérence, la finition et la durabilité de la peinture.",
      ],
      [
        "Large choix de teintes",
        "Teinte d’origine reproduite ou personnalisation selon vos envies.",
      ],
      [
        "Résultat durable",
        "Vernis de protection contre les UV et les agressions extérieures.",
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
    plus: [
      [
        "Équipement professionnel",
        "Machines de montage et d’équilibrage qui préservent vos jantes.",
      ],
      [
        "Conseil personnalisé",
        "Le choix des pneus adapté à votre véhicule et à votre usage.",
      ],
      [
        "Commande rapide",
        "Un large choix de marques et de tailles, avec commande rapide si nécessaire.",
      ],
      [
        "Créneau saisonnier",
        "Réservez votre passage hiver/été pour éviter l’attente.",
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
    plus: [
      [
        "Technologie de redressage",
        "Jantes en alliage ou en acier redressées sans les fragiliser.",
      ],
      [
        "Finition proche du neuf",
        "Ponçage, peinture et vernis pour un rendu professionnel.",
      ],
      [
        "Alternative au remplacement",
        "Une solution économique par rapport à une jante neuve.",
      ],
      [
        "24 à 48 h",
        "Selon les dégâts, certaines réparations sont possibles en un à deux jours.",
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
    plus: [
      [
        "Toutes marques",
        "Des techniciens formés pour entretenir tous types de véhicules.",
      ],
      [
        "Matériel de pointe",
        "Outils et logiciels de diagnostic pour un entretien précis.",
      ],
      [
        "Transparence totale",
        "Les interventions nécessaires vous sont expliquées avant toute opération.",
      ],
      [
        "Suivi personnalisé",
        "L’historique de votre véhicule est tenu à jour pour un entretien régulier.",
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
    plus: [
      [
        "Produits haut de gamme",
        "Nettoyants professionnels respectueux du véhicule et de l’environnement.",
      ],
      [
        "Formules à la carte",
        "Nettoyage rapide, complet ou prestige selon vos besoins.",
      ],
      [
        "Traitement céramique",
        "Protection longue durée et rénovation des cuirs sur demande.",
      ],
      [
        "Avant une vente",
        "Une restitution impeccable, idéale avant une vente ou un événement.",
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
    plus: [
      [
        "Outils professionnels",
        "Polisseuses orbitales, tampons adaptés et produits premium.",
      ],
      [
        "Plusieurs passes",
        "Une application précise, sans hologrammes, pour un effet miroir.",
      ],
      [
        "Soin sur mesure",
        "Adapté au type de peinture, à l’état du vernis et à vos attentes.",
      ],
      [
        "Protection",
        "Cire, polish haute brillance ou traitement céramique après correction.",
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
    plus: [
      [
        "Technique contrôlée",
        "Polissage mécanique, ponçage progressif et finition brillante.",
      ],
      ["Économique", "Bien moins coûteux qu’un remplacement complet du phare."],
      [
        "Tous types d’optiques",
        "Plastique, polycarbonate ou verre, anciens ou récents.",
      ],
      [
        "Sécurité",
        "Une meilleure diffusion de la lumière, de nuit ou par mauvais temps.",
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
    "L’atelier est ouvert du lundi au vendredi, de 08:00 à 12:00 et de 13:20 à 18:15. Appelez le 021 869 71 41 pour convenir d’un rendez-vous.",
  ],
  [
    "Le devis est-il gratuit ?",
    "Oui. L’évaluation des dommages et le devis sont gratuits et sans engagement.",
  ],
  [
    "Travaillez-vous sur toutes les marques ?",
    "Oui, l’atelier intervient sur toutes les marques : véhicules de tourisme, utilitaires et véhicules premium.",
  ],
  ...services
    .filter((s) => !["gestion-des-sinistres"].includes(s.slug))
    .map((s) => s.faq[0]),
];
export const nav = [
  ["Accueil", "/"],
  ["Expertises", "/services"],
  ["Réalisations", "/realisations"],
  ["L’atelier", "/atelier"],
  ["À propos", "/a-propos"],
  ["Avis Google", "/avis"],
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
  "/a-propos": "Rizah & Arlind, l’histoire DIMA AR",
  "/atelier": "L’atelier à Aclens",
  "/avis": "Avis Google : 5,0 sur 23 avis",
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
          : path === "/avis"
            ? "23 avis Google, note 5,0 sur 5. Les retours des clients de DIMA AR Carrosserie à Aclens : carrosserie, peinture, délais et accueil."
            : path === "/contact"
              ? "Appelez le 021 869 71 41 ou passez au Chemin du Coteau 21a, 1123 Aclens. Horaires, plan d’accès Google Maps, e-mail et numéros directs des fondateurs."
              : `Découvrez ${routeTitles[path] || "DIMA AR"}, carrosserie, peinture et soin automobile au Chemin du Coteau 21a à Aclens. Contact : 021 869 71 41.`,
  };
}
