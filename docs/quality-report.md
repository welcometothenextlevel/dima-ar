# Validation de livraison

- Build TypeScript, Vite et pré-rendu : réussi.
- 26 routes de contenu et 404 ; 27 titres et descriptions propres.
- Audit statique : 1 630 références internes vérifiées, 135 occurrences d’images avec texte alternatif et dimensions.
- 182 combinaisons route / largeur : 375, 390, 430, 768, 1280, 1440, 1920 px. Aucun débordement, fichier manquant ou message d’erreur JavaScript.
- Navigation mobile : ouverture, fermeture Escape, restauration du focus et déverrouillage du défilement.
- Assistant : question, réponse, focus, soumission et fenêtre mobile réduite à 480 px de haut.
- Portfolio : filtres et retour à la sélection complète.
- Vidéo : aucune vidéo présente/chargée avant activation ; lecture native testée, muette et inline.
- Devis : préselection par service, six étapes, ajout de photo, coordonnées, accord, récapitulatif et lien e-mail. Aucun envoi externe réel effectué pendant la QA.
- Audit automatisé axe : aucune violation détectée sur accueil, peinture, devis, contact, réalisations, menu et assistant après correction des contrastes. Cela ne remplace pas une certification ou un audit humain exhaustif.
- Lighthouse mobile simulé sur le build local : performance 95, accessibilité 100, bonnes pratiques 100, SEO 100 ; CLS 0, TBT 30 ms, LCP 2,7 s. Mesure de laboratoire, pas une garantie de Core Web Vitals sur les connexions réelles.
- Photos originales examinées ; seuls dérivés WebP et six films compressés publiés. Aucun média de stock ni généré.

Les rapports JSON sont conservés dans ce dossier. Le contrôle public compare également les sommes SHA-256 des ressources déployées aux fichiers locaux et vérifie la réponse 404 personnalisée.
