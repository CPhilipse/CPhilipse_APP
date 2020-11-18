import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

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
  title: {
    fontSize: 20,
  },
});
