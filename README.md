# Petits Pas — site de conseils pour jeunes parents

## Déployer sur Netlify (2 minutes, sans compte GitHub)

1. Va sur https://app.netlify.com/drop
2. Fais glisser le dossier **site** entier (celui qui contient index.html) dans la zone de dépôt
3. Netlify génère immédiatement une URL du type `nom-aleatoire.netlify.app`
4. C'est en ligne. Tu peux renommer le site (Site settings → Change site name) ou brancher un nom de domaine perso plus tard, gratuitement.

Pour republier après une modification : reviens sur cette même page et refais un glisser-déposer du dossier mis à jour. Ou passe à la méthode Git ci-dessous pour automatiser ça.

## Méthode recommandée à moyen terme : via GitHub

Un peu plus long à mettre en place (10 min), mais ensuite chaque modification que tu pousses sur GitHub republie le site automatiquement.

1. Crée un dépôt sur https://github.com (gratuit) et mets-y ce dossier
2. Sur Netlify : "Add new site" → "Import an existing project" → connecte GitHub → choisis le dépôt
3. Laisse les réglages de build vides (site 100% statique, rien à compiler)
4. Chaque `git push` republie le site en quelques secondes

## Ajouter un nouvel article

1. Duplique `article-template.html`, renomme-le (ex: `article-sortie-parc.html`)
2. Remplace le titre, la catégorie, le texte
3. Ouvre `index.html` et ajoute un bloc `<a class="entry">` en copiant un des deux existants, en changeant le lien, l'icône, le titre et l'extrait
4. Redéploie (glisser-déposer, ou push si tu es passé à la méthode Git)

## Structure du site

```
site/
├── index.html              → page d'accueil, liste des articles
├── article-sommeil.html    → exemple d'article
├── article-alimentation.html → exemple d'article
├── article-template.html   → à dupliquer pour chaque nouvel article
├── style.css                → tous les styles du site
└── README.md
```

Aucune base de données, aucun serveur à gérer : juste des fichiers HTML. C'est la solution la plus simple tant que le volume d'articles reste raisonnable (jusqu'à quelques dizaines). Si un jour tu publies très souvent et que dupliquer les fichiers devient lourd, on pourra migrer vers un générateur de site statique (comme Eleventy) avec un éditeur d'articles plus confortable — mais pas besoin d'y penser maintenant.
