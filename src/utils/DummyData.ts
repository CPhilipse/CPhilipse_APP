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
  categories: string[];
}

export const projects = [
  {
    id: 0,
    title: 'CPhilipse portfolio',
    subTitle: 'Welcome to my very own app!',
    body: 'This app is open source, so if interested in the code ....',
    images: [images.cphilipse],
    video: 'video2',
    categories: [Categories.HOBBY],
  },
  {
    id: 1,
    title: 'HvGeA',
    subTitle: 'Home of Prayer and Worship.',
    body: 'body',
    images: [images.hvgea],
    video: 'video',
    categories: [Categories.BLOG, Categories.PROJECT],
  },
  {
    id: 2,
    title: 'MAD School Exam',
    subTitle:
      'Mobile Application Development (MAD). Creating detailed incident reports.',
    body: 'body1',
    images: [images.cphilipse],
    video: 'video1',
    categories: [Categories.SCHOOL],
  },
  {
    id: 3,
    title: 'Summer project',
    subTitle: 'Login and registration app with NodeJS backend.',
    body: 'body2',
    images: [images.hvgea],
    video: 'video2',
    categories: [Categories.HOBBY],
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
  'I started making this app with the intent of practicing mobile animations. I knew I could go nuts with animations on my own app and since I really love animations, I went all out! While trying to not make it too chaotic.',
];
