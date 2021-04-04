import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../../../themes';
import {PROJECT_SIZE} from '../../home.style';

export default StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: PROJECT_SIZE * 0.1,
  },
  image: {
    width: PROJECT_SIZE * 0.8,
    height: PROJECT_SIZE * 0.8,
    borderRadius: PROJECT_SIZE / 4,
  },
  projectTitle: {
    ...metrics.fonts.mediumSubtitle,
    paddingHorizontal: metrics.horizontal.pagePadding,
    marginTop: metrics.vertical.spacing.m,
  },
  projectSubtitle: {
    ...metrics.fonts.smallRegular,
    paddingHorizontal: metrics.horizontal.pagePadding,
    marginTop: metrics.vertical.spacing.s,
  },
  categoriesContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginBottom: metrics.vertical.spacing.s,
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  projectCategories: {
    ...metrics.fonts.smallItalic,
    backgroundColor: colors.ultraLightOverlay,
    padding: metrics.scale(20),
    marginRight: metrics.scale(20),
    borderRadius: metrics.scale(20),
  },
  favorite: {
    position: 'absolute',
    right: metrics.horizontal.pagePadding,
    bottom: metrics.vertical.spacing.s,
  },
});
