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

  const start_coloring = () => {
    'worklet';
    // -1 stands for infinite I believe
    color.value = withRepeat(
      withTiming(1, {
        duration: 10000,
        easing: Easing.linear,
      }),
      -1,
      true,
    );
  };

  const colorStyle = useAnimatedStyle(() => {
    'worklet';
    const backgroundColor = interpolateColor(
      color.value,
      [0, 0.2, 0.5, 0.7, 1],
      [
        colors.black,
        colors.darkPurple,
        colors.purple,
        colors.lightPurple,
        colors.white,
      ],
    );

    return {
      backgroundColor,
    };
  });

  const start_shrinking = () => {
    'worklet';
    shrink.value = withTiming(
      1,
      {
        duration: 1500,
        easing: Easing.linear,
      },
      (isFinished) => {
        if (isFinished) {
          hasColorAnimationStarted.value = true;
          start_coloring();
        }
      },
    );
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
    flag: {
      hasColorAnimationStarted,
    },
    methods: {
      start_shrinking,
    },
    styles: {
      colorStyle,
      overlayStyle,
    },
  };
};
