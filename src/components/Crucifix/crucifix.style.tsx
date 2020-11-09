import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const SIZE = metrics.scale(100);
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  topPiece: {
    width: SIZE / 2,
    height: SIZE,
    borderColor: colors.white,
    borderWidth: 1,
    borderBottomWidth: 0,
    position: 'absolute',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  rightPiece: {
    width: SIZE,
    height: SIZE / 2,
    borderColor: colors.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: SIZE,
    right: metrics.scale(415),
  },
  leftPiece: {
    width: SIZE,
    height: SIZE / 2,
    borderColor: colors.white,
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute',
    top: SIZE,
    left: metrics.scale(415),
  },
  bottomPiece: {
    width: SIZE / 2,
    height: SIZE * 2,
    borderColor: colors.white,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: metrics.scale(150),
    zIndex: 1,
    backgroundColor: 'purple',
  },
  centerSquare: {
    width: SIZE / 2,
    height: SIZE / 1.9,
    top: SIZE - 1,
  },
});
