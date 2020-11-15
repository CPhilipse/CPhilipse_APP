import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {interpolateColor} from 'react-native-redash';
import {colors} from '../../../themes';

export const useCrucifix = () => {
  const scale = useSharedValue(1.2);
  const color = useSharedValue(0);

  const startAnimatingCrucifix = () => {
    'worklet';
    scale.value = withRepeat(
      withTiming(1.6, {
        duration: 1500,
      }),
      -1,
      true,
    );

    color.value = withRepeat(
      withTiming(1, {
        duration: 2000,
      }),
      -1,
      true,
    );
  };

  /** 'worklet' is not necessary here. Since it's already under the hood of the Reanimated hooks. */
  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  /** TODO: Fix this code by following the DRY principle.
   * For some reason, colorStyle cannot be used for multiple Animated.Views therefore this temp workaround.
   * */
  const colorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      color.value,
      [0, 1],
      [colors.black, colors.white],
    );
    return {
      backgroundColor,
    };
  });
  const colorStyle2 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      color.value,
      [0, 1],
      [colors.black, colors.white],
    );
    return {
      backgroundColor,
    };
  });
  const colorStyle3 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      color.value,
      [0, 1],
      [colors.black, colors.white],
    );
    return {
      backgroundColor,
    };
  });
  const colorStyle4 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      color.value,
      [0, 1],
      [colors.black, colors.white],
    );
    return {
      backgroundColor,
    };
  });
  const colorStyle5 = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      color.value,
      [0, 1],
      [colors.black, colors.white],
    );
    return {
      backgroundColor,
    };
  });

  return {
    startAnimatingCrucifix,
    scaleStyle,
    colorStyle,
    colorStyle2,
    colorStyle3,
    colorStyle4,
    colorStyle5,
  };
};
