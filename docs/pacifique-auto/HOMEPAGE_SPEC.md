# HOMEPAGE SPEC — Pacifique Auto (`/`)

**Phase :** 2A — Spécification uniquement (aucune implémentation)  
**Statut :** À valider avant Phase 2B (code homepage)  
**Route :** `/` (remplace la page statut fondations Phase 1 au cutover)  
**Référence IA / identité :** `/public/assets/reference/architecture-visuelle.png`  
**Référence technique / visuelle verrouillée :** Design System Phase 1 (`DESIGN_SYSTEM.md`, `src/styles/tokens.css`)  
**Documents liés :** `MASTER_SPEC.md`, `ROUTE_MAP.md`, `IMAGE_MAP.md`, `PAGE_DEPENDENCY_MAP.md`, `QA_CHECKLIST.md`

---

## 0. Règles de rédaction de cette spec

1. L’architecture visuelle est source de vérité pour **hiérarchie, navigation, hubs, logique commerciale, pages spéciales**.
2. Elle n’est **pas** une maquette pixel-perfect : aucun détail d’espacement exact non mesurable n’est inventé.
3. Toute incertitude est listée en **OPEN DECISIONS** — pas résolue par invention.
4. Aucun chiffre, logo, partenaire ou promesse commerciale non présents dans les docs / legacy du repo n’est présenté comme fait validé.
5. Les textes proposés ci-dessous marqués **[PROVISOIRE]** sont des formulations de travail dérivées du positionnement documenté ; ils doivent être validés éditorialement avant code.
6. Composants : uniquement ceux Phase 1 existants, ou assemblages documentés de ceux-ci. Aucun nouveau composant sans justification + gate.

---

## 1. Rôle de la homepage

### 1.1 Mission

La homepage (`/`) est la **porte d’entrée corporate / commerciale B2B** de Pacifique Auto. Elle doit :

1. **Présenter** Pacifique Auto (marque, slogan Afrique Centrale, nature B2B industrielle).
2. **Établir la crédibilité** (expertise, couverture, partenaires/marques, capacité à livrer) — sans chiffres inventés.
3. **Présenter les capacités** via les familles Solutions (véhicules, pièces, maintenance, fleet, financement).
4. **Orienter** vers les 7 hubs de l’architecture visuelle.
5. **Faire comprendre** rapidement le périmètre : véhicules · pièces · services · projets (et le reste via hubs).
6. **Conduire** vers des actions commerciales réelles déjà routées (`/devis`, `/contact`, éventuellement `/client/login`).
7. **Préparer l’exploration** du site (hubs + ressources), sans se transformer en catalogue exhaustif ni en dashboard SaaS.

### 1.2 Hiérarchie d’intentions (parcours)

| Étape | Intention | Sections responsables |
|-------|-----------|------------------------|
| **Découverte** | Qui est Pacifique Auto ? Quelle promesse ? | Header + Hero |
| **Compréhension** | Que propose-t-on ? À qui ? | Solutions + Industries |
| **Exploration** | Où aller ensuite dans le site ? | Hub navigation commerciale + Marques + Réseau + Ressources |
| **Preuve** | Pourquoi faire confiance ? | Preuve / crédibilité + Projets |
| **Conversion** | Que faire maintenant ? | CTA bandeaux sectionnels + CTA final + Header devis |

Ordre narratif imposé :  
**Découvrir → Comprendre → Explorer → Faire confiance → Demander / contacter.**

### 1.3 Ce que la homepage n’est pas

- Pas PacifiqueOS / pas UI opérationnelle.
- Pas un dashboard de stats.
- Pas une page « tout le contenu du site ».
- Pas un formulaire multi-étapes (le devis vit sur `/devis`).

---

## 2. Structure exacte des sections

**Ordre verrouillé (haut → bas) :**

| # | Section | Justification |
|---|---------|---------------|
| S0 | Skip link + Header (shell) | Navigation globale + conversion permanente — architecture visuelle |
| S1 | Hero | Découverte marque + promesse Afrique Centrale + CTA |
| S2 | Navigation commerciale (7 hubs) | Orientation IA — cœur de l’architecture visuelle |
| S3 | Solutions prioritaires (5) | Capacités commerciales principales |
| S4 | Industries | Preuve d’applicabilité sectorielle |
| S5 | Marques | Crédibilité partenaires / distribution |
| S6 | Preuve / crédibilité (qualitative) | Confiance sans chiffres inventés |
| S7 | Projets / cas clients | Preuve par réalisations |
| S8 | Réseau | Couverture / implantations / logistique |
| S9 | Ressources | Exploration contenu (actualité, docs, guides) |
| S10 | CTA final | Conversion |
| S11 | Footer (shell) | Architecture visuelle footer |

**Sections explicitement exclues (courantes mais non justifiées ici) :**

| Section courante | Pourquoi exclue |
|------------------|-----------------|
| Teaser / bandeau promo Yassa | Présent legacy, **absent** architecture visuelle → OPEN DECISION |
| WhatsApp float | Idem → OPEN DECISION |
| Grille de KPIs chiffrés (30+, 500+…) | Chiffres legacy non validés comme vérité homepage → interdit tant que non validés |
| Témoignages clients nominatifs | Non présents comme assets/contenus validés |
| Logos carousel animé type marquee | Non exigé par architecture ; risque bruit |
| Newsletter inline hors footer | Newsletter déjà dans footer architecture |
| Chatbot / configurateur embarqué | Outils = pages spéciales, pas homepage |

---

### SECTION S0 — Header

- **Nom :** Header global homepage  
- **Objectif :** Navigation IA + accès actions commerciales + identité marque  
- **Position :** Fixed top (Phase 1 shell)  
- **Background :** `--pa-color-primary` translucide (token header existant)  
- **Composant utilisé :** `Header` + `MegaMenu` + `MobileNav` + `Logo` + `Button`  
- **Titre / Sous-titre :** N/A (chrome)  
- **Contenu :** voir §3  
- **Image :** Logo wordmark — **ASSET REQUIS** (workaround `Logo.astro` jusqu’à livraison)  
- **CTA principal :** Demande de devis → `/devis`  
- **CTA secondaire :** Espace client → `/client/login` (boundary OS)  
- **Destination des CTA :** `/devis`, `/client/login`, `/recherche`  
- **Desktop :** Mega menu 7 items + search + client + devis  
- **Tablet :** Burger + drawer (CTA dans drawer)  
- **Mobile :** Idem tablet  

---

### SECTION S1 — Hero

- **Nom :** Hero marque  
- **Objectif :** Annoncer Pacifique Auto + solutions B2B + Afrique Centrale ; initier conversion  
- **Position :** Première section sous header ; full-bleed  
- **Background :** Navy (`--pa-color-primary`) + image + scrim tokenisé (composant `Hero`)  
- **Composant utilisé :** `Hero` + `Button` (+ éventuellement `Badge` eyebrow)  
- **Titre :** **[PROVISOIRE]** `Pacifique Auto` avec accent rouge sur `Auto` *ou* une accroche courte uppercase Barlow Condensed — **OPEN DECISION copy exact**  
- **Sous-titre / lead :** Slogan officiel verrouillé : `Des solutions qui font avancer l'Afrique Centrale`  
- **Contenu :** Une phrase de cadrage B2B **[PROVISOIRE — dérivée positionnement docs]** : solutions véhicules, pièces, maintenance, flotte et financement pour les acteurs industriels d’Afrique Centrale. *Ne pas coller le paragraphe legacy Cameroun/RAZEL en hero tant que le positionnement régional n’est pas tranché (OPEN).*  
- **Image :** **IMG-HOME-HERO** — asset dédié **manquant** (voir §15). Ne pas utiliser IMG-001 par défaut.  
- **CTA principal :** Demande de devis → `/devis`  
- **CTA secondaire :** Découvrir nos solutions → `/solutions` *(ancre alternative acceptée : scroll vers S3)*  
- **Destination des CTA :** `/devis` · `/solutions`  
- **Desktop :** min-height ~100vh (token Hero) ; contenu aligné gauche ; max-width contenu ~680px ; accent diagonal optionnel (déjà dans `Hero`)  
- **Tablet :** hauteur auto / moins de vh forcé ; CTA côte à côte si place  
- **Mobile :** accent diagonal masqué ; CTA empilés ; pas de stats dans le hero  

---

### SECTION S2 — Navigation commerciale (7 hubs)

- **Nom :** Explorer Pacifique Auto  
- **Objectif :** Rendre visibles et cliquables les 7 familles de l’architecture visuelle  
- **Position :** Immédiatement sous le hero  
- **Background :** `--pa-color-bg` (blanc) ou `--pa-color-bg-subtle` — **OPEN DECISION** fond exact  
- **Composant utilisé :** `Section` + `SectionHeader` + grille de `Card` / `FeatureCard` (pas de nouveau `HubCardGrid` tant que non ajouté au design system)  
- **Titre :** **[PROVISOIRE]** `Explorer nos univers`  
- **Sous-titre :** **[PROVISOIRE]** Accès direct aux pôles du site public  
- **Contenu :** 7 cartes — Solutions, Industries, Marques, Réseau, Projets, Ressources, À propos  
- **Image :** Icônes hubs — **ASSET REQUIS / non disponible** ; interim : initiale typographique ou slot `Icon` vide stylé navy (pas d’illustration inventée)  
- **CTA principal par carte :** « Voir » / label du hub → route hub  
- **CTA secondaire section :** Aucun (évite concurrence)  
- **Destinations :** `/solutions` `/industries` `/marques` `/reseau` `/projets` `/ressources` `/a-propos`  
- **Desktop :** grille 4+3 ou 7 en auto-fit min ~240px  
- **Tablet :** 2 colonnes  
- **Mobile :** 1 colonne  

**Justification :** L’architecture visuelle place ces 7 familles au centre du site ; la homepage doit les exposer sans forcer le mega-menu.

---

### SECTION S3 — Solutions prioritaires

- **Nom :** Nos solutions  
- **Objectif :** Comprendre les 5 capacités solutions ; prioriser l’exploration produit  
- **Position :** Après S2  
- **Background :** `--pa-color-bg-subtle`  
- **Composant utilisé :** `Section` + `SectionHeader` + `FeatureCard` et/ou `VehicleCard` (pour Véhicules uniquement si image OK)  
- **Titre :** **[PROVISOIRE]** `Solutions`  
- **Sous-titre :** **[PROVISOIRE]** Véhicules, pièces, maintenance, flotte et financement  
- **Contenu :** voir §6 (5 items ordonnés)  
- **Image :** par carte — voir IMAGE MAP homepage ; plusieurs **manquantes**  
- **CTA principal section :** Toutes les solutions → `/solutions`  
- **CTA secondaire :** Demande de devis → `/devis`  
- **Destinations cartes :** routes `/solutions/*`  
- **Desktop :** grille 3 + 2 ou 5 auto-fit  
- **Tablet :** 2 colonnes  
- **Mobile :** 1 colonne  

---

### SECTION S4 — Industries

- **Nom :** Industries  
- **Objectif :** Montrer pour quels secteurs Pacifique Auto opère ; guider vers hubs industries  
- **Position :** Après S3  
- **Background :** `--pa-color-bg`  
- **Composant utilisé :** `Section` + `SectionHeader` + `IndustryCard` ×5  
- **Titre :** **[PROVISOIRE]** `Industries`  
- **Sous-titre :** **[PROVISOIRE]** Des réponses adaptées aux contraintes de chaque secteur  
- **Contenu :** Labels uniquement issus de l’architecture : BTP · Mines & Carrières · Transport & Logistique · Agriculture · Énergie. **Pas de pitch commercial inventé** (descriptions = absentes ou **[PROVISOIRE minimal]** type « Solutions pour le secteur {nom} » en attendant copy validée).  
- **Image :** 5 photos secteur — **TOUTES MANQUANTES**  
- **CTA principal :** Voir les industries → `/industries`  
- **CTA secondaire :** Demande de devis → `/devis`  
- **Destinations cartes :** `/industries/btp` etc.  
- **Desktop :** 5 colonnes ou auto-fit  
- **Tablet :** 2–3 colonnes  
- **Mobile :** 1 colonne (ou scroll horizontal **OPEN DECISION** — non retenu par défaut pour éviter invention UX)  

---

### SECTION S5 — Marques

- **Nom :** Marques  
- **Objectif :** Crédibilité distribution / partenaires prioritaires  
- **Position :** Après S4  
- **Background :** `--pa-color-bg-subtle` ou inverse navy léger — **OPEN DECISION** (legacy marquee était navy ; architecture non conclusive)  
- **Composant utilisé :** `Section` + `SectionHeader` + `BrandCard` ×4  
- **Titre :** **[PROVISOIRE]** `Marques`  
- **Sous-titre :** **[PROVISOIRE]** Partenaires et références constructeurs  
- **Contenu :** SINOTRUK · WABCO · BOSCH · Autres marques (ordre architecture)  
- **Image :** Logos — **MANQUANTS** (sauf photo produit SINOTRUK IMG-001 utilisable en soutien carte SINOTRUK, pas comme logo)  
- **CTA principal :** Toutes les marques → `/marques`  
- **CTA secondaire :** SINOTRUK → `/marques/sinotruk`  
- **Destinations :** `/marques/*`  
- **Desktop :** 4 colonnes  
- **Tablet :** 2×2  
- **Mobile :** 1–2 colonnes  

**Note BOSCH :** présent dans l’architecture / ROUTE_MAP ; **pas** dans le catalogue legacy texte. Afficher le label OK ; ne pas inventer claims. Partenariat = **OPEN DECISION** contenu.

---

### SECTION S6 — Preuve / crédibilité

- **Nom :** Pourquoi Pacifique Auto  
- **Objectif :** Renforcer la confiance par des **faits qualitatifs documentés**, sans KPI inventés  
- **Position :** Après S5  
- **Background :** `--pa-color-primary-mid` (pattern legacy « pourquoi » / tokens inverse)  
- **Composant utilisé :** `Section` + `SectionHeader` + piliers via structure type `FeatureCard` ou blocs texte (réutiliser classes typo) — **pas de `Stat` chiffré** tant que chiffres non validés  
- **Titre :** **[PROVISOIRE]** `Une expertise industrielle au service de l'Afrique Centrale`  
- **Sous-titre :** optionnel  
- **Contenu autorisé (sources docs / legacy, reformulé sans chiffres) :**  
  - Capacité multi-métiers : négoce / véhicules / pièces / maintenance / agrégats (legacy).  
  - Ancrage opérationnel documenté : Ngodi Akwa, Douala ; dépôt Yassa mentionné legacy (date d’ouverture = **ne pas afficher comme fait homepage** sans validation — OPEN).  
  - Orientation régionale slogan (architecture).  
  - Marques / partenaires listés architecture + legacy (sans logos inventés).  
  - Financement mentionné legacy (Alios) — **OPEN** si affiché sur homepage.  
- **Image :** optionnelle photo atelier/réseau — **MANQUANTE** ; section peut être 100 % texte + filets rouge  
- **CTA principal :** À propos → `/a-propos`  
- **CTA secondaire :** Contact → `/contact`  
- **Destinations :** `/a-propos`, `/contact`  
- **Desktop :** 2 colonnes (texte | liste piliers) ou 3–4 piliers  
- **Tablet :** 1 colonne puis piliers 2×2  
- **Mobile :** stack  

**Interdit :** 30+, 500+, 8/12 marques, etc. tant que non validés (OPEN DECISIONS).

---

### SECTION S7 — Projets / cas clients

- **Nom :** Projets  
- **Objectif :** Preuve par réalisations / études de cas ; pousser vers `/projets`  
- **Position :** Après S6  
- **Background :** `--pa-color-bg`  
- **Composant utilisé :** `Section` + `SectionHeader` + `ProjectCard` × **3**  
- **Titre :** **[PROVISOIRE]** `Projets & réalisations`  
- **Sous-titre :** **[PROVISOIRE]** Des engagements concrets sur le terrain  
- **Contenu :** 3 cartes **placeholder structurel** (titre/description **[PROVISOIRE]** ou « Contenu à fournir ») — **ne pas inventer** de chantiers FCC/BCC/LBR comme études de cas homepage tant que non packagés avec droits/photos. Legacy les cite comme références : utilisable **uniquement** si validation éditoriale (OPEN).  
- **Image :** 3 photos projets — **MANQUANTES**  
- **CTA principal carte :** Voir le projet → `/projets/cas-clients` ou `/projets/realisations` (selon type)  
- **CTA secondaire section :** Tous les projets → `/projets`  
- **Destinations :** `/projets`, `/projets/cas-clients`, `/projets/realisations`  
- **Desktop :** 3 colonnes  
- **Tablet :** 2+1 ou 3 stack  
- **Mobile :** 1 colonne  

**Nombre de cartes :** 3 (équilibre preuve / poids page ; aligné patterns miniatures « grilles »).

---

### SECTION S8 — Réseau

- **Nom :** Notre réseau  
- **Objectif :** Faire comprendre couverture / implantations / logistique sans carte inventée  
- **Position :** Après S7  
- **Background :** `--pa-color-bg-subtle`  
- **Composant utilisé :** `Section` + `SectionHeader` + 3 `FeatureCard` (ou `Card`) pointant vers enfants réseau  
- **Titre :** **[PROVISOIRE]** `Réseau`  
- **Sous-titre :** **[PROVISOIRE]** Implantations, pièces, logistique  
- **Contenu :**  
  1. Nos implantations → `/reseau/implantations`  
  2. Global Parts Network → `/reseau/global-parts`  
  3. Logistique & Livraison → `/reseau/logistique`  
- **Image / carte :** Emplacement prévu pour **carte interactive ou illustration carte** — **ASSET MANQUANT**.  
  - **Comportement spécifié sans asset final :** bloc média ratio 16/9 à gauche (desktop) avec fond `--pa-color-primary` + label « Carte à venir » **uniquement en environnement de preview**, **ou** omettre le média et n’afficher que les 3 cartes jusqu’à livraison asset (préféré pour prod).  
  - **Ne pas** dessiner une fausse carte SVG « Afrique » marketing.  
- **CTA principal :** Voir le réseau → `/reseau`  
- **CTA secondaire :** Contact implantation → `/contact`  
- **Destinations :** `/reseau/*`, `/contact`  
- **Desktop :** média 1fr + liste 1fr **si** asset ; sinon grille 3 cartes  
- **Tablet / Mobile :** stack  

---

### SECTION S9 — Ressources

- **Nom :** Ressources  
- **Objectif :** Exploration contenu ; SEO / nurturing léger  
- **Position :** Après S8  
- **Background :** `--pa-color-bg`  
- **Composant utilisé :** `Section` + `SectionHeader` + `ArticleCard` × **3**  
- **Titre :** **[PROVISOIRE]** `Ressources`  
- **Sous-titre :** **[PROVISOIRE]** Actualités, documentation, guides  
- **Contenu :** exactement 3 cartes structurelles :  
  1. Actualités → `/ressources/actualites`  
  2. Documentation → `/ressources/documentation`  
  3. Guides & Conseils → `/ressources/guides`  
  Titres/excerpts = labels d’architecture + **[PROVISOIRE]** une ligne descriptive générique ; pas d’articles fictifs datés.  
- **Image :** 3 visuels éditoriaux — **MANQUANTS** (cards sans image OK via `ArticleCard`)  
- **CTA principal section :** Centre de ressources → `/ressources`  
- **CTA secondaire :** Aucun  
- **Destinations :** `/ressources/*`  
- **Desktop :** 3 colonnes  
- **Tablet :** 2+1  
- **Mobile :** 1 colonne  

---

### SECTION S10 — CTA final

- **Nom :** CTA conversion  
- **Objectif :** Clôturer le parcours par une action commerciale réelle  
- **Position :** Avant footer  
- **Background :** inverse (`CTASection` tone inverse)  
- **Composant utilisé :** `CTASection`  
- **Titre :** **[PROVISOIRE]** `Parlons de votre prochain projet`  
- **Sous-titre / description :** **[PROVISOIRE]** Devis, flotte, pièces ou maintenance — notre équipe vous répond.  
- **Contenu :** Pas de formulaire sur la homepage  
- **Image :** aucune  
- **CTA principal :** Demande de devis → `/devis`  
- **CTA secondaire :** Nous contacter → `/contact`  
- **Destinations :** `/devis`, `/contact`  
- **Desktop / Tablet / Mobile :** cluster boutons ; empilement mobile  

---

### SECTION S11 — Footer

- **Nom :** Footer  
- **Objectif :** Liens légaux, support, marque, newsletter (architecture)  
- **Position :** Fin de page  
- **Background :** `--pa-color-primary`  
- **Composant utilisé :** `Footer`  
- **Contenu / liens :** voir §14  
- **CTA :** Newsletter submit (backend **non branché** Phase 1 — rester conforme Footer actuel : pas de faux succès)  
- **Desktop :** grille 4 colonnes  
- **Tablet :** 2  
- **Mobile :** 1  

---

## 3. Header (détail)

### 3.1 Éléments et rôles

| Élément | Rôle exact |
|---------|------------|
| **Logo** | Identité + lien `/`. Wordmark PACIFIQUE + AUTO rouge. Fichier officiel manquant → `Logo.astro` interim. |
| **Navigation primaire** | 7 hubs architecture + mega-menu enfants (`navigation.ts`). |
| **Recherche** | Accès outil `/recherche` (page spéciale). Icône only OK. |
| **Demande de devis** | CTA commercial primaire header → `/devis`. |
| **Espace client** | Porte PacifiqueOS → `/client/login` (lien, pas UI OS). |
| **Menu mobile** | Remplace mega + CTA header ≤1100px ; contient hubs + devis + client. |

### 3.2 Strip « VÉHICULES · PIÈCES · SERVICES · PROJETS »

Visible sur le document d’architecture (bandeau haut).  

| Statut | **OPEN DECISION — ne pas implémenter tant que non validé** |
|--------|------------------------------------------------------------|
| Option A | Utility bar au-dessus du header (liens vers `/solutions/vehicules`, `/solutions/pieces-services`, et « SERVICES » → `/solutions` ou maintenance — mapping exact à valider ; « PROJETS » → `/projets`) |
| Option B | Ne pas afficher ; la nav 7 hubs + S2/S3 suffisent |
| Interdit | Inventer le strip « parce que c’est sur le PNG » sans mapping de routes validé |

### 3.3 Teaser / WhatsApp

**OPEN DECISION** (voir §19). Non inclus dans la structure verrouillée §2.

---

## 4. Hero (détail)

| Paramètre | Spec |
|-----------|------|
| Hauteur | Desktop : min 100vh moins perception header ; Tablet/Mobile : auto, padding généreux (`Hero` Phase 1) |
| Largeur | Full-bleed viewport ; contenu dans container (max lecture ~42.5rem dans composant) |
| Alignement | Contenu **gauche** ; image en fond full-bleed |
| Titre | Display Barlow Condensed black uppercase ; accent rouge sur marque « Auto » |
| Sous-titre | Slogan officiel (lead) |
| Corps | 1 paragraphe court B2B **[PROVISOIRE]** |
| Image | IMG-HOME-HERO manquant — critères §15 |
| Overlay / scrim | Gradients navy déjà dans `Hero` (dérivés tokens primary) — pas de gradient « décoratif gratuit » supplémentaire |
| CTA primary | Devis `/devis` (`Button` primary) |
| CTA secondary | Solutions `/solutions` (`Button` inverse-outline) |
| Meta / stats | **Interdit** dans hero tant que chiffres non validés |
| Positionnement message | PACIFIQUE AUTO + solutions B2B + Afrique Centrale (slogan) |
| Anti-pattern | Widgets, cards flottantes, badges promo détachés, look SaaS |

---

## 5. Navigation commerciale (7 hubs) — détail cartes

| Ordre | Label | Destination | CTA carte | Image |
|------:|-------|-------------|-----------|-------|
| 1 | Solutions | `/solutions` | Voir les solutions | Icône requise / interim typo |
| 2 | Industries | `/industries` | Voir les industries | idem |
| 3 | Marques | `/marques` | Voir les marques | idem |
| 4 | Réseau | `/reseau` | Voir le réseau | idem |
| 5 | Projets | `/projets` | Voir les projets | idem |
| 6 | Ressources | `/ressources` | Voir les ressources | idem |
| 7 | À propos | `/a-propos` | Qui sommes-nous | idem |

Description courte par carte : **[PROVISOIRE]** une ligne, ou label seul si copy non validée.

---

## 6. Produits / Solutions — priorité

| Priorité | Titre | Description | Image | CTA | Route |
|--------:|-------|-------------|-------|-----|-------|
| 1 | Véhicules | **[PROVISOIRE]** Solutions véhicules pour usages industriels et logistiques. *Legacy cite SINOTRUK HOHAN — utilisable seulement si validé.* | IMG-001 **candidat** (produit SINOTRUK) **ou** IMG-HOME-VEHICULES manquant | Découvrir | `/solutions/vehicules` |
| 2 | Pièces & Services | **[PROVISOIRE]** Pièces et services pour maintenir la disponibilité des parcs. | **MANQUANT** | Découvrir | `/solutions/pieces-services` |
| 3 | Maintenance | **[PROVISOIRE]** Maintenance et support technique des équipements. | **MANQUANT** | Découvrir | `/solutions/maintenance` |
| 4 | Fleet & Mobility | **[PROVISOIRE]** Accompagnement flotte et mobilité. | **MANQUANT** | Découvrir | `/solutions/fleet-mobility` |
| 5 | Financement | **[PROVISOIRE]** Solutions de financement associées aux équipements. *Alios = OPEN si mentionné.* | **MANQUANT** | Découvrir / Calculateur | `/solutions/financement` (secondaire outil `/financement` possible en micro-lien — OPEN) |

CTA section : `/solutions` + `/devis`.

---

## 7. Industries

| Ordre | Label | Description homepage | Image | CTA | Route |
|------:|-------|----------------------|-------|-----|-------|
| 1 | BTP | **[PROVISOIRE minimal]** ou label seul | **MANQUANT** | Voir | `/industries/btp` |
| 2 | Mines & Carrières | idem | **MANQUANT** | Voir | `/industries/mines` |
| 3 | Transport & Logistique | idem | **MANQUANT** | Voir | `/industries/transport` |
| 4 | Agriculture | idem | **MANQUANT** | Voir | `/industries/agriculture` |
| 5 | Énergie | idem | **MANQUANT** | Voir | `/industries/energie` |

Aucun argumentaire commercial sectoriel inventé.

---

## 8. Marques

| Ordre | Marque | Logo | Soutien image | CTA | Route |
|------:|--------|------|---------------|-----|-------|
| 1 | SINOTRUK | **REQUIS / manquant** | IMG-001 autorisé en carte produit, pas comme logo officiel | Voir | `/marques/sinotruk` |
| 2 | WABCO | **REQUIS / manquant** | — | Voir | `/marques/wabco` |
| 3 | BOSCH | **REQUIS / manquant** | — | Voir | `/marques/bosch` |
| 4 | Autres marques | — | Liste legacy (Mercedes, Volvo, etc.) **uniquement sur page `/marques/autres`**, pas inventée en homepage au-delà du label « Autres » | Voir | `/marques/autres` |

Fallback UI sans logo : `BrandCard` fallback initiales (composant existant) — acceptable interim, pas définitif.

---

## 9. Preuve / crédibilité — inventaire autorisé

| Type de preuve | Utilisable homepage ? | Source | Condition |
|----------------|----------------------|--------|-----------|
| Slogan Afrique Centrale | Oui | Architecture | Verrouillé |
| 7 univers / IA claire | Oui | Architecture | Via S2 |
| Marques nommées architecture | Oui (labels) | Architecture | Sans logos inventés |
| Adresse Ngodi Akwa, Douala | Oui en S6/footer | `site.ts` / legacy | OK |
| Téléphones / email | Footer / contact, pas hero | `site.ts` | OK |
| Multi-capacités (véhicules, pièces, etc.) | Oui qualitatif | Legacy + routes | Sans chiffres |
| Dépôt Yassa / date | **Non** par défaut | Legacy | OPEN |
| « 30+ ans », « 500+ clients », « 8/12 marques » | **Non** | Legacy incohérent | OPEN validation |
| Références FCC · BCC · LBR | **Non** par défaut | Legacy | OPEN + droits |
| Alios Finance | **Non** par défaut | Legacy | OPEN |
| Carte réseau | Emplacement seulement | — | Asset manquant |

---

## 10. Projets / cas clients

| Paramètre | Spec |
|-----------|------|
| Composant | `ProjectCard` |
| Nombre | **3** |
| Ordre | 1 cas client · 2 réalisation · 3 réalisation/cas (ou 3× « à venir » structurel) |
| Titre / description | Contenu réel **requis avant code** ; sinon libellés **[PROVISOIRE]** non publiés en prod |
| Image | 3× **MANQUANT** — ratio ProductCard 16/10 |
| CTA carte | Vers `/projets/cas-clients` ou `/projets/realisations` |
| CTA section | `/projets` |
| Appels d’offres | **Pas** dans cette grille homepage (route `/projets/appels-offres` accessible via hub Projets / mega-menu) |

---

## 11. Réseau

Voir S8.  

**Carte :** spécification d’emplacement + comportement uniquement ; **pas** d’asset final inventé.  
Préférence prod sans média factice : 3 cartes seules jusqu’à livraison `IMG-HOME-MAP`.

---

## 12. Ressources

| # | Carte | Structure ArticleCard | Destination |
|---|-------|----------------------|-------------|
| 1 | Actualités | meta=Actualités · titre label · excerpt **[PROVISOIRE]** | `/ressources/actualites` |
| 2 | Documentation | meta=Documentation · … | `/ressources/documentation` |
| 3 | Guides & Conseils | meta=Guides · … | `/ressources/guides` |

Nombre : **3**. Pas d’articles fictifs.

---

## 13. CTA final

| Champ | Valeur |
|-------|--------|
| Composant | `CTASection` |
| Primary | Demande de devis → `/devis` |
| Secondary | Nous contacter → `/contact` |
| Formulaire | **Aucun** sur homepage |
| WhatsApp | Non inclus ici (OPEN si canal global) |

---

## 14. Footer — liens exacts

Conforme architecture visuelle + `navigation.ts` / `Footer.astro` Phase 1.

### Colonne marque
- Logo → `/`
- Slogan : `Des solutions qui font avancer l'Afrique Centrale`
- Social : LinkedIn, Facebook, YouTube, Instagram — **URLs `null` aujourd’hui** → liens non actifs jusqu’à fourniture (OPEN)

### Liens rapides
| Label | Route |
|-------|-------|
| Solutions | `/solutions` |
| Industries | `/industries` |
| Marques | `/marques` |
| Projets | `/projets` |

### Support
| Label | Route |
|-------|-------|
| Contact | `/contact` |
| FAQ | `/faq` |
| Documentation | `/ressources/documentation` |
| Demande de devis | `/devis` |

### Newsletter
- Placeholder : `Votre email`
- Submit : bouton accent
- Backend : non branché — pas de faux message de succès marketing

### Légal
| Label | Route |
|-------|-------|
| Mentions légales | `/mentions-legales` |
| Politique de confidentialité | `/confidentialite` |
| Cookies | `/cookies` |

### Copyright
`© {year} Pacifique Auto SARL. Tous droits réservés.` (`site.legalName`)

---

## 15. IMAGE MAP — Homepage

| ID | Emplacement | Asset existant ? | Orientation / ratio | Traitement | Crop desktop | Crop mobile | Notes |
|----|-------------|------------------|---------------------|------------|--------------|-------------|-------|
| IMG-HOME-HERO | S1 fond | **NON — requis** | Landscape de préférence (camion/flotte/contexte AF) | Cover + scrim navy | Focal sujet gauche-tiers ou centre selon compo | Focal centre / haut sujet | **Ne pas** défaut = IMG-001 |
| IMG-001 | S3 Véhicules (option) / S5 SINOTRUK soutien | **OUI** `hero-sinotruk-hohan.jpg` | Portrait 1500×2000 | Cover dans card 16/10 | Crop centre cabine | Crop serré cabine | Uniquement contexte SINOTRUK/véhicules |
| IMG-HOME-PIECES | S3 Pièces | **NON** | Landscape / 16:10 | Cover | — | — | Requis |
| IMG-HOME-MAINT | S3 Maintenance | **NON** | 16:10 | Cover | — | — | Requis |
| IMG-HOME-FLEET | S3 Fleet | **NON** | 16:10 | Cover | — | — | Requis |
| IMG-HOME-FINANCE | S3 Financement | **NON** | 16:10 ou abstrait UI photo | Cover | — | — | Requis ou carte sans image |
| IMG-HOME-IND-* ×5 | S4 | **NON** | 4:3 (IndustryCard) | Cover + overlay | — | — | Requis |
| IMG-LOGO-SINOTRUK etc. | S5 | **NON** | Logo SVG/PNG | Contain | — | — | Requis |
| IMG-HOME-PROOF | S6 optionnel | **NON** | Landscape | Cover léger opacity | — | — | Optionnel |
| IMG-HOME-PROJECT-1..3 | S7 | **NON** | 16:10 | Cover | — | — | Requis avant pub |
| IMG-HOME-MAP | S8 | **NON** | 16:9 | Illustration/carte réelle | — | — | Pas de faux SVG |
| IMG-HOME-RES-1..3 | S9 | **NON** | 16:10 | Cover optionnel | — | — | Cards text-only OK |
| IMG-002 | — | Référence IA only | — | **Ne pas** utiliser en contenu | — | — | |
| Logo wordmark | Header/Footer | **NON** | — | Remplacer `Logo` interim | — | — | Requis |

**Règle :** IMG-001 n’est **pas** un filler universel.

---

## 16. Responsive — synthèse par viewport

### ≥1101px (Desktop)
- Header mega + CTA devis/client.
- Hero full-bleed / tall.
- S2 : auto-fit hubs.
- S3 : 3–5 cards.
- S4 : jusqu’à 5 cols.
- S5 : 4 cols.
- S6 : 2 cols.
- S7–S9 : 3 cols.
- S8 : média+liste si map.
- S10 : CTA horizontal.
- Footer 4 cols.

### 768–1100px (Tablet)
- Burger + drawer.
- Hero hauteur auto.
- Grilles 2 cols (S2–S5, S7–S9).
- S6 piliers 2×2.
- Footer 2 cols.
- CTA final wrap.

### ≤768px (Mobile)
- Drawer full.
- Hero : pas d’accent diagonal ; CTA stack ; pas de stats.
- Toutes grilles 1 col.
- Images full width ratios conservés.
- Footer 1 col, légal wrap.
- Tap targets boutons pleine largeur recommandés sur CTA finaux.

### Transformations (rappel)
| Élément | Desktop | Mobile |
|---------|---------|--------|
| Nav | Mega | Drawer |
| Hubs S2 | Multi-col | Stack |
| Cards | Hover lift OK | Moins d’ombre ; tap |
| Images | Cover | Cover full width |
| CTA | Inline cluster | Stack |

---

## 17. Design rules (homepage)

- Respect strict Design System Phase 1 / tokens.
- Navy / blanc / off-white ; rouge = accent (CTA, AUTO, filets).
- Barlow Condensed + Barlow.
- Identité industrielle B2B ; beaucoup d’air (section padding tokens).
- **Interdit :** look SaaS PacifiqueOS, purple, gradients décoratifs hors scrims Hero documentés, animations excessives, composants non Phase 1 sans gate, KPI non validés, images hors IMAGE MAP.

---

## 18. Conversion — flux par section

| Section | Objectif utilisateur | Information | Action |
|---------|----------------------|-------------|--------|
| S0 Header | Se diriger / convertir vite | IA + marque | Devis / Client / Search / Hubs |
| S1 Hero | Comprendre qui / quoi | Marque + slogan + B2B AF | Devis / Solutions |
| S2 Hubs | Explorer le site | 7 familles | Aller hub |
| S3 Solutions | Comprendre l’offre | 5 solutions | Feuille solution / Devis |
| S4 Industries | Se reconnaître | 5 secteurs | Feuille industrie |
| S5 Marques | Évaluer crédibilité | Marques prioritaires | Fiche marque |
| S6 Preuve | Faire confiance | Faits qualitatifs | À propos / Contact |
| S7 Projets | Voir la preuve terrain | 3 projets | Hub / cas |
| S8 Réseau | Comprendre couverture | 3 piliers réseau | Hub réseau |
| S9 Ressources | Apprendre | 3 types contenus | Hub ressources |
| S10 CTA | Décider | Message conversion | Devis / Contact |
| S11 Footer | Trouver lien secondaire | Support / légal | Routes listées |

Parcours cible : **Découvrir → Comprendre → Explorer → Faire confiance → Demander / contacter.**

---

## 19. OPEN DECISIONS

À valider **avant** Phase 2B (code). Ne pas trancher par invention.

1. **Palette exacte** : conserver lock legacy (`#09183A` / `#D91A2A`) vs réaligner sur sampling architecture (`~#1E2B3C` / `~#E23A37`).
2. **Logo wordmark** officiel (fichier).
3. **Strip header** VÉHICULES · PIÈCES · SERVICES · PROJETS : Option A/B (§3.2) + mapping routes « SERVICES ».
4. **Teaser** dépôt Yassa : include / exclude.
5. **WhatsApp float** : include / exclude / footer only.
6. **Chiffres** legacy (30+, 500+, marques 8 vs 12) : valider ou bannir définitivement de la homepage.
7. **Copy exacte** hero titre + paragraphe (au-delà du slogan).
8. **Fond S2 / S5** (blanc vs subtle vs navy).
9. **Mention Alios Finance** sur homepage.
10. **Références clients** FCC/BCC/LBR sur homepage.
11. **BOSCH** : confirmation partenariat / niveau de mise en avant.
12. **Positionnement** Cameroun opérationnel vs messaging Afrique Centrale (cohabitation copy).
13. **URLs sociales** réelles.
14. **URL PacifiqueOS** réelle pour `/client/login`.
15. **Pack images** liste §15 (hero dédié prioritaire).
16. **Icônes hubs** : pack à fournir ou interim typo accepté en prod.
17. **Lien micro** Financement → `/financement` (outil) depuis S3.
18. **Contenu réel** des 3 ProjectCard avant mise en prod.
19. **Carte réseau** : livrer asset ou publier S8 sans média.
20. **Hardcodes CSS** Phase 1 (rgba hors tokens) : corriger avant ou pendant 2B ? (risque dérive — préférable avant).

---

## 20. Critères de validation de cette spec

Cette `HOMEPAGE_SPEC.md` est **complète pour review** si :

- [x] Aucun bloc structurel majeur sans objectif / position / CTA / destination  
- [x] Ordre des sections justifié  
- [x] Header conforme IA 7 hubs + actions  
- [x] Strip / teaser / WA traités en OPEN DECISIONS  
- [x] Hero défini sans dashboard SaaS  
- [x] 7 hubs + 5 solutions + 5 industries + 4 marques spécifiés  
- [x] Preuve sans chiffres inventés  
- [x] Projets / ressources : nombre et structure définis  
- [x] Réseau : comportement carte sans fausse carte  
- [x] CTA final vers routes réelles, sans faux form  
- [x] Footer liens exacts  
- [x] IMAGE MAP homepage avec existant vs manquant  
- [x] Responsive 3 breakpoints  
- [x] Design rules Phase 1  
- [x] Flux conversion  
- [x] OPEN DECISIONS séparées  

**Bloquants avant code (Phase 2B) :** décisions 1–3, 6–7, 15 (au minimum hero + logo), validation copy **[PROVISOIRE]**.

---

## 21. Implémentation — hors scope Phase 2A

- Ne pas modifier `src/pages/index.astro` marketing dans cette phase.  
- Ne pas créer de nouveaux composants homepage-specific sans mise à jour DESIGN_SYSTEM.  
- Au démarrage 2B : remplacer la page fondations ; conserver `noindex` retiré seulement à la mise en prod marketing.

---

*Fin HOMEPAGE_SPEC — Phase 2A. STOP.*
