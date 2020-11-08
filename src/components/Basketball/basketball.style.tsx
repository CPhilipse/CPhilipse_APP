import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    width: metrics.scale(50),
    height: metrics.scale(50),
    borderRadius: metrics.scaleY(50),
    borderWidth: metrics.scale(4),
    borderColor: colors.black,
    alignSelf: 'center',
  },
});
