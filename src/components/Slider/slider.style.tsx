import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const SLIDER_WIDTH = metrics.screenWidth / 1.25;
export const SLIDER_HEIGHT = metrics.scale(200);
export const KNOB_SIZE = SLIDER_HEIGHT - metrics.scale(20);
export default StyleSheet.create({
  slider: {
    width: SLIDER_WIDTH,
    height: SLIDER_HEIGHT,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: metrics.scale(150),
    justifyContent: 'center',
  },
  title: {
    ...metrics.fonts.subtitle,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 9,
  },
  knob: {
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: KNOB_SIZE / 2,
    height: KNOB_SIZE,
    width: KNOB_SIZE,
    marginLeft: metrics.scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: KNOB_SIZE,
    height: KNOB_SIZE,
    marginTop: metrics.scale(7),
    marginLeft: metrics.scale(10),
  },
});
