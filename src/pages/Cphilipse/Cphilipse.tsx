import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import Basketball from '../../components/Basketball';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {images} from '../../themes';
import Header from '../../components/Header';
import {useBounce} from './animations/useBounce';

interface Props {
  navigation: any;
}

// TODO: After this page, focus on the settings page. Locales (en (default), nl), darkmode and notifications perhaps.
const Cphilipse = ({navigation}: Props) => {
  const {style, startAnimation} = useBounce();

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <View style={styles.container}>
      <Header title={'Clemens Philipse'} image={images.cphilipse} />

      <Animated.View style={style}>
        <Basketball />
      </Animated.View>

      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Cphilipse;
