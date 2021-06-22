import {StyleSheet} from 'react-native';
import {metrics} from '../../../../themes';

export default StyleSheet.create({
  cphilipse: {
    paddingHorizontal: metrics.horizontal.pagePadding,
    marginTop: metrics.scale(100),
    width: metrics.scale(600),
    height: metrics.scale(300),
  },
  clemens: {
    ...metrics.fonts.bigAssTitle,
  },
  philipse: {
    ...metrics.fonts.subtitle,
  },
});
