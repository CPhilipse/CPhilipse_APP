import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {interpolateColor} from 'react-native-redash';
import {colors} from '../../../themes';

export const useCrucifix = () => {
  const scale = useSharedValue(1);

  const startAnimatingCrucifix = () => {
    'worklet';
    scale.value = withRepeat(
      withTiming(3, {
        duration: 2500,
      }),
      -1,
      true,
    );
  };

  /** 'worklet' is not necessary here. Since it's already under the hood of the hooks like useAnimatedStyle. */
  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const colorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scale.value,
      [1, 2],
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
  };
};
