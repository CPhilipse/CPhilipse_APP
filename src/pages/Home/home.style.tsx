import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const PROJECT_SIZE = metrics.screenWidth / 1.8;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  padding: {
    marginTop: metrics.vertical.spacing.s,
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    borderColor: colors.black,
    borderWidth: 1,
    width: metrics.screenWidth / 1.1,
    height: metrics.screenWidth / 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cphilipse: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    marginTop: metrics.scale(100),
    width: metrics.scale(600),
    height: metrics.scale(300),
  },
  clemens: {
    ...metrics.fonts.bigAssTitle,
  },
  philipse: {
    ...metrics.fonts.subtitle,
  },
  projectContainer: {
    marginLeft: metrics.horizontal.pagePadding,
    width: PROJECT_SIZE,
    height: PROJECT_SIZE * 2,
    backgroundColor: colors.lightPurple,
    borderRadius: PROJECT_SIZE / 2,
  },
  categories: {
    marginBottom: metrics.vertical.spacing.m,
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  category: {
    ...metrics.fonts.regularBold,
    color: colors.lightGrey,
    paddingRight: metrics.horizontal.padding,
  },
  pillList: {
    paddingRight: metrics.horizontal.pagePadding,
  },
});
