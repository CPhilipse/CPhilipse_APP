import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useBounce = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const startBasketballAnimation = () => {
    'worklet';
    translateX.value = withTiming(70, {
      duration: 3000,
      easing: Easing.linear,
    });

    translateY.value = withTiming(4, {
      duration: 3000,
      easing: Easing.bounce,
    });
  };

  const style = useAnimatedStyle(() => {
    // https://easings.net/#easeInBounce
    const bouncingY = Easing.bounce(translateY.value);

    return {
      transform: [{translateY: bouncingY}, {translateX: translateX.value}],
    };
  });

  return {
    startBasketballAnimation,
    style,
  };
};
