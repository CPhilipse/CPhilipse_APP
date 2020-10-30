import Pages from '../enum/Pages';

export default {
  [Pages.ARTICLE_DETAILS]: {
    save: 'Wijzigingen opslaan',
    edit: 'Wijzigen',
  },
  [Pages.FALLBACK]: {
    refresh: 'Opnieuw laden',
    notify: 'Laat het ons weten!',
    title: 'Er is een fout',
    formNote: 'Nog steeds problemen?',
    followingNote: 'Vertel ons hoe je bij deze error bent gekomen.',
    message: 'Het zal zo z.s.m. opgelost worden!',
  },
  [Pages.UNAUTHORIZED]: {
    login: 'Inloggen',
    register: 'Maak er één!',
    title: 'Voor meer content even',
    formNote: 'Heb jij nog geen account?',
  },
};
