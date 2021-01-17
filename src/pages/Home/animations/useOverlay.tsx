import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {metrics} from '../../../themes';

export const useOverlay = () => {
  const overlayValue = useSharedValue(0);

  const start_fadeout = () => {
    'worklet';
    overlayValue.value = withTiming(1, {
      duration: 1500,
      easing: Easing.linear,
    });
  };

  const overlayStyle = useAnimatedStyle(() => {
    const width = interpolate(
      overlayValue.value,
      [0, 1],
      [metrics.screenWidth, metrics.screenWidth / 1.1],
      Extrapolate.CLAMP,
    );

    const height = interpolate(
      overlayValue.value,
      [0, 1],
      [metrics.screenHeight, metrics.screenHeight / 4.5],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      overlayValue.value,
      [0, 1],
      [0, 50],
      Extrapolate.CLAMP,
    );
    const top = interpolate(
      overlayValue.value,
      [0, 1],
      [0, 20],
      Extrapolate.CLAMP,
    );

    return {
      width,
      height,
      borderRadius,
      top,
    };
  });

  return {
    methods: {
      start_fadeout,
    },
    styles: {
      overlayStyle,
    },
  };
};
