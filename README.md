# Les petits bugs — le journal des parents curieux

Refonte complète : identité éditoriale magazine, nouveau logo, nouvelle palette, mise en page magazine avec article principal + secondaires, rubrique Voyages, template d'article avec image d'ouverture et articles liés.

Architecture inchangée : HTML/CSS statique, sans base de données ni build — comme avant, tu déploies en uploadant les fichiers sur GitHub, Netlify republie automatiquement.

## Derniers ajustements (v4)

- Retiré les deux articles d'exemple (sommeil, alimentation) que je avais rédigés — il ne reste que ton article sur les limites, le seul que tu aies écrit
- Retiré la section « À lire aussi » de cet article et du modèle (rien à recommander pour l'instant, plutôt que d'afficher des liens morts)
- La page d'accueil affiche donc une seule carte, en position "featured"

## Derniers ajustements (v3)

- Logo agrandi d'environ 32 % sur mobile, en-tête plus compact
- « Voyages » retiré du menu et de la homepage (page `voyages.html` supprimée) tant qu'il n'y a pas d'article dans cette catégorie — la structure (`.travel-banner`, teinte `t-voyages` dans `style.css`) reste prête pour la réintroduire plus tard
- Section renommée « Nos articles » (au lieu de « Nos derniers articles »)
- Illustration du hero réduite sur mobile (200px de haut max, contre ~240px avant) pour laisser le contenu du journal apparaître plus vite
- CTA principal renommé « Lire les articles »

## Ce qui a été fait (v2)

- **Logo** : ton propre visuel (celui que tu as envoyé) est maintenant utilisé partout — `logo-full.png` dans l'en-tête de chaque page, `logo-mark.png` (juste la coccinelle, détourée) dans le pied de page.
- **Icône "Ajouter à l'écran d'accueil" (iOS)** : corrigée. `apple-touch-icon.png` est une version carrée de la coccinelle sur fond ivoire, déclarée dans le `<head>` de chaque page (`<link rel="apple-touch-icon">`) — quand tu ajoutes le site à l'écran d'accueil maintenant, tu obtiens la coccinelle et le nom "Petits bugs", plus la lettre "L" générique.
- **Palette** : crème/ivoire en fond, vert sauge pour les accents éditoriaux, terracotta pour les CTA et catégories, touches de jaune beurre et bleu pâle réservées aux petits détails (voir `:root` dans `style.css`).
- **Typographie** : Newsreader (serif) pour les titres, avec un usage italique ponctuel pour la touche espiègle ; Inter pour tout le texte de lecture.
- **Homepage** : hero avec titre fort + CTA, grille magazine (1 article principal + 2 secondaires), bandeau distinct pour la rubrique Voyages.
- **Page article** : grande image d'ouverture, catégorie, titre, intro, corps très lisible, encadrés pratiques, articles associés en fin de page.
- **Nouvelles pages** : `voyages.html` (hub de la rubrique) et `a-propos.html`.
- **Recherche** : barre de recherche simple côté client sur la page d'accueil (aucun backend nécessaire, ne gêne pas l'indexation Google).
- **Mobile** : menu en accordéon, grille qui repasse en une colonne, aucun élément ne déborde (vérifié sur les tailles courantes 360–430px de large).

## Important : les photos sont des emplacements, pas des photos

Je n'ai pas de générateur de photos réalistes et je ne peux pas légalement récupérer des photos trouvées sur le web pour les mettre sur ton site (question de droits). Toutes les zones "photo" (hero, cartes d'articles, image d'ouverture des articles) sont donc des blocs de couleur douce avec une petite icône, clairement identifiés comme emplacements.

**Pour remplacer un emplacement par une vraie photo**, cherche ce commentaire dans le HTML :
```html
<!-- Remplace ce bloc par une vraie photo : <img src="ta-photo.jpg" ...> -->
<div class="photo t-sommeil">...</div>
```
Remplace le `<div class="photo ...">...</div>` entier par :
```html
<img src="photos/ta-photo.jpg" alt="Description de la photo" style="width:100%;height:100%;object-fit:cover;">
```
Crée un dossier `photos/` à la racine du repo pour y déposer tes images (formats `.jpg` ou `.webp`, compressées si possible pour la vitesse de chargement).

## Ajouter un nouvel article

1. Duplique `article-template.html`, renomme-le (ex: `article-activites.html`)
2. Remplace titre, description, catégorie, texte, teinte de la photo (`t-parentalite`, `t-sommeil`, `t-alimentation`, `t-voyages`, `t-discipline`)
3. Ajoute une carte dans `index.html` (section `#card-grid`) en copiant un bloc `<a class="card">` existant
4. Ajoute l'URL dans `sitemap.xml`
5. Upload sur GitHub → Netlify republie automatiquement

## Après le déploiement

Remplace `https://VOTRE-SITE.netlify.app` par ta vraie adresse dans tous les fichiers (`canonical`, `og:url`, `robots.txt`, `sitemap.xml`) — sinon Google reçoit une mauvaise adresse.

## Structure

```
site/
├── index.html                 → accueil magazine
├── voyages.html               → hub de la rubrique Voyages
├── a-propos.html              → page à propos
├── article-limites.html       → discipline positive (avec illustration dédiée)
├── article-sommeil.html
├── article-alimentation.html
├── article-template.html      → à dupliquer pour chaque nouvel article
├── style.css                   → palette, typographie, layout magazine
├── logo-full.png                 → logo complet, utilisé dans l'en-tête de chaque page
├── logo-mark.png                   → coccinelle seule, utilisée dans le pied de page
├── apple-touch-icon.png              → icône carrée pour "Ajouter à l'écran d'accueil" (iOS)
├── icon-512.png, favicon-32.png        → icônes pour l'onglet du navigateur
├── illustration-limites.svg              → illustration dédiée à l'article limites
├── robots.txt
├── sitemap.xml
└── README.md
```
