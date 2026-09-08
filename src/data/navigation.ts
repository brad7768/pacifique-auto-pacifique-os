export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/**
 * Primary IA from architecture visuelle mockup.
 * Routes match ROUTE_MAP.md — pages themselves land in later phases.
 */
export const primaryNav: NavItem[] = [
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Véhicules', href: '/solutions/vehicules' },
      { label: 'Pièces & Services', href: '/solutions/pieces-services' },
      { label: 'Maintenance', href: '/solutions/maintenance' },
      { label: 'Fleet & Mobility', href: '/solutions/fleet-mobility' },
      { label: 'Financement', href: '/solutions/financement' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'BTP', href: '/industries/btp' },
      { label: 'Mines & Carrières', href: '/industries/mines' },
      { label: 'Transport & Logistique', href: '/industries/transport' },
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'Énergie', href: '/industries/energie' },
    ],
  },
  {
    label: 'Marques',
    href: '/marques',
    children: [
      { label: 'SINOTRUK', href: '/marques/sinotruk' },
      { label: 'WABCO', href: '/marques/wabco' },
      { label: 'BOSCH', href: '/marques/bosch' },
      { label: 'Autres marques', href: '/marques/autres' },
    ],
  },
  {
    label: 'Réseau',
    href: '/reseau',
    children: [
      { label: 'Nos implantations', href: '/reseau/implantations' },
      { label: 'Global Parts Network', href: '/reseau/global-parts' },
      { label: 'Logistique & Livraison', href: '/reseau/logistique' },
    ],
  },
  {
    label: 'Projets',
    href: '/projets',
    children: [
      { label: 'Études de cas', href: '/projets/cas-clients' },
      { label: 'Réalisations', href: '/projets/realisations' },
      { label: "Appels d'offres", href: '/projets/appels-offres' },
    ],
  },
  {
    label: 'Ressources',
    href: '/ressources',
    children: [
      { label: 'Actualités', href: '/ressources/actualites' },
      { label: 'Documentation', href: '/ressources/documentation' },
      { label: 'Guides & Conseils', href: '/ressources/guides' },
    ],
  },
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: 'Notre histoire', href: '/a-propos' },
      { label: 'Notre équipe', href: '/a-propos/equipe' },
      { label: 'Carrières', href: '/a-propos/carrieres' },
      { label: 'RSE & Engagements', href: '/a-propos/rse' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

/** Fine utility strip — not a second navbar. Routes from ROUTE_MAP. */
export const utilityStrip = [
  { label: 'Véhicules', href: '/solutions/vehicules' },
  { label: 'Pièces & Services', href: '/solutions/pieces-services' },
  { label: 'Projets', href: '/projets' },
] as const;

export const commercialActions = {
  primary: { label: 'Demander un devis', href: '/devis' },
  secondary: { label: 'Nous contacter', href: '/contact' },
  client: { label: 'Espace client', href: '/client/login' },
  search: { label: 'Recherche', href: '/recherche' },
} as const;

export const footerQuickLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Marques', href: '/marques' },
  { label: 'Projets', href: '/projets' },
] as const;

export const footerSupportLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Documentation', href: '/ressources/documentation' },
  { label: 'Demande de devis', href: '/devis' },
] as const;

export const footerLegalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: 'Cookies', href: '/cookies' },
] as const;
