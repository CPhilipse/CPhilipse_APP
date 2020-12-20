import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';
import {CARD_SIZE} from '../../projectdetails.style';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.lightPurple,
    borderRadius: metrics.scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: metrics.horizontal.pagePadding,
    width: CARD_SIZE,
    height: CARD_SIZE,
  },
  cardTitle: {
    ...metrics.fonts.regularBold,
  },
  cardBody: {
    ...metrics.fonts.smallRegular,
  },
});
