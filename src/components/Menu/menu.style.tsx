import {colors, metrics} from '../../themes';
import {StyleSheet} from 'react-native';
const CIRCLE_SIZE = metrics.scale(100);
export default StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: metrics.scale(120),
    right: metrics.horizontal.pagePadding,
    zIndex: 9,
  },
  menu: {
    width: metrics.scale(125),
    height: metrics.scale(125),
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineOne: {
    width: metrics.scale(75),
    height: metrics.scale(10),
    backgroundColor: colors.lightPurple,
  },
  lineTwo: {
    width: metrics.scale(75),
    height: metrics.scale(10),
    backgroundColor: colors.lightPurple,
    marginTop: metrics.scaleY(10),
    right: metrics.scaleY(20),
  },
  closeIcon: {
    backgroundColor: colors.lightPurple,
  },
  menuCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.lightPurple,
    position: 'absolute',
    right: metrics.scale(100),
    top: metrics.scale(120),
    zIndex: 2,
  },
  menuItem: {
    marginHorizontal: metrics.horizontal.pagePadding,
    top: metrics.scaleY(600),
  },
  menuItem2: {
    marginHorizontal: metrics.horizontal.pagePadding,
    top: metrics.scaleY(675),
  },
  menuItemText: {...metrics.fonts.mediumSubtitle},
});
