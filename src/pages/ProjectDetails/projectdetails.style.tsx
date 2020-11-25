import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {position: 'absolute', top: 0},
  backgroundImageBlurred: {
    width: metrics.screenWidth,
    height: metrics.screenHeight / 1.4,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContainer: {
    position: 'absolute',
    bottom: metrics.scale(250),
  },
  card: {
    width: metrics.screenWidth / 1.3,
    // width: metrics.screenWidth,
    height: metrics.scale(700),
    backgroundColor: colors.palePurple,
    borderRadius: metrics.scale(75),
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingTop: metrics.vertical.spacing.m,
    // marginLeft: metrics.scale(80),
    marginHorizontal: metrics.scale(40),
  },
  cardTitle: {
    ...metrics.fonts.subtitle,
  },
  cardBody: {
    ...metrics.fonts.regular,
  },
});
