import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  bodyContainer: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    bottom: metrics.scale(125),
  },
  subtitle: {
    ...metrics.fonts.smallSubtitle,
    color: colors.white,
  },
  body: {
    ...metrics.fonts.regular,
    color: colors.white,
  },
});
