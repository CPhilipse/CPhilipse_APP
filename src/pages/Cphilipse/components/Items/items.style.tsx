import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';

const SIZE = metrics.scale(25);
export default StyleSheet.create({
  characterColumn: {},
  basketball: {
    bottom: metrics.scale(200),
    left: metrics.scale(40),
    zIndex: 9,
    alignItems: 'center',
    justifyContent: 'center',
    width: metrics.scale(120),
    height: metrics.scale(120),
  },
  crucifix: {
    bottom: metrics.scale(115),
    right: metrics.scale(60),
  },
  gameController: {
    left: metrics.scale(245),
    alignItems: 'center',
    position: 'absolute',
    top: metrics.scale(135),
  },
  nineteenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: metrics.scale(5),
    right: metrics.scale(60),
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
    alignSelf: 'flex-end',
    bottom: metrics.scale(195),
    right: metrics.scale(240),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    ...metrics.fonts.regularExtraBold,
  },

  container: {
    alignItems: 'center',
  },
  topPiece: {
    width: SIZE / 2,
    height: SIZE,
    borderColor: colors.white,
    borderWidth: 0.4,
    borderBottomWidth: 0,
    position: 'absolute',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  rightPiece: {
    width: SIZE,
    height: SIZE / 2,
    borderColor: colors.white,
    borderWidth: 0.4,
    borderLeftWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: SIZE,
    // right: metrics.scale(522), // with scaling
    right: metrics.scale(510),
  },
  leftPiece: {
    width: SIZE,
    height: SIZE / 2,
    borderColor: colors.white,
    borderWidth: 0.4,
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute',
    top: SIZE,
    // left: metrics.scale(522), // with scaling
    left: metrics.scale(510),
  },
  bottomPiece: {
    width: SIZE / 2,
    height: SIZE * 2,
    borderColor: colors.white,
    borderWidth: 0.4,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    // top: metrics.scale(22), // with scaling
    top: metrics.scale(37),
    zIndex: 1,
  },
  centerSquare: {
    width: SIZE / 2,
    height: SIZE / 2,
    top: SIZE,
  },
});
