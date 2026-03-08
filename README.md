# LADATOU – Tout à 2€

Site vitrine du magasin discount **LADATOU** à Mayotte (Kaweni, Mamoudzou). Tous les articles à **2€**.

## Stack technique

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## Structure

```
app/
  layout.tsx          # Layout racine (metadata, favicon, polices)
  page.tsx            # Page d'accueil (compose les sections)
  globals.css         # Tailwind directives
  contact/
    page.tsx          # Page contact (à propos, formulaire mailto)
components/
  Header.tsx          # Header sticky avec navigation
  HeroSection.tsx     # Section héro avec mascotte animée
  ConceptSection.tsx  # Section concept (3 cartes)
  CategoriesSection.tsx # Grille des 6 catégories
  MagasinSection.tsx  # Showcase magasin avec photo
  InfosSection.tsx    # Adresse, horaires, lien Maps
  SocialSection.tsx   # Réseaux sociaux
  Footer.tsx          # Pied de page
  MobileCTA.tsx       # Bouton mobile fixe (itinéraire)
  ParticleField.tsx   # Particules et badges 2€ flottants
  data.ts             # Données partagées (nav, catégories, etc.)
public/
  img/
    logo.png          # Logo LADATOU (transparent)
    magasin.jpeg      # Photo du magasin
```

## Installation

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```
