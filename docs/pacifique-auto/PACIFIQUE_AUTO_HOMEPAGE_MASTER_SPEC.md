# PACIFIQUE AUTO — HOMEPAGE MASTER SPEC

**Statut :** SOURCE DE VÉRITÉ — exécution future de `/`  
**Phase :** 2A verrouillée (documentation uniquement — **pas** Phase 2B)  
**Priorité :** Ce document prime sur `HOMEPAGE_SPEC.md` en cas de contradiction.  
**Code :** aucun. Ce fichier ne déclenche pas d’implémentation.

Documents liés : `DESIGN_SYSTEM.md` · `ROUTE_MAP.md` · `IMAGE_MAP.md` · `MASTER_SPEC.md` · `src/data/navigation.ts` · `src/data/routes.ts` · `src/data/site.ts`

---

## 0. Inventaire repository (obligatoire — réalisé)

Scan effectué le 2026-09-08 sur l’ensemble du dépôt (hors `node_modules`, `.git`, `dist`).

### 0.1 Fichiers visuels réellement présents

| Fichier | Nature | Verdict homepage |
|---------|--------|------------------|
| `public/assets/images/hero-sinotruk-hohan.jpg` | Photo SINOTRUK HOHAN 8×4, portrait 1500×2000 | **IMG-001** — utilisable uniquement véhicules / SINOTRUK / contexte associé. **Pas** filler hero universel. |
| `public/assets/reference/architecture-visuelle.png` | Sitemap / architecture (1223×1286) | Référence IA uniquement. **Interdit** en contenu page. |
| `legacy/1BFC44D9-….png` | Doublon architecture | Idem, non prod. |
| `public/favicon.svg` + `public/favicon.ico` | **Favicon Astro par défaut** (logo Astro) | **N’est pas** le logo Pacifique Auto. |
| `legacy/styles.css` / `index.html` / `index2.html` data-URI | Même JPEG que IMG-001 | Doublon — ne pas republier en base64. |

### 0.2 Absents après scan

| Recherche | Résultat |
|-----------|----------|
| Logo officiel Pacifique Auto (SVG/PNG/WebP/wordmark) | **Aucun fichier.** Workaround code : `Logo.astro` (pastille « PA » + texte). |
| Logos SINOTRUK / WABCO / BOSCH / autres | **Aucun fichier.** |
| Pack d’icônes cohérent | **Aucun.** `Icon.astro` = wrapper de slot vide. SVG inline header (loupe, burger) uniquement. |
| Photos pièces, atelier, maintenance, flotte, chantiers, BTP, mines, agriculture, énergie, projets, personnes, infrastructures | **Aucune** hors IMG-001. |
| Assets Yassa (photo dépôt, carte) | **Aucun** (texte legacy seulement). |
| Assets Alios | **Aucun** (texte legacy seulement). |
| Assets Bosch | **Aucun** (label architecture / routes seulement). |
| Images projets / études de cas | **Aucune.** |
| URLs sociales | `site.social.*` = `null` ; legacy Facebook/LinkedIn = `href="#"` |
| URL PacifiqueOS | `site.pacifiqueOs.externalUrl` = `null` ; chemin interne `/client/login` |

### 0.3 Données réelles confirmées dans le repository

| Donnée | Source | Valeur |
|--------|--------|--------|
| WhatsApp | `src/data/site.ts`, legacy `wa.me` | `237696651116` |
| Téléphones | `site.ts` / legacy | `696 651 116` · `691 404 230` · `670 30 38 65` |
| Email | `site.ts` / legacy | `pacifiqueauto7@gmail.com` |
| Adresse | `site.ts` / legacy | Ngodi Akwa, Douala, Cameroun |
| Slogan | architecture + `site.ts` | Des solutions qui font avancer l'Afrique Centrale |
| Route calculateur | `ROUTE_MAP.md` / `routes.ts` | `/financement` (statut `planned`, page non construite) |
| Route pièces | `navigation.ts` / `ROUTE_MAP.md` | `/solutions/pieces-services` |

---

## 1. Positionnement — VERROUILLÉ

Pacifique Auto = **infrastructure industrielle et commerciale B2B**.

Pas un simple concessionnaire.  
**Pas** PacifiqueOS (SaaS opérationnel privé).

Perception :

1. Immédiat : « Ils ont une infrastructure. »
2. Après exploration : « Ils peuvent probablement gérer une partie importante de notre opération. »

La homepage communique :

- capacité industrielle  
- véhicules · pièces · maintenance · flotte/mobilité · financement  
- projets · réseau · accompagnement B2B  
- ancrage **Cameroun** (opérationnel)  
- ambition **Afrique Centrale** (positionnement)

Site public = corporate / commercial. PacifiqueOS = infrastructure opérationnelle privée.

---

## 2. Palette — VERROUILLÉE

Conserver **strictement** les tokens Phase 1.  
**Ne pas** sampler `architecture-visuelle.png`.

| Rôle | Valeur |
|------|--------|
| Primary Navy | `#09183A` |
| Primary Mid | `#0D2055` |
| Red | `#D91A2A` |
| Background | `#FFFFFF` |
| Subtle | `#F4F6FB` |

Rouge **stratégique et limité** : CTA · accent AUTO · filets · éléments importants.  
Pas de rouge dominant.

Typo : Barlow Condensed (display) + Barlow (body) — Design System Phase 1.

---

## 3. Logo — VERROUILLÉ

- **Production :** logo officiel Pacifique Auto.  
- **Scan :** aucun fichier logo officiel dans le repo.  
- **Développement :** `Logo.astro` (workaround temporaire) uniquement.  
- **Interdit :** inventer un logo ; utiliser le favicon Astro comme marque.

À livrer avant prod : SVG/PNG wordmark PACIFIQUE + AUTO rouge.

---

## 4. Ordre final homepage — VERROUILLÉ

```
S0  Utility strip + Header
S1  Hero
S2  7 univers
S3  Solutions
S4  Industries
S5  Marques
S6  Pourquoi Pacifique Auto
S7  Projets
S8  Réseau
S9  Ressources
S10 CTA final
S11 Footer
```

**Exclus de la homepage :** teaser Yassa · bouton WhatsApp flottant B2C · KPI chiffrés · Alios · références FCC/BCC/LBR · carte Afrique inventée · articles fictifs · formulaire homepage.

---

## 5. Parcours de conversion — VERROUILLÉ

```
DÉCOUVRIR → COMPRENDRE → EXPLORER → FAIRE CONFIANCE → DEMANDER / CONTACTER
```

| Rôle | Action | Route |
|------|--------|-------|
| CTA principal global | Demander un devis | `/devis` |
| CTA secondaire | Nous contacter | `/contact` |
| CTA OS | Espace client | `/client/login` (pas d’UI OS) |
| CTA rapide | WhatsApp **discret** | `https://wa.me/237696651116` (numéro repo uniquement) |

---

## 6. S0 — Utility strip + Header

### 6.1 Utility strip (très fine, au-dessus du header)

**Ce n’est pas une deuxième navbar.**

| Label | Route réelle (repo) |
|-------|---------------------|
| VÉHICULES | `/solutions/vehicules` |
| PIÈCES & SERVICES | `/solutions/pieces-services` |
| PROJETS | `/projets` |

- **Ne pas** utiliser le mot « SERVICES » seul.  
- Routes confirmées dans `navigation.ts` / `ROUTE_MAP.md`.  
- Style : fine, navy, uppercase Barlow Condensed, séparateurs `·`, pas de CTA rouge dans la strip.

### 6.2 Header (7 hubs)

| Item | Route |
|------|-------|
| Solutions | `/solutions` |
| Industries | `/industries` |
| Marques | `/marques` |
| Réseau | `/reseau` |
| Projets | `/projets` |
| Ressources | `/ressources` |
| À propos | `/a-propos` |

Mega-menu enfants = `src/data/navigation.ts` (inchangé).

### 6.3 Actions permanentes header

| Action | Route |
|--------|-------|
| Recherche | `/recherche` |
| Demande de devis | `/devis` |
| Espace client | `/client/login` |

Desktop ≥1101 : mega + actions visibles.  
≤1100 : drawer (hubs + devis + client).

---

## 7. S1 — Hero — VERROUILLÉ

| Élément | Contenu |
|---------|---------|
| Eyebrow | `PACIFIQUE AUTO · SOLUTIONS INDUSTRIELLES` |
| H1 | `DES SOLUTIONS QUI FONT AVANCER L’AFRIQUE CENTRALE.` |
| Paragraphe (MASTER) | « Véhicules, pièces, maintenance, flotte et financement pour accompagner les opérations qui font avancer les territoires. » |
| CTA principal | Demander un devis → `/devis` |
| CTA secondaire | Découvrir nos solutions → `/solutions` |

**Anti-répétition :** le slogan officiel est porté par le **H1**. Ne pas ajouter un lead qui le recopie. Le paragraphe B2B ci-dessus est le seul texte d’appui.

**Ne pas** réinjecter le long paragraphe legacy Cameroun / RAZEL.

**Forme :**

- full bleed  
- image réelle (voir §16 — **IMG-HOME-HERO manquant** ; **ne pas** mettre IMG-001 par défaut)  
- scrim navy (composant `Hero` Phase 1)  
- contenu aligné gauche  
- aucun dashboard, card flottante, KPI, widget SaaS, animation excessive  

Hauteur : desktop min ~100vh (moins header + strip) ; tablet/mobile : auto, CTA empilés.

**Ancrage géographique dans le hero :** Afrique Centrale uniquement.

---

## 8. S2 — 7 univers — VERROUILLÉ

**Fond : `#FFFFFF` (blanc).**

Présenter explicitement :

1. Solutions → `/solutions`  
2. Industries → `/industries`  
3. Marques → `/marques`  
4. Réseau → `/reseau`  
5. Projets → `/projets`  
6. Ressources → `/ressources`  
7. À propos → `/a-propos`  

Composants : `Section` + `SectionHeader` + `Card` / `FeatureCard` (Phase 1). Pas de nouveau composant sans gate.

**Icônes :** système cohérent obligatoire.  
Scan : aucun set. `Icon.astro` = wrapper.  
**Interdit :** initiales typographiques comme solution finale ; illustrations fantaisistes.  
**Dev :** documenter le besoin (pack 7 pictos industriels linéaires, stroke navy, pas de couleur SaaS). Placeholder de développement = slot icon vide / filet — **pas** des dessins inventés en prod.

Titre section (MASTER) : `Explorer nos univers`  
Intro courte (MASTER) : Accès direct aux pôles du site public.

Desktop : auto-fit. Tablet : 2 cols. Mobile : 1 col.

---

## 9. S3 — Solutions — VERROUILLÉ

Fond : `#F4F6FB`.

| # | Titre | Description MASTER (courte) | Image | CTA | Route |
|---|-------|-----------------------------|-------|-----|-------|
| 1 | Véhicules | Solutions véhicules pour les opérations industrielles et logistiques. | IMG-001 **si** carte véhicules/SINOTRUK | Découvrir | `/solutions/vehicules` |
| 2 | Pièces & Services | Pièces et services pour la disponibilité des parcs. | **Manquant** | Découvrir | `/solutions/pieces-services` |
| 3 | Maintenance | Maintenance et support technique. | **Manquant** | Découvrir | `/solutions/maintenance` |
| 4 | Fleet & Mobility | Accompagnement flotte et mobilité. | **Manquant** | Découvrir | `/solutions/fleet-mobility` |
| 5 | Financement | Solutions de financement associées aux équipements. | **Manquant** | Découvrir | `/solutions/financement` |

CTA section : Toutes les solutions → `/solutions`.

**Accès secondaire financement (route réelle dans le repo) :**

> Calculer mon financement → `/financement`

Autorisé car `routes.ts` / `ROUTE_MAP.md` enregistrent `/financement` (calculateur, `planned`).  
Ne pas inventer le calculateur sur la homepage — lien seulement.

**Alios :** ne pas afficher.

Composants : `FeatureCard` ; `VehicleCard` uniquement pour Véhicules si IMG-001.

---

## 10. S4 — Industries — VERROUILLÉ

Fond : `#FFFFFF`.

| Label | Description | Image | Route |
|-------|-------------|-------|-------|
| BTP | Solutions pour le BTP. | **Manquant** | `/industries/btp` |
| Mines & Carrières | Solutions pour les mines et carrières. | **Manquant** | `/industries/mines` |
| Transport & Logistique | Solutions pour le transport et la logistique. | **Manquant** | `/industries/transport` |
| Agriculture | Solutions pour l’agriculture. | **Manquant** | `/industries/agriculture` |
| Énergie | Solutions pour l’énergie. | **Manquant** | `/industries/energie` |

Pas d’argumentaire sectoriel inventé au-delà de ces lignes.  
Composant : `IndustryCard`. CTA section : `/industries`.

---

## 11. S5 — Marques — VERROUILLÉ

Ordre : **SINOTRUK · WABCO · BOSCH · Autres marques**

| Marque | Affichage | Interdit | Image | Route |
|--------|-----------|----------|-------|-------|
| SINOTRUK | Label catalogue | « partenaire officiel » sans preuve | Logo **manquant** ; IMG-001 soutien photo OK | `/marques/sinotruk` |
| WABCO | Label catalogue | idem | Logo **manquant** | `/marques/wabco` |
| BOSCH | Label catalogue (présent architecture) | **Interdit** « partenaire officiel BOSCH » — aucune preuve repo | Logo **manquant** | `/marques/bosch` |
| Autres marques | Label + lien | Ne pas lister Mercedes/Volvo/RAZEL sur la homepage | — | `/marques/autres` |

`BrandCard` fallback initiales = **dev only**, pas solution prod.  
Ne jamais fabriquer de logo.

CTA section : `/marques`.

Legacy liste (Mercedes-Benz, Renault Trucks, Volvo, DAF, Fruehauf, Mahle, BPW, Ren-Par, RAZEL, CFAO Mobility) : **page `/marques/autres` uniquement**, pas homepage.

---

## 12. S6 — Pourquoi Pacifique Auto — VERROUILLÉ

Titre : **Pourquoi Pacifique Auto**

Objectif : confiance **sans KPI**.

Piliers (qualitatifs, sources repo — sans chiffres) :

1. **Capacité industrielle multi-métiers** — véhicules, pièces, maintenance, flotte, financement.  
2. **Ancrage opérationnel Cameroun** — Ngodi Akwa, Douala (données `site.ts`). Ne pas promouvoir Yassa ici.  
3. **Orientation Afrique Centrale** — territoire de positionnement (slogan / H1). Ne pas prétendre à une couverture régionale chiffrée.  
4. **Marques au catalogue** — labels SINOTRUK, WABCO, BOSCH, autres — **sans** claims de partenariat.  
5. **Accompagnement B2B** — de l’équipement au réseau et aux projets.

**Bannis homepage :** 30+ ans · 500+ clients · 8 marques · 12 marques · tout chiffre non validé.

Fond : `--pa-color-primary-mid` / navy inverse (tokens).  
CTA : À propos → `/a-propos` · Contact → `/contact`.  
Pas de composant `Stat`.

---

## 13. S7 — Projets — VERROUILLÉ

Section **conservée** dans l’architecture.

| Règle | Application |
|-------|-------------|
| Dev | Placeholders structurels autorisés |
| Prod | Uniquement projets réels validés éditorialement **et** juridiquement |
| Inventer une étude de cas | **Interdit** |
| FCC · BCC · LBR | **Interdit** sur homepage tant que non validés |
| Nombre | 1 ou 2 vrais > 3 faux. Si zéro projet validé : section structurelle (titre + CTA `/projets`) **sans** fausses cards |

Composant : `ProjectCard` **seulement** avec contenu réel.  
CTA section : Tous les projets → `/projets`.  
Appels d’offres : pas dans cette grille (mega-menu / hub `/projets/appels-offres`).

Scan : **aucune** image ni fiche projet dans le repo.

---

## 14. S8 — Réseau — VERROUILLÉ

**Pas de carte de l’Afrique. Pas de carte inventée.**

Afficher uniquement trois accès :

| Label | Route |
|-------|-------|
| Nos implantations | `/reseau/implantations` |
| Global Parts Network | `/reseau/global-parts` |
| Logistique & Livraison | `/reseau/logistique` |

CTA : Voir le réseau → `/reseau`.  
Yassa : pas sur homepage ; réutilisable plus tard sur Réseau / Projets / page dédiée (données legacy **conservées** dans le repo, non promues ici).

---

## 15. S9 — Ressources — VERROUILLÉ

Exactement 3 cartes structurelles — **pas d’articles fictifs datés** :

| Carte | Route |
|-------|-------|
| Actualités | `/ressources/actualites` |
| Documentation | `/ressources/documentation` |
| Guides & Conseils | `/ressources/guides` |

`ArticleCard` avec labels uniquement. CTA : `/ressources`.

---

## 16. S10 — CTA final — VERROUILLÉ

| Champ | Valeur |
|-------|--------|
| Titre | `PARLONS DE VOTRE PROCHAIN PROJET` |
| Description | Devis, flotte, pièces ou maintenance — notre équipe vous répond. |
| CTA principal | Demander un devis → `/devis` |
| CTA secondaire | Nous contacter → `/contact` |
| Formulaire | **Aucun** |
| Composant | `CTASection` inverse |

WhatsApp : **pas** dans ce bandeau comme bouton dominant. Canal discret ailleurs (§17).

---

## 17. WhatsApp — VERROUILLÉ

- Canal commercial **rapide** B2B.  
- **Pas** de gros bouton flottant B2C.  
- CTA principal reste **Demander un devis**.  
- Emplacements autorisés : actions de contact (`/contact`) · footer · emplacement discret (ex. lien texte « WhatsApp » dans footer Support, pas un disque vert pulsé).  
- Numéro : **uniquement** `237696651116` (`site.ts` / legacy). Ne pas inventer.

---

## 18. S11 — Footer — VERROUILLÉ

### Marque
- Logo (officiel en prod / workaround dev) → `/`  
- Slogan officiel  
- Social : LinkedIn · Facebook · YouTube · Instagram — **pas de href** tant que `site.social` est `null`. Affichage labels sans faux liens, ou omission des ancres.

### Liens rapides (routes repo)
Solutions `/solutions` · Industries `/industries` · Marques `/marques` · Projets `/projets`

### Support
Contact `/contact` · FAQ `/faq` · Documentation `/ressources/documentation` · Demande de devis `/devis`  
+ lien WhatsApp discret `https://wa.me/237696651116` (donnée réelle)

### Newsletter
Champ « Votre email ». **Pas** de faux succès si backend absent.

### Légal
Mentions `/mentions-legales` · Confidentialité `/confidentialite` · Cookies `/cookies`

### Copyright
© {year} Pacifique Auto SARL. Tous droits réservés.

### Contact footer (ancrage Cameroun)
Ngodi Akwa, Douala, Cameroun · téléphones et email `site.ts`.

---

## 19. Cameroun vs Afrique Centrale — VERROUILLÉ

| Zone | Message |
|------|---------|
| Hero | Afrique Centrale |
| Footer / contact | Douala / Cameroun (données réelles) |
| À propos | Histoire et implantation réelle (hors homepage détaillée) |
| Couverture régionale précise | **Ne pas** prétendre sans données |

---

## 20. Teaser Yassa — VERROUILLÉ

**Ne pas** afficher de teaser promotionnel Yassa sur la homepage.  
Ne pas supprimer les infos du repository.  
Réemploi futur : Réseau, Projets, page dédiée.

---

## 21. Alios — VERROUILLÉ

**Ne pas** afficher Alios Finance sur la homepage.  
La catégorie **Financement** reste autorisée (S3).

---

## 22. IMAGE MAP homepage (après scan)

Voir aussi `IMAGE_MAP.md` (mis à jour).

| ID | Contexte | Classification | Compatible | Priorité | Ratio | Crop D / M | Statut |
|----|----------|----------------|------------|----------|-------|------------|--------|
| IMG-001 | Camion SINOTRUK HOHAN 8×4 | véhicules / camions / marque SINOTRUK | S3 Véhicules, `/marques/sinotruk`, `/solutions/vehicules` | Haute dans ces contextes **uniquement** | Source portrait ; cards 16:10 | D : cabine+benne centre ; M : cabine serrée | **EXISTANT** |
| IMG-002 | Architecture visuelle | document IA | aucune page contenu | — | — | — | Référence only |
| IMG-FAVICON-ASTRO | Logo Astro | technique défaut | **interdit** marque | — | — | — | Remplacer |
| IMG-HOME-HERO | Hero infrastructure B2B | flotte / infrastructure / industriel | S1 | **Critique** | Landscape | Sujet gauche-tiers / centre mobile | **MANQUANT** (IMG-001 non substitut par défaut) |
| IMG-HOME-PIECES | Pièces | pièces | S3 | Haute | 16:10 | Cover | **MANQUANT** |
| IMG-HOME-MAINT | Atelier | atelier / maintenance | S3 | Haute | 16:10 | Cover | **MANQUANT** |
| IMG-HOME-FLEET | Flotte | flotte | S3 | Haute | 16:10 | Cover | **MANQUANT** |
| IMG-HOME-FINANCE | Financement | — | S3 | Basse (carte texte OK) | 16:10 | — | **MANQUANT** |
| IMG-HOME-IND-BTP…ENERGIE ×5 | Secteurs | BTP / mines / transport / agriculture / énergie | S4 | Haute | 4:3 | Cover | **MANQUANT** |
| IMG-LOGO-* marques | Identité constructeurs | logos | S5 | Haute prod | contain | — | **MANQUANT** |
| IMG-LOGO-PA | Wordmark Pacifique Auto | logo | Header/Footer | Critique prod | — | — | **MANQUANT** |
| IMG-ICON-HUBS ×7 | Pictos univers | icônes | S2 | Haute | 24–32px | — | **MANQUANT** (set cohérent) |
| IMG-HOME-PROJECT-* | Chantiers réels | projets | S7 | Si contenu validé | 16:10 | Cover | **MANQUANT** + contenu |
| IMG-HOME-MAP | Géo | — | S8 | Non pour v1 homepage | — | — | **Ne pas créer** |
| IMG-YASSA / IMG-ALIOS / IMG-BOSCH-LOGO | — | — | hors homepage v1 | — | — | — | **MANQUANT** ; Yassa/Alios hors homepage |

**Règle :** IMG-001 n’est **jamais** un filler universel.

Si une section n’a pas d’image pertinente : carte **sans photo** (typographie + filet) plutôt qu’une image hors contexte.

---

## 23. Responsive — VERROUILLÉ

### Desktop ≥1101px
Mega menu · hero fort · grilles multi-colonnes · CTA header visibles · strip visible.

### Tablet 768–1100px
Drawer · grilles **2 colonnes** principalement · strip compacte ou wrap contrôlé · CTA header dans drawer.

### Mobile ≤768px
Drawer · stack 1 col · CTA principaux pleine largeur si nécessaire · images cover ratios conservés · strip scroll horizontal **discret** ou 3 liens compactés — **sans** seconde navbar.  
Hiérarchie commerciale conservée : Comprendre → Explorer → Faire confiance → Agir.

---

## 24. Design — VERROUILLÉ

Respect strict Phase 1.

Style : industriel · corporate · premium · technique · africain contemporain · B2B.

**Interdit :** purple · look SaaS · dashboard · glassmorphism excessif · gradients décoratifs gratuits · animations excessives · cartes flottantes inutiles · chiffres inventés · faux témoignages · faux logos · faux partenaires · fausses études de cas.

Scrim navy du `Hero` Phase 1 = autorisé (overlay fonctionnel, pas décor gratuit).

---

## 25. Composants Phase 1 à assembler (aucun nouveau requis pour v1)

`Header` · `MegaMenu` · `MobileNav` · `Footer` · `Logo` · `Button` · `Hero` · `Section` · `SectionHeader` · `Container` · `Card` · `FeatureCard` · `VehicleCard` · `BrandCard` · `IndustryCard` · `ProjectCard` · `ArticleCard` · `CTASection` · `Icon` (wrapper)

**À ajouter plus tard (hors Phase 2A code) :** utility strip (chrome) · pack icônes 7 hubs · wordmark fichier.

Ne pas créer ces éléments dans cette phase documentation.

---

## 26. Routes homepage — table d’exécution

Toutes listées existent dans `ROUTE_MAP.md` / `routes.ts` (pages métier encore `planned`).

`/devis` · `/solutions` · `/solutions/vehicules` · `/solutions/pieces-services` · `/solutions/maintenance` · `/solutions/fleet-mobility` · `/solutions/financement` · `/financement` · `/industries` (+ 5 feuilles) · `/marques` (+ 4) · `/reseau` (+ 3) · `/projets` · `/ressources` (+ 3) · `/a-propos` · `/contact` · `/recherche` · `/client/login` · `/faq` · légales.

Aucune URL inventée.

---

## 27. Informations encore impossibles à confirmer

| Sujet | Statut |
|-------|--------|
| Fichier logo officiel | Absent du repo — à fournir |
| URL réelle PacifiqueOS | `null` — `/client/login` reste porte interne jusqu’à URL externe |
| URLs LinkedIn / Facebook / YouTube / Instagram | `null` / `#` legacy |
| Preuve juridique partenariat BOSCH / SINOTRUK / WABCO | Labels architecture + texte legacy SINOTRUK/WABCO ; **pas** de preuve « officiel » |
| Projets réels publiables | Aucun dossier contenu |
| Image hero infrastructure | Absente ; IMG-001 non équivalent |
| Couverture géographique hors Douala | Non documentée de façon fiable |

---

## 28. Contradictions repository (constat, non « corrigées » ici)

1. **HOMEPAGE_SPEC.md** (analyse) vs **ce MASTER** : ce fichier prime.  
2. **BOSCH** dans architecture / routes ; **absent** du catalogue texte legacy `marques.html`. MASTER : afficher le **label** sans claim partenariat.  
3. **Favicon Astro** vs identité Pacifique Auto.  
4. **Chiffres legacy** vs ban MASTER.  
5. **`/financement`** (outil) vs `/solutions/financement` (contenu) — les deux routes existent ; homepage : contenu S3 + lien secondaire outil.  
6. **Slogan en H1** : ne pas le doubler en lead (décision d’exécution anti-répétition du brief produit).

---

## 29. Gate avant Phase 2B (implémentation)

Phase 2B **n’est pas lancée**.

Minimum recommandé avant code homepage :

- [ ] Accusé réception de ce MASTER  
- [ ] Pack logo officiel **ou** acceptation explicite du workaround `Logo.astro` en recette  
- [ ] Pack icônes 7 univers **ou** acceptation cartes sans picto fantaisiste  
- [ ] Décision image hero (nouvelle photo vs hero navy typographique sans filler IMG-001)  
- [ ] Liste projets réels 0 / 1 / 2 pour S7  

---

*Fin PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC. Documentation only. STOP Phase 2B.*
