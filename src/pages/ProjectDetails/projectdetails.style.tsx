import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const WIDTH = metrics.screenWidth;
const PADDING = 0.74;
export const CARD_HEIGHT = (WIDTH * PADDING) / 2;
export const CARD_WIDTH = WIDTH * PADDING;
export const OFFSET_CARD = metrics.screenWidth / 2 - CARD_WIDTH / 2;
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
  cardRow: {
    position: 'absolute',
    bottom: metrics.vertical.spacing.xl,
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: [{translateX: OFFSET_CARD}],
  },
  cards: {
    width: metrics.screenWidth,
  },
  cardContainer: {
    backgroundColor: colors.lightPurple,
    alignItems: 'center',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  cardBody: {
    padding: metrics.horizontal.pagePadding,
  },
});
