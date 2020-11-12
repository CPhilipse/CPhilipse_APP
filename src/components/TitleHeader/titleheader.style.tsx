import {StyleSheet} from 'react-native';
import {metrics} from '../../themes';

export default StyleSheet.create({
  header: {
    ...metrics.fonts.title,
    alignSelf: 'center',
    top: metrics.scale(105),
  },
});
