import Pages from '../enum/Pages';

export default {
  [Pages.HOME]: {
    fname: 'Clemens',
    lname: 'Philipse',
  },
  [Pages.SETTINGS]: {
    title: 'Instellingen',
    dark: 'DONKER',
    light: 'LICHT',
    english: 'EN',
    dutch: 'NL',
    lan: 'Taal',
    on: 'Aan',
    off: 'Uit',
    splash: 'Openingsscherm',
  },
  [Pages.CPHILIPSE]: {
    age: '20',
    name: 'Clemens Philipse',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    linkedinUrl: 'https://www.linkedin.com/in/clemens-philipse-2615b9162/',
    githubUrl: 'https://github.com/CPhilipse/CPhilipse_APP',
    firstCardTitle: 'Over mij',
    firstCard:
      'Ik woon in Nederland en ik volg de opleiding Informatica aan de hogschool van Leiden. Mijn droombaan is om bij Interpol te gaan werken als digital investigator in Lyon. PS. Je kan op het kruisje klikken. \n\n Swipe rechts of links.',
    secondCardTitle: 'Reden',
    secondCard:
      'Ik begon met het maken van deze app om te oefenen met animaties. In mijn eigen app kan ik maken wat ik mooi vind, dus het was super leuk om deze app in elkaar te zetten.',
    thirdCardTitle: 'The App',
    thirdCard:
      'De app is gemaakt in React-Native v0.63, ik maak gebruik van React-Native-Reanimated v2 voor de animaties. Deze app maakt ook gebruik van TypeScript en maakt gebruik van Redux voor het opslaan van gegevens.',
    fourthCardTitle: 'Open source App',
    fourthCard: 'https://github.com/CPhilipse/CPhilipse_APP',
  },
  [Pages.PROJECT_DETAILS]: {
    overlayCopy:
      'The first image shows the homepage of this app. This was an' +
      'interesting page to make, because of the splashscreen and filters.' +
      'The splashscreen was the hardest part, though I made it from a' +
      'tutorial, making the animation work with my own custom text was a' +
      "bit of a hassle. The text is made out of SVG and I've like no" +
      'experience with SVG. When I tried it the first time with my own text' +
      "as SVG, it didn't animate the whole text. It only animated half of" +
      'the letters. After some trial and error I found the correct number' +
      'to adjust to have it show correctly.',
  },
};
