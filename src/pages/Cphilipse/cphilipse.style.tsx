import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import {HEADER_HEIGHT} from '../../components/Header/header.style';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  basketball: {
    top: HEADER_HEIGHT / 2,
    position: 'absolute',
    left: -metrics.scale(25),
  },
  crucifix: {
    bottom: metrics.scale(110),
    right: metrics.scale(150),
  },
  nineteenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: metrics.scale(125),
    right: metrics.scale(35),
  },
  nineteen: {
    ...metrics.fonts.subtitle,
    color: colors.white,
  },
});
