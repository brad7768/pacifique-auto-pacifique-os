/** Site-wide constants — Pacifique Auto public brand (not PacifiqueOS). */
export const site = {
  name: 'Pacifique Auto',
  legalName: 'Pacifique Auto SARL',
  slogan: "Des solutions qui font avancer l'Afrique Centrale",
  /** Legacy tagline kept for historical reference only — not primary slogan. */
  legacyTagline: "L'excellence à votre service",
  locale: 'fr',
  url: 'https://pacifiqueauto.cm',
  contact: {
    phones: ['+237696651116', '+237691404230', '+237670303865'],
    phoneDisplay: ['696 651 116', '691 404 230', '670 30 38 65'],
    email: 'pacifiqueauto7@gmail.com',
    address: 'Ngodi Akwa, Douala, Cameroun',
    whatsapp: '237696651116',
  },
  /**
   * PacifiqueOS boundary: client space is operational SaaS, not this site.
   * Link out — do not embed OS UI here.
   */
  pacifiqueOs: {
    loginPath: '/client/login',
    /** Replace with real OS URL when available. */
    externalUrl: null as string | null,
  },
  social: {
    linkedin: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
    instagram: null as string | null,
  },
} as const;

export type SiteConfig = typeof site;
