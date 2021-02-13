import en from '../locales/en';
import nl from '../locales/nl';
import {store} from '../store';

const languages = {
  en: 'en',
  nl: 'nl',
};

// T stands for typeof. U stands for...
const getKeyValue = <T extends object, U extends keyof T>(obj: any) => (
  page: string,
  value: string,
) => obj[page][value];

const getLocalizedString = (page: string, value: string) => {
  const state = store.getState();
  const {language} = state.language;

  // const enText = getKeyValue(en)(page, value);
  // const nlText = getKeyValue(nl)(page, value);
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
