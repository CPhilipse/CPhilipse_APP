import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const SLIDER_SIZE = metrics.scale(100);
export const CIRCLE_SIZE = metrics.scale(75);
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    backgroundColor: colors.black,
    ...StyleSheet.absoluteFillObject,
    height: metrics.getStatusBarHeight(),
    width: metrics.screenWidth,
    zIndex: 99,
  },
  settingsContainer: {
    paddingTop: metrics.scaleY(150),
  },
});
