import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: metrics.scale(40),
    padding: metrics.scale(80),
    zIndex: 1,
  },
});
