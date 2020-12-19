import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

const PROJECT_SIZE = metrics.screenWidth / 1.8;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  strokeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
  stroke: {
    top: metrics.screenHeight / 2,
    position: 'absolute',
    alignSelf: 'center',
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    borderColor: colors.black,
    borderWidth: 1,
    width: metrics.screenWidth / 1.1,
    height: metrics.screenWidth / 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cphilipse: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    marginVertical: metrics.vertical.spacing.xl,
    width: metrics.scale(600),
    height: metrics.scale(300),
  },
  clemens: {
    ...metrics.fonts.bigAssTitle,
  },
  philipse: {
    ...metrics.fonts.subtitle,
  },
  projectContainer: {
    marginLeft: metrics.horizontal.pagePadding,
    width: PROJECT_SIZE,
    height: PROJECT_SIZE * 2,
    backgroundColor: colors.lightPurple,
    borderRadius: PROJECT_SIZE / 2,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: metrics.vertical.spacing.s,
  },
  image: {
    width: PROJECT_SIZE * 0.8,
    height: PROJECT_SIZE * 0.8,
    borderRadius: PROJECT_SIZE,
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
    marginBottom: metrics.vertical.spacing.xl,
    paddingHorizontal: metrics.horizontal.pagePadding,
  },
  projectCategories: {
    ...metrics.fonts.smallItalic,
    backgroundColor: colors.ultraLightOverlay,
    padding: metrics.scale(20),
    marginRight: metrics.scale(20),
  },
});
