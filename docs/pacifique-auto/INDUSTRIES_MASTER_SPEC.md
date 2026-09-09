# PACIFIQUE AUTO — INDUSTRIES MASTER SPEC

**Statut :** SOURCE DE VÉRITÉ — hub `/industries` et pages enfants.  
**Phase :** 4A — **arbitrage final VERROUILLÉ.**  
**Pas de Phase 4B. Aucun code. Aucune page. Aucun composant.**  
**Continuité :** homepage Phase 2B · Solutions Phase 3B.  
**Priorité :** ce document pour Industries ; `SOLUTIONS_MASTER_SPEC.md` pour Solutions ; `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` pour `/` ; `MASTER_SPEC.md` + `DESIGN_SYSTEM.md` + `tokens.css` pour l’identité.

Documents liés : `ROUTE_MAP.md` · `IMAGE_MAP.md` · `PAGE_DEPENDENCY_MAP.md` · `src/data/routes.ts` · `src/data/navigation.ts` · `src/data/home.ts` · `src/data/solutions.ts` · `src/data/site.ts`

| Marqueur | Signification |
|----------|----------------|
| **[CONFIRMÉ]** | Repository, IA, homepage MASTER, Solutions MASTER, ou arbitrage 4A. |
| **[PROVISOIRE]** | Formulation d’exécution, dérivée du confirmé. Pas un fait d’activité. |
| **[OPEN]** | Inconnue métier ou technique encore réelle. Ne pas inventer. |
| **[VERROUILLÉ]** | Décision d’arbitrage 4A. |
| **[HYPOTHÈSE UX]** | Association structurelle à afficher comme exploration. **Pas** une preuve d’activité Pacifique Auto. |

---

## 0. Audit repository (constat — inchangé)

Scan 2026-09-08, rescan Phase 4A, rescan arbitrage (hors `node_modules`, `.git`, `dist`). Aucun asset sectoriel nouveau.

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

| Route | Confusion possible | Verdict **[VERROUILLÉ]** |
|-------|-------------------|--------------------------|
| `/reseau/logistique` | « Logistique » | Hub Réseau, pas une industrie |
| `/a-propos/carrieres` | « Carrières » | Emplois, pas Mines & Carrières |
| `/solutions/*` | Offre | Familles solutions, pas secteurs |
| `/projets` | Preuve terrain | Aucun case study publiable. Lien **générique** Industries → Projets uniquement |

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

- Agrégats **RAZEL**, granulométries, Yassa — **interdit** comme industrie, comme preuve BTP, et comme relation automatique BTP → RAZEL.  
- « Idéal pour les chantiers » (HOHAN) — texte produit legacy, **pas** une preuve d’activité BTP packagée.  
- FCC · BCC · LBR — **interdits** (homepage MASTER).  
- Négoce, Alios, CFAO — hors Industries.

**Aucune page legacy « industries ».** Les 5 secteurs viennent de l’architecture visuelle, pas du site HTML historique.

### 0.4 Composants réutilisables (ne pas créer en 4A)

`IndustryCard` (4:3, placeholder navy si pas d’image) · `Hero` · `Section` · `SectionHeader` · `FeatureCard` · `VehicleCard` · `CTASection` · `Breadcrumb`.  
Pattern Solutions à **répliquer en assemblage**. Pas de look SaaS.

### 0.5 Assets réellement présents — rescan arbitrage

| ID | Fichier | Usage Industries **[VERROUILLÉ]** |
|----|---------|-----------------------------------|
| IMG-001 | `public/assets/images/hero-sinotruk-hohan.jpg` | **Interdit** sur toutes les pages Industries (hub, leafs, cartes secteurs, S4). IMG-001 = SINOTRUK / HOHAN / véhicules **strictement**. |
| IMG-002 | `public/assets/reference/architecture-visuelle.png` | Référence IA. Interdit contenu. |
| Favicon Astro | `public/favicon.svg` · `.ico` | Interdit identité PA. |
| Doublon IA | `legacy/1BFC44D9-….png` | Référence. Interdit contenu. |

**Aucun** JPEG/PNG de chantier, mine, carrière, agriculture, énergie, flotte, infrastructures, techniciens, machines de terrain.

L’absence d’images **ne bloque pas** la Phase 4B. Ne pas générer d’images. Ne pas substituer IMG-001.

### 0.6 CTA `ROUTE_MAP` vs arbitrage 4A — **[VERROUILLÉ]**

| Page | ROUTE_MAP secondaire | Arbitrage 4A |
|------|----------------------|--------------|
| Hub | Solutions | Devis + Contact |
| BTP | Projets | Devis + Contact. Lien Projets = **générique** `/projets`, pas BTP → un projet nommé |
| Transport | Véhicules | Devis + Contact. Lien Véhicules = exploration solution, pas preuve transport |
| Autres leafs | Contact | Devis + Contact |

CTA globaux = Devis + Contact. Liens Solutions / Véhicules / Projets = **exploration**, pas remplacement du CTA global. Écart ROUTE_MAP documenté, non modifié dans cette phase.

---

## 1. Mission — VERROUILLÉE

`/industries` = **centre d’orientation sectorielle**.

Le visiteur doit pouvoir :

1. Se reconnaître : « Mon activité ressemble à ça. »  
2. Comprendre des **besoins opérationnels génériques** du secteur (niveau intermédiaire).  
3. Explorer : « Voici les **solutions du site** à regarder pour ce secteur. »  
4. Agir : Demander un devis.

Ce n’est **pas** :

- une preuve d’activité actuelle de Pacifique Auto dans chaque secteur  
- un argumentaire de parts de marché, de leadership ou de volumes  
- un portefeuille de références ou de contrats  
- un catalogue d’équipements par secteur  
- une sixième industrie (RAZEL, négoce)  
- PacifiqueOS  

Positionnement **[CONFIRMÉ]** : Pacifique Auto accompagne des **opérations industrielles et logistiques** (homepage + Solutions). Les Industries **orientent par secteur**. Elles **ne prouvent pas** un historique d’affaires par secteur.

---

## 2. Preuve d’activité — VERROUILLÉ

**Aucune preuve spécifique par industrie pour le moment.**

### 2.1 Interdit

Chiffres sectoriels · nombre de clients · parts de marché · contrats · leadership · références clients non validées · projets non publiables · certifications sectorielles · association automatique industrie → projet nommé.

### 2.2 Crédibilité actuelle **[VERROUILLÉ]**

La crédibilité des pages Industries repose uniquement sur :

- la compréhension des besoins opérationnels génériques du secteur  
- l’architecture des 5 solutions du site  
- les secteurs couverts par le site  
- une capacité d’accompagnement **générique**  
- les informations réellement confirmées (Douala, Afrique Centrale, 5 familles solutions, 5 secteurs IA)

### 2.3 Projets × industries — VERROUILLÉ

Ne créer **aucune** relation projet / industrie sans preuve.

Architecture ultérieure possible :

```
Industrie → Projet pertinent
```

**Aujourd’hui** le lien reste générique :

```
Industries → /projets
```

**Interdit :** BTP → RAZEL, ou toute autre référence legacy, comme mapping automatique.

---

## 3. Architecture — VERROUILLÉE

### 3.1 Hub `/industries`

S2 fusionne « Choisir son secteur » et « Les 5 industries ». **Ne pas afficher les cinq secteurs deux fois.**

| # | Section | Objectif | Fond | Image |
|---|---------|----------|------|-------|
| S0 | Header | Shell | existant | — |
| S1 | Hero | Orientation sectorielle | Navy + typo | **Pas IMG-001** |
| S2 | 5 secteurs | Reconnaissance — une seule grille | Blanc | Placeholder `IndustryCard` navy |
| S3 | Comment Pacifique Auto peut accompagner | Accompagnement **générique** confirmé | `#F4F6FB` | Aucune |
| S4 | Solutions à explorer | Pont vers `/solutions/*` | Blanc | **Pas IMG-001** (même carte Véhicules) |
| S5 | Projets | Lien générique `/projets` | Subtle | Aucune |
| S6 | CTA | Conversion | Navy | — |
| S7 | Footer | Coordonnées | existant | — |

Ne pas ajouter de section sans justification.

```
/  homepage S4
└── /industries
    ├── /industries/btp
    ├── /industries/mines
    ├── /industries/transport
    ├── /industries/agriculture
    └── /industries/energie
```

### 3.2 Page industrie (leaf) — VERROUILLÉE

Chaque page enfant :

| # | Section | Objectif | Image |
|---|---------|----------|-------|
| S0 | Header | Shell | — |
| S1 | Hero secteur | Reconnaissance du secteur | Navy + typo. **Pas IMG-001** |
| S2 | Comprendre le secteur | Réalités générales, profondeur intermédiaire | Aucune (asset manquant) |
| S3 | Besoins opérationnels | 3 à 5 besoins génériques du secteur | Aucune |
| S4 | Solutions à explorer | Matrice UX **[HYPOTHÈSE UX]** | **Pas IMG-001** |
| S5 | Preuve / projets si disponibles | Aujourd’hui : état structurel → `/projets` | Aucune |
| S6 | CTA | Devis + Contact | — |
| S7 | Footer | Shell | — |

S5 n’affiche un projet nommé **que** si une preuve publiable existe. **Aucune aujourd’hui.**

Ne pas ajouter de section sans justification. Pas de formulaire spécifique par industrie.

---

## 4. Routes — VERROUILLÉ

| Route | Rôle | Indexation prod | CTA N1 | CTA N2 | Exploration |
|-------|------|-----------------|--------|--------|-------------|
| `/industries` | Hub orientation | **Indexable** | `/devis` | `/contact` | 5 leafs + `/solutions` + `/projets` générique |
| `/industries/btp` | Reconnaissance BTP | **Indexable** | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** · `/projets` générique |
| `/industries/mines` | Reconnaissance mines | **Indexable** | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |
| `/industries/transport` | Reconnaissance transport | **Indexable** | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |
| `/industries/agriculture` | Reconnaissance agriculture | **Indexable** | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |
| `/industries/energie` | Reconnaissance énergie | **Indexable** | `/devis` | `/contact` | Solutions **[HYPOTHÈSE UX]** |

Pas de sous-pages supplémentaires. Pas de formulaire sectoriel.

---

## 5. Parcours utilisateur — VERROUILLÉ

```
Se reconnaître (secteur)
  → Comprendre le secteur (réalités générales)
    → Identifier 3 à 5 besoins opérationnels génériques
      → Explorer des solutions (hypothèse UX, pas preuve d’activité)
        → Devis / Contact
```

Entrées **[CONFIRMÉ]** : homepage S4 · mega menu Industries · footer (si lien Industries).

Ordre des 5 : BTP → Mines & Carrières → Transport & Logistique → Agriculture → Énergie. **Ne pas réordonner.**

---

## 6. Hub `/industries` — copy VERROUILLÉE

Le wording peut être légèrement ajusté **uniquement** pour cohérence typographique (césure display). **Ne pas changer le positionnement.**

| Élément | Valeur | Statut |
|---------|--------|--------|
| Eyebrow | INDUSTRIES · SOLUTIONS B2B | **[VERROUILLÉ]** |
| H1 | DES SOLUTIONS POUR LES INDUSTRIES QUI FONT AVANCER L’AFRIQUE CENTRALE. | **[VERROUILLÉ]** |
| Lead | Découvrez les secteurs et les besoins opérationnels auxquels nos solutions peuvent répondre. | **[VERROUILLÉ]** |
| Hero visuel | Navy structurel. **Pas** IMG-001. Pas d’image générée. | **[VERROUILLÉ]** |
| S2 | 5× `IndustryCard` — titres + descriptions `homeIndustries` **[CONFIRMÉ]** | Une seule liste |
| S3 | Comment Pacifique Auto peut accompagner — piliers homepage **[CONFIRMÉ]** (capacité multi-métiers, Douala, Afrique Centrale), version courte, **sans** KPI ni claim sectoriel | **[VERROUILLÉ]** |
| S4 | 5 solutions `homeSolutions` — libellé **« Solutions à explorer »**. Pas « Pacifique Auto fournit actuellement ces solutions à ces secteurs ». **Pas IMG-001.** | **[VERROUILLÉ]** |
| S5 | Même état que homepage Projets **[CONFIRMÉ]**. Lien générique `/projets`. Pas de mapping industrie → projet. | **[VERROUILLÉ]** |
| S6 | CTA Devis + Contact | **[VERROUILLÉ]** |
| Breadcrumb | Accueil / Industries | **[CONFIRMÉ]** |

Césure display **[PROVISOIRE]** possible, du type :

```
DES SOLUTIONS POUR LES INDUSTRIES
QUI FONT AVANCER L’AFRIQUE CENTRALE.
```

**Interdit hub :** clients, chiffres, RAZEL, Yassa, Alios, carte, 6ᵉ carte, PacifiqueOS, IMG-001, argumentaire « nous équipons N mines / N chantiers », double grille des 5 secteurs.

---

## 7. Profondeur des besoins — VERROUILLÉE

Niveau : **INTERMÉDIAIRE.**

- Pas une seule phrase générique.  
- Pas un dossier encyclopédique.  
- **3 à 5 besoins opérationnels** par page industrie.  
- Formulés comme des **réalités générales du secteur**.  
- **Ne constituent pas** des claims sur les opérations actuelles de Pacifique Auto.

---

## 8. Pages enfants

Les 5 pages **partagent** le patron §3.2. H1 = label secteur **[CONFIRMÉ]**. Intro courte = `homeIndustries` **[CONFIRMÉ]**. Besoins = réalités sectorielles **[PROVISOIRE]** (profondeur intermédiaire, pas preuve PA). Solutions = **[HYPOTHÈSE UX]**.

### 8.1 `/industries/btp`

| Champ | Valeur |
|-------|--------|
| H1 | BTP **[CONFIRMÉ]** |
| Intro | Solutions pour le BTP. **[CONFIRMÉ]** |
| S2 Comprendre **[PROVISOIRE]** | Les opérations de construction et de travaux publics reposent sur la mobilité des équipements, la disponibilité des véhicules et la continuité d’entretien. L’approvisionnement en pièces et le financement des équipements font partie des contraintes courantes du secteur. |
| S3 Besoins **[PROVISOIRE]** (5) | Mobilité des équipements de chantier · Disponibilité des véhicules d’exploitation · Entretien et continuité des opérations · Approvisionnement en pièces · Financement des équipements |
| S4 Solutions **[HYPOTHÈSE UX]** | Véhicules · Pièces & Services · Maintenance · Fleet & Mobility · Financement |
| S5 | Lien générique `/projets`. **Pas** RAZEL. |
| Image | **Manquante** → hero navy / `IndustryCard`. Cible future : chantier. |
| IMG-001 | **Interdit** |

### 8.2 `/industries/mines`

| Champ | Valeur |
|-------|--------|
| H1 | Mines & Carrières **[CONFIRMÉ]** |
| Intro | Solutions pour les mines et carrières. **[CONFIRMÉ]** |
| S2 Comprendre **[PROVISOIRE]** | Les sites extractifs et les carrières exigent un parc disponible, un entretien adapté aux conditions d’exploitation et un approvisionnement en pièces. La logistique de site et la continuité d’activité sont des réalités générales du secteur. |
| S3 Besoins **[PROVISOIRE]** (4) | Disponibilité du parc en conditions d’exploitation exigeantes · Entretien et continuité d’activité · Approvisionnement en pièces · Mobilité et logistique de site |
| S4 Solutions **[HYPOTHÈSE UX]** | Véhicules · Maintenance · Pièces & Services · Fleet & Mobility |
| Image | **Manquante**. Cible future : mine / carrière. |
| Distinct | Ne pas confondre avec `/a-propos/carrieres`. |

### 8.3 `/industries/transport`

| Champ | Valeur |
|-------|--------|
| H1 | Transport & Logistique **[CONFIRMÉ]** |
| Intro | Solutions pour le transport et la logistique. **[CONFIRMÉ]** |
| S2 Comprendre **[PROVISOIRE]** | Le transport et la logistique dépendent de la disponibilité de la flotte, de l’entretien du parc et de la continuité des flux. Pièces et financement des véhicules font partie des contraintes opérationnelles génériques du secteur. |
| S3 Besoins **[PROVISOIRE]** (5) | Disponibilité de la flotte · Continuité des flux · Entretien du parc · Approvisionnement en pièces · Financement des véhicules |
| S4 Solutions **[HYPOTHÈSE UX]** | Véhicules · Fleet & Mobility · Maintenance · Pièces & Services · Financement |
| Image | **Manquante**. Cible future : flotte / transport. **Pas** IMG-001 comme photo « transport ». |
| Distinct | `/reseau/logistique` = réseau, pas cette page. |

### 8.4 `/industries/agriculture`

| Champ | Valeur |
|-------|--------|
| H1 | Agriculture **[CONFIRMÉ]** |
| Intro | Solutions pour l’agriculture. **[CONFIRMÉ]** |
| S2 Comprendre **[PROVISOIRE]** | Les exploitations agricoles s’appuient sur des véhicules et équipements disponibles, un entretien adapté aux cycles d’activité, et des solutions de financement. Ce sont des besoins généraux du secteur. |
| S3 Besoins **[PROVISOIRE]** (4) | Disponibilité des véhicules et équipements · Entretien adapté aux cycles d’activité · Approvisionnement en pièces · Financement des équipements |
| S4 Solutions **[HYPOTHÈSE UX]** | Véhicules · Maintenance · Financement |
| Image | **Manquante**. Cible future : exploitation agricole. |

### 8.5 `/industries/energie`

| Champ | Valeur |
|-------|--------|
| H1 | Énergie **[CONFIRMÉ]** |
| Intro | Solutions pour l’énergie. **[CONFIRMÉ]** |
| S2 Comprendre **[PROVISOIRE]** | Les opérations énergétiques — production, distribution, chantiers d’infrastructure — impliquent souvent un parc mobile, de la maintenance, des pièces et un suivi de flotte. Formulation générique du secteur, sans sites ni volumes. |
| S3 Besoins **[PROVISOIRE]** (4) | Mobilité vers les sites et infrastructures · Disponibilité du parc · Entretien et support technique · Approvisionnement en pièces |
| S4 Solutions **[HYPOTHÈSE UX]** | Véhicules · Maintenance · Pièces & Services · Fleet & Mobility |
| Image | **Manquante**. Cible future : infrastructure énergétique. |

---

## 9. Matrice UX Solutions × Industries — VERROUILLÉE comme STRUCTURE UX

Les 5 solutions **[CONFIRMÉ]** :

1. Véhicules  
2. Pièces & Services  
3. Maintenance  
4. Fleet & Mobility  
5. Financement  

Cette matrice est une **STRUCTURE UX**. Elle n’est **pas** une preuve d’activité actuelle de Pacifique Auto dans chaque secteur.

**Libellé d’affichage 4B [VERROUILLÉ] :** « Solutions à explorer pour ce secteur »

**Interdit :** « Pacifique Auto fournit actuellement ces solutions à ce secteur » — sans preuve.

| Industrie | Véhicules | Pièces & Services | Maintenance | Fleet & Mobility | Financement |
|-----------|:---------:|:-----------------:|:-----------:|:----------------:|:-----------:|
| BTP | ● | ● | ● | ● | ● |
| Mines & Carrières | ● | ● | ● | ● | |
| Transport & Logistique | ● | ● | ● | ● | ● |
| Agriculture | ● | | ● | | ● |
| Énergie | ● | ● | ● | ● | |

● = à explorer (**[HYPOTHÈSE UX]**). Case vide = non mis en avant sur cette page, **pas** « Pacifique Auto n’intervient pas ».

Chaque association reste **STRUCTURE UX / HYPOTHÈSE** tant qu’elle n’est pas confirmée par Pacifique Auto. Le **mix réel** Solutions × secteur est **[OPEN]**.

Hub S4 : les **cinq** solutions (comme homepage S3), cadre exploration, **sans** IMG-001. Pas de seconde grille des 5 secteurs.

Lien « Toutes les solutions » → `/solutions` sur chaque leaf.

---

## 10. RAZEL — VERROUILLÉ

RAZEL **ne fait pas** partie de la taxonomie Industries.

Si une référence RAZEL est validée ultérieurement, elle appartient à :

```
Projets → Cas clients / Réalisations
```

et **non** à :

```
Industries → BTP
```

Maintenir cette séparation conceptuelle. Aucun mapping BTP → RAZEL.

---

## 11. CTA — VERROUILLÉ

| Priorité | Label | Route |
|----------|-------|-------|
| Global N1 | Demander un devis | `/devis` |
| Global N2 | Nous contacter | `/contact` |
| Exploration | Labels solutions / « Toutes les solutions » | `/solutions` · leafs |
| Exploration | Projets (état structurel, générique) | `/projets` |
| Hub | 5 cartes secteurs | leafs industries |

Les pages **peuvent** renvoyer vers les solutions correspondantes.  
**Pas** de formulaire spécifique par industrie. WhatsApp : footer seulement.

---

## 12. Copy — règles

### 12.1 Hub

| Élément | Copy | Statut |
|---------|------|--------|
| Eyebrow / H1 / Lead | §6 | **[VERROUILLÉ]** |
| Cartes S2 | `homeIndustries` | **[CONFIRMÉ]** |
| S3 | Capacité industrielle multi-métiers — véhicules, pièces, maintenance, flotte et financement. Ancrage Douala. Orientation Afrique Centrale. | **[CONFIRMÉ]** homepage |
| S4 intro | Solutions à explorer. | **[VERROUILLÉ]** cadre |
| S5 | Sélection de réalisations en cours de préparation. | **[CONFIRMÉ]** homepage |
| S6 | Parlons de votre prochain projet | **[CONFIRMÉ]** |

### 12.2 Leafs

Intros = tableau §8 **[CONFIRMÉ]**.  
Besoins = §8, profondeur intermédiaire — réalités de secteur, pas claims PA.

### 12.3 Interdit

Clients · projets nommés · FCC/BCC/LBR · RAZEL dans la taxonomie Industries · volumes · parts de marché · certifications sectorielles · listes d’engins inventées · couverture pays · contrats · « partenaire de » · KPI · Alios/CFAO · claims Solutions-par-secteur comme faits · IMG-001 · noindex permanent.

---

## 13. Assets — VERROUILLÉ

Rescan arbitrage : identique IMAGE_MAP §1. Aucun asset sectoriel nouveau. **Ne pas bloquer 4B** sur cette absence.

| Page | Autorisé | Interdit |
|------|----------|----------|
| `/industries` hero | Navy + typo | IMG-001, image générée |
| 5 cartes hub | Placeholder `IndustryCard` navy 4:3 | IMG-001 |
| Hub S4 | Typographie / cartes solutions **sans** photo | IMG-001, y compris carte Véhicules |
| Leaf heroes | Navy + typo | IMG-001, photo hors sujet |
| Leaf S4 | Liens solutions typographiques | IMG-001 |

Cible **lorsque de vrais assets seront disponibles** (scan + entrée IMAGE_MAP **avant** merge) :

| Industrie | Sujet visé |
|-----------|------------|
| BTP | chantier |
| Mines | mine / carrière |
| Transport | flotte / transport |
| Agriculture | exploitation agricole |
| Énergie | infrastructure énergétique |

Ratio `IndustryCard` 4:3. Crop cover. Pages **plus visuelles** seulement **avec** vrais assets.

Avant de déclarer un asset manquant : **scanner le repository.** Scan actuel : manquants confirmés.

---

## 14. Design — VERROUILLÉ

Continuité stricte homepage + Solutions :

`#09183A` · `#0D2055` · `#D91A2A` accent · `#FFFFFF` · `#F4F6FB`  
Barlow / Barlow Condensed · industriel · corporate · premium · technique · B2B  

`IndustryCard` déjà prévu (bloc navy + overlay titre).  
Pas de SaaS, purple, glassmorphism, gradients décoratifs gratuits, animations lourdes.

4B : assembler l’existant. Pas de nouvelle identité.

---

## 15. Responsive

QA : 1440 · 1024 · 768 · 390 · 375.

| Viewport | Hub | Leafs |
|----------|-----|-------|
| Desktop | Grille 5 (wrap 3+2 ou `pa-grid--5` homepage) | Hero gauche, besoins en liste, solutions en grille |
| Tablet | 2 cols | 2 cols solutions |
| Mobile | 1 col, H1 lisible (césure display OK), CTA full width, cartes non coupées | Même ordre : secteur → comprendre → besoins → solutions → devis |

Priorité : **reconnaissance du secteur** puis CTA. Mobile ≠ scale-down.

---

## 16. SEO — VERROUILLÉ

Les pages Industries sont des **pages commerciales SEO**.

En production, les routes suivantes **doivent être indexables** :

`/industries` · `/industries/btp` · `/industries/mines` · `/industries/transport` · `/industries/agriculture` · `/industries/energie`

**Ne pas** prévoir `noindex` comme comportement **permanent**.

Prévoir sur chaque page :

- title  
- meta description  
- H1  
- H2 / H3 (sections S2–S6)  
- canonical = route  
- maillage interne (Solutions, Projets générique, Devis, Contact, leafs)  
- contenu utile (besoins intermédiaires + solutions à explorer)

| Page | Title **[PROVISOIRE]** | Description **[PROVISOIRE]** dérivée du confirmé / verrouillé |
|------|------------------------|---------------------------------------------------------------|
| `/industries` | Industries \| Pacifique Auto | Découvrez les secteurs et les besoins opérationnels auxquels nos solutions peuvent répondre. |
| `/industries/btp` | BTP \| Pacifique Auto | Solutions pour le BTP. |
| `/industries/mines` | Mines & Carrières \| Pacifique Auto | Solutions pour les mines et carrières. |
| `/industries/transport` | Transport & Logistique \| Pacifique Auto | Solutions pour le transport et la logistique. |
| `/industries/agriculture` | Agriculture \| Pacifique Auto | Solutions pour l’agriculture. |
| `/industries/energie` | Énergie \| Pacifique Auto | Solutions pour l’énergie. |

Un H1. Langue `fr`. Alt uniquement si vraie image.  
Pas de schema LocalBusiness / Review inventé.  
Un `noindex` de **recette globale** du site, s’il existe encore au cutover, n’est **pas** une règle Industries permanente.

---

## 17. Dépendances

4A : satisfait (docs).

4B (non commencée) : shell · tokens · `IndustryCard` · copy `homeIndustries` · Solutions routes (déjà implémentées) · `/devis` `/contact` `/projets` encore `planned` (404 acceptables comme homepage). Absence d’images **non bloquante**.

Hors scope 4B : Marques, Réseau, PacifiqueOS, catalogue, génération d’images, case studies, formulaires sectoriels, mapping industrie → projet nommé.

Ordre `PAGE_DEPENDENCY_MAP` : après Solutions → hub Industries → leafs.

---

## 18. Risques

| Risque | Mitigation **[VERROUILLÉE]** |
|--------|------------------------------|
| IMG-001 sur une page industrie | Interdit partout (hub, leafs, S4) |
| Mix Solutions présenté comme offre réelle par secteur | Libellé « Solutions à explorer pour ce secteur » · **[HYPOTHÈSE UX]** |
| RAZEL / agrégats comme BTP ou 6ᵉ industrie | Hors taxonomie Industries ; éventuelle preuve → Projets |
| FCC/BCC/LBR | Interdit |
| Cinq secteurs affichés deux fois | Un seul S2 |
| Confusion Mines / Carrières emplois | Routes distinctes, labels clairs |
| Inventer des preuves (clients, volumes, contrats) | Crédibilité = besoins + architecture + confirmé |
| Bloquer 4B sans photos | Placeholders navy |
| `noindex` permanent | Interdit. Pages commerciales indexables en prod |

---

## 19. OPEN DECISIONS restantes

Uniquement les inconnues réellement métier ou techniques :

1. **Validation du mix réel Solutions × secteur** (au-delà de la matrice UX / hypothèse).  
2. **Preuves d’activité sectorielle.**  
3. **Projets publiables.**  
4. **Assets industriels** (chantier, mine/carrière, flotte/transport, exploitation agricole, infrastructure énergétique).  
5. **Capacités exactes par secteur.**  
6. **Éventuelles références clients** validées.  
7. **Contenu spécifique fourni par Pacifique Auto.**

**Clos par arbitrage 4A :** H1 / eyebrow / lead hub · structure hub S0–S7 (S2 unique) · structure leaf S0–S7 · profondeur besoins intermédiaire (3–5) · libellé « Solutions à explorer pour ce secteur » · IMG-001 hors Industries · pas de mapping industrie → projet nommé · RAZEL hors taxonomie Industries · CTA Devis + Contact · pas de formulaire sectoriel · pages indexables en production (pas de noindex permanent) · design continuité homepage / Solutions · 5 routes exactes · pas de 6ᵉ famille.

---

## 20. Critères d’acceptation (Phase 4B — non exécutée)

1. Exactement 5 industries, slugs `ROUTE_MAP`.  
2. Hub = S0–S7, une seule grille des 5 secteurs.  
3. Leafs = S0–S7, 3 à 5 besoins intermédiaires, pas encyclopédiques.  
4. Associations Solutions libellées « Solutions à explorer pour ce secteur », pas faits d’activité.  
5. Aucun client, chiffre, projet nommé, certification inventés.  
6. IMG-001 jamais sur une page industrie.  
7. Pas RAZEL, Alios, CFAO, FCC/BCC/LBR.  
8. Lien Projets générique uniquement.  
9. CTA Devis + Contact. Pas de formulaire sectoriel.  
10. Hero hub = copy verrouillée §6.  
11. Pages prévues indexables en production (title, meta, H1, H2/H3, canonical, maillage, contenu utile).  
12. Continuité visuelle homepage / Solutions.  
13. Responsive 1440 / 1024 / 768 / 390 / 375.  
14. Absence d’images non bloquante (placeholders navy).  
15. `npm run build` OK + QA_CHECKLIST.

---

## 21. Livrable 4A & STOP

Mis à jour : `docs/pacifique-auto/INDUSTRIES_MASTER_SPEC.md`.  
IMAGE_MAP : usage Industries aligné (IMG-001 interdit sur toutes les pages Industries ; aucun asset sectoriel inventé).

**Aucun code. Aucune page. Aucun composant. Pas de Phase 4B.**

*Fin INDUSTRIES_MASTER_SPEC — arbitrage final.*
