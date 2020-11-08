import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useBounce = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const startAnimation = () => {
    translateX.value = withTiming(100, {
      duration: 4000,
      easing: Easing.linear,
    });

    translateY.value = withTiming(5, {
      duration: 4000,
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
    startAnimation,
    style,
  };
};
