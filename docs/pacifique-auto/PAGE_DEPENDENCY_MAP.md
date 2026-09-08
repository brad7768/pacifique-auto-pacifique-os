# PAGE DEPENDENCY MAP — Pacifique Auto

Ordre logique de construction. **Phase 1 s’arrête après Base components + Shell.**

```
Design tokens (tokens.css + DESIGN_SYSTEM.md)
        ↓
Technical architecture (Astro + layouts)
        ↓
Global shell (Header, MegaMenu, MobileNav, Footer)
        ↓
Base components (Button… FormField)
        ↓
Docs maps (ROUTE / IMAGE / QA / MASTER)     ← vous êtes ici (fin Phase 1)
        ↓
[GATE] Validation Phase 1
        ↓
Homepage marketing (/)                       ← Phase 2
        ↓
Hubs : Solutions, Industries, Marques, Réseau, Projets, Ressources, À propos
        ↓
Pages feuilles Solutions (véhicules → financement)
        ↓
Pages Industries
        ↓
Pages Marques (SINOTRUK first — asset IMG-001 disponible)
        ↓
Pages Réseau / Projets / Ressources
        ↓
Contact + Légales
        ↓
Pages outils (/devis, /recherche, /rendez-vous, …)
        ↓
Lien PacifiqueOS (/client/login) — pas d’UI OS
```

## Dépendances critiques

| Livrable | Dépend de |
|----------|-----------|
| Homepage | Shell + tokens + assets hero + copy validée |
| Hub Marques | Logos marques |
| Hub Industries | Banque photos secteurs |
| Outils calculateur / configurateur | Ownership public vs PacifiqueOS |
| Espace client | URL PacifiqueOS réelle |

## Parallelisation possible (après Phase 2 home)

- Marques SINOTRUK ∥ Contact form  
- Industries copy ∥ Projets structure  
- Légales ∥ FAQ  

Jamais : pages avant tokens/shell.
