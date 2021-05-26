import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const PADDING = 0.74;
export const CARD_SIZE = metrics.screenWidth * PADDING;
export const OFFSET_CARD = (metrics.screenWidth - CARD_SIZE) / 2;
export const IMAGE_SIZE = metrics.scale(200);
export const SPACING = 10;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.ultraLightOverlay,
    zIndex: 1,
  },
  overlayCopy: {
    color: colors.white,
    ...metrics.fonts.mediumRegular,
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
  activeStyle: {
    borderWidth: 2,
    borderColor: colors.lightPurple,
  },
  extraInformationOverlayContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.darkOverlay,
    zIndex: 1,
  },
  textContainer: {
    marginTop: metrics.vertical.spacing.m,
    paddingHorizontal: metrics.horizontal.padding,
  },
  extraBtn: {
    width: IMAGE_SIZE * 2,
    height: IMAGE_SIZE / 2,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: colors.lightGrey,
    bottom: IMAGE_SIZE * 2.2,
    right: metrics.horizontal.pagePadding,
    borderRadius: IMAGE_SIZE * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
