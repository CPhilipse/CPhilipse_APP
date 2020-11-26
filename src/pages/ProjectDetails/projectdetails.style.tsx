import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {alignItems: 'center', marginTop: metrics.vertical.spacing.xl},
  categories: {...metrics.fonts.smallItalic, color: colors.lightPurple},
  title: {
    ...metrics.fonts.subtitle,
    paddingTop: metrics.scaleY(20),
    color: colors.lightPurple,
  },
  cardContainer: {
    position: 'absolute',
    bottom: metrics.scale(250),
    // height: metrics.scale(700),
    // width: metrics.screenWidth,
  },
  card: {
    width: metrics.screenWidth / 1.3,
    height: metrics.screenWidth / 2,
    backgroundColor: colors.palePurple,
    borderRadius: metrics.scale(75),
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingTop: metrics.vertical.spacing.m,
    marginHorizontal: 32,
    // marginLeft: metrics.scale(80),
    // marginHorizontal: metrics.scale(40),
  },
  cardTitle: {
    ...metrics.fonts.subtitle,
  },
  cardBody: {
    ...metrics.fonts.regular,
  },
});
