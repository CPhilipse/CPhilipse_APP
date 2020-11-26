import {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {mix} from 'react-native-redash';

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

  const colorStyleBase = useDerivedValue(() => {
    /** mix - interpolate from 0 to 1 */
    return mix(color.value, 0, 1);
  });
  const colorStyle = useAnimatedStyle(() => ({
    opacity: colorStyleBase.value,
  }));
  const colorStyle2 = useAnimatedStyle(() => ({
    opacity: colorStyleBase.value,
  }));
  const colorStyle3 = useAnimatedStyle(() => ({
    opacity: colorStyleBase.value,
  }));
  const colorStyle4 = useAnimatedStyle(() => ({
    opacity: colorStyleBase.value,
  }));
  const colorStyle5 = useAnimatedStyle(() => ({
    opacity: colorStyleBase.value,
  }));

  return {
    startAnimatingCrucifix,
    colorStyle,
    colorStyle2,
    colorStyle3,
    colorStyle4,
    colorStyle5,
  };
};
