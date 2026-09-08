# MASTER SPEC — Pacifique Auto (Site Public)

**Document central Phase 1.** Toute implémentation doit s’y conformer.  
**Identité :** corporate / commercial B2B industriel — **pas** PacifiqueOS.

---

## 1. Documents de référence

| Document | Rôle |
|----------|------|
| [PHASE0_AUDIT.md](./PHASE0_AUDIT.md) | Audit initial (ne pas fusionner PR Phase 0 dans main tant que non demandé) |
| [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) | Stack Astro, structure, boundary OS |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Tokens, typo, palette, layout, composants |
| [IMAGE_MAP.md](./IMAGE_MAP.md) | Cartographie assets |
| [ROUTE_MAP.md](./ROUTE_MAP.md) | Routes finales + CTA + statut |
| [PAGE_DEPENDENCY_MAP.md](./PAGE_DEPENDENCY_MAP.md) | Ordre de construction |
| [QA_CHECKLIST.md](./QA_CHECKLIST.md) | Validation page |
| Code tokens | `src/styles/tokens.css` |
| Navigation | `src/data/navigation.ts` |
| Routes registry | `src/data/routes.ts` |
| Site config | `src/data/site.ts` |
| Legacy | `/legacy` (préservé) |

---

## 2. Positionnement

- **Marque :** Pacifique Auto  
- **Slogan officiel (architecture visuelle) :** Des solutions qui font avancer l'Afrique Centrale  
- **Tagline legacy (historique) :** L'excellence à votre service — non prioritaire  
- **Ton :** premium, technique, fiable, Afrique Centrale  
- **Rouge :** accent stratégique uniquement  

---

## 3. Architecture d’information (nav)

Solutions · Industries · Marques · Réseau · Projets · Ressources · À propos  

Actions : Recherche · Demande de devis · Espace client (→ PacifiqueOS)

---

## 4. Responsive rules (détail)

### Desktop (≥1101px)
- Mega menu inline
- Grilles 3–4 colonnes
- Header CTA devis visible
- Hero peut être full viewport

### Tablet (769–1100px)
- Burger + MobileNav
- Grilles 2 colonnes
- Slogan logo masqué si besoin
- Footer 2 colonnes

### Mobile (≤768px)
- 1 colonne
- Section padding réduit
- Hero accent diagonal masqué
- CTA empilés
- Footer 1 colonne
- Pas de simple scale-down : contenu réordonné

### Transformations spécifiques
| Élément | Desktop | Mobile |
|---------|---------|--------|
| Navigation | Mega panels | Accordion list in drawer |
| Cards | Hover lift + accent bar | Tap targets, less shadow noise |
| Images | Cover in ratio boxes | Same ratios, full width |
| Tables (futur AO) | Full table | Stacked rows / cards |
| Typography | Clamp display | Clamp min bound |

---

## 5. PacifiqueOS boundary

- Ne pas importer UI / auth / design SaaS OS.
- `/client/login` = porte d’entrée (lien) ; URL externe à configurer dans `site.ts`.
- Outils avancés (configurateur, calculateur) : ownership à confirmer avant build.

---

## 6. Phase 1 — livrables & STOP

Livré :

1. Architecture technique Astro  
2. Design tokens (`tokens.css`)  
3. Design system documenté  
4. Composants de base  
5. Global shell  
6. IMAGE_MAP  
7. ROUTE_MAP  
8. PAGE_DEPENDENCY_MAP  
9. Responsive rules (ce doc + DESIGN_SYSTEM)  
10. QA_CHECKLIST  
11. MASTER_SPEC (ce fichier)

**STOP :** ne pas commencer la homepage marketing (Phase 2) sans validation.

---

## 7. Interdictions permanentes

- Improviser l’identité visuelle  
- Hex / font-size hors tokens dans composants  
- Supprimer `/legacy`  
- Déclarer une page terminée sans QA  
- Placeholders définitifs présentés comme contenu final  
- Mélanger PacifiqueOS dans le SSG public  

---

## 8. Validation gate → Phase 2

- [ ] Review design tokens vs stakeholders  
- [ ] Review shell (header/footer IA)  
- [ ] Pack assets (logo + banques) planifié  
- [ ] Build vert  
- [ ] Autorisation explicite Phase 2 Homepage  
