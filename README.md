# Maroua Ouadrhiri — Portfolio

Portfolio React + Vite, réalisé à partir des maquettes approuvées. Interface française, thème ivoire et terracotta, responsive.

## Développement

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Le dossier `dist/` peut être publié sur un hébergement statique, dont Netlify. Le site utilise des ancres, sans routeur ni configuration de réécriture nécessaire.

## Personnalisation

- `src/main.jsx` : textes, projets (`groups`), expériences (`experience`), formations (`education`), composants et interactions.
- `src/styles.css` : couleurs, typographies, espacements et adaptations aux différentes tailles d’écran.
- `public/assets/portrait.png` : portrait adapté à partir de la photographie fournie avec ImageGen.
- `public/assets/Maroua-Ouadrhiri-CV.pdf` : CV récupéré sur le portfolio public d’origine, le fichier local fourni n’étant plus disponible. Cette version est plus ancienne que les informations de parcours du site ; remplacer ce PDF par le CV actualisé avant une diffusion publique.

## Fonctionnalités

- Navigation fixe, liens d’ancrage et menu mobile.
- Galerie de projets avec catégories, miniatures, navigation précédent/suivant, léger tilt à la souris et fenêtres de détail.
- Onglets Expériences / Formation et accordéons.
- Téléchargement du CV, liens LinkedIn et GitHub vérifiés dans le site d’origine.
- Formulaire avec validation native, ouvrant un brouillon `mailto:`. Aucun message n’est envoyé automatiquement et aucun service de messagerie n’est configuré.
- Copie de l’adresse e-mail, navigation clavier, dialogues natifs, prise en compte de la préférence de réduction des animations.
- Polices et image servies localement.

## Contenus de démonstration

Les aperçus des projets sont des illustrations HTML/CSS, indiquées comme telles. Remplacer ces aperçus par de vraies captures si disponibles. La catégorie Landing Pages contient un concept personnel explicitement identifié, pas une référence client. Aucun lien de dépôt privé ou inexistant n’est inventé.

Les liens de projets externes sont ceux fournis dans le CV. Leur disponibilité dépend de leurs hébergeurs.

## Vérification

Build de production Vite et vérifications dans le navigateur : catégories de projets, navigation de galerie, fenêtres de détail, onglets du parcours, accordéons, menu mobile, chargement du portrait et absence de défilement horizontal à 390 px. Le formulaire prépare un brouillon et nécessite une application de messagerie configurée sur le poste du visiteur.

## Hébergement Sites

L’identité du site est conservée dans `.openai/hosting.json`. La publication initiale est privée ; elle ne remplace pas le portfolio Netlify existant.
