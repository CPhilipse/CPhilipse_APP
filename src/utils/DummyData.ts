import {ImageRequireSource} from 'react-native';
import Categories from '../enum/Categories';
import {images} from '../themes';

export interface ProjectProps {
  id: number;
  title: string;
  subTitle: string;
  body: string;
  images: ImageRequireSource[];
  video: string;
  category: string;
}

export const projects = [
  {
    id: 0,
    title: 'Portfolio App',
    subTitle: 'Welcome to my very own app!',
    body: 'This app is open source, so if interested in the code ....',
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
    title: 'HvGeA',
    subTitle: 'Home of Prayer and Worship.',
    body: 'body',
    images: [images.hvgea],
    video: 'video',
    category: Categories.BLOG,
  },
  {
    id: 2,
    title: 'Exam',
    subTitle:
      'Mobile Application Development (MAD). Creating detailed incident reports.',
    body: 'body1',
    images: [images.cphilipse],
    video: 'video1',
    category: Categories.SCHOOL,
  },
  {
    id: 3,
    title: 'Project',
    subTitle: 'Login and registration app with NodeJS backend.',
    body: 'body2',
    images: [images.hvgea],
    video: 'video2',
    category: Categories.HOBBY,
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
