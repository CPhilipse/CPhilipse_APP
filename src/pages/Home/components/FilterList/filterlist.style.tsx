import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';

export default StyleSheet.create({
  categories: {
    marginBottom: metrics.vertical.spacing.m,
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  category: {
    ...metrics.fonts.regularBold,
    color: colors.lightGrey,
    paddingRight: metrics.horizontal.padding,
  },
});
