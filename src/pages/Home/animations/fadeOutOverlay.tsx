import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  opacityValue: Animated.SharedValue<number>;
  openingScreenFinished: boolean;
  closeOpeningScreen: () => void;
}

export const fadeOutOverlay = ({
  opacityValue,
  openingScreenFinished,
  closeOpeningScreen,
}: Props) => {
  const fadeOut = () => {
    'worklet';
    opacityValue.value = withTiming(
      0,
      {
        duration: 500,
        easing: Easing.linear,
      },
      () => !openingScreenFinished && runOnJS(closeOpeningScreen)(),
    );
  };

  const opacity = useAnimatedStyle(() => {
    const zIndex = openingScreenFinished ? 0 : 999;
    return {
      opacity: opacityValue.value,
      zIndex,
    };
  });
  const opacity2 = useAnimatedStyle(() => {
    const zIndex = openingScreenFinished ? 0 : 9999;
    return {
      opacity: opacityValue.value,
      zIndex,
    };
  });

  return {
    methods: {
      fadeOut,
    },
    styles: {
      opacity,
      opacity2,
    },
  };
};
