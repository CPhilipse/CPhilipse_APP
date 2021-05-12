import {ImageRequireSource} from 'react-native';
import Categories from '../enum/Categories';
import {images} from '../themes';
import {getLocalizedString} from './LocalizedUtils';
import Pages from '../enum/Pages';

export interface ProjectProps {
  id: number;
  home_image: ImageRequireSource;
  title: string;
  subTitle: string;
  body: string;
  images: ImageRequireSource[];
  video: string;
  category: string;
}

const localizedCopy = (value: string) => getLocalizedString(Pages.HOME, value);

export const projects = [
  {
    id: 0,
    home_image: images.app_icon,
    title: 'Portfolio App',
    subTitle: 'Welcome to my very own app!',
    body: localizedCopy('portfolio_app'),
    images: [
      images.app_home,
      images.app_menu,
      images.cphilipse,
      images.hvgea,
      images.cphilipse,
      images.hvgea,
      images.cphilipse,
      images.hvgea,
      images.cphilipse,
    ],
    video: 'video2',
    category: Categories.HOBBY,
  },
  {
    id: 1,
    home_image: images.hvgea_icon,
    title: 'HvGeA',
    subTitle: 'Home of Prayer and Worship.',
    body: localizedCopy('hvgea_app'),
    images: [images.hvgea],
    video: 'video',
    category: Categories.BLOG,
  },
  {
    id: 2,
    home_image: images.android_default_icon,
    title: 'Exam',
    subTitle:
      'Mobile Application Development (MAD). Creating detailed incident reports.',
    body: localizedCopy('exam_app'),
    images: [images.cphilipse],
    video: 'video1',
    category: Categories.SCHOOL,
  },
  {
    id: 3,
    home_image: images.android_default_icon,
    title: 'Internship',
    subTitle: 'All the apps I worked on within my internship.',
    body: localizedCopy('internship_copy'),
    images: [images.hvgea],
    video: 'video2',
    category: Categories.SCHOOL,
  },
  {
    id: 4,
    home_image: images.android_default_icon,
    title: 'IWDER Module',
    subTitle: 'A website I made in HTML, CSS and JS to wrap up a module.',
    body: localizedCopy('iwder_web'),
    images: [images.hvgea],
    video: 'video2',
    category: Categories.SCHOOL,
  },
];

// English
export const paragraphs = [
  '',
  "Hello! My name is Clemens and here I'm gonna tell some things about me and this app.",
  '',
  'First things first, the basketball can be swiped!',
  'About me',
  "I live in The Netherlands and I'm following the education Machine Science at the university of Leiden. My ultimate dream and goal is to become a digital investigator at Interpol in Lyon.",
  'Reason',
  'I started making this app with the intent of practicing mobile animations and on my own app I can make animations based on my preferences. So it was really enjoyable making this app!',
];
