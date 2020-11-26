import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import {HEADER_HEIGHT} from '../Header/header.style';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    top: HEADER_HEIGHT * 1.5,
    alignSelf: 'center',
  },
  card: {
    width: metrics.scale(600),
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
    padding: metrics.horizontal.pagePadding,
    borderColor: colors.palePurple,
    backgroundColor: colors.black,
  },
  body: {
    ...metrics.fonts.regular,
    color: colors.white,
  },
});
