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
  nextPagePadding: {
    marginTop: metrics.screenHeight / 1.5,
    paddingBottom: metrics.vertical.spacing.m,
  },
  headerTitle: {
    ...metrics.fonts.smallSubtitle,
    alignSelf: 'flex-end',
    marginTop: metrics.vertical.spacing.l,
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  title1: {
    ...metrics.fonts.regularBold,
    marginTop: metrics.vertical.spacing.xl,
  },
  body1: {},
});
