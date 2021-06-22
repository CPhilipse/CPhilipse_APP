import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const PROJECT_SIZE = metrics.screenWidth / 1.8;
export default StyleSheet.create({
  container: {
    flex: 1,
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
  projectContainer: {
    marginLeft: metrics.horizontal.pagePadding,
    width: PROJECT_SIZE,
    height: PROJECT_SIZE * 1.9,
    backgroundColor: colors.lightPurple,
    borderRadius: PROJECT_SIZE / 4,
  },
  pillList: {
    paddingRight: metrics.horizontal.pagePadding,
  },
});
