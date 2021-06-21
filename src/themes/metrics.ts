import {Dimensions} from 'react-native';
import {isAndroid, isiOS, isiPhoneX} from '../utils/PlatformUtils';

const {height, width} = Dimensions.get('window');

const HORIZONTAL_PAGE_PADDING_PERCENTAGE = 8;
const HORIZONTAL_SIZE_PERCENTAGE = 16;
const HORIZONTAL_PADDING_PERCENTAGE = 8;

const getHorizontalValue = (percentage: number) =>
  Math.round(width * (percentage / 100));

const horizontal = {
  /*
	  HORIZONTAL SPACINGS
	  ========
	  [x|     | |     | |     | |     | |     |x]
	  PagePadding: Content on a page start, if it's not full width, with a horizontal page padding
	  [ |  x  | |  x  | |  x  | |  x  | |  x  | ]
	  Size: The width of small elements, like icons, are related to this size
	  [ |     |x|     |x|     |x|     |x|     | ]
	  Padding: The space between elements, like a label next to an icon
	  [ |  x  |x|     | |     | |     | |     | ]
	  Spacing: Size and padding together, for positioning like Vertical spacing
	*/
  pagePadding: getHorizontalValue(HORIZONTAL_PAGE_PADDING_PERCENTAGE),
  size: getHorizontalValue(HORIZONTAL_SIZE_PERCENTAGE),
  padding: getHorizontalValue(HORIZONTAL_PADDING_PERCENTAGE),
  spacing: getHorizontalValue(
    HORIZONTAL_SIZE_PERCENTAGE + HORIZONTAL_PADDING_PERCENTAGE,
  ),
};
const horizontalScaleFactor = width / 1080;
const verticalScaleFactor = height / 2220;

const scale = (val: number) => val * horizontalScaleFactor;
const scaleY = (val: number) => val * verticalScaleFactor;

const VERTICAL_STEP = scaleY(42);
const getVerticalValue = (number: number) => number * VERTICAL_STEP;

export const getStatusBarHeight = () => {
  if (isiOS) {
    return isiPhoneX ? 44 : 20;
  }
  if (isAndroid) {
    return 22;
  }
  return 0;
};

const topPadding = isiPhoneX ? 40 : 0;
const bottomPadding = isiPhoneX ? 25 : 0;

const tabBarHeight = scaleY(160) + (isiPhoneX ? 0 : 10);

const vertical = {
  spacing: {
    xxs: getVerticalValue(0.25),
    xs: getVerticalValue(0.5),
    s: getVerticalValue(1),
    m: getVerticalValue(2),
    l: getVerticalValue(3),
    xl: getVerticalValue(4),
  },
};

const icon = {
  s: scale(50),
  m: scale(70),
  l: scale(90),
};

const fonts = {
  bigAssTitle: {
    fontSize: scale(100),
  },
  title: {
    fontSize: scale(80),
  },
  subtitle: {
    fontSize: scale(60),
  },
  mediumSubtitle: {
    fontFamily: 'Sansita-Bold',
    fontSize: scale(50),
  },
  smallSubtitle: {
    fontFamily: 'Sansita-Bold',
    fontSize: scale(40),
  },
  regularBold: {
    fontFamily: 'Sansita-Bold',
  },
  regularExtraBold: {
    fontFamily: 'Sansita-ExtraBold',
  },
  regularItalic: {
    fontFamily: 'Sansita-Italic',
  },
  mediumRegular: {
    fontSize: scale(35),
  },
  smallRegular: {
    fontSize: scale(30),
  },
  smallItalic: {
    fontFamily: 'Sansita-Italic',
    fontSize: scale(30),
  },
};

export default {
  screenHeight: height,
  screenWidth: width,
  horizontal,
  vertical,
  fonts,
  scale,
  scaleY,
  topPadding,
  bottomPadding,
  tabBarHeight,
  icon,
  getStatusBarHeight,
  heightWithoutStatusBar: height - getStatusBarHeight(),
};
