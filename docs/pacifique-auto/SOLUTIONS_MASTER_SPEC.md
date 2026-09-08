# PACIFIQUE AUTO — SOLUTIONS MASTER SPEC

**Statut :** SOURCE DE VÉRITÉ — exécution future du hub `/solutions` et de ses pages enfants.  
**Phase :** 3A — audit + spécification uniquement. **Pas** Phase 3B. **Aucun code.**  
**Homepage validée :** Phase 2B `/` = référence de continuité visuelle.  
**Priorité en cas de contradiction :** ce document pour le périmètre Solutions ; `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` pour `/` ; `MASTER_SPEC.md` + `DESIGN_SYSTEM.md` + `tokens.css` pour l’identité.

Documents liés : `MASTER_SPEC.md` · `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` · `ROUTE_MAP.md` · `IMAGE_MAP.md` · `PAGE_DEPENDENCY_MAP.md` · `DESIGN_SYSTEM.md` · `src/data/routes.ts` · `src/data/navigation.ts` · `src/data/home.ts` · `src/data/site.ts`

Légende des statuts de donnée :

| Marqueur | Signification |
|----------|----------------|
| **[CONFIRMÉ]** | Présent dans le repository, l’IA verrouillée, ou la homepage MASTER. |
| **[PROVISOIRE]** | Copy / structure d’exécution, dérivée du contenu existant, à valider avant prod. |
| **[OPEN]** | Ambiguïté non tranchée. Ne pas inventer pour « remplir ». |

---

## 0. Audit repository (obligatoire — réalisé)

Scan 2026-09-08 (hors `node_modules`, `.git`, `dist`).

### 0.1 Routes réellement présentes

**Registre canonique** `src/data/routes.ts` + `docs/pacifique-auto/ROUTE_MAP.md` :

| Route | Type | Parent | Statut code | Page Astro |
|-------|------|--------|-------------|------------|
| `/solutions` | hub | `/` | `planned` | **Absente** |
| `/solutions/vehicules` | leaf | `/solutions` | `planned` | **Absente** |
| `/solutions/pieces-services` | leaf | `/solutions` | `planned` | **Absente** |
| `/solutions/maintenance` | leaf | `/solutions` | `planned` | **Absente** |
| `/solutions/fleet-mobility` | leaf | `/solutions` | `planned` | **Absente** |
| `/solutions/financement` | leaf | `/solutions` | `planned` | **Absente** |
| `/financement` | tool | `/` | `planned` | **Absente** — calculateur, **distinct** du leaf |
| `/devis` | tool | `/` | `planned` | **Absente** |
| `/contact` | leaf | `/a-propos` | `planned` | **Absente** |
| `/configurateur` | tool | `/` | `planned` | **Absente** |
| `/rendez-vous` | tool | `/` | `planned` | **Absente** |
| `/recherche` | tool | `/` | `planned` | **Absente** |

Pages Astro existantes : `/` (homepage Phase 2B) · `/design-system` (laboratoire interne).

**Aucune sixième famille Solutions n’existe dans `routes.ts`, `navigation.ts` ou l’architecture visuelle.**

Redirect Netlify **[CONFIRMÉ]** : `/services` → `/solutions` (302).

### 0.2 Navigation et liens internes

| Source | Ce qui est câblé |
|--------|------------------|
| Mega menu Solutions | 5 enfants, labels verrouillés |
| Utility strip | Véhicules · Pièces & Services (pas Maintenance / Fleet / Financement) |
| Homepage S2 | Hub Solutions → `/solutions` |
| Homepage S3 | 5 cartes → 5 leafs ; Financement a un lien secondaire « Calculer mon financement » → `/financement` |
| Footer | Lien « Solutions » → `/solutions` |
| Hero homepage | CTA secondaire « Découvrir nos solutions » → `/solutions` |

Tous ces liens **404** aujourd’hui (pages `planned`). C’est attendu. Phase 3A ne les implémente pas.

### 0.3 Legacy (`/legacy`)

`legacy/services.html` + `legacy/index2.html` décrivent **cinq domaines legacy**, pas les cinq familles cibles :

| Legacy | Mapping Solutions | Verdict |
|--------|-------------------|---------|
| Négoce international | Aucun leaf Solutions | Hors hub. **[OPEN]** éventuel Réseau / logistique. |
| Vente de camions | Véhicules | Recyclable avec prudence. |
| Pièces d'origine | Pièces & Services | Recyclable avec prudence. |
| Maintenance mécanique | Maintenance | Recyclable avec prudence. |
| Agrégats RAZEL | **Aucune** famille Solutions | **Interdit** d’en faire une 6ᵉ solution. |

Autres mentions legacy :

- SINOTRUK HOHAN 8×4 Porteur Benne — modèle nommé. **[CONFIRMÉ]** comme texte + IMG-001 ; pas un catalogue.
- Livraison « via CFAO MOBILITY » — **[OPEN]** (claim partenaire).
- Tags camions Mercedes-Benz, Volvo, DAF — **[OPEN]** (hors IA homepage ; réservés `/marques/autres` tant que non validés).
- Pièces : Wabco, Mahle, Ren-Par, BPW — WABCO **[CONFIRMÉ]** (IA) ; les autres **[OPEN]**.
- Maintenance : diagnostic, réparation, entretien, urgence — **[PROVISOIRE]** (tags legacy, pas de preuve opérationnelle).
- Financement Alios 36/48 mois — **interdit d’affichage** (MASTER homepage). Partenariat **[OPEN]**.
- Formulaire devis : types de demande camion / Alios / pièces / maintenance / agrégats — utile pour champs `/devis` plus tard, pas pour inventer une offre.

**Fleet & Mobility :** aucune page, aucun paragraphe, aucun asset legacy. Origine = architecture visuelle uniquement.

### 0.4 Données code

| Fichier | Contenu Solutions |
|---------|-------------------|
| `src/data/home.ts` `homeSolutions` | 5 titres, 5 descriptions courtes, 5 href, IMG-001 sur Véhicules seulement, secondary financement |
| `src/data/navigation.ts` | 5 enfants + CTA devis/contact |
| `src/data/site.ts` | Coordonnées, slogan, boundary PacifiqueOS (`externalUrl: null`) |
| Catalogue pièces / SKU / stock | **Aucun** |
| Liste de modèles véhicules | **Aucun** fichier data (seulement HOHAN dans copy + IMAGE_MAP) |
| Calculateur | **Aucun** module |
| Configurateur | **Aucun** module |

### 0.5 Composants réutilisables (Phase 1 — ne pas en créer en 3A)

`Header` · `MegaMenu` · `MobileNav` · `Footer` · `Breadcrumb` · `Hero` · `Section` · `SectionHeader` · `Container` · `Button` · `Card` · `FeatureCard` · `VehicleCard` · `BrandCard` · `IndustryCard` · `CTASection` · `FormField`

`PageHero` / `HubCardGrid` cités dans `ROUTE_MAP` / Phase 0 = **noms d’intention**, pas de fichiers. En 3B : assembler `Hero` + grilles existantes, ne pas créer un design system parallèle.

### 0.6 Assets réellement présents

| ID | Fichier | Sujet | Usage Solutions autorisé |
|----|---------|-------|--------------------------|
| IMG-001 | `public/assets/images/hero-sinotruk-hohan.jpg` | Camion SINOTRUK HOHAN 8×4, portrait 1500×2000 | `/solutions/vehicules` (hero ou carte produit) **uniquement**. Pas filler hub. Pas Pièces / Maintenance / Fleet / Financement. |
| IMG-002 | `public/assets/reference/architecture-visuelle.png` | Sitemap | Référence IA. **Interdit** en contenu. |
| Favicon Astro | `public/favicon.svg` / `.ico` | Logo Astro | **Interdit** identité PA. |

Aucun autre JPEG/PNG/WebP/SVG de pièces, atelier, techniciens, flotte, financement, infrastructures, logos constructeurs.

### 0.7 Contradiction CTA `ROUTE_MAP` vs brief Phase 3A

`ROUTE_MAP.md` (Phase 1) propose des CTA secondaires / principaux différents par leaf :

| Page | ROUTE_MAP | Brief 3A (à appliquer ici) |
|------|-----------|----------------------------|
| Véhicules | Devis + **Configurateur** | Devis + Contact. Configurateur = **[OPEN]** |
| Maintenance | **RDV atelier** + Devis | Devis + Contact. `/rendez-vous` = **[OPEN]** |
| Financement (leaf) | **Calculateur** + Devis | Devis + Contact ; calculateur en CTA tertiaire pertinent → `/financement` |

**Décision d’exécution 3A :** le brief Phase 3A + la homepage validée priment sur les CTA ROUTE_MAP pour ces pages. Ne pas modifier `ROUTE_MAP.md` dans cette phase documentation Solutions (écart documenté en §14).

---

## 1. Mission du hub Solutions

`/solutions` est le **centre de décision commerciale** du site public.

Il doit répondre, dans cet ordre :

1. Que propose Pacifique Auto ?  
2. À quels besoins répond chaque solution ?  
3. Quelle solution correspond à mon besoin ?  
4. Comment passer à l’action ?

Ce n’est **pas** :

- un catalogue générique de modèles / SKU  
- une encyclopédie métier  
- une interface SaaS / PacifiqueOS  
- un sixième univers (RAZEL, négoce, Yassa)

Ton : **corporate · B2B · industriel · premium · technique.**

Continuité homepage : mêmes 5 familles, mêmes labels, mêmes destinations, mêmes CTA commerciaux.

---

## 2. Architecture

```
/  (homepage validée)
└── /solutions                         ← hub décision
    ├── /solutions/vehicules           ← leaf 1
    ├── /solutions/pieces-services     ← leaf 2
    ├── /solutions/maintenance         ← leaf 3
    ├── /solutions/fleet-mobility      ← leaf 4
    └── /solutions/financement         ← leaf 5 (contenu)
/financement                           ← outil conversion (hors hub, lié)
/devis                                 ← conversion principale
/contact                               ← conversion secondaire
```

Cinq familles **[CONFIRMÉ]** — jamais une sixième.

Relations conceptuelles (pas des pages enfants supplémentaires) :

```
Véhicules ──► Flotte / opérations ──► Maintenance
     │                                      │
     └──────── Pièces & Services ───────────┘
                      │
                 Financement (équipements)
```

Liens de contexte autorisés (pages encore `planned`) : `/marques` · `/industries` · `/reseau/global-parts` · `/reseau/logistique`.  
Ne pas simuler ces pages dans le hub.

---

## 3. Routes — rôle, CTA, dépendances

### 3.1 Hub

| Champ | Valeur |
|-------|--------|
| Route | `/solutions` **[CONFIRMÉ]** |
| Rôle | Orienter, comparer implicitement, choisir, convertir |
| CTA principal | Demander un devis → `/devis` |
| CTA secondaire | Nous contacter → `/contact` |
| Composants | `Hero` (page, pas 100vh) · `FeatureCard` / `VehicleCard` · `SectionHeader` · `CTASection` · `Breadcrumb` |
| Image hub | **Aucune obligatoire.** Pas IMG-001 en filler. |
| Statut | `planned` |

### 3.2 Véhicules

| Champ | Valeur |
|-------|--------|
| Route | `/solutions/vehicules` **[CONFIRMÉ]** |
| Rôle | Faire comprendre l’offre véhicules B2B (besoin, usage, marque confirmée, devis) |
| Sous-pages | **Aucune** dans `routes.ts` |
| CTA principal | Demander un devis → `/devis` |
| CTA secondaire | Nous contacter → `/contact` |
| CTA non affiché | `/configurateur` tant que ownership + page **[OPEN]** |
| Asset | IMG-001 **[CONFIRMÉ]** |
| Données catalogue | Un modèle nommé en legacy (HOHAN 8×4). **Pas** de listing SKU. |

### 3.3 Pièces & Services

| Champ | Valeur |
|-------|--------|
| Route | `/solutions/pieces-services` **[CONFIRMÉ]** |
| Rôle | Trouver → obtenir → maintenir la disponibilité des parcs |
| Sous-pages | **Aucune** |
| CTA principal | `/devis` |
| CTA secondaire | `/contact` |
| Lien contextuel | `/reseau/global-parts` (approvisionnement) **[CONFIRMÉ]** comme route, page absente |
| Base de pièces | **Absente.** Ne pas inventer recherche SKU. `/recherche` = outil site, pas catalogue pièces. |
| Asset | **Manquant** |

### 3.4 Maintenance

| Champ | Valeur |
|-------|--------|
| Route | `/solutions/maintenance` **[CONFIRMÉ]** |
| Rôle | Entretien, support technique, disponibilité des équipements |
| Sous-pages | **Aucune** |
| CTA principal | `/devis` |
| CTA secondaire | `/contact` |
| Route RDV | `/rendez-vous` existe au registre, **page absente**, ownership **[OPEN]** — ne pas en faire le CTA principal |
| Diagnostic | Tag legacy seulement **[PROVISOIRE]** — pas de promesse d’équipement de diagnostic |
| Asset | **Manquant** |

### 3.5 Fleet & Mobility

| Champ | Valeur |
|-------|--------|
| Route | `/solutions/fleet-mobility` **[CONFIRMÉ]** (IA + nav) |
| Rôle réel dans le repo | Famille d’accompagnement flotte / opérations, **sans produit logiciel décrit** |
| Relier conceptuellement | Véhicules + flotte + opérations + maintenance |
| Interdit | UI PacifiqueOS, télémétrie, dashboard, KPI inventés |
| CTA | `/devis` + `/contact` |
| Contenu legacy | **Aucun** |
| Asset | **Manquant** |

### 3.6 Financement (contenu) vs `/financement` (outil)

| Route | Type | Rôle exact |
|-------|------|------------|
| `/solutions/financement` | leaf contenu | Expliquer que Pacifique Auto propose des **solutions de financement associées aux équipements**. Conversion vers devis. |
| `/financement` | tool | **Calculateur / simulation** — outil de conversion. Page **non construite**. Lien autorisé (homepage S3 l’utilise déjà). |

Ne pas fusionner les deux routes.  
Ne pas mentionner Alios.  
Ne pas afficher 36/48 mois (legacy Alios) tant que **[OPEN]**.

CTA leaf : principal `/devis` · secondaire `/contact` · tertiaire pertinent « Calculer mon financement » → `/financement`.  
Si l’outil n’est pas encore implémenté en 3B, le lien reste structurel (comme la homepage) — ne pas inventer le calculateur dans la page contenu.

---

## 4. Parcours utilisateur

### 4.1 Entrées **[CONFIRMÉ]**

Homepage S3 · mega menu · utility strip (Véhicules, Pièces) · hero « Découvrir nos solutions » · footer.

### 4.2 Flux cible

```
Explorer (/solutions)
    → Comparer implicitement (5 cartes + 1 besoin / 1 famille)
        → Choisir (leaf)
            → Demander un devis (/devis)
            ou Nous contacter (/contact)
            ou, si financement, Calculer (/financement)
```

### 4.3 Priorité commerciale (pas un tunnel UX inventé)

1. Véhicules  
2. Pièces & Services  
3. Maintenance  
4. Fleet & Mobility  
5. Financement  

Aligné homepage S3. Ne pas réordonner.

### 4.4 Sorties hors Solutions

Industries, Marques, Réseau : liens discrets, pas une deuxième homepage.

---

## 5. Structure `/solutions`

Page **courte**. Centre de décision, pas encyclopédie.

| # | Section | Objectif | Fond | Composant | Contenu | Image | CTA |
|---|---------|----------|------|-----------|---------|-------|-----|
| S0 | Header + utility strip | Continuité shell | existant | Header | — | — | Devis header |
| S1 | Hero hub | Annoncer les 5 capacités | Navy | `Hero` `minHeight=false` | Eyebrow / H1 / § / 2 CTA | **Pas** IMG-001 | Devis + Contact |
| S2 | Cinq solutions | Explorer + choisir | Blanc | Grille 5 : `VehicleCard` Véhicules + `FeatureCard` ×4 | Copy `homeSolutions` | IMG-001 **uniquement** carte Véhicules | Lien carte = leaf |
| S3 | Quel besoin ? | Comparaison implicite | Subtle `#F4F6FB` | 5 lignes besoin → famille (texte, pas tableau SaaS) | **[PROVISOIRE]** voir §9 | Aucune | Liens leaf |
| S4 | Contexte | Relier sans diluer | Blanc | 2–3 liens texte/cartes légères | Industries · Marques · Réseau pièces | Aucune | `/industries` `/marques` `/reseau/global-parts` |
| S5 | CTA final | Conversion | Navy | `CTASection` | Aligné homepage S10 | — | Devis + Contact |
| S6 | Footer | Coordonnées | existant | Footer | — | — | WhatsApp footer only |

Breadcrumb : Accueil / Solutions.

**Interdit hub :** formulaire, KPI, Alios, RAZEL, Yassa, carte, articles, widgets flottants, 6ᵉ carte.

---

## 6. Structure de chaque solution

Patron commun (continuité visuelle, profondeur produit **légèrement** supérieure au hub, jamais dashboard) :

1. Breadcrumb  
2. Hero page (navy, aligné gauche, pas forcément 100vh)  
3. Besoin / rôle (1 bloc)  
4. Preuve visuelle **si asset** sinon composition typographique  
5. Liens connexes (autres solutions + 1 hub pertinent)  
6. CTA final identique au système  

### 6.1 `/solutions/vehicules`

**Comprendre :** types · usages · marques si confirmées · contexte industriel · devis.

| Bloc | Règle |
|------|--------|
| Hero | H1 Véhicules. Copy homepage : « Solutions véhicules pour les opérations industrielles et logistiques. » **[CONFIRMÉ]** |
| Visuel | IMG-001 autorisé (hero **de cette page** ou carte produit). Crop IMAGE_MAP. Ce n’est pas le hero homepage. |
| Types | **[PROVISOIRE]** un seul type documenté : poids lourd / porteur benne (HOHAN). Ne pas inventer tracteurs, citernes, bus, etc. |
| Modèle | **[CONFIRMÉ]** nommage possible : SINOTRUK HOHAN 8×4 (legacy + IMAGE_MAP). Présenter comme **exemple de contexte**, pas comme catalogue. |
| Marques | SINOTRUK **[CONFIRMÉ]** (IA + asset). Lien `/marques/sinotruk`. Autres constructeurs : lien « Autres marques » `/marques/autres` **sans** les lister comme disponibles. |
| Usages | **[PROVISOIRE]** opérations industrielles et logistiques ; lien Industries Transport / BTP **sans** pitch sectoriel inventé. |
| CFAO / Mercedes / Volvo / DAF | **[OPEN]** — ne pas afficher. |
| Configurateur | **[OPEN]** — pas de CTA. |
| CTA | Devis + Contact |

### 6.2 `/solutions/pieces-services`

**Couvrir :** trouver → obtenir → maintenir la disponibilité.

| Bloc | Règle |
|------|--------|
| Hero | Copy homepage **[CONFIRMÉ]** : « Pièces et services pour la disponibilité des parcs. » |
| Visuel | **Manquant** → composition typographique / `FeatureCard`. Pas IMG-001. |
| Catalogue | **Interdit** (aucune base). |
| Recherche pièces | `/recherche` n’est pas un moteur pièces. Ne pas le vendre comme tel. |
| Marques pièces | WABCO · BOSCH **[CONFIRMÉ]** comme labels IA, **sans** « partenaire officiel ». Mahle / Ren-Par / BPW **[OPEN]**. |
| Approvisionnement | Lien `/reseau/global-parts` comme orientation, pas comme réseau cartographié. |
| Services | **[PROVISOIRE]** accompagner la disponibilité ; ne pas inventer SLA, stock 24/7, magasin en ligne. |
| CTA | Devis + Contact |

### 6.3 `/solutions/maintenance`

| Bloc | Règle |
|------|--------|
| Hero | Copy homepage **[CONFIRMÉ]** : « Maintenance et support technique. » |
| Visuel | **Manquant** |
| Contenu autorisé **[PROVISOIRE]** dérivé legacy | Entretien, support technique, disponibilité. Formulations qualitatives. |
| Diagnostic | Mentionnable seulement comme **[PROVISOIRE]** générique (« diagnostic ») **ou omis**. Pas d’équipement, pas de délai, pas d’urgence 24/7 non documentés. |
| RDV | Ne pas promettre de booking. `/rendez-vous` **[OPEN]**. Conversion = devis / contact. |
| Lien | Fleet & Véhicules (écosystème, pas OS). |
| CTA | Devis + Contact |

### 6.4 `/solutions/fleet-mobility`

Rôle : relier **véhicules + flotte + opérations + maintenance** pour un décideur de parc.  
Ce n’est **pas** PacifiqueOS.

| Bloc | Règle |
|------|--------|
| Hero | Copy homepage **[CONFIRMÉ]** : « Accompagnement flotte et mobilité. » |
| Visuel | **Manquant** |
| Corps | **[PROVISOIRE]** 3 piliers textuels max : équiper (Véhicules) · maintenir (Maintenance / Pièces) · accompagner l’exploitation. Sans modules logiciels. |
| Interdit | Login, tracking, cartes de flotte, widgets, « plateforme ». |
| CTA | Devis + Contact |

Si le métier réel de « Fleet & Mobility » doit être précisé (location, gestion de parc, conseil) : **[OPEN]** — rester sur l’accompagnement jusqu’à validation.

### 6.5 `/solutions/financement`

| Bloc | Règle |
|------|--------|
| Hero | Copy homepage **[CONFIRMÉ]** : « Solutions de financement associées aux équipements. » |
| Visuel | **Manquant** — carte texte OK (IMAGE_MAP : priorité basse). |
| Partenaire | **Alios non affiché.** Tout autre organisme **[OPEN]**. |
| Durées / taux | **Interdits** (legacy 36/48 mois lié Alios). |
| Outil | Lien tertiaire « Calculer mon financement » → `/financement` **[CONFIRMÉ]** comme route outil. Ne pas embarquer un faux calculateur. |
| CTA | Devis + Contact + lien outil |

### 6.6 `/financement` (hors hub, spécifié ici pour clarté)

Page **outil**, pas une 6ᵉ solution.  
Ownership public vs PacifiqueOS : **[OPEN]** (`MASTER_SPEC` §5).  
Phase 3B Solutions **n’implémente pas** le calculateur. Elle peut seulement **lier** la route, comme la homepage.

---

## 7. CTA — système unique

Cohérent homepage.

| Priorité | Label | Route | Où |
|----------|-------|-------|-----|
| Principal | Demander un devis | `/devis` | Header, heroes, CTA finaux |
| Secondaire | Nous contacter | `/contact` | Heroes pages, CTA finaux |
| Pertinent financement | Calculer mon financement | `/financement` | Hub carte Financement · page Financement uniquement |
| Navigation | Labels des 5 familles | leafs | Grille hub, mega menu |

WhatsApp : footer seulement (`site.ts`). Pas de bouton flottant.

Liens d’exploration (pas CTA commerciaux) : « Toutes les solutions » n’apparaît que hors hub (homepage). Sur le hub, les cartes **sont** l’exploration.

---

## 8. Assets — IMAGE MAP Solutions

Méthode : SCAN → CLASSIFICATION → CONTEXTE → SOLUTION → PAGE → PRIORITÉ.

### 8.1 Disponible

| ID | Fichier | Classification | Contexte | Solution | Page | Priorité | Crop |
|----|---------|----------------|----------|----------|------|----------|------|
| IMG-001 | `hero-sinotruk-hohan.jpg` | véhicules · camions · SINOTRUK | Poids lourd benne | Véhicules | `/solutions/vehicules` ; carte Véhicules du hub | Haute **dans ce contexte** | Card/hero 16:10 depuis portrait ; D cabine+benne ; M cabine |

**Interdit :** hero `/solutions` · Pièces · Maintenance · Fleet · Financement · filler.

### 8.2 Manquants après scan (réels)

| ID visé | Classification | Contexte | Solution / page | Priorité | Fallback 3B |
|---------|----------------|----------|-----------------|----------|-------------|
| IMG-SOL-HUB | infrastructure / industriel landscape | Décision commerciale | `/solutions` hero | Moyenne | Hero navy typographique (comme homepage) |
| IMG-SOL-PIECES | pièces · composants | Magasin / pièce | Pièces | Haute | Carte texte |
| IMG-SOL-MAINT | atelier · techniciens | Maintenance | Maintenance | Haute | Carte texte |
| IMG-SOL-FLEET | flotte · transport | Parc / convoi | Fleet | Haute | Carte texte |
| IMG-SOL-FINANCE | — | — | Financement | Basse | Carte texte |
| IMG-LOGO-SINOTRUK / WABCO / BOSCH | logos | Marques liées | Véhicules / Pièces | Haute prod | `BrandCard` fallback si lien marques ; **pas** logos fabriqués |
| IMG-LOGO-PA | wordmark | Shell | Toutes | Critique prod | `Logo.astro` existant |

Aucune génération d’image. Aucun logo inventé.

### 8.3 Politique

1. Sujet = message de la page.  
2. Sans asset pertinent → typographie / carte, pas d’image hors sujet.  
3. Nouvelle image → ligne IMAGE_MAP **et** cette section **avant** merge 3B.

---

## 9. Copy provisoire

Ne pas réintroduire les longs textes legacy (Cameroun/RAZEL/Alios/CFAO).

### 9.1 Hub `/solutions` **[PROVISOIRE]** sauf mentions notées

| Élément | Copy |
|---------|------|
| Eyebrow | Solutions **[PROVISOIRE]** ou Capacités **[CONFIRMÉ]** (homepage S3 label) |
| H1 | Solutions **[CONFIRMÉ]** (label IA) — composition display uppercase Barlow Condensed |
| Paragraphe | Véhicules, pièces, maintenance, flotte et financement. **[CONFIRMÉ]** (homepage intro S3) |
| CTA | Demander un devis · Nous contacter **[CONFIRMÉ]** |

**S3 besoin → famille [PROVISOIRE]** (une ligne chacune, pas d’argument inventé) :

| Besoin | Famille |
|--------|---------|
| Équiper une opération | Véhicules |
| Assurer la disponibilité des pièces | Pièces & Services |
| Entretenir et supporter le parc | Maintenance |
| Accompagner l’exploitation d’une flotte | Fleet & Mobility |
| Financer les équipements | Financement |

### 9.2 Leafs — titres et intros **[CONFIRMÉ]** (`home.ts` / homepage MASTER)

| Page | Titre | Intro |
|------|-------|-------|
| Véhicules | Véhicules | Solutions véhicules pour les opérations industrielles et logistiques. |
| Pièces & Services | Pièces & Services | Pièces et services pour la disponibilité des parcs. |
| Maintenance | Maintenance | Maintenance et support technique. |
| Fleet & Mobility | Fleet & Mobility | Accompagnement flotte et mobilité. |
| Financement | Financement | Solutions de financement associées aux équipements. |

Tout paragraphe **plus long** = **[PROVISOIRE]** et limité à une reformulation de ces lignes + faits **[CONFIRMÉ]** (SINOTRUK label, IMG-001, coordonnées, 5 familles).  
CTA final pages : **[PROVISOIRE]** titre possible « Parlons de votre prochain projet » — déjà **[CONFIRMÉ]** homepage S10 ; réemploi autorisé pour continuité.

### 9.3 Interdit en copy

Alios · 36/48 mois · RAZEL / granulométries · FCC/BCC/LBR · « partenaire officiel » · « 30+ ans » · SLA · stock chiffré · PacifiqueOS · Yassa.

---

## 10. Design

Continuité homepage Phase 2B + `DESIGN_SYSTEM.md` + `tokens.css`.

| Élément | Règle |
|---------|--------|
| Palette | Navy `#09183A` dominant, fond `#FFFFFF` / `#F4F6FB`, rouge accent CTA seulement |
| Typo | Barlow Condensed display/H1–H3 ; Barlow body |
| Spacing | `--pa-section-pad-y`, `--pa-grid-gap`, container 1200 / pad 5% |
| CTA | Mêmes variants `Button` (primary, outline, inverse-outline, secondary) |
| Hero | Gauche, navy, uppercase, pas de cards flottantes, pas de KPI |
| Cartes | Même langage que S2–S3 homepage : présence, bordure subtile, pas SaaS |
| Profondeur produit | Autorisée via **un** visuel pertinent (IMG-001 véhicules) et copy un cran plus claire — pas plus de gradients, pas plus d’animations |
| Breadcrumb | Composant existant |
| Rouge | Accent stratégique uniquement |

**Interdit :** dashboard, glassmorphism, purple, fake logos, filler IMG-001, 6ᵉ famille visuelle.

Composants 3B : assembler l’existant. Créer un composant **seulement** s’il manque un assemblage documenté (ex. ligne besoin→solution) — pas une nouvelle identité.

---

## 11. Responsive

Mêmes breakpoints que MASTER : desktop ≥1101 · tablet 769–1100 · mobile ≤768.  
QA largeurs homepage : 1440 · 1024 · 768 · 390 · 375.

| Viewport | Hub | Leafs | CTA |
|----------|-----|-------|-----|
| Desktop | Grille 5 solutions lisible en un écran de décision (wrap 3+2 acceptable, comme homepage S3) | Hero gauche ; IMG-001 dans ratio 16:10 | Deux boutons en cluster |
| Tablet | Grille 2 cols | Hero non 100vh ; breadcrumb wrap | Cluster, puis stack si besoin |
| Mobile | 1 col ; H1 non fragmenté mot-à-mot ; cartes non coupées | IMG-001 crop cabine ; pas de débordement | Boutons full width (règle homepage) |

Priorité : **parcours commercial** (cartes cliquables, CTA visibles, pas de page interminable).  
Ne pas remplir les vides : hiérarchie + respiration + précision + présence industrielle.

---

## 12. SEO

| Page | Title **[PROVISOIRE]** | Description **[PROVISOIRE]** dérivée copy confirmée |
|------|------------------------|-----------------------------------------------------|
| `/solutions` | Solutions \| Pacifique Auto | Véhicules, pièces, maintenance, flotte et financement. |
| `/solutions/vehicules` | Véhicules \| Pacifique Auto | Solutions véhicules pour les opérations industrielles et logistiques. |
| `/solutions/pieces-services` | Pièces & Services \| Pacifique Auto | Pièces et services pour la disponibilité des parcs. |
| `/solutions/maintenance` | Maintenance \| Pacifique Auto | Maintenance et support technique. |
| `/solutions/fleet-mobility` | Fleet & Mobility \| Pacifique Auto | Accompagnement flotte et mobilité. |
| `/solutions/financement` | Financement \| Pacifique Auto | Solutions de financement associées aux équipements. |

Règles :

- Un H1 par page.  
- Canonical = route `ROUTE_MAP`.  
- `noindex` **[OPEN]** tant que le site n’est pas en recette publique (homepage actuelle `noindex`).  
- Redirect `/services` déjà prévu.  
- Pas de schema produit inventé (pas de SKU).  
- Langue `fr` (`site.ts`).

---

## 13. Dépendances

### 13.1 Pour spécifier (cette phase) — satisfait

Shell · tokens · 5 routes · copy homepage · IMAGE_MAP · CTA `/devis` `/contact`.

### 13.2 Pour implémenter (Phase 3B — non commencée)

| Dépendance | État | Blocage |
|------------|------|---------|
| Pages `/devis` `/contact` | `planned` | Liens 404 acceptables comme homepage, ou pages minimales **hors 3A** |
| Page `/financement` outil | `planned` + ownership **[OPEN]** | Lien structurel OK ; pas de faux calculateur |
| IMG pièces / atelier / flotte | Manquants | Fallback typo |
| Logos | Manquants | Pas de fabrication |
| Content model `src/data/solutions.ts` | Absent | 3B pourra extraire `homeSolutions` — **pas dans 3A** |
| PacifiqueOS URL | `null` | Hors Solutions |

Ordre `PAGE_DEPENDENCY_MAP` : après homepage → hub Solutions → leafs véhicules → … → financement.  
Véhicules en premier leaf (seul asset).

### 13.3 Hors scope 3A / 3B Solutions

Industries, Marques (sauf liens), Projets, calculateur, configurateur, RDV, catalogue pièces, PacifiqueOS.

---

## 14. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Traiter legacy `services.html` comme source égale à l’IA | 6ᵉ famille RAZEL, Alios, CFAO | IA + homepage MASTER priment |
| IMG-001 en hero du hub | Dilution SINOTRUK / erreur homepage | Réservé Véhicules |
| Inventer un catalogue HOHAN+ | Fausse offre | Un modèle nommé max, contexte pas listing |
| Fleet = mini-OS | Mélange public / SaaS | Copy accompagnement seulement |
| CTA Configurateur / RDV depuis ROUTE_MAP | Liens outils vides + ownership OS | Brief 3A : Devis + Contact |
| `/financement` vs `/solutions/financement` | SEO / confusion | Rôles distincts, copy qui oriente |
| `/recherche` vendu comme moteur pièces | Fausse fonction | Interdit |
| Copy legacy « certifiées d'origine / stock renouvelé » | Promesse non prouvée | Omettre ou **[OPEN]** |

---

## 15. OPEN DECISIONS

Ne pas résoudre par invention.

1. **Périmètre réel Fleet & Mobility** (location, conseil, gestion de parc, simple pont véhicules/maintenance).  
2. **Ownership `/financement` et `/configurateur`** : site public vs PacifiqueOS.  
3. **Affichage `/rendez-vous`** sur Maintenance.  
4. **Partenariat Alios** — interdit à l’écran tant que non confirmé.  
5. **CFAO Mobility** comme mention de livraison.  
6. **Constructeurs hors SINOTRUK** (Mercedes, Volvo, DAF, Renault Trucks, Fruehauf) sur la page Véhicules.  
7. **Marques pièces hors WABCO/BOSCH** (Mahle, Ren-Par, BPW).  
8. **Claim « pièces d’origine / certifiées ».**  
9. **Diagnostic / urgence** comme services nommés.  
10. **`noindex`** des pages Solutions avant cutover.  
11. **Hero visuel du hub** (pack IMG-SOL-HUB vs navy typographique).  
12. **Champs `/devis`** (types de demande legacy) — hors 3A mais impacte les CTA.  
13. **Négoce international / RAZEL** : autre hub, jamais 6ᵉ solution.  
14. **Mise à jour ROUTE_MAP CTA** pour aligner Configurateur / RDV / Calculateur (écart §0.7).  

---

## 16. Critères d’acceptation (Phase 3B — non exécutée ici)

Une implémentation future n’est acceptable que si :

1. Exactement 5 familles, labels et routes identiques à `navigation.ts`.  
2. `/solutions` permet Explorer → Choisir → Devis sans page encyclopédique.  
3. Chaque leaf a Devis + Contact ; Financement a le lien `/financement` ; pas Alios.  
4. IMG-001 uniquement Véhicules / SINOTRUK.  
5. Aucun catalogue SKU, aucun projet inventé, aucun KPI, aucun logo fabriqué.  
6. Fleet & Mobility ne ressemble pas à PacifiqueOS.  
7. Copy leaf intros = `homeSolutions` (ou validation éditoriale explicite).  
8. Continuité visuelle homepage (palette, typo, CTA, spacing).  
9. Responsive 1440 / 1024 / 768 / 390 / 375 : pas de débordement, H1 lisible, CTA utilisables.  
10. `npm run build` OK ; QA_CHECKLIST visuel / fonctionnel / technique.  
11. Breadcrumbs corrects.  
12. Aucune 6ᵉ carte (RAZEL, négoce, Yassa).  

---

## 17. Livrables Phase 3A & STOP

Créé : ce fichier `docs/pacifique-auto/SOLUTIONS_MASTER_SPEC.md`.  
IMAGE_MAP global : section Solutions ajoutée par pointeur (usage IMG-001 + manquants).  

**Aucun code. Aucun composant. Aucune page. Pas de Phase 3B.**

*Fin SOLUTIONS_MASTER_SPEC.*
