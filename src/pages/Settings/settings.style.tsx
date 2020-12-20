import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const SLIDER_SIZE = metrics.scale(100);
const CIRCLE_SIZE = metrics.scale(75);
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
    alignItems: 'flex-end',
    position: 'absolute',
    top: metrics.scaleY(700),
    right: metrics.scale(100),
  },
  cable: {
    position: 'absolute',
    top: -50,
    right: metrics.scale(135),
    backgroundColor: colors.white,
    height: metrics.scaleY(855),
    width: metrics.scale(30),
    borderRadius: metrics.scale(30),
    zIndex: 1,
  },
  sliderField: {
    width: SLIDER_SIZE,
    height: SLIDER_SIZE * 2,
    backgroundColor: colors.grey,
    borderRadius: SLIDER_SIZE / 2,
    alignItems: 'center',
  },
  sliderCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    backgroundColor: colors.white,
    borderRadius: CIRCLE_SIZE / 2,
    marginTop: metrics.scale(10),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    backgroundColor: colors.grey,
    width: CIRCLE_SIZE / 1.5,
    height: CIRCLE_SIZE / 1.5,
    borderRadius: CIRCLE_SIZE / 1.5 / 2,
    zIndex: 3,
  },
});
