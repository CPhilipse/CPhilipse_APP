// // @ts-ignore
// import i18n from 'i18n-js';
// import * as RNLocalize from 'react-native-localize';
//
// import nl from '../locales/nl';
//
// const locales = RNLocalize.getLocales();
//
// console.log('<< Locales: ', locales);
// if (Array.isArray(locales)) {
//   const lan = locales.filter(
//     ({languageCode, languageTag}) =>
//       languageCode === 'nl' || languageTag === 'nl-NL',
//   );
//   i18n.locale = lan?.[0]?.languageTag;
// }
//
// i18n.fallbacks = true;
// i18n.translations = {
//   nl,
// };
//
// export const getLocalizedString = (...value: any) => i18n.t(...value);
