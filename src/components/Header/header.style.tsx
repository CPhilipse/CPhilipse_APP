import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const HEADER_HEIGHT = metrics.screenHeight / 2.8;
export default StyleSheet.create({
  gradient: {
    position: 'absolute',
    height: HEADER_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    resizeMode: 'cover',
    width: metrics.screenWidth,
    height: HEADER_HEIGHT,
  },
  overlay: {
    position: 'absolute',
    height: HEADER_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.ultraLightOverlay,
  },
  textContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: metrics.scale(25),
  },
  imageTitle: {
    color: colors.white,
    ...metrics.fonts.title,
  },
});
