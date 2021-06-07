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
  url: string;
  category: string;
}

export const projects = [
  {
    id: 0,
    home_image: images.app_icon,
    title: 'Portfolio App',
    subTitle: 'Welcome to my very own app!',
    body: 'portfolio_app',
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
    url: null,
    category: Categories.HOBBY,
  },
  {
    id: 1,
    home_image: images.hvgea_icon,
    title: 'HvGeA',
    subTitle: 'Home of Prayer and Worship.',
    body: 'hvgea_app',
    images: [
      images.hvgea_app01,
      images.hvgea_app02,
      images.hvgea_app03,
      images.hvgea_app04,
      images.hvgea_app05,
      images.hvgea_app06,
      images.hvgea_app07,
      images.hvgea_app08,
      images.hvgea_app09,
      images.hvgea_app10,
      images.hvgea_app11,
      images.hvgea_app12,
      images.hvgea_app13,
      images.hvgea_app14,
      images.hvgea_app15,
      images.hvgea_app16,
      images.hvgea_app17,
      images.hvgea_app18,
      images.hvgea_app19,
      images.hvgea_app20,
    ],
    url: null,
    category: Categories.BLOG,
  },
  {
    id: 2,
    home_image: images.android_default_icon,
    title: 'Exam',
    subTitle:
      'Mobile Application Development (MAD). Creating detailed incident reports.',
    body: 'exam_app',
    images: [
      images.exam_app01,
      images.exam_app02,
      images.exam_app03,
      images.exam_app04,
      images.exam_app05,
      images.exam_app06,
    ],
    url: null,
    category: Categories.SCHOOL,
  },
  {
    id: 3,
    home_image: images.android_default_icon,
    title: 'Internship',
    subTitle: 'All the apps I worked on within my internship.',
    body: 'internship_copy',
    images: [
      images.mm_01,
      images.mm_02,
      images.mm_03,
      images.mm_04,
      images.mm_05,
      images.mm_06,
      images.mm_07,
      images.mm_08,
    ],
    url: null,
    category: Categories.SCHOOL,
  },
  {
    id: 4,
    home_image: images.android_default_icon,
    title: 'IWDER Module',
    subTitle: 'A website I made in HTML, CSS and JS to wrap up a module.',
    body: 'iwder_web',
    images: [
      images.iwder_01,
      images.iwder_02,
      images.iwder_03,
      images.iwder_04,
      images.iwder_05,
      images.iwder_06,
      images.iwder_07,
      images.iwder_08,
    ],
    url: 'https://iwder-s1125584-finalassignment.web.app/index.html',
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
