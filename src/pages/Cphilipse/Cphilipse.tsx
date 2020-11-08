import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import Basketball from '../../components/Basketball';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
interface Props {
  navigation: any;
}

const AnimatedBasketball = Animated.createAnimatedComponent(Basketball);

// TODO: After this page, focus on the settings page. Locales (en (default), nl), darkmode and notifications perhaps.
const Cphilipse = ({navigation}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(100, {
      duration: 4000,
      easing: Easing.linear,
    });

    translateY.value = withTiming(5, {
      duration: 4000,
      easing: Easing.bounce,
    });
  }, [translateX, translateY]);

  const style = useAnimatedStyle(() => {
    // https://easings.net/#easeInBounce
    const bouncingY = Easing.bounce(translateY.value);

    return {
      transform: [{translateY: bouncingY}, {translateX: translateX.value}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={style}>
        <AnimatedBasketball />
      </Animated.View>
      <Text>CPhilipse page.</Text>
      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Cphilipse;
