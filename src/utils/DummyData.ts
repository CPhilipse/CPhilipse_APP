import {ImageRequireSource} from 'react-native';
import Categories from '../enum/Categories';
import {images} from '../themes';

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

export const projects = [
  {
    id: 0,
    home_image: images.app_icon,
    title: 'Portfolio App',
    subTitle: 'Welcome to my very own app!',
    body:
      'Background\nI wanted to make my own app with a lot of fancy animations. So I started making this app. This app does not have the amount of fancy animations as I initially had in mind. I started to drift away from making apps in general when I started my new education, which does not have a lot do to with making apps. Despite of that, I really enjoyed making this app, I think it looks beautiful and it does have some really nice animations.\n\nThe app\nThe photos are the screens you can visit in the app. The page I am most proud of is the home page. This page has the splashscreen with the nice animation, the filter and just a beautiful design.\n\nDuration\nIt took me approximately 7 months to finish this app from start to end.',
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
    body:
      'Background\nMy aunt sent me a screenshot of a post on Facebook saying that someone of the church is looking for someone who can build an app. It sounded interesting, so I contacted this person, we met up and discussed the app. He wanted a blog to reach out to people more easily for the people who attend his organized prayer nights.\n\nThe app\nThis app is a blog which contains a full login system, splashscreen, comments on each article, multiple categories, feedback page, library, settings, the admin has its own post screen on which the admin can style and customize the text with bold, striked, linking to a different page etc., the admin can make books from within the app, delete comments/feedback of users, make posts with multiple images. There is a notifications system and users can reserve books.\nThis was quite a big app to make.\n\nDuration\nThere is a lot to say about this app and my progress, but I am leaving it here. It took me about 1 year to finish this app.',
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
    body:
      "Background\nFor my previous education on the MBO (secondary professional certificate), I had to make an app to wrap up an important module. I believe I was given about 3 weeks to make this app with the required preparation rapports and we were teached making an app for like 1 month.\n\nThe app\nAs an user you should be able to make an incident through the app as to which you can notify certain people with through email. When opening the app, there'll be a button to open the camera. When making the photo, you'll go to the form where the photo is being displayed. On this form the location is automatically being added. You can describe the incident and categorize this incident in five categories. Then there will be an option to mail this incident or push this incident, which will save the data locally.\n\nDuration\nIt took me the full 3 weeks to make this app.",
    images: [images.cphilipse],
    video: 'video1',
    category: Categories.SCHOOL,
  },
  {
    id: 3,
    home_image: images.android_default_icon,
    title: 'Internship',
    subTitle: 'All the apps I worked on within my second internship.',
    body: 'body2',
    images: [images.hvgea],
    video: 'video2',
    category: Categories.SCHOOL,
  },
  {
    id: 4,
    home_image: images.android_default_icon,
    title: 'IWDER Module',
    subTitle: 'A website I made in HTML, CSS and JS to wrap up a module.',
    body: 'body2',
    images: [images.hvgea],
    video: 'video2',
    category: Categories.SCHOOL,
  },
  {
    id: 5,
    home_image: images.android_default_icon,
    title: 'First internship',
    subTitle: 'The websites I worked on within my first internship.',
    body: 'body2',
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
