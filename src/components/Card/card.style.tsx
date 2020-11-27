import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';
import {HEADER_HEIGHT} from '../Header/header.style';

const SIZE = metrics.scale(600);
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    top: HEADER_HEIGHT * 1.5,
    alignSelf: 'center',
  },
  card: {
    width: SIZE,
    height: SIZE,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'flex-start',
    padding: metrics.horizontal.pagePadding,
    borderColor: colors.palePurple,
    backgroundColor: colors.black,
  },
  title: {
    ...metrics.fonts.smallSubtitle,
  },
  body: {
    ...metrics.fonts.smallRegular,
  },
  bodyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE / 1.5,
    height: SIZE / 2,
    borderRadius: metrics.scale(50),
    backgroundColor: colors.palePurple,
  },
  bodyButtonText: {
    ...metrics.fonts.regularExtraBold,
  },
});
