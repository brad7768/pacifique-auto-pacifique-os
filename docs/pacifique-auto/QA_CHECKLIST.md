# QA CHECKLIST — Pacifique Auto

À appliquer **à chaque page** avant de la déclarer terminée.  
Phase 1 : utiliser sur `/` (fondations) et `/design-system`.

---

## VISUAL

- [ ] Dimensions / containers respectent `--pa-container-*`
- [ ] Spacing issu des tokens (`--pa-space-*`, section padding)
- [ ] Typography : famille / size / weight / tracking conformes à DESIGN_SYSTEM
- [ ] Colors : uniquement tokens ; rouge = accent, pas fill de page
- [ ] Imagery : entrée IMAGE_MAP + rôle cohérent
- [ ] Alignment : grilles cohérentes, pas de cartes « flottantes » hors système
- [ ] Hierarchy : un H1, sections avec un job
- [ ] Logo wordmark : PACIFIQUE + AUTO rouge
- [ ] Pas de style inventé / « plus moderne »

## FUNCTIONAL

- [ ] Tous les liens naviguent (pas de `#` morts en prod)
- [ ] Boutons : variants + états hover/focus
- [ ] Mega menu desktop + mobile drawer
- [ ] CTA header devis + espace client
- [ ] Formulaires : labels, required, focus
- [ ] Responsive : desktop / tablet / mobile selon règles
- [ ] Breadcrumb correct sur pages feuilles

## TECHNICAL

- [ ] `npm run build` OK
- [ ] Console navigateur sans erreur
- [ ] a11y : skip link, focus-visible, aria-expanded menu, contraste
- [ ] SEO : title + meta description uniques ; `noindex` si page interne
- [ ] Performance : pas de base64 géants ; images via `/public/assets`
- [ ] PacifiqueOS non embarqué (lien sortant seulement)

## PHASE GATE

- [ ] Page absente de ROUTE_MAP ? → ajouter d’abord
- [ ] Décision visuelle non documentée ? → DESIGN_SYSTEM changelog d’abord
- [ ] Homepage ? → uniquement après validation Phase 1

---

## Phase 1 — résultats build

| Check | Résultat |
|-------|----------|
| Build Astro | **OK** (`npm run build` — 2 pages, 0 erreur) |
| `/` fondations | Shell + tokens, `noindex` |
| `/design-system` | Laboratoire composants, `noindex` |
| Legacy préservé | `/legacy` intact |
| Homepage marketing | **Non démarrée** (conforme) |
