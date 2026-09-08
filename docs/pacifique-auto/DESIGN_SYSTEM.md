# DESIGN SYSTEM — Pacifique Auto

**Phase :** 1  
**Code source of truth :** `src/styles/tokens.css`  
**Règle :** aucune valeur visuelle inventée dans les composants — tokens uniquement.

---

## 1. Origine des décisions

| Élément | Source | Notes |
|---------|--------|-------|
| Navy / rouge / neutres | Legacy `styles.css` `:root` | Site public existant |
| Wordmark PACIFIQUE + AUTO rouge | Architecture visuelle PNG | Split de marque |
| Slogan Afrique Centrale | Architecture visuelle PNG | Remplace tagline legacy en primary |
| Barlow / Barlow Condensed | Legacy + Google Fonts | Confirmé usage production actuel |
| Radii 2–4px, letter-spacing uppercase | Legacy composants | Identité technique industrielle |
| Breakpoints 768 / 1024 / 1100 | Legacy `@media` | Conservés |

**Interdit :** inventer un look « plus moderne », gradients décoratifs non référencés, dark-mode SaaS type PacifiqueOS, purple themes.

---

## 2. Palette officielle

| Rôle | Token | Valeur | Usage |
|------|-------|--------|-------|
| PRIMARY | `--pa-color-primary` | `#09183A` | Header, footer, heroes dark, texte fort |
| PRIMARY mid | `--pa-color-primary-mid` | `#0D2055` | Surfaces inversées secondaires |
| PRIMARY soft | `--pa-color-primary-soft` | `#132770` | Accents navy soft |
| SECONDARY | `--pa-color-secondary` | `#132770` | Support structurel |
| ACCENT | `--pa-color-accent` | `#D91A2A` | CTA primary, filets, AUTO wordmark |
| ACCENT hot | `--pa-color-accent-hot` | `#FF2233` | Hover accent uniquement |
| BACKGROUND | `--pa-color-bg` | `#FFFFFF` | Fond page |
| BACKGROUND subtle | `--pa-color-bg-subtle` | `#F4F6FB` | Sections alternées |
| SURFACE | `--pa-color-surface` | `#FFFFFF` | Cards / forms |
| TEXT | `--pa-color-text` | `#09183A` | Corps sur fond clair |
| TEXT inverse | `--pa-color-text-inverse` | `#FFFFFF` | Sur navy |
| MUTED | `--pa-color-text-muted` | `#8A96B0` | Secondaire |
| BORDER | `--pa-color-border` | `#C8D0E4` | Champs, outlines |
| SUCCESS | `--pa-color-success` | `#27AE60` | Feedback positif (legacy form) |
| WARNING | `--pa-color-warning` | `#D68910` | Alertes |
| ERROR | `--pa-color-error` | `#D91A2A` | Aligné accent / erreurs |

### Règle rouge

Le rouge est un **accent stratégique** (CTA, soulignements, marque AUTO).  
Il ne doit pas peindre backgrounds de pages entières ni remplacer le navy comme couleur dominante.

---

## 3. Typographie

### Familles

| Rôle | Famille | Token |
|------|---------|-------|
| Display / titres / nav / boutons | Barlow Condensed | `--pa-font-display` |
| Body / formulaires / captions | Barlow | `--pa-font-body` |

### Échelle

| Niveau | Size token | Weight | Line-height | Letter-spacing | Transform |
|--------|------------|--------|-------------|----------------|-----------|
| Display / H1 hero | `--pa-text-display` clamp 52–96px | 900 | 0.95 | -1px | uppercase |
| H1 page / section strong | `--pa-text-h1` clamp 40–58px | 900 | 1.0 | -0.5px | uppercase |
| H2 | `--pa-text-h2` clamp 32–44px | 900 | 1.0 | -0.5px | uppercase |
| H3 | `--pa-text-h3` 21px | 800 | 1.1 | 0.5px | uppercase |
| H4 | `--pa-text-h4` 17px | 700 | 1.1 | 1px | uppercase |
| Lead / tagline | `--pa-text-lead` clamp 17–24px | 400 | — | 4px | uppercase |
| Body | `--pa-text-body` 16px | 400 | 1.75 | 0 | none |
| Caption | `--pa-text-caption` 13px | 400 | 1.5 | 0 | none |
| Overline / labels | `--pa-text-overline` 12px | 700 | — | 4px | uppercase |
| Navigation | 14px display | 600 | — | 1.5px | uppercase |
| Boutons | 13–15px display | 700 | — | 2–3px | uppercase |
| Stats | `--pa-text-stat` 42px | 900 | 1 | 0 | none |

Classes utilitaires : `.pa-display`, `.pa-h1`… `.pa-stat` dans `typography.css`.

---

## 4. Layout system

| Règle | Token / valeur |
|-------|----------------|
| Contenu max | `--pa-container-max` 1200px |
| Shell wide | `--pa-container-wide` 1400px |
| Padding horizontal | `--pa-container-pad` 5% |
| Header height | `--pa-header-height` 72px |
| Section padding Y | 100px desktop / 64px mobile |
| Grid desktop | 2 / 3 / 4 cols + auto-fit min 280px |
| Grid tablet ≤1024 | 2 cols (3/4 → 2) |
| Grid mobile ≤768 | 1 col |
| Card gap legacy tight | 2px (grilles type services) |
| Image default | `object-fit: cover`, max-width 100% |
| Radii | 2px / 3px / 4px — pas de pills UI (sauf badge dots) |

---

## 5. Ombres & bordures

- Shadows : sm / md / lg / xl / nav / accent (voir tokens)
- Borders : 1px default, 2px controls, 3px accent bar
- Header : border-bottom 2px accent

---

## 6. Motion

| Token | Valeur | Usage |
|-------|--------|-------|
| `--pa-duration-fast` | 150ms | translate boutons |
| `--pa-duration` | 200ms | couleurs |
| `--pa-duration-med` | 300ms | panels / cards |
| `--pa-duration-slow` | 400ms | accent bar cards |

Motion = hiérarchie / feedback, pas décoration.

---

## 7. Composants couverts (Phase 1)

Button, Link, Badge, Card, SectionHeader, Hero, Stat, FeatureCard, ProductCard, VehicleCard, BrandCard, IndustryCard, ProjectCard, ArticleCard, CTASection, Breadcrumb, Logo, Icon, FormField, Container, Section  
Shell : Header, MegaMenu, MobileNav, Footer

Laboratoire : `/design-system` (noindex).

---

## 8. Responsive rules (résumé)

Voir aussi section dédiée dans `MASTER_SPEC.md`.

| Viewport | Nav | Grilles | Type | CTA |
|----------|-----|---------|------|-----|
| Desktop ≥1101 | Mega menu | 3–4 cols | Display plein | Header CTA visible |
| Tablet ≤1100 | Burger + drawer | 2 cols | Display réduit clamp | CTA dans drawer |
| Mobile ≤768 | Drawer full | 1 col | Hero non full-vh forcé | Stack boutons |

Ne pas « shrink » : réordonner, empiler, réduire densité.

---

## 9. Changelog tokens

| Version | Date | Changement |
|---------|------|------------|
| 1.0.0 | 2026-09-08 | Initial lock depuis legacy + architecture visuelle |
