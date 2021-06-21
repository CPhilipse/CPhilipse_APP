import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';

export const SLIDER_SIZE = metrics.scale(100);
export const CIRCLE_SIZE = metrics.scale(75);
export default StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: metrics.scaleY(700),
    right: metrics.scale(100),
  },
  cable: {
    position: 'absolute',
    top: -metrics.scaleY(105), // top out of screen
    right: metrics.scale(140),
    height: metrics.scaleY(858),
    width: metrics.scale(15),
    borderRadius: metrics.scale(30),
    zIndex: 1,
    backgroundColor: colors.palePurple,
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
    borderRadius: CIRCLE_SIZE / 2,
    marginTop: metrics.scale(10),
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.palePurple,
  },
});
