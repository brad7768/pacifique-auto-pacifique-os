/**
 * Canonical route registry — mirrors docs/pacifique-auto/ROUTE_MAP.md
 * Used for navigation integrity checks in later phases.
 */
export type RouteType =
  | 'home'
  | 'hub'
  | 'leaf'
  | 'tool'
  | 'legal'
  | 'system'
  | 'external-os';

export type RouteEntry = {
  path: string;
  page: string;
  type: RouteType;
  parent: string | null;
  status: 'planned' | 'foundation' | 'legacy-only' | 'blocked-os';
};

export const routes: RouteEntry[] = [
  { path: '/', page: 'Accueil', type: 'home', parent: null, status: 'planned' },
  { path: '/solutions', page: 'Solutions', type: 'hub', parent: '/', status: 'planned' },
  { path: '/solutions/vehicules', page: 'Véhicules', type: 'leaf', parent: '/solutions', status: 'planned' },
  { path: '/solutions/pieces-services', page: 'Pièces & Services', type: 'leaf', parent: '/solutions', status: 'planned' },
  { path: '/solutions/maintenance', page: 'Maintenance', type: 'leaf', parent: '/solutions', status: 'planned' },
  { path: '/solutions/fleet-mobility', page: 'Fleet & Mobility', type: 'leaf', parent: '/solutions', status: 'planned' },
  { path: '/solutions/financement', page: 'Financement', type: 'leaf', parent: '/solutions', status: 'planned' },
  { path: '/industries', page: 'Industries', type: 'hub', parent: '/', status: 'planned' },
  { path: '/industries/btp', page: 'BTP', type: 'leaf', parent: '/industries', status: 'planned' },
  { path: '/industries/mines', page: 'Mines & Carrières', type: 'leaf', parent: '/industries', status: 'planned' },
  { path: '/industries/transport', page: 'Transport & Logistique', type: 'leaf', parent: '/industries', status: 'planned' },
  { path: '/industries/agriculture', page: 'Agriculture', type: 'leaf', parent: '/industries', status: 'planned' },
  { path: '/industries/energie', page: 'Énergie', type: 'leaf', parent: '/industries', status: 'planned' },
  { path: '/marques', page: 'Marques', type: 'hub', parent: '/', status: 'planned' },
  { path: '/marques/sinotruk', page: 'SINOTRUK', type: 'leaf', parent: '/marques', status: 'planned' },
  { path: '/marques/wabco', page: 'WABCO', type: 'leaf', parent: '/marques', status: 'planned' },
  { path: '/marques/bosch', page: 'BOSCH', type: 'leaf', parent: '/marques', status: 'planned' },
  { path: '/marques/autres', page: 'Autres marques', type: 'leaf', parent: '/marques', status: 'planned' },
  { path: '/reseau', page: 'Réseau', type: 'hub', parent: '/', status: 'planned' },
  { path: '/reseau/implantations', page: 'Nos implantations', type: 'leaf', parent: '/reseau', status: 'planned' },
  { path: '/reseau/global-parts', page: 'Global Parts Network', type: 'leaf', parent: '/reseau', status: 'planned' },
  { path: '/reseau/logistique', page: 'Logistique & Livraison', type: 'leaf', parent: '/reseau', status: 'planned' },
  { path: '/projets', page: 'Projets', type: 'hub', parent: '/', status: 'planned' },
  { path: '/projets/cas-clients', page: 'Études de cas', type: 'leaf', parent: '/projets', status: 'planned' },
  { path: '/projets/realisations', page: 'Réalisations', type: 'leaf', parent: '/projets', status: 'planned' },
  { path: '/projets/appels-offres', page: "Appels d'offres", type: 'leaf', parent: '/projets', status: 'planned' },
  { path: '/ressources', page: 'Ressources', type: 'hub', parent: '/', status: 'planned' },
  { path: '/ressources/actualites', page: 'Actualités', type: 'leaf', parent: '/ressources', status: 'planned' },
  { path: '/ressources/documentation', page: 'Documentation', type: 'leaf', parent: '/ressources', status: 'planned' },
  { path: '/ressources/guides', page: 'Guides & Conseils', type: 'leaf', parent: '/ressources', status: 'planned' },
  { path: '/a-propos', page: 'Notre histoire', type: 'hub', parent: '/', status: 'planned' },
  { path: '/a-propos/equipe', page: 'Notre équipe', type: 'leaf', parent: '/a-propos', status: 'planned' },
  { path: '/a-propos/carrieres', page: 'Carrières', type: 'leaf', parent: '/a-propos', status: 'planned' },
  { path: '/a-propos/rse', page: 'RSE & Engagements', type: 'leaf', parent: '/a-propos', status: 'planned' },
  { path: '/contact', page: 'Contact', type: 'leaf', parent: '/a-propos', status: 'planned' },
  { path: '/recherche', page: 'Recherche', type: 'tool', parent: '/', status: 'planned' },
  { path: '/devis', page: 'Demande de devis', type: 'tool', parent: '/', status: 'planned' },
  { path: '/configurateur', page: 'Configuration véhicule', type: 'tool', parent: '/', status: 'planned' },
  { path: '/financement', page: 'Calculateur de financement', type: 'tool', parent: '/', status: 'planned' },
  { path: '/rendez-vous', page: 'Prise de rendez-vous atelier', type: 'tool', parent: '/', status: 'planned' },
  { path: '/client/login', page: 'Espace client', type: 'external-os', parent: '/', status: 'blocked-os' },
  { path: '/faq', page: 'FAQ', type: 'legal', parent: '/', status: 'planned' },
  { path: '/mentions-legales', page: 'Mentions légales', type: 'legal', parent: '/', status: 'planned' },
  { path: '/confidentialite', page: 'Politique de confidentialité', type: 'legal', parent: '/', status: 'planned' },
  { path: '/cookies', page: 'Cookies', type: 'legal', parent: '/', status: 'planned' },
  { path: '/design-system', page: 'Design System (interne)', type: 'system', parent: null, status: 'foundation' },
];
