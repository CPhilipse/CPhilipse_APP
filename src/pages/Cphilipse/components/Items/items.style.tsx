import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';
import {CARD_SIZE} from '../../../ProjectDetails/projectdetails.style';

const SIZE = metrics.scale(110);
export default StyleSheet.create({
  characterColumn: {
    width: CARD_SIZE,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: metrics.scale(30),
  },
  basketball: {
    zIndex: 9,
    width: SIZE,
    height: SIZE,
  },
  crucifix: {
    width: SIZE,
    height: SIZE,
    right: metrics.scale(15),
  },
  gameController: {
    width: SIZE,
    height: SIZE,
  },
  nineteenContainer: {
    width: SIZE,
    height: SIZE,
  },
  nineteen: {
    ...metrics.fonts.subtitle,
    color: colors.white,
  },
  button: {
    backgroundColor: colors.white,
    width: metrics.scale(275),
    height: metrics.scale(65),
    borderRadius: metrics.scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...metrics.fonts.regularExtraBold,
  },
});
