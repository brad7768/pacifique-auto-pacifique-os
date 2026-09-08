# IMAGE MAP — Pacifique Auto

**Règle :** aucune image n’est utilisée sans entrée dans cette carte.  
**Scan repository :** 2026-09-08 (hors `node_modules`, `.git`, `dist`).  
**Homepage :** voir aussi `PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md` §22.

---

## 0. Méthode

```
SCAN ASSETS → CLASSIFICATION → SUJET → CONTEXTE
→ SECTION/PAGE COMPATIBLE → PRIORITÉ → RATIO → CROP D/M
```

IMG-001 n’est **pas** un filler universel.

---

## 1. Assets réellement présents

### IMG-001 — SINOTRUK HOHAN 8×4

| Champ | Valeur |
|-------|--------|
| Nom | `hero-sinotruk-hohan.jpg` |
| Chemin fichier | `public/assets/images/hero-sinotruk-hohan.jpg` |
| URL runtime | `/assets/images/hero-sinotruk-hohan.jpg` |
| Type | Photographie produit |
| Format | JPEG |
| Dimensions | 1500 × 2000 |
| Orientation | **Portrait** |
| Sujet | Camion benne blanc SINOTRUK HOHAN, bull bar |
| Classification | véhicules · camions · marque SINOTRUK |
| Contexte | Catalogue poids lourd / constructeur SINOTRUK |
| Qualité | Catalogue ; fond chargé (autres véhicules) — crop recommandé |
| Origine | Extraite du base64 legacy |
| Hash SHA256 (12) | `ad4ad25c9eb1` |
| Pages / sections compatibles | `/solutions/vehicules` · `/marques/sinotruk` · homepage **S3 Véhicules uniquement** |
| Priorité | Haute **dans ces contextes** |
| Ratio d’usage recommandé | Card 16:10 (crop depuis portrait) |
| Crop desktop | Cabine + benne, centre |
| Crop mobile | Cabine serrée |
| **Interdit** | Hero homepage par défaut · industries hors transport lourd · filler S2–S10 |

### IMG-002 — Architecture visuelle

| Champ | Valeur |
|-------|--------|
| Nom | `architecture-visuelle.png` |
| Chemin | `public/assets/reference/architecture-visuelle.png` (+ doublon `legacy/1BFC44D9-….png`) |
| Classification | document IA / sitemap |
| Usage | Référence hiérarchie site **uniquement** |
| **Interdit** | Image de contenu, hero, cards |

### IMG-FAVICON-ASTRO

| Champ | Valeur |
|-------|--------|
| Fichiers | `public/favicon.svg`, `public/favicon.ico` |
| Sujet | Logo **Astro** (template) |
| Classification | technique / défaut scaffold |
| **Interdit** | Identité Pacifique Auto |
| Action | Remplacer par favicon marque quand le wordmark officiel est livré |

### Doublons legacy (ne plus publier)

`legacy/styles.css`, `legacy/index.html`, `legacy/index2.html` — data-URI = IMG-001.

---

## 2. Absents après scan (réellement manquants)

Aucun autre PNG/JPG/SVG de marque, produit, chantier, logo constructeur, icône set, Yassa, Alios ou Bosch n’a été trouvé.

| ID | Classification visée | Contexte homepage | Priorité |
|----|----------------------|-------------------|----------|
| IMG-LOGO-PA | logo / wordmark | Header, footer | Critique prod |
| IMG-HOME-HERO | infrastructure / flotte / industriel **landscape** | S1 Hero | Critique — **≠ IMG-001** |
| IMG-ICON-HUBS (×7) | icônes linéaires cohérentes | S2 | Haute |
| IMG-HOME-PIECES | pièces | S3 | Haute |
| IMG-HOME-MAINT | atelier / maintenance | S3 | Haute |
| IMG-HOME-FLEET | flotte | S3 | Haute |
| IMG-HOME-FINANCE | — | S3 (texte OK sans image) | Basse |
| IMG-HOME-IND-BTP | BTP / chantiers | S4 | Haute |
| IMG-HOME-IND-MINES | mines | S4 | Haute |
| IMG-HOME-IND-TRANSPORT | transport | S4 | Haute (IMG-001 **non** équivalent industrie générique) |
| IMG-HOME-IND-AGRI | agriculture | S4 | Haute |
| IMG-HOME-IND-ENERGIE | énergie | S4 | Haute |
| IMG-LOGO-SINOTRUK | logo marque | S5 | Haute prod |
| IMG-LOGO-WABCO | logo marque | S5 | Haute prod |
| IMG-LOGO-BOSCH | logo marque | S5 | Haute prod |
| IMG-HOME-PROJECT-* | projets réels | S7 | Si contenu validé |
| IMG-YASSA | infrastructures | hors homepage v1 | Plus tard (Réseau) |
| IMG-ALIOS | — | **interdit homepage** | — |
| Carte Afrique / réseau | — | **interdit homepage v1** | Plus tard si données |

---

## 3. Politique de sélection

1. Sujet = message commercial de la section.  
2. Contexte d’abord, remplissage jamais.  
3. Sans image pertinente → carte typographique, pas d’image hors sujet.  
4. Droits constructeurs avant publication de logos.  
5. Nouvelle image → nouvelle ligne ici **avant** merge.

---

## 4. Classification (banque cible)

véhicules · camions · pièces · atelier · maintenance · flotte · chantiers · BTP · mines · transport · agriculture · énergie · projets · infrastructures · personnes · marques · logos · icônes

**Couvert aujourd’hui :** camions / véhicules / SINOTRUK (IMG-001 seulement).

---

## 5. Usage Solutions (Phase 3A)

Source d’exécution pages : `SOLUTIONS_MASTER_SPEC.md` §8.  
Rescan 2026-09-08 : aucun asset nouveau depuis le scan homepage.

| Page | Image autorisée | Interdit |
|------|-----------------|----------|
| `/solutions` (hub) | Aucune obligatoire. Hero navy typographique si IMG-SOL-HUB absent. | IMG-001 filler |
| `/solutions/vehicules` | IMG-001 (hero page ou carte produit, crop 16:10) | Réemploi hors SINOTRUK / véhicules |
| `/solutions/pieces-services` | **Manquant** (IMG-SOL-PIECES) | IMG-001 |
| `/solutions/maintenance` | **Manquant** (IMG-SOL-MAINT) | IMG-001 |
| `/solutions/fleet-mobility` | **Manquant** (IMG-SOL-FLEET) | IMG-001 |
| `/solutions/financement` | **Manquant** (basse priorité) | IMG-001 · visuel Alios |

IDs cibles absents : `IMG-SOL-HUB` · `IMG-SOL-PIECES` · `IMG-SOL-MAINT` · `IMG-SOL-FLEET` · `IMG-SOL-FINANCE` · logos constructeurs.  
Fallback : composition typographique / cartes existantes. Ne pas générer d’images.
