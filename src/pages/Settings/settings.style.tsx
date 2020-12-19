import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const SIZE = metrics.scale(200);
const CIRCLE_SIZE = metrics.scale(175);
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    paddingTop: metrics.scaleY(150),
  },
  row: {
    paddingTop: metrics.scaleY(50),
    alignItems: 'center',
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderField: {
    width: SIZE,
    height: SIZE * 2,
    backgroundColor: colors.white,
    borderRadius: SIZE / 2,
    alignItems: 'center',
  },
  sliderCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: colors.black,
    borderRadius: CIRCLE_SIZE / 2,
    marginTop: metrics.scale(10),
  },
});
