# DIMA AR — Carrosserie à Aclens

Refonte française React + TypeScript + Vite, pré-rendue en HTML statique pour GitHub Pages. Photographies et films issus exclusivement du dossier DIMA fourni. Aucun suivi tiers, aucune image générée, aucune note client inventée.

## Développement

Node 22 ou version ultérieure.

```sh
npm ci
npm run dev
```

Ouvrir l’adresse locale suivie de `/dima-ar/`. Pour une installation à la racine : `SITE_BASE=/ npm run dev`.

```sh
npm run build
npm test
npm run preview
```

Le build vérifie TypeScript, produit les bundles à noms hachés et génère 26 pages HTML, un `404.html`, un sitemap, robots.txt et `.nojekyll`. Chaque page possède son propre titre, description, canonique et données structurées. Les liens ont de vrais chemins, sans routage par hash ni redirection 404 vers l’accueil.

Le contrôle navigateur facultatif `node scripts/browser-audit.mjs` utilise Chrome installé sur macOS. Adapter `executablePath` ou utiliser le Chromium de Playwright sur une autre machine. Le serveur preview doit être actif sur 4173. Rapports dans `docs/` ; captures hors du dépôt dans `../audit/`.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy-pages.yml` construit et publie `dist` à chaque push sur `main`. Dans les paramètres Pages du dépôt, la source doit être **GitHub Actions**. URL prévue : https://welcometothenextlevel.github.io/dima-ar/.

Aucun CNAME n’est créé et le domaine `dimacarrosserie.ch` n’est pas déplacé. Pour un futur domaine personnalisé : définir `SITE_BASE=/`, `SITE_ORIGIN=https://dimacarrosserie.ch`, configurer le domaine dans GitHub Pages et ajuster la vérification des liens dans `scripts/audit.mjs`. Tester de nouveau les accès directs.

## Organisation

- `src/data/content.ts` : coordonnées, navigation, services, FAQ, réalisations, titres de routes.
- `src/data/media.json` : provenance et dimensions des médias, variantes WebP.
- `src/components/` : navigation, médias, portfolio, assistant, devis.
- `src/pages.tsx` : compositions des pages ; services et projets tirent leurs données du référentiel.
- `src/adapters/` : limites explicites entre l’interface et les services d’envoi/IA.
- `src/style.css` : styles de base des pages ; `src/ui.css` : navigation fixe, menu plein écran, animations, avis, contact et règles responsives.
- `src/motion.ts` : révélation au défilement, parallaxe, compteurs et comportement de l’en-tête (sans bibliothèque, désactivé avec `prefers-reduced-motion`).
- `scripts/prerender.tsx` : génération HTML et SEO.
- `public/media/` : dérivés WebP et vidéos MP4 optimisées ; aucun original modifié.
- `docs/` : provenance, audit de contenu, tests et intégrations.

Les originaux sont conservés hors du dépôt, dans le ZIP utilisateur et dans `../original-media/dima media/`. L’inventaire inclut les 34 médias examinés. Les films sont muets et uniquement chargés sur activation, avec poster et lecteur natif. Les petits écrans gardent les formats portrait, sans les étirer en pleine largeur panoramique.

## Modifier les contenus

**Coordonnées et horaires** : modifier `business` dans `src/data/content.ts` (téléphone, e-mail, adresse, horaires, numéros directs des fondateurs, liens Instagram, Google Maps et fiche Google). Les horaires publiés (lundi–vendredi 08:00–12:00 / 13:20–18:15) sont ceux de la fiche Google et du pied de page de l’ancien site ; la page Contact de l’ancien site indiquait aussi le samedi matin, à confirmer avec DIMA.

**Services** : éditer `services` : nom, slug, image, introduction, prestations, étapes, FAQ et variante (`split`, `wide`, `portrait`). Les liens, les pages et les données structurées sont générés depuis ces objets.

**FAQ** : éditer `faqs` ou les FAQ propres aux services. La base d’intentions de l’assistant est dans `src/adapters/assistant.ts` ; son contenu de prestation provient du même référentiel.

**Ajouter une réalisation** : ajouter des dérivés au dossier media, déclarer leurs dimensions dans `media.json`, puis un objet dans `projects`. Un slug crée automatiquement `/realisations/slug/`. Décrire uniquement les gestes visibles ou le dossier fourni. Pour des études détaillées, renseigner `stages` avec les preuves disponibles. Ne pas déduire un diagnostic, un délai ou le résultat final de photos partielles. Les catégories sans projet ne sont pas affichées.

**Avis Google** : `reviews`, `silentReviewers` et `googleRating` dans `src/data/content.ts` reproduisent les 23 avis publics de la fiche Google (relevés le 21 septembre 2026, note 5,0). Mettre à jour ces trois valeurs lors de nouveaux avis ; la note agrégée alimente aussi les données structurées.

## Formulaire et assistant

Voir [docs/integrations.md](docs/integrations.md). Le devis fonctionne immédiatement comme parcours préparatoire à un e-mail, en indiquant explicitement qu’aucun envoi n’a eu lieu. L’assistant utilise un guide d’intentions local, pas un faux LLM. Aucun secret n’est présent dans le navigateur.

## Avant bascule du domaine principal

Faire confirmer par DIMA les horaires, les droits de publication des personnes et des médias fournis, ainsi que les textes d’avis s’ils sont souhaités. Connecter et tester un backend si la réception automatique des formulaires avec pièces jointes est requise. La version e-mail reste utilisable sans cette connexion. La politique de confidentialité doit être adaptée si de nouveaux prestataires ou traitements sont ajoutés.
