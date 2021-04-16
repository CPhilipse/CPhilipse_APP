import Pages from '../enum/Pages';

export default {
  [Pages.HOME]: {
    fname: 'Clemens',
    lname: 'Philipse',
  },
  [Pages.SETTINGS]: {
    title: 'Settings',
    dark: 'DARK',
    light: 'LIGHT',
    english: 'EN',
    dutch: 'NL',
    lan: 'Language',
    on: 'On',
    off: 'Off',
    splash: 'Opening screen',
  },
  [Pages.CPHILIPSE]: {
    age: '20',
    name: 'Clemens Philipse',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    linkedinUrl: 'https://www.linkedin.com/in/clemens-philipse-2615b9162/',
    githubUrl: 'https://github.com/CPhilipse/CPhilipse_APP',
    firstCardTitle: 'About me',
    firstCard:
      "I live in The Netherlands and I'm following the education Machine Science at the university of Leiden. My ultimate dream and goal is to become a digital investigator at Interpol in Lyon. \n\n Swipe right or left.",
    secondCardTitle: 'Reason',
    secondCard:
      'I started making this app with the intent of practicing mobile animations and on my own app I can make animations based on my preferences. So it was really enjoyable making this app!',
    thirdCardTitle: 'The App',
    thirdCard:
      "This app is made in React-Native v0.63, it's using React-Native-Reanimated v2 for the animations, has TypeScript support and is using Redux for storing and persisting the Settings preferences.",
    fourthCardTitle: 'Open source App',
    fourthCard: ':https://github.com/CPhilipse/CPhilipse_APP',
  },
};
