import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';
import {CARD_SIZE} from '../../projectdetails.style';

export default StyleSheet.create({
  container: {
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRadius: metrics.scale(50),
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  card: {
    padding: metrics.horizontal.pagePadding,
    width: CARD_SIZE,
    height: CARD_SIZE,
  },
  cardTitle: {
    ...metrics.fonts.regularBold,
    color: colors.white,
  },
  cardBody: {
    ...metrics.fonts.smallRegular,
    color: colors.white,
  },
});
