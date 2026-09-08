# Pacifique Auto — Site public

Site corporate / commercial B2B pour **Pacifique Auto**.  
**PacifiqueOS** (SaaS opérationnel) est hors périmètre de cette application.

## Phase 1 (courante)

Fondations uniquement : design system, tokens, shell, composants de base, documentation.  
**Homepage marketing non démarrée.**

Specs : [`docs/pacifique-auto/MASTER_SPEC.md`](docs/pacifique-auto/MASTER_SPEC.md)

## Développement

```bash
npm install
npm run dev
npm run build
```

- `/` — page statut fondations (noindex)
- `/design-system` — laboratoire composants (noindex)
- `/legacy` — site HTML historique préservé dans le repo

## Stack

Astro SSG + TypeScript — voir `docs/pacifique-auto/TECHNICAL_ARCHITECTURE.md`.
