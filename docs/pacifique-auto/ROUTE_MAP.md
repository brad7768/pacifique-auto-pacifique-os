# ROUTE MAP — Pacifique Auto

Aligné sur l’architecture visuelle (Phase 0) et `src/data/routes.ts`.  
**Statuts Phase 1 :** aucune page métier implémentée (sauf fondations / design-system).

Légende statut : `planned` · `foundation` · `blocked-os`

---

## Accueil

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/` | Accueil (marketing) | home | — | Devis | Contact | Hero, hubs, CTASection | IMG-001 + TBD | planned *(Phase 2)* |
| `/` *(temporaire)* | Phase 1 Fondations | system | — | Design system | — | Shell only | — | foundation |

---

## Solutions

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/solutions` | Solutions | hub | `/` | Devis | Contact | PageHero, HubCardGrid | TBD | planned |
| `/solutions/vehicules` | Véhicules | leaf | `/solutions` | Devis | Configurateur | VehicleCard, CTASection | IMG-001 | planned |
| `/solutions/pieces-services` | Pièces & Services | leaf | `/solutions` | Devis | Contact | FeatureCard | TBD | planned |
| `/solutions/maintenance` | Maintenance | leaf | `/solutions` | RDV atelier | Devis | FeatureCard | TBD | planned |
| `/solutions/fleet-mobility` | Fleet & Mobility | leaf | `/solutions` | Devis | Contact | FeatureCard | TBD | planned |
| `/solutions/financement` | Financement | leaf | `/solutions` | Calculateur | Devis | FeatureCard, CTA | TBD | planned |

---

## Industries

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/industries` | Industries | hub | `/` | Devis | Solutions | IndustryCard | TBD | planned |
| `/industries/btp` | BTP | leaf | `/industries` | Devis | Projets | Industry layout | TBD | planned |
| `/industries/mines` | Mines & Carrières | leaf | `/industries` | Devis | Contact | Industry layout | TBD | planned |
| `/industries/transport` | Transport & Logistique | leaf | `/industries` | Devis | Véhicules | Industry layout | TBD | planned |
| `/industries/agriculture` | Agriculture | leaf | `/industries` | Devis | Contact | Industry layout | TBD | planned |
| `/industries/energie` | Énergie | leaf | `/industries` | Devis | Contact | Industry layout | TBD | planned |

---

## Marques

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/marques` | Marques | hub | `/` | Devis | Autres | BrandCard | logos TBD | planned |
| `/marques/sinotruk` | SINOTRUK | leaf | `/marques` | Véhicules | Devis | Brand + Vehicle | IMG-001 | planned |
| `/marques/wabco` | WABCO | leaf | `/marques` | Pièces | Devis | Brand detail | logo TBD | planned |
| `/marques/bosch` | BOSCH | leaf | `/marques` | Pièces | Devis | Brand detail | logo TBD | planned |
| `/marques/autres` | Autres marques | leaf | `/marques` | Contact | Devis | Brand grid | TBD | planned |

---

## Réseau

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/reseau` | Réseau | hub | `/` | Contact | Implantations | Hub cards | TBD | planned |
| `/reseau/implantations` | Nos implantations | leaf | `/reseau` | Contact | RDV | Map | map TBD | planned |
| `/reseau/global-parts` | Global Parts Network | leaf | `/reseau` | Devis | Contact | Content | TBD | planned |
| `/reseau/logistique` | Logistique & Livraison | leaf | `/reseau` | Devis | Contact | Content | TBD | planned |

---

## Projets

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/projets` | Projets | hub | `/` | Devis | Cas clients | ProjectCard | TBD | planned |
| `/projets/cas-clients` | Études de cas | leaf | `/projets` | Contact | Devis | ProjectCard | TBD | planned |
| `/projets/realisations` | Réalisations | leaf | `/projets` | Contact | Devis | ProjectCard | TBD | planned |
| `/projets/appels-offres` | Appels d'offres | leaf | `/projets` | Répondre | Contact | List/table | — | planned |

---

## Ressources

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/ressources` | Ressources | hub | `/` | Newsletter | Docs | ArticleCard | TBD | planned |
| `/ressources/actualites` | Actualités | leaf | `/ressources` | Lire | Contact | ArticleCard | TBD | planned |
| `/ressources/documentation` | Documentation | leaf | `/ressources` | Télécharger | Contact | Doc list | — | planned |
| `/ressources/guides` | Guides & Conseils | leaf | `/ressources` | Lire | Devis | ArticleCard | TBD | planned |

---

## À propos & contact

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/a-propos` | Notre histoire | hub | `/` | Contact | Carrières | Content | TBD | planned |
| `/a-propos/equipe` | Notre équipe | leaf | `/a-propos` | Carrières | Contact | Team grid | TBD | planned |
| `/a-propos/carrieres` | Carrières | leaf | `/a-propos` | Postuler | Contact | Jobs | TBD | planned |
| `/a-propos/rse` | RSE & Engagements | leaf | `/a-propos` | Contact | — | Content | TBD | planned |
| `/contact` | Contact | leaf | `/a-propos` | Envoyer | WhatsApp | FormField, CTA | — | planned |

---

## Pages spéciales / outils

| Route | Page | Type | Parent | CTA principal | CTA secondaire | Composants | Images | Statut |
|-------|------|------|--------|---------------|----------------|------------|--------|--------|
| `/recherche` | Recherche | tool | `/` | Résultats | — | Search UI | — | planned |
| `/devis` | Demande de devis | tool | `/` | Envoyer | Contact | FormField | — | planned |
| `/configurateur` | Configuration véhicule | tool | `/` | Demander | Devis | Tool UI | TBD | planned |
| `/financement` | Calculateur financement | tool | `/` | Simuler | Devis | Calculator | TBD | planned |
| `/rendez-vous` | RDV atelier | tool | `/` | Réserver | Contact | Booking form | — | planned |
| `/client/login` | Espace client | external-os | `/` | Login OS | — | Link out | — | **blocked-os** |

> Conflit documenté : `/solutions/financement` (contenu) ≠ `/financement` (outil). Les deux routes restent distinctes.

---

## Légal & système

| Route | Page | Type | Parent | CTA | Statut |
|-------|------|------|--------|-----|--------|
| `/faq` | FAQ | legal | `/` | Contact | planned |
| `/mentions-legales` | Mentions légales | legal | `/` | — | planned |
| `/confidentialite` | Confidentialité | legal | `/` | — | planned |
| `/cookies` | Cookies | legal | `/` | — | planned |
| `/design-system` | Design System interne | system | — | — | foundation |

---

## Redirects legacy (à activer au cutover)

| From | To |
|------|----|
| `/services` | `/solutions` |
| `/accueil` | `/` |
| `/services.html` etc. | routes clean |

Legacy files remain readable under `/legacy` in repo (not served by Astro `dist`).
