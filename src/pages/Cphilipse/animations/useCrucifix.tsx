import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const useCrucifix = () => {
  const color = useSharedValue(0);

  const startAnimatingCrucifix = () => {
    'worklet';
    color.value = withRepeat(
      withTiming(1, {
        duration: 2500,
      }),
      -1,
      true,
    );
  };

  /** TODO: Fix this code by following the DRY principle.
   * For some reason, colorStyle cannot be used for multiple Animated.Views therefore this temp workaround.
   * */
  /** 'worklet' is not necessary here. Since it's already under the hood of the Reanimated hooks. */
  const colorStyle = useAnimatedStyle(() => {
    const opacity = interpolate(color.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
  const colorStyle2 = useAnimatedStyle(() => {
    const opacity = interpolate(color.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
  const colorStyle3 = useAnimatedStyle(() => {
    const opacity = interpolate(color.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
  const colorStyle4 = useAnimatedStyle(() => {
    const opacity = interpolate(color.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });
  const colorStyle5 = useAnimatedStyle(() => {
    const opacity = interpolate(color.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });

  return {
    startAnimatingCrucifix,
    colorStyle,
    colorStyle2,
    colorStyle3,
    colorStyle4,
    colorStyle5,
  };
};
