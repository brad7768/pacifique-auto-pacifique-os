# PACIFIQUE AUTO — INDUSTRIES MASTER SPEC

**Statut :** SOURCE DE VÉRITÉ — hub `/industries` et pages enfants.  
**Phase :** 4A — audit + spécification uniquement. **Pas** Phase 4B. **Aucun code.**  
**Continuité :** homepage Phase 2B · Solutions Phase 3B.  
**Priorité :** ce document pour Industries ; `SOLUTIONS_MASTER_SPEC.md` pour Solutions ; `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` pour `/` ; `MASTER_SPEC.md` + `DESIGN_SYSTEM.md` + `tokens.css` pour l’identité.

Documents liés : `ROUTE_MAP.md` · `IMAGE_MAP.md` · `PAGE_DEPENDENCY_MAP.md` · `src/data/routes.ts` · `src/data/navigation.ts` · `src/data/home.ts` · `src/data/solutions.ts` · `src/data/site.ts`

| Marqueur | Signification |
|----------|----------------|
| **[CONFIRMÉ]** | Repository, IA, homepage MASTER, Solutions MASTER. |
| **[PROVISOIRE]** | Formulation d’orientation, dérivée du positionnement. Pas un fait d’activité. |
| **[OPEN]** | Impossible à résoudre avec le repository. Ne pas inventer. |
| **[HYPOTHÈSE UX]** | Association structurelle à afficher comme exploration, **pas** comme preuve métier. |

---

## 0. Audit repository (obligatoire — réalisé)

Scan 2026-09-08, rescan Phase 4A (hors `node_modules`, `.git`, `dist`).

### 0.1 Routes **[CONFIRMÉ]**

`src/data/routes.ts` · `ROUTE_MAP.md` · `navigation.ts` :

| Route | Page | Type | Statut code | Page Astro |
|-------|------|------|-------------|------------|
| `/industries` | Industries | hub | `planned` | **Absente** |
| `/industries/btp` | BTP | leaf | `planned` | **Absente** |
| `/industries/mines` | Mines & Carrières | leaf | `planned` | **Absente** |
| `/industries/transport` | Transport & Logistique | leaf | `planned` | **Absente** |
| `/industries/agriculture` | Agriculture | leaf | `planned` | **Absente** |
| `/industries/energie` | Énergie | leaf | `planned` | **Absente** |

Slug `energie` **sans accent** **[CONFIRMÉ]**.  
**Aucune sixième industrie.**

Routes **voisines, hors Industries** :

| Route | Confusion possible | Verdict |
|-------|-------------------|---------|
| `/reseau/logistique` | « Logistique » | Hub Réseau, pas une industrie |
| `/a-propos/carrieres` | « Carrières » | Emplois, pas Mines & Carrières |
| `/solutions/*` | Offre | Familles solutions, pas secteurs |
| `/projets` | Preuve terrain | Aucun case study publiable |

Pages Astro existantes : `/` · `/design-system` · `/solutions` (+ 5 leafs).

### 0.2 Copy et données **[CONFIRMÉ]**

| Source | Contenu |
|--------|---------|
| `home.ts` `homeIndustries` | 5 titres + « Solutions pour le/la/l’ {secteur}. » |
| `home.ts` hub Industries | « BTP, mines, transport, agriculture et énergie. » |
| Homepage MASTER S4 | Identique ; **pas** d’argumentaire sectoriel inventé |
| Solutions | 5 familles + copy courte |
| `site.ts` | Douala, coordonnées, slogan Afrique Centrale |
| Projets homepage | « Sélection de réalisations en cours de préparation. » — **aucun** projet réel dans le repo |

### 0.3 Legacy — non source d’offre sectorielle

`legacy/services.html` / `index2.html` :

- Agrégats **RAZEL**, granulométries, Yassa — **interdit** comme 6ᵉ industrie ou preuve BTP.  
- « Idéal pour les chantiers » (HOHAN) — texte produit legacy, **pas** une preuve d’activité BTP packagée.  
- FCC · BCC · LBR — **interdits** (homepage MASTER).  
- Négoce, Alios, CFAO — hors Industries.

**Aucune page legacy « industries ».** Les 5 secteurs viennent de l’architecture visuelle, pas du site HTML historique.

### 0.4 Composants réutilisables (ne pas créer en 4A)

`IndustryCard` (4:3, placeholder navy si pas d’image) · `Hero` · `Section` · `SectionHeader` · `FeatureCard` · `VehicleCard` · `CTASection` · `Breadcrumb` · `SolutionLayout` pattern (Solutions) à **répliquer en assemblage**, pas à forcer un look SaaS.

### 0.5 Assets réellement présents

| ID | Fichier | Usage Industries |
|----|---------|------------------|
| IMG-001 | `hero-sinotruk-hohan.jpg` | **Interdit** filler industrie / hero hub. Autorisé **uniquement** si une carte **Véhicules** (solution) est réutilisée — même règle homepage S3 / Solutions. |
| IMG-002 | architecture visuelle | Référence IA. Interdit contenu. |
| Favicon Astro | — | Interdit identité PA. |

**Aucun** JPEG/PNG de chantier, mine, carrière, agriculture, énergie, flotte, infrastructures, techniciens, machines de terrain (hors IMG-001 véhicules).

### 0.6 CTA `ROUTE_MAP` vs brief 4A

| Page | ROUTE_MAP secondaire | Brief 4A |
|------|----------------------|----------|
| Hub | Solutions | Devis + Contact |
| BTP | Projets | Devis + Contact |
| Transport | Véhicules | Devis + Contact |
| Autres leafs | Contact | Devis + Contact |

**Décision 4A :** CTA globaux = Devis + Contact. Liens Solutions / Véhicules / Projets = **exploration**, pas remplacement du CTA global. Écart ROUTE_MAP documenté, non modifié dans cette phase.

---

## 1. Mission — VERROUILLÉE

`/industries` = **centre d’orientation sectorielle**.

Le visiteur doit pouvoir :

1. Se reconnaître : « Mon activité ressemble à ça. »  
2. Comprendre : « Pacifique Auto s’adresse à ce type d’opération. »  
3. Explorer : « Voici les **solutions du site** pertinentes à regarder. »  
4. Agir : Demander un devis.

Ce n’est **pas** :

- un argumentaire de parts de marché  
- un portefeuille de références inventé  
- un catalogue d’équipements par secteur  
- une sixième industrie (RAZEL, négoce)  
- PacifiqueOS  

Positionnement **[CONFIRMÉ]** : Pacifique Auto accompagne des **opérations industrielles et logistiques** (homepage + Solutions). Les Industries **orientent par secteur** ; elles **ne prouvent pas** un historique d’affaires par secteur.

---

## 2. Architecture — après audit de la proposition

### 2.1 Proposition initiale (à auditer)

S0 Header · S1 Hero · S2 Choisir son secteur · S3 Les 5 industries · S4 Accompagnement · S5 Solutions associées · S6 Projets/références si disponibles · S7 CTA · S8 Footer.

### 2.2 Verdict d’audit

S2 et S3 **dupliquent** les 5 familles (même risque que Solutions S2/S3).  
S6 **n’a pas de contenu publiable** — état structurel seulement, comme homepage S7.

### 2.3 Structure hub **recommandée pour 4B** (proposition d’exécution)

Page **concise**.

| # | Section | Objectif | Fond | Image | Notes |
|---|---------|----------|------|-------|-------|
| S0 | Header | Shell | existant | — | |
| S1 | Hero | Orientation sectorielle | Navy + typo | **Pas IMG-001** | Comme hub Solutions |
| S2 | Choisir son secteur | 5 industries | Blanc | Placeholder `IndustryCard` (navy) | Fusion proposition S2+S3 |
| S3 | Accompagner les opérations | Positionnement multi-métiers **[CONFIRMÉ]** | `#F4F6FB` | Aucune | Pas de claims sectoriels inventés |
| S4 | Solutions à explorer | Pont vers `/solutions/*` | Blanc | IMG-001 **seulement** carte Véhicules | Cadre **[HYPOTHÈSE UX]** |
| S5 | Projets | Preuve terrain | Subtle | Aucune | Placeholder **[CONFIRMÉ]** homepage — pas FCC/BCC/LBR |
| S6 | CTA final | Conversion | Navy | — | Devis + Contact |
| S7 | Footer | Coordonnées | existant | — | |

S2+S3 de la proposition = **un seul S2**.  
S6 projets **conservé** comme état propre, pas omis (le hub Projets existe).

Cette structure est **le contrat 4A** sauf arbitrage contraire.

```
/  homepage S4
└── /industries
    ├── /industries/btp
    ├── /industries/mines
    ├── /industries/transport
    ├── /industries/agriculture
    └── /industries/energie
```

---

## 3. Routes

| Route | Rôle | CTA N1 | CTA N2 | Exploration |
|-------|------|--------|--------|-------------|
| `/industries` | Orientation | `/devis` | `/contact` | 5 leafs + `/solutions` |
| `/industries/btp` | Reconnaissance BTP | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** · `/projets` structurel |
| `/industries/mines` | Reconnaissance mines | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |
| `/industries/transport` | Reconnaissance transport | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** · accent Véhicules possible |
| `/industries/agriculture` | Reconnaissance agriculture | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |
| `/industries/energie` | Reconnaissance énergie | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |

Pas de sous-pages supplémentaires. Pas de formulaire sectoriel.

---

## 4. Parcours utilisateur

```
Se reconnaître (secteur)
  → Comprendre l’accompagnement (générique, confirmé)
    → Explorer des solutions (hypothèse UX, pas preuve)
      → Devis / Contact
```

Entrées **[CONFIRMÉ]** : homepage S4 · mega menu Industries · footer (si lien Industries).

Ordre des 5 : BTP → Mines & Carrières → Transport & Logistique → Agriculture → Énergie. **Ne pas réordonner.**

---

## 5. Hub `/industries`

| Élément | Règle |
|---------|--------|
| Eyebrow | Industries **[PROVISOIRE]** ou Secteurs **[CONFIRMÉ]** (homepage S4 label) |
| H1 | Industries **[CONFIRMÉ]** label IA — composition display possible **[PROVISOIRE]** type « DES OPÉRATIONS. DES SECTEURS. DES SOLUTIONS. » **uniquement** si 4B conserve sobriété ; sinon H1 = INDUSTRIES |
| Intro | BTP, mines, transport, agriculture et énergie. **[CONFIRMÉ]** |
| Hero visuel | Navy structurel. **Pas** IMG-001. Pas d’image générée. |
| S2 | 5× `IndustryCard` titres + descriptions `homeIndustries` |
| S3 | Piliers homepage **[CONFIRMÉ]** (capacité multi-métiers, Douala, Afrique Centrale) — version courte, **sans** KPI |
| S4 | 5 solutions `homeSolutions` — libellé de section : « Solutions à explorer » **[PROVISOIRE]** — **pas** « Nos réalisations dans vos secteurs » |
| S5 | Même état que homepage Projets **[CONFIRMÉ]** |
| CTA | Devis + Contact |
| Breadcrumb | Accueil / Industries |

**Interdit hub :** clients, chiffres, RAZEL, Yassa, Alios, carte, 6ᵉ carte, PacifiqueOS, argumentaire « nous équipons N mines / N chantiers ».

---

## 6. Pages enfants — patron

1. Breadcrumb Accueil / Industries / {secteur}  
2. Hero page navy, gauche, **sans** photo sectorielle (manquante)  
3. Secteur + phrase `homeIndustries` **[CONFIRMÉ]**  
4. Besoins opérationnels **généraux [PROVISOIRE]** — 3 lignes max, sans équipements inventés  
5. Solutions à explorer **[HYPOTHÈSE UX]** — liens `/solutions/*`  
6. Projets : lien `/projets` état structurel, **pas** de case study  
7. CTA Devis + Contact  

Les 5 pages **partagent** le patron, **ne sont pas** cinq clones de copy : le H1 et la phrase confirmée changent ; les besoins [PROVISOIRE] restent prudents et distincts par **type d’opération générique**, pas par fausse preuve PA.

### 6.1 `/industries/btp`

| Champ | Valeur |
|-------|--------|
| H1 | BTP **[CONFIRMÉ]** |
| Intro | Solutions pour le BTP. **[CONFIRMÉ]** |
| Besoins **[PROVISOIRE]** | Opérations de chantier · disponibilité du matériel · accompagnement véhicules / pièces / maintenance — formulations générales, **sans** citer RAZEL, granulats, FCC |
| Solutions **[HYPOTHÈSE UX]** | Véhicules, Pièces, Maintenance, Fleet, Financement |
| Image | **Manquante** → `IndustryCard` / hero navy |
| IMG-001 | Pas en hero BTP |

### 6.2 `/industries/mines`

| Champ | Valeur |
|-------|--------|
| H1 | Mines & Carrières **[CONFIRMÉ]** |
| Intro | Solutions pour les mines et carrières. **[CONFIRMÉ]** |
| Besoins **[PROVISOIRE]** | Opérations extractives / carrière · disponibilité · accompagnement parc — **sans** tonnages, sites, engins nommés |
| Solutions **[HYPOTHÈSE UX]** | Véhicules, Maintenance, Pièces, Fleet |
| Image | **Manquante** |

Ne pas confondre avec `/a-propos/carrieres`.

### 6.3 `/industries/transport`

| Champ | Valeur |
|-------|--------|
| H1 | Transport & Logistique **[CONFIRMÉ]** |
| Intro | Solutions pour le transport et la logistique. **[CONFIRMÉ]** |
| Besoins **[PROVISOIRE]** | Flux · parc · disponibilité — **sans** flotte chiffrée ni carte |
| Solutions **[HYPOTHÈSE UX]** | Véhicules, Fleet, Maintenance, Pièces, Financement |
| Image | **Manquante** pour le secteur. Carte solution Véhicules : IMG-001 **possible** (contexte SINOTRUK), pas comme photo « transport Afrique » générique |
| Distinct | `/reseau/logistique` = réseau, pas cette page |

### 6.4 `/industries/agriculture`

| Champ | Valeur |
|-------|--------|
| H1 | Agriculture **[CONFIRMÉ]** |
| Intro | Solutions pour l’agriculture. **[CONFIRMÉ]** |
| Besoins **[PROVISOIRE]** | Opérations agricoles · disponibilité · accompagnement — **sans** cultures, surfaces, tracteurs inventés |
| Solutions **[HYPOTHÈSE UX]** | Véhicules, Maintenance, Financement |
| Image | **Manquante** |

### 6.5 `/industries/energie`

| Champ | Valeur |
|-------|--------|
| H1 | Énergie **[CONFIRMÉ]** |
| Intro | Solutions pour l’énergie. **[CONFIRMÉ]** |
| Besoins **[PROVISOIRE]** | Opérations énergétiques · disponibilité du parc · accompagnement — **sans** pétroliers, sites, MW |
| Solutions **[HYPOTHÈSE UX]** | Véhicules, Maintenance, Pièces, Fleet |
| Image | **Manquante** |

---

## 7. Relation Industries → Solutions

**Stratégique et non prouvée.**

Les associations du brief 4A sont **[HYPOTHÈSE UX]** :

| Industrie | Solutions à explorer (hypothèse) |
|-----------|----------------------------------|
| BTP | Véhicules · Pièces · Maintenance · Fleet · Financement |
| Mines & Carrières | Véhicules · Maintenance · Pièces · Fleet |
| Transport & Logistique | Véhicules · Fleet · Maintenance · Pièces · Financement |
| Agriculture | Véhicules · Maintenance · Financement |
| Énergie | Véhicules · Maintenance · Pièces · Fleet |

**Affichage 4B :**

- Titre de bloc : « Solutions à explorer » **[PROVISOIRE]**  
- Interdit : « Nous équipons le BTP avec… », « Notre offre mines comprend… » comme fait.  
- Les 5 solutions existent **[CONFIRMÉ]** ; leur **mix par secteur** est **[OPEN]**.  
- Lien « Toutes les solutions » → `/solutions` sur chaque leaf.

Hub S4 : les **cinq** solutions (comme homepage S3), cadre exploration, pas matrice sectorielle inventée.

---

## 8. CTA — VERROUILLÉ

| Priorité | Label | Route |
|----------|-------|-------|
| Global N1 | Demander un devis | `/devis` |
| Global N2 | Nous contacter | `/contact` |
| Exploration | Labels solutions / « Toutes les solutions » | `/solutions` · leafs |
| Exploration | Projets (état structurel) | `/projets` |
| Hub | 5 cartes secteurs | leafs industries |

Pas de formulaire sectoriel. WhatsApp : footer seulement.

---

## 9. Copy provisoire

### Hub

| Élément | Copy | Statut |
|---------|------|--------|
| Intro | BTP, mines, transport, agriculture et énergie. | **[CONFIRMÉ]** |
| Cartes | `homeIndustries` descriptions | **[CONFIRMÉ]** |
| S3 | Capacité industrielle multi-métiers — véhicules, pièces, maintenance, flotte et financement. Ancrage Douala. Orientation Afrique Centrale. | **[CONFIRMÉ]** homepage |
| S4 intro | Explorer les solutions du site public. | **[PROVISOIRE]** |
| S5 | Sélection de réalisations en cours de préparation. | **[CONFIRMÉ]** homepage |
| S6 | Parlons de votre prochain projet | **[CONFIRMÉ]** |

### Leafs

Intros = tableau §6 **[CONFIRMÉ]**.  
Besoins = §6 **[PROVISOIRE]** uniquement ; omettre le bloc besoins en 4B si trop spéculatif — **préférable à l’invention**.

### Interdit

Clients · projets nommés · FCC/BCC/LBR · RAZEL · volumes · parts de marché · certifications · listes d’engins · couverture pays · contrats · « partenaire de » · KPI · Alios/CFAO · claims Solutions-par-secteur comme faits.

---

## 10. Assets

Rescan : identique IMAGE_MAP. Aucun asset sectoriel nouveau.

| Page | Autorisé | Interdit |
|------|----------|----------|
| `/industries` hero | Navy + typo | IMG-001, image générée |
| 5 cartes hub | Placeholder `IndustryCard` navy | IMG-001 filler |
| Leaf heroes | Navy + typo | Photo hors sujet |
| Carte solution Véhicules (si présente) | IMG-001 | Réemploi en fond industrie |

Manquants (réels) : chantier BTP · mine/carrière · transport/flotte landscape · agriculture · énergie/infrastructures.

Quand un vrai asset arrivera : SCAN → IMAGE_MAP **avant** merge. Ratio `IndustryCard` 4:3. Crop cover.

Pages **plus visuelles** seulement **avec** vrais assets — pas de substitution IMG-001.

---

## 11. Design

Continuité homepage + Solutions :

`#09183A` · `#0D2055` · `#D91A2A` accent · `#FFFFFF` · `#F4F6FB`  
Barlow / Barlow Condensed · industriel · corporate · premium · technique · B2B  

`IndustryCard` déjà prévu pour la reconnaissance visuelle (bloc navy + overlay titre).  
Pas de SaaS, purple, glassmorphism, gradients décoratifs gratuits, animations lourdes.

4B : assembler l’existant. Pas de nouvelle identité.

---

## 12. Responsive

QA : 1440 · 1024 · 768 · 390 · 375.

| Viewport | Hub | Leafs |
|----------|-----|-------|
| Desktop | Grille 5 (wrap 3+2 ou `pa-grid--5` homepage) | Hero gauche, solutions en grille |
| Tablet | 2 cols | 2 cols solutions |
| Mobile | 1 col, H1 lisible, CTA full width, cartes non coupées | Même ordre : secteur → besoins prudents → solutions → devis |

Priorité : **reconnaissance du secteur** puis CTA. Mobile ≠ scale-down.

---

## 13. SEO

| Page | Title **[PROVISOIRE]** | Description **[CONFIRMÉ]** dérivée |
|------|------------------------|-----------------------------------|
| `/industries` | Industries \| Pacifique Auto | BTP, mines, transport, agriculture et énergie. |
| `/industries/btp` | BTP \| Pacifique Auto | Solutions pour le BTP. |
| `/industries/mines` | Mines & Carrières \| Pacifique Auto | Solutions pour les mines et carrières. |
| `/industries/transport` | Transport & Logistique \| Pacifique Auto | Solutions pour le transport et la logistique. |
| `/industries/agriculture` | Agriculture \| Pacifique Auto | Solutions pour l’agriculture. |
| `/industries/energie` | Énergie \| Pacifique Auto | Solutions pour l’énergie. |

Un H1. Canonical = route. H2 = sections S2–S6. Alt uniquement si vraie image.  
Liens internes : Solutions, Projets (structurel), Devis, Contact.  
Pas de schema LocalBusiness/Review inventé.  
`noindex` cutover : **[OPEN]** (même politique que le reste du site public en recette).

---

## 14. Dépendances

4A : satisfait (docs).

4B (non commencée) : shell · tokens · `IndustryCard` · copy `homeIndustries` · Solutions routes (déjà implémentées) · `/devis` `/contact` `/projets` encore `planned` (404 acceptables comme homepage).

Hors scope 4B : Marques, Réseau, PacifiqueOS, catalogue, génération d’images, case studies.

Ordre `PAGE_DEPENDENCY_MAP` : après Solutions → hub Industries → leafs.

---

## 15. Risques

| Risque | Mitigation |
|--------|------------|
| IMG-001 en hero industrie | Interdit |
| Mix Solutions présenté comme offre réelle par secteur | Libellé « à explorer » · **[HYPOTHÈSE UX]** |
| RAZEL / agrégats comme BTP | Interdit |
| FCC/BCC/LBR | Interdit |
| S2+S3 encyclopédiques | Un seul S2 5 cartes |
| Confusion Mines / Carrières emplois | Routes distinctes, labels clairs |
| Inventer des besoins (engins, SLA) | Omettre le bloc plutôt qu’inventer |

---

## 16. OPEN DECISIONS

1. **Mix réel Solutions × secteur** (au-delà de l’hypothèse UX).  
2. **Preuve d’activité** par industrie (clients, sites, contrats).  
3. **Besoins opérationnels** plus précis que les 3 lignes [PROVISOIRE] — ou **omission** du bloc.  
4. **H1 hub** : label « Industries » vs phrase display.  
5. **Assets sectoriels** (tous manquants).  
6. **Lien Projets** sur BTP (`ROUTE_MAP`) vs placeholder unique.  
7. **`noindex`** cutover.  
8. **RAZEL / agrégats** : autre hub éventuel, **jamais** 6ᵉ industrie ici.

**Clos par audit :** 5 routes exactes · pas de 6ᵉ famille · IMG-001 non filler · CTA globaux Devis/Contact · projets = état structurel · associations Solutions = hypothèse UX.

---

## 17. Critères d’acceptation (Phase 4B — non exécutée)

1. Exactement 5 industries, slugs `ROUTE_MAP`.  
2. Hub = reconnaissance → accompagnement générique → solutions à explorer → devis.  
3. Aucun client, chiffre, projet, certification inventés.  
4. Associations Solutions libellées exploration, pas faits.  
5. IMG-001 jamais hero industrie.  
6. Pas RAZEL, Alios, CFAO, FCC/BCC/LBR.  
7. Continuité visuelle homepage / Solutions.  
8. Responsive 1440 / 1024 / 768 / 390 / 375.  
9. CTA Devis + Contact.  
10. `npm run build` OK + QA_CHECKLIST.

---

## 18. Livrable 4A & STOP

Créé : `docs/pacifique-auto/INDUSTRIES_MASTER_SPEC.md`.  
IMAGE_MAP : section usage Industries (scan, interdits, manquants).

**Aucun code. Aucune page. Aucun composant. Pas de Phase 4B.**

*Fin INDUSTRIES_MASTER_SPEC.*
