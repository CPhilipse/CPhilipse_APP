import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    bottom: metrics.scale(125),
  },
  subtitle: {
    ...metrics.fonts.smallSubtitle,
    color: colors.white,
  },
  body: {
    color: colors.white,
  },
});
