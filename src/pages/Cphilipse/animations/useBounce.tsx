import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

/**
 * TODO (I): Needs another look, the values aren't right.
 * What could be a nice idea though is that the user can swipe the ball and
 * the ball bounces on the 'floor'.
 * (I): idea
 * */
export const useBounce = () => {
  const translateX = useSharedValue(50);
  const translateY = useSharedValue(4);

  const startBasketballAnimation = () => {
    'worklet';
    translateX.value = withTiming(0, {
      duration: 3000,
      easing: Easing.linear,
    });

    translateY.value = withTiming(0, {
      duration: 3000,
      easing: Easing.bounce,
    });
  };

  /** 'worklet' is not necessary here. Since it's already under the hood of the Reanimated hooks. */
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
