import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    paddingTop: metrics.scaleY(300),
    alignItems: 'center',
  },
});
