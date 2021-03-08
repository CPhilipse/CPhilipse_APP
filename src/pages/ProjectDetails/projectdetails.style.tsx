import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const PADDING = 0.74;
export const CARD_SIZE = metrics.screenWidth * PADDING;
export const OFFSET_CARD = (metrics.screenWidth - CARD_SIZE) / 2;
const IMAGE_SIZE = metrics.scale(200);
export const SPACING = 10;
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
    backgroundColor: colors.lightOverlay,
    zIndex: 1,
  },
  image: {
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
  smallFlatlist: {
    position: 'absolute',
    zIndex: 9,
    bottom: IMAGE_SIZE,
  },
  smallImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: metrics.scale(20),
    marginRight: SPACING,
  },
});
