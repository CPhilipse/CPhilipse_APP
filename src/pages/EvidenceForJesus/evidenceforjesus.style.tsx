import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    marginTop: metrics.vertical.spacing.l,
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  headerTitle: {
    ...metrics.fonts.smallSubtitle,
    alignSelf: 'flex-end',
  },
  title1: {
    ...metrics.fonts.regularBold,
    marginTop: metrics.vertical.spacing.xl,
  },
  body1: {},
});
