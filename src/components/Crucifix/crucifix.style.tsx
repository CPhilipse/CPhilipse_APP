import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const SIZE = metrics.scale(15);
export const styles = StyleSheet.create({
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
    right: metrics.scale(522),
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
    left: metrics.scale(522),
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
    top: metrics.scale(22),
    zIndex: 1,
  },
  centerSquare: {
    width: SIZE / 2,
    height: SIZE / 1.9,
    top: SIZE - 1,
  },
});
