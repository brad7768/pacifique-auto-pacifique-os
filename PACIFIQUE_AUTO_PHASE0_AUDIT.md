# PACIFIQUE AUTO — PHASE 0 AUDIT

**Statut :** STOP — aucune implémentation Phase 1  
**Date :** 2026-09-08  
**Repo :** `brad7768/pacifique-auto-pacifique-os` (branche de travail d’audit)  
**Règle absolue :** aucune liberté créative sur l’identité visuelle. Toute décision visuelle doit être dérivée des maquettes et documentée avant implémentation.

---

## 0. Synthèse exécutive

Le dépôt actuel est un **site HTML/CSS/JS statique multi-pages** (Netlify), orienté vitrine locale Cameroun (slogan *« L'excellence à votre service »*).  
La maquette fournie (`1BFC44D9-…png`) n’est **pas** un set de pages pixel-perfect : c’est une **carte d’architecture visuelle / sitemap** pour un site public B2B beaucoup plus large (*« Des solutions qui font avancer l'Afrique Centrale »*), avec ~30+ routes métier + 6 pages outils.

**Écart structurel majeur :** l’existant couvre 5 pages utiles + 404 ; la cible en décrit une trentaine.  
**Écart de fidélité visuelle :** sans maquettes page-par-page (Figma/export PNG haute résolution par viewport), une reproduction « fidélité maximale » est **bloquée**. La Phase 1 ne peut démarrer qu’après réception / validation des maquettes détaillées (ou décision formelle d’utiliser l’existant comme référence partielle pour un sous-ensemble).

---

## 1. Architecture actuelle

### 1.1 Stack & dépendances

| Élément | État |
|--------|------|
| Framework (React/Next/Vue/etc.) | **Absent** |
| `package.json` / bundler / TypeScript | **Absent** |
| Backend / API / CMS | **Absent** |
| Dépendances runtime | Google Fonts (Barlow + Barlow Condensed), WhatsApp deep-link |
| Build | Aucun — publish Netlify = `.` |
| Serveur local | `serve.py` (Python `HTTPServer`, port 8888, no-cache) |
| Déploiement | `netlify.toml` (redirects clean URLs + headers cache/sécurité) |

### 1.2 Arborescence réelle du dépôt

```
/
├── index.html          # Accueil TRONQUÉ (hero + footer uniquement) + JPEG base64
├── index2.html         # Monolithe legacy (toutes sections + CSS inline + JS inline)
├── services.html
├── marques.html
├── a-propos.html
├── contact.html
├── 404.html
├── styles.css          # Design system actuel + JPEG hero en base64 (duplication)
├── main.js             # Banner, nav scroll, hamburger, reveal, submit→WhatsApp
├── netlify.toml
├── serve.py
├── infos.txt           # VIDE
└── 1BFC44D9-….png      # Maquette architecture visuelle (sitemap) — seule « maquette »
```

Aucun dossier `assets/`, `images/`, `components/`, `src/`.  
Aucun logo vectoriel, aucune favicon, aucun fichier de design tokens hors `:root` CSS.

### 1.3 Modèle d’architecture actuel

- **Type :** multi-pages HTML avec chrome dupliqué (teaser + nav + footer + WhatsApp float) copié dans chaque fichier.
- **Source de vérité CSS :** `styles.css` (extrait/proche de l’inline de `index2.html`, avec léger drift).
- **Source de vérité JS :** `main.js` (également dupliqué inline dans `index2.html`).
- **Navigation :** liens `.html` ; Netlify mappe aussi `/services`, `/marques`, `/a-propos`, `/contact`, `/accueil`.
- **Conversion :** formulaire contact → `window.open(wa.me/237696651116?text=…)` (pas d’email backend).

### 1.4 Design tokens existants (site actuel)

```css
--navy:      #09183A;
--navy-mid:  #0D2055;
--navy-soft: #132770;
--red:       #D91A2A;
--red-hot:   #FF2233;
--white:     #FFFFFF;
--off-white: #F4F6FB;
--gray:      #8A96B0;
--gray-light:#C8D0E4;
--font-display: 'Barlow Condensed', sans-serif;
--font-body:    'Barlow', sans-serif;
```

**Attention :** les couleurs échantillonnées sur la maquette d’architecture (`~#1E2B3C` navy, `~#E23A37` rouge) **ne sont pas identiques** aux tokens CSS actuels. Ne pas « fusionner » sans validation maquette page.

### 1.5 Contenu métier actuel (réutilisable éditorialement)

- Positionnement : négoce international, camions SINOTRUK & Mercedes-Benz, pièces d’origine, maintenance, agrégats RAZEL.
- Localisation : Ngodi Akwa, Douala ; dépôt Yassa (avril 2026).
- Contacts : `696 651 116`, `691 404 230`, `670 30 38 65`, `pacifiqueauto7@gmail.com`.
- Partenaires / marques listées : Sinotruk, Mercedes-Benz, Renault Trucks, Volvo, DAF, Fruehauf, Wabco, Mahle, BPW, Ren-Par, RAZEL, CFAO Mobility.
- Financement : Alios Finance 36/48 mois.
- Stats affichées : 30+ ans, 8–12 marques, 500+ clients, 5 secteurs (incohérence 08 vs 12 selon pages).

---

## 2. Architecture cible (dérivée de la maquette)

### 2.1 Nature de la maquette fournie

Fichier : `1BFC44D9-F17D-493B-9FD1-4864733DC178.png` (1223×1286).  
Titre exact : **PACIFIQUE AUTO : SITE PUBLIC – ARCHITECTURE VISUELLE**  
Slogan cible : **Des solutions qui font avancer l'Afrique Centrale**

C’est une **carte IA (information architecture)** avec miniatures de pages, pas un kit UI complet. Les miniatures indiquent des patterns (hero dark + body blanc, grilles, cartes, map) mais **ne permettent pas** de figer spacing, typographie exacte, états hover, mobile, ni composants détail.

### 2.2 Architecture cible proposée (structure)

```
Site public Pacifique Auto
├── Shell global : Header + Footer (+ éventuel teaser / WhatsApp à valider)
├── Accueil (/)
├── Hubs métier (Solutions, Industries, Marques, Réseau, Projets, Ressources, À propos)
├── Pages feuilles (détails)
├── Pages spéciales (outils)
└── Pages légales (footer) — présentes sur maquette footer, absentes du tree principal
```

### 2.3 Stack cible recommandée (décision technique, hors identité visuelle)

Pour supporter ~35 routes, composants partagés, assets, SEO et future séparation PacifiqueOS :

| Option | Verdict |
|--------|---------|
| Rester en HTML multi-pages | Possible mais **coûteux** (duplication shell, dette déjà visible) |
| **Astro / Next.js (SSG)** | **Recommandé** : routes nested, composants, assets, perf |
| CMS headless | Optionnel Phase 2+ (actualités, projets, docs) |

**Aucune stack ne doit être choisie pour « moderniser » le look** — uniquement pour reproduire fidèlement et maintenir.

---

## 3. Route map

### 3.1 Routes existantes (implémentées)

| Route actuelle | Fichier | Redirect Netlify | Contenu réel |
|----------------|---------|------------------|--------------|
| `/` ou `/index.html` | `index.html` | — | **Hero + footer seulement** (tronqué) |
| `/accueil` | → `index.html` | 200 | idem |
| `/services` | `services.html` | 200 | 5 cartes services |
| `/marques` | `marques.html` | 200 | marquee marques |
| `/a-propos` | `a-propos.html` | 200 | piliers + métriques |
| `/contact` | `contact.html` | 200 | infos + formulaire WA |
| `/404` | `404.html` | (Netlify 404) | page erreur |
| `/index2.html` | `index2.html` | — | **legacy monolith** (non lié en nav) |

### 3.2 Routes cibles (maquette) — manquantes sauf recouvrements partiels

#### Racine
| Page | Route cible | État |
|------|-------------|------|
| Accueil | `/` | **Existe mais non conforme** (IA + slogan + sections) |

#### Solutions
| Page | Route | État |
|------|-------|------|
| Hub Solutions | `/solutions` | Manquante (actuel `/services` ≠ sémantique) |
| Véhicules | `/solutions/vehicules` | Manquante |
| Pièces & Services | `/solutions/pieces-services` | Manquante |
| Maintenance | `/solutions/maintenance` | Manquante *(OCR maquette ambigu : wrap `ma-…tenance`)* |
| Fleet & Mobility | `/solutions/fleet-mobility` | Manquante |
| Financement | `/solutions/financement` | Manquante |

#### Industries
| Page | Route | État |
|------|-------|------|
| Hub Industries | `/industries` | Manquante |
| BTP | `/industries/btp` | Manquante |
| Mines & Carrières | `/industries/mines` | Manquante |
| Transport & Logistique | `/industries/transport` | Manquante |
| Agriculture | `/industries/agriculture` | Manquante |
| Énergie | `/industries/energie` | Manquante |

#### Marques
| Page | Route | État |
|------|-------|------|
| Hub Marques | `/marques` | Existe (contenu actuel ≠ cible) |
| SINOTRUK | `/marques/sinotruk` | Manquante |
| WABCO | `/marques/wabco` | Manquante |
| BOSCH | `/marques/bosch` | Manquante *(BOSCH absent du contenu actuel)* |
| Autres marques | `/marques/autres` | Manquante |

#### Réseau
| Page | Route | État |
|------|-------|------|
| Hub Réseau | `/reseau` | Manquante |
| Nos implantations | `/reseau/implantations` | Manquante |
| Global Parts Network | `/reseau/global-parts` | Manquante |
| Logistique & Livraison | `/reseau/logistique` | Manquante |

#### Projets
| Page | Route | État |
|------|-------|------|
| Hub Projets | `/projets` | Manquante |
| Études de cas | `/projets/cas-clients` | Manquante |
| Réalisations | `/projets/realisations` | Manquante |
| Appels d'offres | `/projets/appels-offres` | Manquante *(OCR préfixe route ambigu sur maquette)* |

#### Ressources
| Page | Route | État |
|------|-------|------|
| Hub Ressources | `/ressources` | Manquante |
| Actualités | `/ressources/actualites` | Manquante |
| Documentation | `/ressources/documentation` | Manquante |
| Guides & Conseils | `/ressources/guides` | Manquante |

#### À propos
| Page | Route | État |
|------|-------|------|
| Notre histoire | `/a-propos` | Existe partiellement (piliers ≠ histoire) |
| Notre équipe | `/a-propos/equipe` | Manquante |
| Carrières | `/a-propos/carrieres` | Manquante |
| RSE & Engagements | `/a-propos/rse` | Manquante |
| Contact | `/contact` | Existe (à réaligner UI) |

#### Pages spéciales
| Page | Route | État |
|------|-------|------|
| Recherche | `/recherche` | Manquante *(maquette OCR : `/rechreche` typo)* |
| Demande de devis | `/devis` | Manquante (formulaire contact actuel partiel) |
| Configuration véhicule | `/configurateur` | Manquante |
| Calculateur de financement | `/financement` | Manquante (**conflit** avec `/solutions/financement`) |
| Prise de rendez-vous atelier | `/rendez-vous` | Manquante |
| Espace client | `/client/login` | Manquante (**zone PacifiqueOS**) |

#### Légales (footer maquette)
| Page | Route proposée | État |
|------|----------------|------|
| Mentions légales | `/mentions-legales` | Manquante (lien `#`) |
| Politique de confidentialité | `/confidentialite` | Manquante (lien `#`) |
| Cookies | `/cookies` | Manquante |
| FAQ | `/faq` | Manquante (footer Support uniquement) |

### 3.3 Correspondance Accueil actuel ↔ cible

`index2.html` (monolithe) structure historique :

1. Teaser Yassa  
2. Nav 5 liens  
3. Hero  
4. Services (5 cartes)  
5. Marques (marquee)  
6. Pourquoi nous  
7. Contact + form  
8. Footer + WA  

**Accueil cible (maquette)** : hub vers 7 univers + outils — structure et navigation **non équivalentes**. Ne pas « étirer » le monolithe actuel pour simuler la cible.

---

## 4. Component map

### 4.1 Composants / blocs existants (de facto, non modularisés)

| Bloc | Présent dans | Réutilisable ? |
|------|--------------|----------------|
| `TeaserBar` | toutes pages sauf 404 | Oui, si teaser conservé (à valider vs maquette) |
| `Navbar` + `MobileMenu` | pages principales | **Refactor** — IA nav cible différente |
| `Hero` (accueil) | `index.html`, `index2.html` | Partiel — contenu/slogan à remplacer selon maquette Accueil |
| `ServiceCard` grid | `services.html`, `index2` | Réutilisable conceptuellement pour hubs, pas 1:1 Solutions |
| `BrandsMarquee` | `marques.html`, `index2` | Partiel — hub Marques cible = cards + sous-pages |
| `WhyUs` (pillars + metrics) | `a-propos.html`, `index2` | Partiel pour À propos |
| `ContactInfo` + `ContactForm` | `contact.html`, `index2` | Oui pour `/contact` et base `/devis` |
| `Footer` | pages principales | **Refactor** — colonnes maquette ≠ actuelles |
| `WhatsAppFloat` | pages principales | À valider (absent de la maquette architecture) |
| `RevealOnScroll` | via `.reveal` + `main.js` | Oui (motion utilitaire) |
| `Error404` | `404.html` | Oui, à restyler selon design system cible |

### 4.2 Composants nécessaires (cible, dérivés maquette)

**Shell**
- `SiteHeader` (logo PACIFIQUE / AUTO rouge, nav primaire, CTA)
- `MegaNav` / menus Solutions–Ressources
- `SiteFooter` (Liens rapides, Support, Social, Newsletter, barre légale)
- `NewsletterForm`
- `Breadcrumb`
- `PageHero` (variantes hub / feuille)
- `SearchEntry` → `/recherche`

**Contenu**
- `HubCardGrid` (hubs Solutions, Industries, etc.)
- `SolutionDetailLayout`
- `IndustryDetailLayout`
- `BrandDetailLayout` (SINOTRUK, WABCO, BOSCH, Autres)
- `MapImplantations`
- `CaseStudyCard` / `ProjectGallery`
- `TenderList` (appels d’offres)
- `NewsList` / `DocList` / `GuideList`
- `TeamGrid` / `JobsList` / `RseBlocks`
- `FaqAccordion`

**Outils (pages spéciales)**
- `QuoteRequestForm` (`/devis`)
- `VehicleConfigurator` (`/configurateur`)
- `FinanceCalculator` (`/financement`)
- `WorkshopBooking` (`/rendez-vous`)
- `ClientLoginGate` (`/client/login`) — **frontière PacifiqueOS**
- `GlobalSearch`

**Design system**
- Tokens (couleurs/typo/spacing **figés depuis maquettes pages**)
- Boutons, champs, tags, cards **uniquement si présents en maquette**
- Iconographie (set à extraire des maquettes, pas inventé)

---

## 5. Asset map

### 5.1 Assets disponibles aujourd’hui

| Asset | Emplacement | Hash/notes | Usage actuel |
|-------|-------------|------------|--------------|
| Photo SINOTRUK HOHAN 8×4 (JPEG 1500×2000, ~473 KB) | base64 ×4 dans `index.html`, `index2.html` (×2), `styles.css` | **même fichier dupliqué** | fond hero `.hero-bg-photo` |
| Architecture sitemap PNG | `1BFC44D9-….png` | 1223×1286 | référence IA uniquement |
| Logo | **Aucun fichier** — pastille texte `PA` | — | nav/footer |
| Favicon | Absent | — | — |
| Logos marques (Sinotruk, Wabco, Bosch…) | Absents | — | noms texte seulement |
| Photos industries / chantiers / map | Absents | — | — |
| Illustrations miniatures maquette | non extractibles propres | — | non utilisables prod |
| Fonts | Google Fonts CDN | Barlow | actuelles — **à revalider vs maquettes pages** |

### 5.2 Correspondance assets ↔ pages (état)

| Page / besoin | Asset requis | Disponible ? |
|---------------|--------------|--------------|
| Accueil hero | photo produit / flotte brandée | Partiel (1 truck) |
| Solutions / Véhicules | pack photos véhicules | Non |
| Pièces & Services | photos magasin / pièces | Non |
| Maintenance | atelier | Non |
| Fleet & Mobility | flotte | Non |
| Financement | visuels / UI calc | Non |
| Industries (×5) | photos secteur | Non |
| Marques détail | logos officiels + lifestyle | Non |
| Réseau / implantations | carte / pins Douala–Yassa | Non |
| Global Parts Network | carte monde / réseau | Non |
| Projets / cas clients | photos chantiers (FCC, BCC, LBR…) | Non |
| Équipe / carrières / RSE | portraits, docs | Non |
| Header logo | wordmark PACIFIQUE AUTO | Non (texte CSS) |
| Social icons footer | LinkedIn, Facebook, YouTube, Instagram | SVG inline FB/LI/WA seulement |

**Conclusion assets :** bloquant pour fidélité visuelle. Extraire / fournir une **asset library** avant Phase 1 visuelle.

---

## 6. Page dependency map

### 6.1 Correspondance Maquette → page → route → sections → composants → assets

> Les « sections » ci-dessous sont **inférées des miniatures + labels** de la carte d’architecture. Elles sont des **hypothèses de structure à confirmer** dès réception des maquettes page (HIGH RISK si utilisées telles quelles en build).

#### Accueil `/`
- **Sections (hypothèses miniatures) :** Header · Hero truck · (contenu hub non lisible en détail) · Footer  
- **Composants :** `SiteHeader`, `HomeHero`, `HubShortcuts?`, `SiteFooter`  
- **Assets :** hero flotte, logo wordmark  
- **Dépendances contenu :** claim Afrique Centrale, CTA devis/contact  

#### Hub Solutions `/solutions`
- **Sections :** Hero hub · grille 5 enfants  
- **Composants :** `PageHero`, `HubCardGrid`  
- **Enfants :** vehicules, pieces-services, maintenance, fleet-mobility, financement  

#### Hub Industries `/industries`
- **Sections :** Hero · grille 5 industries  
- **Enfants :** btp, mines, transport, agriculture, energie  

#### Hub Marques `/marques`
- **Sections :** Hero · cards SINOTRUK / WABCO / BOSCH / Autres  
- **Note :** contenu actuel (12 marques marquee) doit être **réconcilié** avec la taxonomie maquette (3 marques + Autres)

#### Hub Réseau `/reseau`
- **Sections :** implantations (map), global-parts, logistique  

#### Hub Projets `/projets`
- **Sections :** cas-clients, realisations, appels-offres  

#### Hub Ressources `/ressources`
- **Sections :** actualites, documentation, guides  

#### À propos `/a-propos` (+ sous-pages)
- **histoire** (route partagée parent) · equipe · carrieres · rse · lien Contact `/contact`  

#### Pages spéciales
- Recherche, Devis, Configurateur, Calculateur, RDV atelier, Login client  

### 6.2 Dépendances techniques transverses

```
Design tokens (maquettes) ──► Shell Header/Footer ──► toutes pages
Assets library ─────────────► Heroes / cards / marques
Contenu éditorial ──────────► pages feuilles + ressources
Forms/backends ─────────────► /contact /devis /rendez-vous /newsletter
Auth / PacifiqueOS ─────────► /client/* (+ éventuels outils avancés)
Redirects legacy ───────────► /services → /solutions (décision à figer)
```

---

## 7. Inventaire demandé (réponses 1–12)

### 1. Ce qui existe déjà
- Site vitrine FR multi-pages Netlify  
- Design system CSS navy/red Barlow  
- Sections Services / Marques / Pourquoi / Contact  
- Formulaire → WhatsApp  
- 404, teaser Yassa, WA float  
- 1 photo produit embarquée  
- Carte d’architecture visuelle cible  

### 2. Ce qui peut être réutilisé
- Informations contact, textes services (base éditoriale)  
- Liste marques actuelles (à reclasser sous « Autres » / pages dédiées)  
- Patterns CSS (cards, form, footer grid) **après re-tokenisation maquette**  
- Logique `main.js` (menu, reveal)  
- `netlify.toml` (à étendre massivement)  
- Photo SINOTRUK pour `/marques/sinotruk` ou `/solutions/vehicules`  

### 3. Ce qui doit être refactorisé
- Duplication shell HTML → composants  
- `index.html` tronqué vs `index2.html` monolithe → une seule Accueil conforme cible  
- Nav & footer vers IA maquette  
- CSS monolithique → tokens + partials  
- Images base64 → fichiers `/public/assets`  
- Slogan, positionnement, taxonomie Services→Solutions  
- Stats incohérentes (8 vs 12 marques)  

### 4. Ce qui doit être supprimé
- `index2.html` (legacy) après migration  
- `infos.txt` vide  
- Duplicates base64 de la même image  
- Liens morts `#` (social, légal) ou les remplacer par pages réelles  
- Emoji 🚀 teaser si hors maquette  
- Éventuellement teaser / WA float si absents des maquettes validées  

### 5. Routes existantes
Voir §3.1  

### 6. Routes manquantes
Voir §3.2 (quasi tout le sitemap cible)  

### 7. Composants existants
Voir §4.1 (blocs HTML, pas de composants framework)  

### 8. Composants nécessaires
Voir §4.2  

### 9. Assets disponibles
Voir §5.1  

### 10. Correspondances assets ↔ pages
Voir §5.2 et §6  

### 11. Conflits avec PacifiqueOS
Voir §8  

### 12. Problèmes empêchant une reproduction fidèle
Voir §7 (problèmes) + §9 (risques)  

---

## 8. Conflits éventuels avec PacifiqueOS

Le dépôt s’appelle **`pacifique-auto-pacifique-os`**, mais **aucun code PacifiqueOS** n’est présent.

| Zone | Risque de conflit | Recommandation |
|------|-------------------|----------------|
| `/client/login` + espace client | Probable cœur PacifiqueOS | **Ne pas implémenter** l’app client dans le site public ; deep-link / sous-domaine `os.` ou `app.` |
| `/configurateur`, `/financement` (calculateur) | Peuvent être modules OS | Clarifier ownership produit avant Phase 1 outils |
| Auth, devis trackés, flotte client | Données OS | Site public = marketing ; OS = transactions/ops |
| Branding / design system partagé | Tokens peuvent différer public vs OS | Séparer packages `brand-public` vs `brand-os` |
| Repo unique | Mélange concerns | Monorepo clair (`apps/public`, `apps/os`) **ou** repos séparés |

**Décision bloquante à obtenir :** PacifiqueOS est-il (a) hors scope de cette reconstruction, (b) linked depuis le site, (c) cohébergé ?

---

## 9. Problèmes détectés

### Bloquants fidélité visuelle
1. **Pas de maquettes page-level** (desktop/mobile) — seulement un sitemap illustré.  
2. **Assets insuffisants** (1 photo, pas de logo officiel, pas de logos marques).  
3. **Identité divergente** : slogan, nav, taxonomie, palette approximative différente.  
4. **Ambiguïtés OCR / maquette** : `/rechreche`, maintenance wrap, route « Appels d'offres », accent `/équipe`.  

### Fonctionnels / dette
5. `index.html` incomplet (pas de sections services/marques/pourquoi/contact).  
6. Double source (`index2` inline vs fichiers externes) + drift CSS.  
7. Pas d’état actif nav (`aria-current` / `.active`).  
8. Mentions légales / confidentialité / cookies / FAQ en `#`.  
9. Réseaux sociaux Facebook/LinkedIn en `#` ; YouTube/Instagram absents alors que footer maquette les exige.  
10. Formulaire = WhatsApp only (pas d’email/CRM).  
11. Hero stats dans le first viewport (présent site) vs budget hero strict des règles design Cursor — **la maquette prime** ; documenter si stats restent.  
12. `infos.txt` vide — aucune spec complémentaire.  
13. Conflit de routes `/financement` (solutions vs calculateur).  
14. `/marques` : BOSCH annoncé cible vs catalogue actuel sans Bosch.  
15. Performance : CSS/HTML alourdis par JPEG base64 (~0,5–1,3 MB/fichier).  

---

## 10. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Construire sans maquettes pages | Écart fidélité, retravail massif | **Gate** : recevoir Figma/PNG pages avant UI |
| Inventer UI « proche » | Violation règle anti-créativité | Documenter chaque token depuis maquette ; revue visuelle |
| Fusionner contenu Cameroun actuel avec IA « Afrique Centrale » | Message incohérent | Décision éditoriale explicite |
| Implémenter `/client/*` dans le site | Conflit PacifiqueOS / sécurité | Frontière produit écrite |
| SSG trop tôt sans content model | Pages vides | Content inventory + placeholders **marqués** non-final |
| Redirects `/services` → `/solutions` | SEO / liens existants | Table de redirects versionnée |
| Droits logos constructeurs | Légal | Obtenir autorisations / pack logos |
| Newsletter sans backend | Feature morte | Provider (ex. form Netlify / API) avant release |

---

## 11. Ordre exact d’implémentation

> **STOP Phase 0 ici.** L’ordre ci-dessous est le plan **post-audit**, à exécuter seulement après validation.

### Gate 0 — Prérequis (avant toute UI)
0.1 Recevoir maquettes pages (desktop + mobile) pour shell + Accueil + 1 hub + 1 feuille.  
0.2 Recevoir / extraire logo wordmark + palette exacte + typos.  
0.3 Clarifier PacifiqueOS boundary.  
0.4 Trancher conflits de routes (`/financement`, typos maquette).  
0.5 Produire `PACIFIQUE_AUTO_VISUAL_DECISIONS.md` (tokens figés).  

### Phase 1 — Fondation
1. Choisir stack SSG + structure dossiers.  
2. Design tokens + reset **strictement** depuis décisions visuelles.  
3. `SiteHeader` / `SiteFooter` / layout.  
4. Routing skeleton (toutes routes → pages placeholder annotées « pending mockup »).  
5. Redirects legacy Netlify.  
6. Asset pipeline (plus de base64).  

### Phase 2 — Accueil + shell fidèles
7. Accueil pixel-check vs maquette.  
8. Nav complète + états.  
9. Footer + légales stubs.  

### Phase 3 — Hubs
10. `/solutions` + enfants (priorité contenu existant recyclable : véhicules, pièces, maintenance, financement).  
11. `/marques` + SINOTRUK/WABCO/BOSCH/autres.  
12. `/industries` (×5).  
13. `/reseau`, `/projets`, `/ressources`.  
14. `/a-propos/*` + `/contact` réaligné.  

### Phase 4 — Pages spéciales
15. `/devis`, `/recherche`, `/rendez-vous`.  
16. `/configurateur`, `/financement` (si ownership public).  
17. `/client/login` = lien sortant OS sauf décision contraire.  

### Phase 5 — Contenu & QA
18. Remplir assets réels.  
19. SEO, 404, perf, a11y, responsive QA.  
20. Purge `index2.html` / dettes.  

---

## 12. Stratégie responsive

1. **Mobile-first uniquement après maquettes mobile** ; sinon freeze desktop-first fidèle puis dérivation documentée.  
2. Breakpoints **à extraire des maquettes** (ne pas réutiliser aveuglément 1100 / 1024 / 768 actuels).  
3. Header : mega-menu → drawer ; tester overflow 7 items.  
4. Hubs : grille cards → 1 colonne.  
5. Tables appels d’offres / docs → patterns list mobile.  
6. Outils (configurateur, calculateur) : flows dédiés mobile (souvent maquettes séparées).  
7. Interdiction d’adapter « artistiquement » spacing hors grilles maquette.  

---

## 13. Stratégie QA

### Visuel
- Comparaison side-by-side maquette ↔ build (desktop 1440, tablet 768, mobile 390).  
- Checklist tokens (hex, font-weight, letter-spacing, radii).  
- Pas de composant hors maquette.

### Fonctionnel
- Matrice de toutes les routes (200, pas de `#` morts en prod).  
- Formulaires : validation, succès, échec, spam.  
- Redirects legacy.  
- Liens PacifiqueOS (si présents) : SSO / deep-link.

### Technique
- Lighthouse perf (images, fonts).  
- a11y : focus, contraste, `aria-current`, labels.  
- i18n : rester FR sauf décision.  
- SEO : titles/meta uniques, sitemap.xml, robots.

### Contenu
- Réconciliation marques (Bosch vs catalogue).  
- Stats uniques.  
- Mentions légales réelles.

---

## 14. Recommandations techniques

1. **Ne pas coder l’UI Phase 1** tant que les maquettes pages ne sont pas livrées.  
2. Adopter un **SSG à composants** (Astro recommandé pour site majoritairement statique ; Next si OS/auth partagés).  
3. Extraire immédiatement la JPEG hero en `assets/images/hero-sinotruk-hohan.jpg` (même sans UI) pour sortir du base64 — *reporté après gate si on veut zéro changement hors audit ; ici l’audit seul est livré.*  
4. Créer un **content model** (MD/JSON) : solutions, industries, marques, projets.  
5. Table de **redirects** `/services`→`/solutions` (ou page de transition).  
6. Isoler PacifiqueOS : sous-domaine + pas de mélange auth dans le SSG public.  
7. Remplacer WhatsApp-only par double canal (form + WA) **si maquette le prévoit**.  
8. Documenter chaque décision visuelle dans un registre avant merge UI.  
9. Prévoir pack légal + cookies banner si footer Cookies est réel.  
10. Traiter la maquette architecture comme **source de routes**, pas comme source de pixels.

---

## 15. Décisions visuelles — registre initial (non exhaustif)

| Sujet | Source | Décision Phase 0 | Action requise |
|-------|--------|------------------|----------------|
| Slogan | Maquette vs site | Maquette prime si reconstruction « fidélité max » | Confirmation stakeholder |
| Logo | Maquette header | Wordmark PACIFIQUE + AUTO rouge | Fournir fichier officiel |
| Nav primaire | Maquette tree | 7 hubs | Remplacer nav 5 items |
| Nav strip maquette | « VÉHICULES PIÈCES SERVICES PROJETS » | Rôle à clarifier (utility vs primary) | Question ouverte |
| Palette | CSS actuel vs sampling maquette | **Ne pas choisir** sans maquette page | Extraire tokens Figma |
| Typo | Barlow actuel | Non validé cible | Confirmer familles |
| Teaser Yassa / emoji | Site actuel | Absent maquette archi | Inclure/exclure explicitement |
| WhatsApp float | Site actuel | Absent maquette archi | Inclure/exclure explicitement |

---

## 16. Questions ouvertes (bloquantes Phase 1)

1. Où sont les maquettes Figma / exports page-by-page ?  
2. PacifiqueOS : scope, URL, auth, ownership des outils ?  
3. Le site cible reste-t-il centré Cameroun/Douala ou « Afrique Centrale » élargi ?  
4. Que faire du catalogue marques actuel non listé (Mercedes, Volvo, RAZEL…) ?  
5. `/services` : redirect, alias, ou suppression ?  
6. Quelle route canonique pour Appels d’offres et Calculateur financement ?  
7. Backend formulaires / newsletter : lequel ?

---

## 17. Livrable & STOP

**Livrable Phase 0 :** ce fichier `PACIFIQUE_AUTO_PHASE0_AUDIT.md` uniquement (plus analyse en lecture seule du dépôt).  

**Aucune Phase 1 n’a été démarrée.**  
**Aucun fichier applicatif du site n’a été modifié pour implémentation.**

---

*Fin de l’audit Phase 0.*
