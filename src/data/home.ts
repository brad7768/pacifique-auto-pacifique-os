/** Homepage copy locked in PACIFIQUE_AUTO_HOMEPAGE_MASTER_SPEC.md */
export const homeHubs = [
  {
    title: 'Solutions',
    href: '/solutions',
    description: 'Véhicules, pièces, maintenance, flotte et financement.',
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'BTP, mines, transport, agriculture et énergie.',
  },
  {
    title: 'Marques',
    href: '/marques',
    description: 'SINOTRUK, WABCO, BOSCH et autres marques au catalogue.',
  },
  {
    title: 'Réseau',
    href: '/reseau',
    description: 'Implantations, pièces et logistique.',
  },
  {
    title: 'Projets',
    href: '/projets',
    description: 'Réalisations et études de cas.',
  },
  {
    title: 'Ressources',
    href: '/ressources',
    description: 'Actualités, documentation et guides.',
  },
  {
    title: 'À propos',
    href: '/a-propos',
    description: 'Histoire et implantation.',
  },
] as const;

export const homeSolutions = [
  {
    title: 'Véhicules',
    href: '/solutions/vehicules',
    description: 'Solutions véhicules pour les opérations industrielles et logistiques.',
    imageSrc: '/assets/images/hero-sinotruk-hohan.jpg',
    imageAlt: 'Camion SINOTRUK HOHAN 8×4',
    useVehicleCard: true,
  },
  {
    title: 'Pièces & Services',
    href: '/solutions/pieces-services',
    description: 'Pièces et services pour la disponibilité des parcs.',
  },
  {
    title: 'Maintenance',
    href: '/solutions/maintenance',
    description: 'Maintenance et support technique.',
  },
  {
    title: 'Fleet & Mobility',
    href: '/solutions/fleet-mobility',
    description: 'Accompagnement flotte et mobilité.',
  },
  {
    title: 'Financement',
    href: '/solutions/financement',
    description: 'Solutions de financement associées aux équipements.',
    secondary: { label: 'Calculer mon financement', href: '/financement' },
  },
] as const;

export const homeIndustries = [
  { title: 'BTP', description: 'Solutions pour le BTP.', href: '/industries/btp' },
  { title: 'Mines & Carrières', description: 'Solutions pour les mines et carrières.', href: '/industries/mines' },
  { title: 'Transport & Logistique', description: 'Solutions pour le transport et la logistique.', href: '/industries/transport' },
  { title: 'Agriculture', description: 'Solutions pour l’agriculture.', href: '/industries/agriculture' },
  { title: 'Énergie', description: 'Solutions pour l’énergie.', href: '/industries/energie' },
] as const;

export const homeBrands = [
  { name: 'SINOTRUK', href: '/marques/sinotruk' },
  { name: 'WABCO', href: '/marques/wabco' },
  { name: 'BOSCH', href: '/marques/bosch' },
  { name: 'Autres marques', href: '/marques/autres' },
] as const;

export const homeProof = [
  {
    title: 'Capacité industrielle multi-métiers',
    text: 'Véhicules, pièces, maintenance, flotte et financement pour les opérations B2B.',
  },
  {
    title: 'Ancrage opérationnel au Cameroun',
    text: 'Siège à Ngodi Akwa, Douala.',
  },
  {
    title: 'Orientation Afrique Centrale',
    text: 'Un territoire de positionnement : l’Afrique Centrale.',
  },
  {
    title: 'Marques au catalogue',
    text: 'SINOTRUK, WABCO, BOSCH et d’autres marques au catalogue.',
  },
  {
    title: 'Accompagnement B2B',
    text: 'De l’équipement au réseau et aux projets.',
  },
] as const;

export const homeNetwork = [
  { title: 'Nos implantations', href: '/reseau/implantations', description: 'Présence opérationnelle et points d’accès.' },
  { title: 'Global Parts Network', href: '/reseau/global-parts', description: 'Approvisionnement et pièces.' },
  { title: 'Logistique & Livraison', href: '/reseau/logistique', description: 'Flux et livraison.' },
] as const;

export const homeResources = [
  { title: 'Actualités', href: '/ressources/actualites', excerpt: 'Informations et actualités du groupe.' },
  { title: 'Documentation', href: '/ressources/documentation', excerpt: 'Documentation technique et commerciale.' },
  { title: 'Guides & Conseils', href: '/ressources/guides', excerpt: 'Guides et conseils opérationnels.' },
] as const;
