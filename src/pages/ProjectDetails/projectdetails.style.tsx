import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const PADDING = 0.74;
export const CARD_SIZE = metrics.screenWidth * PADDING;
export const OFFSET_CARD = (metrics.screenWidth - CARD_SIZE) / 2;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardRow: {
    position: 'absolute',
    bottom: metrics.vertical.spacing.xl,
    alignItems: 'center',
  },
  cards: {
    paddingHorizontal: OFFSET_CARD,
    width: metrics.screenWidth,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    backgroundColor: colors.lightOverlay,
    zIndex: 9999999,
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    resizeMode: 'cover',
  },
  mainFlatlist: {
    position: 'absolute',
  },
  listItem: {
    zIndex: -1,
  },
});
