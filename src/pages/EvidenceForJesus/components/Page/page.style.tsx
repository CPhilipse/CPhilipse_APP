import {StyleSheet} from 'react-native';
import {metrics} from '../../../../themes';

export default StyleSheet.create({
  container: {},
  page: {
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  title: {
    ...metrics.fonts.regularBold,
    marginTop: metrics.vertical.spacing.xl,
  },
  body: {},
  crucifixTopLayer: {zIndex: 1},
  crucifixShadow: {
    left: metrics.scale(35),
    bottom: metrics.scale(110),
    opacity: 0.5,
  },
  swipeUpContainer: {
    position: 'absolute',
    top: metrics.screenHeight * 0.88,
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  swipeUpCopy: {
    marginBottom: metrics.vertical.spacing.s,
  },
});
