import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {colors, metrics} from '../../../themes';
import {interpolateColor} from 'react-native-redash';

export const useOverlay = () => {
  const hasColorAnimationStarted = useSharedValue(false);
  const color = useSharedValue(0);
  const shrink = useSharedValue(0);

  const start_shrinking = () => {
    'worklet';
    shrink.value = withTiming(1, {
      duration: 1500,
      easing: Easing.linear,
    });
  };

  const overlayStyle = useAnimatedStyle(() => {
    const width = interpolate(
      shrink.value,
      [0, 1],
      [metrics.screenWidth, metrics.screenWidth / 1.1],
      Extrapolate.CLAMP,
    );

    const height = interpolate(
      shrink.value,
      [0, 1],
      [metrics.screenHeight, metrics.screenHeight / 4.5],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      shrink.value,
      [0, 1],
      [0, 50],
      Extrapolate.CLAMP,
    );
    const top = interpolate(shrink.value, [0, 1], [0, 20], Extrapolate.CLAMP);

    return {
      width,
      height,
      borderRadius,
      top,
    };
  });

  return {
    methods: {
      start_shrinking,
    },
    styles: {
      overlayStyle,
    },
  };
};
