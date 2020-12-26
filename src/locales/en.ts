import Pages from '../enum/Pages';

export default {
  [Pages.SETTINGS]: {
    title: 'Settings',
    dark: 'DARK',
    light: 'LIGHT',
    english: 'EN',
    dutch: 'NL',
    lan: 'Language',
  },
  [Pages.CPHILIPSE]: {
    age: '19',
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
      'I started making this app with the intent of practicing mobile animations. I knew I could go nuts with animations on my own app and since I really love animations, I went all out! While trying to keep it neat.\nOh, and BTW, you can swipe the basketball!',
    thirdCardTitle: 'The App',
    thirdCard:
      "This app is made in React-Native v0.63, it's using React-Native-Reanimated v2 for the animations, has TypeScript support and is using Redux for storing and persisting the Settings preferences.",
    fourthCardTitle: 'Open source App',
    fourthCard: ':https://github.com/CPhilipse/CPhilipse_APP',
  },
};
