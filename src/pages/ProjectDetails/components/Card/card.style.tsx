import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';
import {CARD_SIZE} from '../../projectdetails.style';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.lightPurple,
    alignItems: 'center',
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: metrics.scale(50),
  },
  card: {
    padding: metrics.horizontal.pagePadding,
  },
  cardTitle: {
    ...metrics.fonts.regularBold,
  },
  cardBody: {
    ...metrics.fonts.smallRegular,
  },
});
