import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const SLIDER_SIZE = metrics.scale(100);
export const CIRCLE_SIZE = metrics.scale(75);
export const LAN_CIRCLE_SIZE = metrics.scale(150);
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    backgroundColor: colors.black,
    ...StyleSheet.absoluteFillObject,
    height: metrics.getStatusBarHeight(),
    width: metrics.screenWidth,
    zIndex: 2,
  },
  languageContainer: {
    top: metrics.scaleY(530),
    marginHorizontal: metrics.horizontal.pagePadding,
  },
  splashContainer: {
    top: metrics.scaleY(-50),
    marginHorizontal: metrics.horizontal.pagePadding,
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: LAN_CIRCLE_SIZE / 2,
    borderWidth: 1,
    borderColor: colors.lightPurple,
    width: LAN_CIRCLE_SIZE,
    height: LAN_CIRCLE_SIZE,
    marginRight: metrics.horizontal.padding,
  },
  lanOptions: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTitle: {
    ...metrics.fonts.smallSubtitle,
    paddingBottom: metrics.scaleY(40),
  },
  enButton: {
    left: 0,
    position: 'absolute',
    width: LAN_CIRCLE_SIZE,
    height: LAN_CIRCLE_SIZE,
    borderRadius: LAN_CIRCLE_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enText: {
    ...metrics.fonts.regularBold,
  },
  nlButton: {
    position: 'absolute',
    left: LAN_CIRCLE_SIZE,
    width: LAN_CIRCLE_SIZE,
    height: LAN_CIRCLE_SIZE,
    borderRadius: LAN_CIRCLE_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nlText: {
    ...metrics.fonts.regularBold,
  },
});
