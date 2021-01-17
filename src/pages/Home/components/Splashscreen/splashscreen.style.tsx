import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';

export default StyleSheet.create({
  strokeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
  stroke: {
    top: metrics.screenHeight / 2,
    position: 'absolute',
    alignSelf: 'center',
  },
});
