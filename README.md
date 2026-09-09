# Les petits bugs — conseils pour jeunes parents

Site 100% statique (HTML/CSS), sans base de données ni build. Chaque article est un fichier `.html` indépendant.

## Après le déploiement : remplacer l'URL provisoire

Tous les fichiers contiennent `https://VOTRE-SITE.netlify.app` dans les balises `canonical`, `og:url` et dans `robots.txt` / `sitemap.xml`. Une fois que tu connais l'adresse définitive de ton site (Netlify → Deploy settings → Change site name), remplace cette valeur partout où elle apparaît. Sans ça, Google reçoit une mauvaise adresse canonique.

## Ajouter un nouvel article

1. Duplique `article-template.html`, renomme-le (ex: `article-proprete.html`)
2. Remplace le titre, la description, la catégorie, le texte du corps
3. Ouvre `index.html` et ajoute un bloc `<a class="entry">` en copiant un des articles existants (change le lien, l'icône, le titre, l'extrait)
4. Ajoute une ligne dans `sitemap.xml` avec l'URL du nouvel article
5. Redéploie (upload sur GitHub → Netlify republie automatiquement)

## Structure du site

```
site/
├── index.html                 → page d'accueil, liste des articles
├── article-limites.html       → poser une limite sans dire non
├── article-sommeil.html       → aider bébé à dormir
├── article-alimentation.html  → diversification alimentaire
├── article-template.html      → à dupliquer pour chaque nouvel article
├── style.css                   → tous les styles
├── robots.txt                   → autorise Google à indexer, pointe vers le sitemap
├── sitemap.xml                   → liste des pages, à mettre à jour à chaque article
└── README.md
```

## Vérifier l'indexation

Une fois le site en ligne à sa vraie adresse, inscris-le sur [Google Search Console](https://search.google.com/search-console) et soumets `sitemap.xml` — ça accélère la découverte du site par Google.
