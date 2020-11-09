import {
  // Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
// import {interpolateColor} from 'react-native-redash';
// import {colors} from '../../../themes';

export const useCrucifix = () => {
  // TODO: Look whether you can still implement the colorInterpolation in the crucifix.
  //  Maybe even as a replacement for the scaling. Feels a bit weird, the scaling here.
  const scale = useSharedValue(1.4);

  const startAnimatingCrucifix = () => {
    'worklet';
    scale.value = withRepeat(
      withTiming(1.6, {
        duration: 1500,
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

  // const colorStyle = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     scale.value,
  //     [1, 2],
  //     [colors.black, colors.white],
  //   );
  //   return {
  //     backgroundColor,
  //   };
  // });

  return {
    startAnimatingCrucifix,
    scaleStyle,
    // colorStyle,
  };
};
