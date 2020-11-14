import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    paddingTop: metrics.scaleY(150),
  },
  row: {
    paddingTop: metrics.scaleY(50),
    alignItems: 'center',
  },
});
