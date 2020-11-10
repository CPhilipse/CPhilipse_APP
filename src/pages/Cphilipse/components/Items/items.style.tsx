import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';

export default StyleSheet.create({
  characterColumn: {},
  basketball: {
    bottom: metrics.scale(200),
    left: metrics.scale(50),
    zIndex: 9,
    padding: metrics.scale(25),
  },
  crucifix: {
    bottom: metrics.scale(115),
    right: metrics.scale(60),
  },
  gameController: {
    left: metrics.scale(260),
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
});
