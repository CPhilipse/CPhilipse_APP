import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

const SIZE = metrics.screenWidth / 4;
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  topPiece: {
    width: SIZE / 2,
    height: SIZE,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderBottomWidth: 0,
    position: 'absolute',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  rightPiece: {
    width: SIZE,
    height: SIZE / 2,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: SIZE,
    right: metrics.scale(203),
  },
  leftPiece: {
    width: SIZE,
    height: SIZE / 2,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute',
    top: SIZE,
    left: metrics.scale(203),
  },
  bottomPiece: {
    width: SIZE / 2,
    height: SIZE * 2,
    borderColor: colors.lightPurple,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    top: SIZE * 1.5,
  },
  centerSquare: {
    width: SIZE / 2,
    height: SIZE / 1.94,
    top: SIZE - 1,
  },
});
