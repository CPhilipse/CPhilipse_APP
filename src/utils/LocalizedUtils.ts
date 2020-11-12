import en from '../locales/en';
import nl from '../locales/nl';
import {store} from '../store';

const languages = {
  en: 'en',
  nl: 'nl',
};

const getLocalizedString = (page: string, value: string) => {
  const state = store.getState();
  const {language} = state.language;

  // @ts-ignore
  const enText = en[page][value];
  // @ts-ignore
  const nlText = nl[page][value];
  if (language === languages.en) {
    return enText;
  } else if (language === languages.nl) {
    return nlText;
  } else {
    return enText;
  }
};

export {getLocalizedString, languages};
