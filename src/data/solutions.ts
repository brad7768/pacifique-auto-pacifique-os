import { homeSolutions, homeProof } from './home';

/** Need labels — SOLUTIONS_MASTER_SPEC §9.1 S2. */
const needs = ['Véhicule', 'Pièces & Services', 'Maintenance', 'Fleet & Mobility', 'Financement'] as const;

export const solutionFamilies = homeSolutions.map((item, index) => ({
  ...item,
  need: needs[index],
  index: String(index + 1).padStart(2, '0'),
}));

export const solutionTools = [
  {
    label: 'Configurer un véhicule',
    href: '/configurateur',
    context: 'Véhicules',
    description: 'Configuration véhicule.',
  },
  {
    label: 'Prendre rendez-vous',
    href: '/rendez-vous',
    context: 'Maintenance',
    description: 'Prise de rendez-vous atelier.',
  },
  {
    label: 'Simuler mon financement',
    href: '/financement',
    context: 'Financement',
    description: 'Calculateur / simulation.',
  },
] as const;

export const fleetPillars = [
  {
    title: 'Acquisition / renouvellement de flotte',
    href: '/solutions/vehicules',
    description: 'Solutions véhicules pour les opérations industrielles et logistiques.',
  },
  {
    title: 'Mobilité professionnelle',
    href: '/solutions/fleet-mobility',
    description: 'Accompagnement flotte et mobilité.',
  },
  {
    title: 'Accompagnement flotte',
    href: '/solutions/fleet-mobility',
    description: 'Accompagnement flotte et mobilité.',
  },
  {
    title: 'Maintenance associée',
    href: '/solutions/maintenance',
    description: 'Maintenance et support technique.',
  },
  {
    title: 'Financement associé',
    href: '/solutions/financement',
    description: 'Solutions de financement associées aux équipements.',
  },
] as const;

export const partsLabels = [
  { name: 'WABCO', href: '/marques/wabco' },
  { name: 'BOSCH', href: '/marques/bosch' },
] as const;

export const vehicleContext = {
  brand: 'SINOTRUK',
  model: 'HOHAN 8×4',
  imageSrc: '/assets/images/hero-sinotruk-hohan.jpg',
  imageAlt: 'Camion SINOTRUK HOHAN 8×4',
  brandHref: '/marques/sinotruk',
} as const;

export const solutionProof = homeProof;

export const solutionSeo = {
  hub: {
    title: 'Solutions',
    description: 'Véhicules, pièces, maintenance, flotte et financement.',
  },
  vehicules: {
    title: 'Véhicules',
    description: 'Solutions véhicules pour les opérations industrielles et logistiques.',
  },
  pieces: {
    title: 'Pièces & Services',
    description: 'Pièces et services pour la disponibilité des parcs.',
  },
  maintenance: {
    title: 'Maintenance',
    description: 'Maintenance et support technique.',
  },
  fleet: {
    title: 'Fleet & Mobility',
    description: 'Accompagnement flotte et mobilité.',
  },
  financement: {
    title: 'Financement',
    description: 'Solutions de financement associées aux équipements.',
  },
} as const;

export function relatedSolutions(currentHref: string) {
  return solutionFamilies.filter((item) => item.href !== currentHref);
}
