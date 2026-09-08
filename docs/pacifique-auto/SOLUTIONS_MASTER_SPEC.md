# PACIFIQUE AUTO — SOLUTIONS MASTER SPEC

**Statut :** SOURCE DE VÉRITÉ — hub `/solutions` et pages enfants.  
**Phase :** 3A — spécification uniquement. **Arbitrage final VERROUILLÉ.**  
**Pas de Phase 3B. Aucun code. Aucune page. Aucun composant.**  
**Homepage validée :** Phase 2B `/` = continuité visuelle.  
**Priorité :** ce document pour Solutions ; `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` pour `/` ; `MASTER_SPEC.md` + `DESIGN_SYSTEM.md` + `tokens.css` pour l’identité.

Documents liés : `MASTER_SPEC.md` · `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` · `ROUTE_MAP.md` · `IMAGE_MAP.md` · `PAGE_DEPENDENCY_MAP.md` · `DESIGN_SYSTEM.md` · `src/data/routes.ts` · `src/data/navigation.ts` · `src/data/home.ts` · `src/data/site.ts`

Légende :

| Marqueur | Signification |
|----------|----------------|
| **[CONFIRMÉ]** | Repository, IA, homepage MASTER, ou arbitrage 3A. |
| **[PROVISOIRE]** | Copy / assemblage d’exécution, dérivé du confirmé. |
| **[OPEN]** | Impossible à résoudre avec le repository. Ne pas inventer. |
| **[VERROUILLÉ]** | Décision d’arbitrage 3A. |

---

## 0. Audit repository (constat — inchangé)

Scan 2026-09-08, rescan arbitrage (hors `node_modules`, `.git`, `dist`). Aucun asset visuel nouveau.

### 0.1 Routes **[CONFIRMÉ]**

| Route | Type | Rôle | Page Astro |
|-------|------|------|------------|
| `/solutions` | hub | Centre de décision commerciale | **Absente** |
| `/solutions/vehicules` | leaf | Solution commerciale Véhicules | **Absente** |
| `/solutions/pieces-services` | leaf | Solution commerciale Pièces & Services | **Absente** |
| `/solutions/maintenance` | leaf | Solution commerciale Maintenance | **Absente** |
| `/solutions/fleet-mobility` | leaf | Solution commerciale Fleet & Mobility | **Absente** |
| `/solutions/financement` | leaf | Solution commerciale Financement | **Absente** |
| `/financement` | tool | Calculateur / simulation — **pas** une 6ᵉ solution | **Absente** |
| `/configurateur` | tool | Outil commercial associé aux véhicules | **Absente** |
| `/rendez-vous` | tool | Prise de rendez-vous atelier (`ROUTE_MAP`) | **Absente** |
| `/devis` | tool | Conversion principale | **Absente** |
| `/contact` | leaf | Conversion secondaire | **Absente** |
| `/recherche` | tool | Recherche site — **pas** un catalogue pièces | **Absente** |

Redirect Netlify : `/services` → `/solutions` (302).  
Cinq familles seulement. Pages Astro existantes : `/` · `/design-system`.

### 0.2 Données confirmées

| Donnée | Source |
|--------|--------|
| 5 labels Solutions | `navigation.ts` · `routes.ts` · homepage S3 |
| Copy courte des 5 familles | `home.ts` `homeSolutions` |
| SINOTRUK HOHAN 8×4 | Legacy + IMG-001 + IMAGE_MAP |
| WABCO, BOSCH | Labels IA / `ROUTE_MAP` / nav Marques — **pas** claim partenaire |
| CTA globaux Devis / Contact | `commercialActions` · homepage |
| `/financement` outil | `ROUTE_MAP` : Calculateur financement |
| `/configurateur` outil | `ROUTE_MAP` : Configuration véhicule |
| `/rendez-vous` outil | `ROUTE_MAP` : RDV atelier / Prise de rendez-vous atelier |
| Coordonnées Douala | `site.ts` |
| Boundary PacifiqueOS | `site.ts` `externalUrl: null` — site public ≠ OS |

### 0.3 Assets réellement présents

| ID | Fichier | Usage Solutions |
|----|---------|-----------------|
| IMG-001 | `public/assets/images/hero-sinotruk-hohan.jpg` | SINOTRUK / véhicules **uniquement** |
| IMG-002 | `public/assets/reference/architecture-visuelle.png` | Référence IA. Interdit en contenu. |
| Favicon Astro | `public/favicon.svg` · `.ico` | Interdit identité PA |

Aucun JPEG/PNG de pièces, atelier, flotte, financement, Alios, CFAO, logos constructeurs.

### 0.4 Legacy — non source d’offre

Ne pas importer comme contenu public : Alios, CFAO, Mercedes, Volvo, DAF, MAN, RAZEL, « pièces d’origine », diagnostic constructeur, 36/48 mois.

---

## 1. Mission du hub — VERROUILLÉ

`/solutions` = **centre de décision commerciale**.

```
BESOIN → SOLUTION → OUTIL SI PERTINENT → DEVIS / CONTACT
```

Cinq besoins principaux **[CONFIRMÉ]** :

1. Véhicule  
2. Pièces & Services  
3. Maintenance  
4. Fleet & Mobility  
5. Financement  

Site public = proposition commerciale B2B industrielle.  
PacifiqueOS = infrastructure opérationnelle — **jamais exposée** ici.

---

## 2. Architecture finale — VERROUILLÉE

```
/  homepage
└── /solutions                              hub décision
    ├── /solutions/vehicules                solution
    ├── /solutions/pieces-services          solution
    ├── /solutions/maintenance              solution
    ├── /solutions/fleet-mobility           solution
    └── /solutions/financement              solution commerciale
/financement                                outil calcul / simulation
/configurateur                              outil associé véhicules
/rendez-vous                                outil RDV atelier
/devis                                      conversion N1
/contact                                    conversion N2
```

`/financement`, `/configurateur`, `/rendez-vous` ne sont **pas** des solutions.

### 2.1 Fleet & Mobility — VERROUILLÉ

**Conserver** comme solution commerciale.

Périmètre commercial autorisé :

- acquisition / renouvellement de flotte  
- mobilité professionnelle  
- accompagnement flotte  
- maintenance associée  
- financement associé  

**Interdit d’exposer** (PacifiqueOS) :

télémétrie · tracking temps réel · dispatch · TCO détaillé · alertes opérationnelles · dashboard fleet · work orders · analytics opérationnels.

Détail opérationnel réel de l’offre (au-delà de ce cadrage) : **[OPEN]**.

### 2.2 Financement vs outil — VERROUILLÉ

| Route | Nature |
|-------|--------|
| `/solutions/financement` | Page commerciale de la solution Financement |
| `/financement` | Outil de calcul / simulation |

CTA outil, route **[CONFIRMÉ]** dans `ROUTE_MAP` : **Simuler mon financement** → `/financement`.  
Pas de 6ᵉ solution. Alios non affiché. Taux / 36-48 mois interdits.

### 2.3 Configurateur — VERROUILLÉ

| Route | Nature |
|-------|--------|
| `/solutions/vehicules` | Solution commerciale Véhicules |
| `/configurateur` | Outil commercial associé, **si** le périmètre fonctionnel est confirmé |

Route et rôle d’intention **[CONFIRMÉ]** dans `ROUTE_MAP` (`Configuration véhicule`).  
Fonctionnement réel (étapes, options, output) : **[OPEN]** — ne pas inventer.  
CTA possible : **Configurer un véhicule** → `/configurateur`.  
Phase 3A / 3B Solutions : **ne pas construire** le configurateur.

### 2.4 Rendez-vous — VERROUILLÉ

`/rendez-vous` : destination et rôle **[CONFIRMÉ]** par `ROUTE_MAP` (RDV atelier).  
CTA secondaire Maintenance possible : **Prendre rendez-vous** → `/rendez-vous`.  
Fonctionnement réel du booking : **[OPEN]**.  
**Ne pas** construire de système de réservation en Phase 3A (ni dans le périmètre pages Solutions).

---

## 3. Routes, CTA, dépendances

CTA **global** : principal **Demander un devis** → `/devis` · secondaire **Nous contacter** → `/contact`.

| Page | CTA principal | CTA secondaire | Outil si pertinent |
|------|---------------|----------------|--------------------|
| `/solutions` | Devis | Contact | Liens S4 vers les 3 outils |
| `/solutions/vehicules` | Devis | Contact | Configurer un véhicule → `/configurateur` |
| `/solutions/pieces-services` | Devis | Contact | — (pas de catalogue, pas `/recherche` comme moteur pièces) |
| `/solutions/maintenance` | Devis | Contact **et/ou** Prendre rendez-vous | `/rendez-vous` |
| `/solutions/fleet-mobility` | Devis | Contact | Liens Véhicules / Maintenance / Financement (pas d’OS) |
| `/solutions/financement` | Devis | Contact | Simuler mon financement → `/financement` |

Outils : pages `planned`, liens structurels autorisés. Pas de faux UI d’outil dans les pages Solutions.

---

## 4. Parcours utilisateur — VERROUILLÉ

### Hiérarchie UX

| Niveau | Action |
|--------|--------|
| 1 | Identifier son besoin |
| 2 | Découvrir la solution |
| 3 | Utiliser un outil lorsque pertinent (Configurateur · Calculateur · Rendez-vous) |
| 4 | Demander un devis |

Entrées **[CONFIRMÉ]** : homepage S3, mega menu, utility strip (Véhicules, Pièces), hero « Découvrir nos solutions », footer.

Ordre des 5 familles : identique homepage S3. Ne pas réordonner.

---

## 5. Structure `/solutions` — VERROUILLÉE

Page **concise**. Pas d’encyclopédie.

| # | Section | Objectif | Fond | Image | CTA |
|---|---------|----------|------|-------|-----|
| S0 | Header | Shell | existant | — | Devis header |
| S1 | Hero | Annoncer le centre de décision | Navy structurel + typo forte + composition graphique industrielle **sobre** | **Pas IMG-001.** Pas d’image générée. Asset réel seulement s’il existe (aucun aujourd’hui). | Devis + Contact |
| S2 | Choisir selon son besoin | 5 besoins → 5 solutions | Blanc | IMG-001 **uniquement** sur la carte Véhicules | Lien = leaf |
| S3 | Approfondissement des 5 solutions | Une couche de clarté (rôle + besoin), pas un second site | `#F4F6FB` | Aucune hors Véhicules si reprise miniature IMG-001 | Lien leaf |
| S4 | Outils commerciaux associés | Niveau UX 3 | Blanc | Aucune | Configurateur · Simuler · Rendez-vous |
| S5 | Pourquoi Pacifique Auto | Continuité S6 homepage, version courte | Navy mid | Aucune | Devis ou À propos **[PROVISOIRE]** + Contact |
| S6 | CTA final | Conversion | Navy | — | Devis + Contact |
| S7 | Footer | Coordonnées | existant | — | WhatsApp footer only |

Breadcrumb : Accueil / Solutions.

**Interdit hub :** formulaire, KPI, Alios, CFAO, RAZEL, Yassa, carte, dashboard, 6ᵉ carte, PacifiqueOS.

S2 / S3 ne dupliquent pas une page encyclopédique : S2 = choix rapide ; S3 = 5 blocs courts (titre + phrase `homeSolutions` + lien). Si trop long, fusionner S2+S3 en implémentation **sans** ajouter de contenu.

---

## 6. Structure de chaque solution

Patron leaf :

1. Breadcrumb  
2. Hero page (navy, gauche, pas forcément 100vh)  
3. Besoin / rôle (1 bloc)  
4. Visuel **si** asset pertinent, sinon typographie  
5. Outil si pertinent  
6. Liens connexes (autres solutions, pas OS)  
7. CTA final Devis + Contact  

### 6.1 `/solutions/vehicules`

| Bloc | Règle |
|------|--------|
| Copy | **[CONFIRMÉ]** « Solutions véhicules pour les opérations industrielles et logistiques. » |
| Visuel | IMG-001 autorisé (hero **de cette page** ou carte). Pas hero du hub. |
| Constructeur / modèle | SINOTRUK / HOHAN **[CONFIRMÉ]** pour le contenu déjà présent. Présenter comme contexte, **pas** un catalogue. |
| Autres constructeurs | Mercedes, Volvo, MAN, DAF, Renault Trucks, etc. : **ne pas ajouter** (legacy ≠ preuve). `/marques/autres` peut exister sans lister une offre. |
| Configurateur | CTA « Configurer un véhicule » autorisé (route `ROUTE_MAP`). Ne pas décrire de fonctionnalités inventées. |
| CFAO | **Non affiché.** |

### 6.2 `/solutions/pieces-services`

| Bloc | Règle |
|------|--------|
| Copy | **[CONFIRMÉ]** « Pièces et services pour la disponibilité des parcs. » |
| Formulations autorisées | pièces · approvisionnement · disponibilité · accompagnement |
| Formulations interdites | pièces d’origine · pièces authentiques · partenaire / distributeur / constructeur officiel ou certifié |
| Labels | WABCO / BOSCH **autorisés** comme labels de navigation / architecture. Aucun claim. |
| Autres marques pièces (Mahle, BPW, Ren-Par) | **[OPEN]** — ne pas lister comme distribuées. |
| Catalogue / SKU / moteur pièces | **Interdit.** `/recherche` ≠ catalogue. |
| Visuel | **Manquant** → typographie. Pas IMG-001. |

### 6.3 `/solutions/maintenance`

| Bloc | Règle |
|------|--------|
| Copy | **[CONFIRMÉ]** « Maintenance et support technique. » |
| Formulations autorisées | maintenance · entretien · support technique · disponibilité · accompagnement |
| Formulations interdites | diagnostic constructeur · techniciens certifiés · expertise officielle · certification constructeur |
| Capacités exactes | **[OPEN]** — ne pas inventer SLA, urgence 24/7, outillage. |
| RDV | CTA secondaire « Prendre rendez-vous » → `/rendez-vous` (`ROUTE_MAP` **[CONFIRMÉ]**). Pas de widget de réservation. |
| Visuel | **Manquant.** |

### 6.4 `/solutions/fleet-mobility`

| Bloc | Règle |
|------|--------|
| Copy intro | **[CONFIRMÉ]** « Accompagnement flotte et mobilité. » |
| Corps commercial **[VERROUILLÉ]** | Acquisition / renouvellement · mobilité professionnelle · accompagnement flotte · maintenance associée · financement associé. Liens vers Véhicules, Maintenance, Financement. |
| Interdit | Toute UI ou vocabulaire PacifiqueOS listé §2.1. |
| Périmètre opérationnel détaillé | **[OPEN]** |
| Visuel | **Manquant.** |

### 6.5 `/solutions/financement`

| Bloc | Règle |
|------|--------|
| Copy | **[CONFIRMÉ]** « Solutions de financement associées aux équipements. » |
| Partenaires | Alios / CFAO **non affichés.** Aucun autre organisme inventé. |
| Outil | « Simuler mon financement » → `/financement`. Ne pas embarquer le calculateur. |
| Fonctionnement du calculateur | **[OPEN]** |
| Visuel | **Manquant** — texte OK. |

### 6.6 Outils (hors pages Solutions — liens seulement)

Ne pas implémenter en 3A. Ne pas simuler l’UI.

| Outil | Lien | Fonctionnement réel |
|-------|------|---------------------|
| `/configurateur` | Depuis Véhicules + S4 hub | **[OPEN]** |
| `/financement` | Depuis Financement + S4 hub | **[OPEN]** |
| `/rendez-vous` | Depuis Maintenance + S4 hub | **[OPEN]** |

---

## 7. CTA — système unique — VERROUILLÉ

| Priorité | Label | Route |
|----------|-------|-------|
| Global N1 | Demander un devis | `/devis` |
| Global N2 | Nous contacter | `/contact` |
| Outil véhicules | Configurer un véhicule | `/configurateur` |
| Outil financement | Simuler mon financement | `/financement` |
| Outil maintenance | Prendre rendez-vous | `/rendez-vous` |

WhatsApp : footer seulement. Pas de bouton flottant.

Note : la homepage Phase 2B utilise « Calculer mon financement ». Le label Solutions verrouillé est **Simuler mon financement**. Écart homepage **hors 3A**.

---

## 8. Assets

Méthode : SCAN → CLASSIFICATION → CONTEXTE → SOLUTION → PAGE → PRIORITÉ.  
Rescan arbitrage : identique à IMAGE_MAP.

### 8.1 Présents

| ID | Classification | Contexte | Solution | Page | Priorité |
|----|----------------|----------|----------|------|----------|
| IMG-001 | véhicules · camions · SINOTRUK | HOHAN 8×4 | Véhicules | `/solutions/vehicules` ; carte Véhicules S2 (et S3 si miniature) | Haute **dans ce contexte** |

**Interdit :** hero `/solutions` · Pièces · Maintenance · Fleet · Financement · filler.

### 8.2 Hero `/solutions` — VERROUILLÉ

Traitement **sans photographie** :

Navy `#09183A` + typographie Barlow Condensed forte + composition graphique industrielle **sobre** (filet accent, géométrie existante type `Hero` Phase 1).

Ne pas générer d’image.  
Un futur asset landscape n’est utilisable que s’il est scanné, classé, et ajouté à IMAGE_MAP **avant** merge.

### 8.3 Manquants après scan (réels)

| ID visé | Classification | Page | Priorité | Fallback verrouillé |
|---------|----------------|------|----------|---------------------|
| (optionnel) landscape industriel | infrastructures / flotte | Hero hub | Non bloquant | Navy + typo §8.2 |
| — | pièces · composants | Pièces | Haute si pack futur | Typographie |
| — | atelier · maintenance | Maintenance | Haute si pack futur | Typographie |
| — | flotte · transport | Fleet | Haute si pack futur | Typographie |
| — | — | Financement | Basse | Typographie |
| Logos SINOTRUK / WABCO / BOSCH / PA | marques / wordmark | Liens / shell | Prod | Pas de fabrication ; labels texte |

Pas d’asset Alios / CFAO à chercher pour publication.

---

## 9. Copy

### 9.1 Hub **[PROVISOIRE]** sauf noté

| Élément | Copy |
|---------|------|
| H1 | Solutions **[CONFIRMÉ]** — display uppercase |
| Intro | Véhicules, pièces, maintenance, flotte et financement. **[CONFIRMÉ]** |
| CTA | Demander un devis · Nous contacter **[CONFIRMÉ]** |

S2 besoin → solution :

| Besoin | Solution |
|--------|----------|
| Véhicule | Véhicules |
| Pièces & Services | Pièces & Services |
| Maintenance | Maintenance |
| Fleet & Mobility | Fleet & Mobility |
| Financement | Financement |

S3 intros = `homeSolutions` **[CONFIRMÉ]**.  
S4 labels outils = §7.  
S5 : piliers homepage **[CONFIRMÉ]** (capacité multi-métiers, Douala, Afrique Centrale, labels marques, accompagnement B2B) — **sans** KPI.  
S6 : « Parlons de votre prochain projet » **[CONFIRMÉ]** homepage — réemploi autorisé.

### 9.2 Interdit en copy — VERROUILLÉ

Alios · CFAO · 36/48 mois · RAZEL · FCC/BCC/LBR · Mercedes / Volvo / MAN / DAF comme offre  
« partenaire officiel » · « distributeur officiel » · « partenaire certifié » · « constructeur partenaire »  
pièces d’origine · pièces authentiques · diagnostic constructeur · techniciens certifiés · expertise officielle · certification constructeur  
télémétrie · tracking · dispatch · TCO · dashboard · PacifiqueOS · Yassa · SLA inventé.

### 9.3 Formulations autorisées — VERROUILLÉ

maintenance · entretien · support technique · approvisionnement · disponibilité · pièces · accompagnement  
(+ fleet : acquisition / renouvellement · mobilité professionnelle · financement associé — cadrage §2.1).

---

## 10. Design — VERROUILLÉ

Continuité homepage :

- navy `#09183A`  
- red `#D91A2A` (accent CTA / filets uniquement)  
- blanc `#FFFFFF`  
- `#F4F6FB`  
- Barlow / Barlow Condensed  
- industriel · B2B · premium · technique  

**Pas de look SaaS.** Pas de dashboard, glassmorphism, purple, widgets flottants, animations décoratives.

Hero hub : gauche, navy, uppercase, pas de cards flottantes, pas de KPI, pas IMG-001.

Composants 3B : assembler l’existant (`Hero`, `FeatureCard`, `VehicleCard`, `CTASection`, `Breadcrumb`, …). Pas de nouvelle identité.

---

## 11. Responsive

Breakpoints MASTER. QA : 1440 · 1024 · 768 · 390 · 375.

Desktop : S2 lisible comme grille de décision (wrap 3+2 OK).  
Tablet : 2 cols.  
Mobile : 1 col, H1 non fragmenté mot-à-mot, CTA full width, pas de débordement, cartes non coupées.

Priorité : parcours commercial. Respiration plutôt que remplissage.

---

## 12. SEO

Titles / descriptions **[PROVISOIRE]** dérivés des intros **[CONFIRMÉ]** (inchangés vs spec précédente).  
Un H1. Canonical = `ROUTE_MAP`. Langue `fr`. Pas de schema SKU. Redirect `/services`.  
`noindex` avant cutover : **[OPEN]** (homepage actuelle `noindex`).

---

## 13. Dépendances

3A : satisfait (docs seulement).

3B (non commencée) : shell + tokens + cette spec. Liens `/devis` `/contact` / outils = 404 acceptables comme homepage tant que non construits.  
Hors scope Solutions : Industries, Marques (sauf liens/labels), Projets, UI outils, PacifiqueOS, catalogue pièces.

---

## 14. Risques

| Risque | Mitigation VERROUILLÉE |
|--------|------------------------|
| IMG-001 hero hub | Navy + typo seulement |
| 6ᵉ solution (outil ou RAZEL) | 5 familles ; outils en S4 |
| Fleet = OS | §2.1 interdits |
| Alios / CFAO | Non affichés |
| Constructeurs legacy | SINOTRUK / HOHAN seulement |
| Claims techniques | §9.2 / §9.3 |
| Inventer un configurateur / calculateur / booking | Liens d’intention seulement |

---

## 15. OPEN DECISIONS restantes

Uniquement ce que le repository ne permet pas de résoudre :

1. **Contenu exact des véhicules disponibles** (hors SINOTRUK HOHAN déjà présent).  
2. **Catalogue réel de pièces** (aucune base).  
3. **Capacités exactes de maintenance** (au-delà de maintenance / entretien / support).  
4. **Périmètre réel Fleet & Mobility** (profondeur opérationnelle ; le cadrage commercial §2.1 est verrouillé).  
5. **Fonctionnement réel du configurateur.**  
6. **Fonctionnement réel du calculateur.**  
7. **Fonctionnement réel du rendez-vous.**  
8. **Marques actuellement distribuées** (hors labels IA SINOTRUK / WABCO / BOSCH sans claim).  
9. **Assets visuels supplémentaires** (aucun autre fichier image de contenu).  
10. **`noindex` cutover** (recette publique).  

**Clos par arbitrage :** Alios / CFAO à l’écran · constructeurs legacy sur Véhicules · claims partenaire / origine / diagnostic constructeur · hero hub IMG-001 · structure S0–S7 · CTA globaux · séparation solutions / outils · Fleet comme solution commerciale sans OS.

---

## 16. Critères d’acceptation (Phase 3B — non exécutée)

1. 5 familles uniquement, labels `navigation.ts`.  
2. Hub = besoin → solution → outil si pertinent → devis / contact.  
3. Structure S0–S7, page non encyclopédique.  
4. Hero `/solutions` navy + typo, **sans** IMG-001.  
5. IMG-001 uniquement Véhicules / SINOTRUK.  
6. Pas Alios, pas CFAO, pas constructeurs non confirmés.  
7. Pas de claims §9.2.  
8. Fleet sans fonctions OS.  
9. Outils = liens, pas de fausse UI.  
10. CTA globaux Devis + Contact.  
11. Continuité visuelle homepage.  
12. Responsive 1440 / 1024 / 768 / 390 / 375.  
13. `npm run build` OK + QA_CHECKLIST.  

---

## 17. Livrable 3A & STOP

Ce fichier, mis à jour après arbitrage.  
IMAGE_MAP : usage Solutions aligné (IMG-001, manquants scannés, hero hub sans photo).

**Aucun code. Aucune page. Aucun composant. Pas de Phase 3B.**

*Fin SOLUTIONS_MASTER_SPEC — arbitrage final.*
