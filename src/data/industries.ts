import { homeIndustries, homeProof, homeSolutions } from './home';

export type NeedLayout = 'rail' | 'rows' | 'grid' | 'cards' | 'bars';
export type UnderstandLayout = 'split' | 'panel' | 'band' | 'editorial' | 'stack';
export type SectionTone = 'default' | 'subtle' | 'primary-mid';
export type IndustryPattern = 'btp' | 'mines' | 'transport' | 'agriculture' | 'energie';

export type IndustryNeed = {
  title: string;
  text: string;
};

export type IndustrySolutionLink = {
  title: string;
  href: string;
  description: string;
};

export type IndustryRecord = {
  slug: IndustryPattern;
  href: string;
  title: string;
  index: string;
  pattern: IndustryPattern;
  intro: string;
  understandLabel: string;
  understandTitle: string;
  understand: string;
  understandLayout: UnderstandLayout;
  understandTone: SectionTone;
  needsLabel: string;
  needsTitle: string;
  needsIntro: string;
  needs: IndustryNeed[];
  needLayout: NeedLayout;
  needsTone: Exclude<SectionTone, 'primary-mid'>;
  solutionHrefs: readonly string[];
  seoTitle: string;
  seoDescription: string;
};

const solutionByHref = Object.fromEntries(
  homeSolutions.map((item) => [
    item.href,
    { title: item.title, href: item.href, description: item.description },
  ]),
) as Record<string, IndustrySolutionLink>;

function solutionsFor(hrefs: readonly string[]): IndustrySolutionLink[] {
  return hrefs.map((href) => {
    const item = solutionByHref[href];
    if (!item) {
      throw new Error(`Unknown solution href: ${href}`);
    }
    return item;
  });
}

/** Hub hero — INDUSTRIES_MASTER_SPEC §6. */
export const industriesHub = {
  eyebrow: 'Industries · Solutions B2B',
  h1Lines: ['DES SOLUTIONS POUR LES INDUSTRIES', 'QUI FONT AVANCER L’AFRIQUE CENTRALE.'] as const,
  lead: 'Découvrez les secteurs et les besoins opérationnels auxquels nos solutions peuvent répondre.',
  seoTitle: 'Industries',
  seoDescription:
    'Découvrez les secteurs et les besoins opérationnels auxquels nos solutions peuvent répondre.',
} as const;

/** Homepage proof pillars used as generic accompaniment — no sector claims. */
export const industryAccompany = [homeProof[0], homeProof[1], homeProof[2]] as const;

export const industries: IndustryRecord[] = [
  {
    slug: 'btp',
    href: '/industries/btp',
    title: 'BTP',
    index: '01',
    pattern: 'btp',
    intro: homeIndustries[0].description,
    understandLabel: 'Secteur',
    understandTitle: 'Opérations de chantier',
    understand:
      'Les opérations de construction et de travaux publics reposent sur la mobilité des équipements, la disponibilité des véhicules et la continuité d’entretien. L’approvisionnement en pièces et le financement des équipements font partie des contraintes courantes du secteur.',
    understandLayout: 'split',
    understandTone: 'default',
    needsLabel: 'Besoins',
    needsTitle: 'Besoins opérationnels du chantier',
    needsIntro: 'Réalités générales du BTP. Pas un historique d’affaires par projet.',
    needs: [
      {
        title: 'Mobilité des équipements',
        text: 'Les chantiers exigent de déplacer et d’exploiter des équipements sur des sites qui évoluent.',
      },
      {
        title: 'Disponibilité des véhicules',
        text: 'Les travaux dépendent de véhicules d’exploitation réellement disponibles.',
      },
      {
        title: 'Entretien',
        text: 'L’entretien du parc conditionne la continuité des opérations de chantier.',
      },
      {
        title: 'Approvisionnement en pièces',
        text: 'La continuité se joue souvent sur l’accès aux pièces au bon moment.',
      },
      {
        title: 'Financement des équipements',
        text: 'Le financement des équipements fait partie des contraintes courantes du secteur.',
      },
    ],
    needLayout: 'rail',
    needsTone: 'subtle',
    solutionHrefs: [
      '/solutions/vehicules',
      '/solutions/pieces-services',
      '/solutions/maintenance',
      '/solutions/fleet-mobility',
      '/solutions/financement',
    ],
    seoTitle: 'BTP',
    seoDescription: 'Solutions pour le BTP.',
  },
  {
    slug: 'mines',
    href: '/industries/mines',
    title: 'Mines & Carrières',
    index: '02',
    pattern: 'mines',
    intro: homeIndustries[1].description,
    understandLabel: 'Secteur',
    understandTitle: 'Sites extractifs et carrières',
    understand:
      'Les sites extractifs et les carrières exigent un parc disponible, un entretien adapté aux conditions d’exploitation et un approvisionnement en pièces. La logistique de site et la continuité d’activité sont des réalités générales du secteur.',
    understandLayout: 'panel',
    understandTone: 'primary-mid',
    needsLabel: 'Besoins',
    needsTitle: 'Contraintes d’exploitation',
    needsIntro: 'Besoins génériques des opérations minières et de carrière — pas une preuve d’activité.',
    needs: [
      {
        title: 'Équipements adaptés aux environnements lourds',
        text: 'L’extraction et la carrière sollicitent des équipements conçus pour des conditions exigeantes.',
      },
      {
        title: 'Disponibilité',
        text: 'Un arrêt de parc pèse directement sur la continuité de production.',
      },
      {
        title: 'Maintenance',
        text: 'L’entretien doit suivre le rythme et les contraintes du site.',
      },
      {
        title: 'Pièces',
        text: 'L’approvisionnement en pièces conditionne le redémarrage et la disponibilité.',
      },
      {
        title: 'Flotte',
        text: 'Le parc de site — véhicules et engins — doit rester exploitable dans la durée.',
      },
    ],
    needLayout: 'rows',
    needsTone: 'default',
    solutionHrefs: [
      '/solutions/vehicules',
      '/solutions/pieces-services',
      '/solutions/maintenance',
      '/solutions/fleet-mobility',
    ],
    seoTitle: 'Mines & Carrières',
    seoDescription: 'Solutions pour les mines et carrières.',
  },
  {
    slug: 'transport',
    href: '/industries/transport',
    title: 'Transport & Logistique',
    index: '03',
    pattern: 'transport',
    intro: homeIndustries[2].description,
    understandLabel: 'Secteur',
    understandTitle: 'Flux, parc et continuité',
    understand:
      'Le transport et la logistique dépendent de la disponibilité de la flotte, de l’entretien du parc et de la continuité des flux. Pièces et financement des véhicules font partie des contraintes opérationnelles génériques du secteur.',
    understandLayout: 'band',
    understandTone: 'subtle',
    needsLabel: 'Besoins',
    needsTitle: 'Besoins d’une flotte en mouvement',
    needsIntro: 'Réalités générales du transport et de la logistique, distinctes du hub Réseau.',
    needs: [
      {
        title: 'Mobilité',
        text: 'Les opérations reposent sur des véhicules capables d’assurer les déplacements et les tournées.',
      },
      {
        title: 'Gestion et constitution de flotte',
        text: 'Constituer, renouveler et dimensionner un parc fait partie des décisions courantes du secteur.',
      },
      {
        title: 'Disponibilité',
        text: 'Un véhicule immobilisé interrompt le flux. La disponibilité du parc est une contrainte permanente.',
      },
      {
        title: 'Maintenance',
        text: 'L’entretien du parc soutient la régularité des rotations.',
      },
      {
        title: 'Financement',
        text: 'Le financement des véhicules accompagne souvent l’évolution de la flotte.',
      },
    ],
    needLayout: 'grid',
    needsTone: 'default',
    solutionHrefs: [
      '/solutions/vehicules',
      '/solutions/pieces-services',
      '/solutions/maintenance',
      '/solutions/fleet-mobility',
      '/solutions/financement',
    ],
    seoTitle: 'Transport & Logistique',
    seoDescription: 'Solutions pour le transport et la logistique.',
  },
  {
    slug: 'agriculture',
    href: '/industries/agriculture',
    title: 'Agriculture',
    index: '04',
    pattern: 'agriculture',
    intro: homeIndustries[3].description,
    understandLabel: 'Secteur',
    understandTitle: 'Exploitations et cycles d’activité',
    understand:
      'Les exploitations agricoles s’appuient sur des véhicules et équipements disponibles, un entretien adapté aux cycles d’activité, et des solutions de financement. Ce sont des besoins généraux du secteur.',
    understandLayout: 'editorial',
    understandTone: 'default',
    needsLabel: 'Besoins',
    needsTitle: 'Besoins des exploitations',
    needsIntro: 'Contraintes génériques du secteur agricole. Pas un catalogue d’exploitations.',
    needs: [
      {
        title: 'Mobilité',
        text: 'Les exploitations ont besoin de véhicules pour relier sites, marchés et approvisionnements.',
      },
      {
        title: 'Équipements',
        text: 'Les cycles agricoles s’appuient sur des équipements disponibles au bon moment.',
      },
      {
        title: 'Maintenance',
        text: 'L’entretien doit pouvoir suivre les périodes d’activité intense.',
      },
      {
        title: 'Disponibilité',
        text: 'Un arrêt d’équipement pendant un cycle pèse sur l’exploitation.',
      },
      {
        title: 'Financement',
        text: 'Le financement des équipements fait partie des arbitrages courants du secteur.',
      },
    ],
    needLayout: 'cards',
    needsTone: 'subtle',
    solutionHrefs: ['/solutions/vehicules', '/solutions/maintenance', '/solutions/financement'],
    seoTitle: 'Agriculture',
    seoDescription: 'Solutions pour l’agriculture.',
  },
  {
    slug: 'energie',
    href: '/industries/energie',
    title: 'Énergie',
    index: '05',
    pattern: 'energie',
    intro: homeIndustries[4].description,
    understandLabel: 'Secteur',
    understandTitle: 'Infrastructures et sites',
    understand:
      'Les opérations énergétiques — production, distribution, chantiers d’infrastructure — impliquent souvent un parc mobile, de la maintenance, des pièces et un suivi de flotte. Formulation générique du secteur, sans sites ni volumes.',
    understandLayout: 'stack',
    understandTone: 'primary-mid',
    needsLabel: 'Besoins',
    needsTitle: 'Continuité des opérations énergétiques',
    needsIntro: 'Besoins génériques du secteur énergétique. Pas une liste de sites ou de contrats.',
    needs: [
      {
        title: 'Équipements',
        text: 'Les sites et chantiers s’appuient sur des équipements adaptés aux infrastructures.',
      },
      {
        title: 'Mobilité',
        text: 'Les équipes et matériels doivent pouvoir rejoindre des sites souvent dispersés.',
      },
      {
        title: 'Maintenance',
        text: 'L’entretien du parc soutient la continuité des opérations.',
      },
      {
        title: 'Pièces',
        text: 'L’approvisionnement en pièces limite les arrêts non planifiés.',
      },
      {
        title: 'Continuité opérationnelle',
        text: 'Le secteur privilégie la continuité d’activité — disponibilité du parc comprise.',
      },
    ],
    needLayout: 'bars',
    needsTone: 'subtle',
    solutionHrefs: [
      '/solutions/vehicules',
      '/solutions/pieces-services',
      '/solutions/maintenance',
      '/solutions/fleet-mobility',
    ],
    seoTitle: 'Énergie',
    seoDescription: 'Solutions pour l’énergie.',
  },
];

export const industryCards = homeIndustries.map((item, index) => ({
  ...item,
  index: industries[index].index,
  pattern: industries[index].pattern,
}));

export const industryHubSolutions: IndustrySolutionLink[] = homeSolutions.map((item) => ({
  title: item.title,
  href: item.href,
  description: item.description,
}));

export function industryBySlug(slug: string): IndustryRecord | undefined {
  return industries.find((item) => item.slug === slug);
}

export function industrySolutions(industry: IndustryRecord): IndustrySolutionLink[] {
  return solutionsFor(industry.solutionHrefs);
}

export const projectsPlaceholder = {
  title: 'Projets',
  intro: 'Les réalisations et études de cas validées sont rassemblées dans l’espace Projets.',
  text: 'Sélection de réalisations en cours de préparation.',
  href: '/projets',
  label: 'Voir les projets',
} as const;
