import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import Basketball from '../../components/Basketball';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {images} from '../../themes';
import Header from '../../components/Header';
import {useBounce} from './animations/useBounce';
import {useCrucifix} from './animations/useCrucifix';
import Crucifix from '../../components/Crucifix/Crucifix';

interface Props {
  navigation: any;
}

const Cphilipse = ({navigation}: Props) => {
  const {style, startBasketballAnimation} = useBounce();
  const {colorStyle, scaleStyle, startAnimatingCrucifix} = useCrucifix();
  const scale = useSharedValue(1);

  useEffect(() => {
    startBasketballAnimation();
    startAnimatingCrucifix();
  }, [startBasketballAnimation, startAnimatingCrucifix, scale.value, scale]);

  return (
    <View style={styles.container}>
      <Header title={'Clemens Philipse'} image={images.cphilipse} />

      <Animated.View style={[style, styles.basketball]}>
        <Basketball />
      </Animated.View>
      <Crucifix {...{scaleStyle, colorStyle}} />

      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Cphilipse;
