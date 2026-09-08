# IMAGE MAP — Pacifique Auto

**Règle :** aucune image n’est utilisée sans entrée dans cette carte.  
**Phase 1 :** inventaire + extraction ; pas d’usage marketing homepage.

---

## 1. Assets disponibles

### IMG-001 — SINOTRUK HOHAN 8×4

| Champ | Valeur |
|-------|--------|
| Nom | `hero-sinotruk-hohan.jpg` |
| Chemin | `/public/assets/images/hero-sinotruk-hohan.jpg` |
| Type | Photographie produit / flotte |
| Format | JPEG |
| Dimensions | 1500 × 2000 |
| Orientation | Portrait (camion 3/4 avant) |
| Sujet | Camion benne blanc SINOTRUK HOHAN, bull bar, chantier |
| Qualité | Bonne (catalogue) ; fond chargé (autres véhicules) — crop recommandé |
| Origine | Extraite du base64 legacy (`styles.css` / `index.html`) |
| Hash SHA256 (12) | `ad4ad25c9eb1` |
| Pages candidates | `/`, `/solutions/vehicules`, `/marques/sinotruk`, heroes flotte |
| Rôle recommandé | Hero produit, VehicleCard, preuve catalogue SINOTRUK |
| Interdit | Industries non transport (agriculture/énergie) sans contexte |

### IMG-002 — Architecture visuelle (référence, non prod)

| Champ | Valeur |
|-------|--------|
| Nom | `architecture-visuelle.png` |
| Chemin | `/public/assets/reference/architecture-visuelle.png` |
| Type | Document sitemap / maquette architecture |
| Dimensions | 1223 × 1286 |
| Usage | Référence IA uniquement |
| **Ne pas** servir comme image de contenu site |

### IMG-003 — Logo wordmark

| Champ | Valeur |
|-------|--------|
| Statut | **MANQUANT** |
| Workaround Phase 1 | Composant `Logo.astro` (pastille PA + texte) |
| Action | Fournir SVG/PNG officiel PACIFIQUE AUTO |

### IMG-004+ — Logos marques (SINOTRUK, WABCO, BOSCH, etc.)

| Statut | **MANQUANTS** |
| Action | Pack logos autorisés avant pages Marques |

### IMG-005+ — Industries / projets / réseau

| Statut | **MANQUANTS** |
| Besoin | Photos BTP, mines, transport, agriculture, énergie, map implantations, chantiers |

---

## 2. Legacy duplicates (ne plus utiliser en prod)

| Emplacement legacy | Note |
|--------------------|------|
| `legacy/styles.css` data-URI | Même JPEG IMG-001 |
| `legacy/index.html` data-URI | Même JPEG |
| `legacy/index2.html` data-URI ×2 | Même JPEG |

Source unique : `public/assets/images/hero-sinotruk-hohan.jpg`.

---

## 3. Politique de sélection

1. Sujet aligné au message commercial de la page.
2. Orientation adaptée au composant (hero landscape crop vs card).
3. Pas d’image « filler » décorative abstraite.
4. Droits / mentions constructeurs vérifiés avant publication.
5. Toute nouvelle image → nouvelle ligne IMAGE MAP avant merge.

---

## 4. Gaps bloquants Phase 2+

- Wordmark vectoriel
- Logos marques
- Banque industries / projets
- Visuels outils (configurateur, financement) si maquettes le demandent
