# TECHNICAL ARCHITECTURE — Pacifique Auto

**Phase :** 1 — Fondations  
**Statut :** Source de vérité technique  
**Périmètre :** Site public corporate / commercial B2B  
**Hors périmètre :** PacifiqueOS (plateforme opérationnelle SaaS)

---

## 1. Choix de stack : Astro (SSG)

### Décision

**Astro 5+/7 SSG** avec TypeScript strict et `@astrojs/sitemap`.

### Justification

| Critère | Pourquoi Astro |
|--------|----------------|
| ~35+ routes | File-based routing + nested folders naturels |
| Composants réutilisables | `.astro` components, slots, props typées |
| SEO | HTML statique par défaut, meta par layout |
| Performance | Zero JS par défaut ; JS opt-in (header/mega menu) |
| Images | Pipeline Vite + assets `/public` ; évolutif vers `<Image />` |
| Responsive | CSS tokens + media queries documentées |
| Évolution | Peut ajouter React/Vue islands si outils complexes (configurateur) |
| Séparation OS | App publique isolée — pas d’auth SaaS embarquée |

### Alternatives écartées

| Option | Raison du rejet Phase 1 |
|--------|-------------------------|
| HTML multi-pages legacy | Duplication shell, dette déjà visible, non scalable à 35 routes |
| Next.js App Router | Surdimensionné pour un site majoritairement statique ; risque de mélanger patterns SaaS PacifiqueOS |
| WordPress | Moins de contrôle design-system strict ; dette visuelle |

---

## 2. Structure du dépôt

```
/
├── legacy/                      # Site HTML legacy PRÉSERVÉ (non détruit)
├── docs/pacifique-auto/         # Specs Phase 0–1 (source de vérité)
├── public/assets/               # Images & références
├── src/
│   ├── styles/                  # tokens.css = source visuelle code
│   ├── data/                    # navigation, routes, site config
│   ├── components/
│   │   ├── ui/                  # composants de base
│   │   └── shell/               # Header, MegaMenu, MobileNav, Footer
│   ├── layouts/BaseLayout.astro
│   └── pages/                   # Routes Astro (Phase 1: fondations + design-system)
├── astro.config.mjs
├── netlify.toml                 # Build Astro
└── package.json
```

---

## 3. Principes d’architecture

1. **Tokens first** — aucun hex / font-size magique dans les composants.
2. **Shell unique** — Header / Footer via `BaseLayout`.
3. **IA figée** — `src/data/navigation.ts` + `ROUTE_MAP.md` alignés.
4. **PacifiqueOS boundary** — `/client/login` reste un point d’entrée externe (lien), jamais l’UI OS.
5. **Legacy intact** — `/legacy` pour rollback / comparaison visuelle.
6. **Pas de homepage marketing** en Phase 1 — `/` = page statut fondations (`noindex`).

---

## 4. Build & déploiement

```bash
npm install
npm run build    # → dist/
npm run preview
```

Netlify :

- `command` : `npm run build`
- `publish` : `dist`
- Redirects legacy documentés dans `netlify.toml` (à activer quand pages existent)

---

## 5. Séparation Pacifique Auto vs PacifiqueOS

| | Pacifique Auto | PacifiqueOS |
|--|----------------|-------------|
| Nature | Site corporate B2B | SaaS opérationnel |
| Users | Prospects, partenaires, presse | Clients / ops internes |
| Auth | Non | Oui |
| Design | Navy + accent rouge stratégique | À ne pas importer ici |
| Hosting | Site public SSG | App séparée / sous-domaine |

---

## 6. Prochaines évolutions techniques (post Phase 1)

- Content collections Astro pour marques / projets / actualités
- `astro:assets` Image optimization
- Islands React uniquement pour calculateur / configurateur si ownership public confirmé
- i18n uniquement si demandé

---

## 7. Références

- Phase 0 audit : `docs/pacifique-auto/PHASE0_AUDIT.md`
- Design system : `docs/pacifique-auto/DESIGN_SYSTEM.md`
- Master : `docs/pacifique-auto/MASTER_SPEC.md`
