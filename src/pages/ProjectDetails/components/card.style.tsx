import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../themes';

const SPACING = 10;
export const CARD_SIZE = metrics.screenWidth * 0.73;
export const EMPTY_ITEM_SIZE = (metrics.screenWidth - CARD_SIZE) / 2;
export default StyleSheet.create({
  placeholder: {
    width: (metrics.screenWidth - CARD_SIZE) / 2,
  },
  container: {
    flex: 1,
    width: CARD_SIZE,
  },
  card: {
    alignItems: 'center',
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    backgroundColor: colors.palePurple,
    borderRadius: metrics.scale(75),
    paddingHorizontal: metrics.horizontal.pagePadding,
    paddingTop: metrics.vertical.spacing.m,
  },
  cardTitle: {
    ...metrics.fonts.subtitle,
  },
  cardBody: {
    ...metrics.fonts.regular,
  },
});
