# Connexions sécurisées

## Devis : état actuel

Six étapes : besoin, véhicule, description, photos, coordonnées, récapitulatif/accord. La préférence de contact détermine le champ obligatoire. Images : JPEG/PNG/WebP/AVIF, 8 maximum, 8 Mo par image et 30 Mo au total. Les aperçus utilisent des URLs temporaires révoquées au retrait/changement. Aucun stockage persistant, aucune donnée dans l’URL, aucun envoi pendant les étapes.

Sans endpoint, la dernière action prépare un e-mail à `info@dimacarrosserie.ch`, avec récapitulatif téléchargeable. Les images doivent être jointes dans la messagerie : les navigateurs ne permettent pas de joindre automatiquement un File à un lien mailto. L’interface le dit explicitement. Un e-mail ouvert ne constitue pas une réception confirmée.

## Brancher une réception automatique

Déployer un endpoint HTTPS sur un backend ou une fonction serverless autorisée par DIMA. Configurer `VITE_QUOTE_ENDPOINT` au build : cette URL est publique, ce n’est pas une clé. L’adapter `src/adapters/quote.ts` envoie un POST `multipart/form-data` avec :

- `request` : objet JSON des champs typés `QuoteData` ;
- `photos` : répétitions du champ fichier.

Une réception acceptée doit renvoyer `{"success":true,"reference":"identifiant-optionnel"}`. Ne renvoyer cette confirmation qu’après stockage ou envoi effectif. Codes HTTP 4xx/5xx et réponses non conformes sont traités comme des erreurs ; la demande reste visible pour réessayer.

Le serveur doit valider de nouveau les champs et fichiers, limiter les tailles et le débit, restreindre CORS au domaine publié, filtrer le spam, éviter d’exécuter du contenu téléversé, limiter les logs personnels et définir durée de conservation et accès. Les limites frontend ne sont pas une barrière de sécurité. Les identifiants de messagerie et de stockage restent dans les secrets du serveur. Tester réception réelle, panne réseau, pièces jointes et consentement avant activation.

## Assistant : état actuel

`src/adapters/assistant.ts` expose une interface `answer(message)` et un fallback `localAnswer(message)`. Le fallback reconnaît prestations, sinistres, adresse, contact, devis et horaires. Il ne confirme ni prix, ni garantie, ni délai, ni couverture. Les réponses inconnues renvoient à l’équipe. Les conversations restent en mémoire de la page et disparaissent à son rechargement.

Le panneau utilise un `<dialog>` natif : focus contenu, Escape, arrière-plan inerte et retour du focus. Petits écrans : panneau opaque plein écran et hauteur dynamique, avec log indépendant. Les réponses sont du texte React, jamais du HTML injecté.

## Brancher un modèle de langage

Configurer `VITE_ASSISTANT_ENDPOINT` avec l’URL publique d’un backend. Le frontend envoie `POST {"message":"…"}` et attend `{"text":"…"}`. En cas d’erreur ou de délai supérieur à 15 secondes, il revient au guide local avec un message explicite.

La fonction serveur doit conserver la clé du fournisseur dans ses secrets, limiter le débit et la longueur, contrôler l’origine et les abus, fournir uniquement la base factuelle validée à son modèle, puis valider la sortie. Fixer une instruction système interdisant les prix, délais, horaires, certifications, notes et garanties non documentés. Aucun outil de commande, de modification de dossier ou d’accès aux données clients n’est requis. Ne pas transmettre de conversation ou données personnelles à un fournisseur sans mettre à jour l’information utilisateur et les règles de conservation. Ajouter une surveillance de coût et tester les demandes hors sujet et les tentatives de manipulation.

Ne jamais mettre une clé OpenAI/Anthropic ou une clé privée dans une variable `VITE_`, un fichier public, un composant ou le dépôt.
