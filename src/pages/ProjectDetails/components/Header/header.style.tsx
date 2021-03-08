import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: metrics.vertical.spacing.xl,
    zIndex: 1,
  },
  categories: {...metrics.fonts.smallItalic, color: colors.lightPurple},
  title: {
    ...metrics.fonts.subtitle,
    paddingTop: metrics.scaleY(20),
    color: colors.lightPurple,
  },
});
