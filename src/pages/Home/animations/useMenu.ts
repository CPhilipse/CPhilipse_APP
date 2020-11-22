import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const useMenu = (setMenuActive: any) => {
  const scale = useSharedValue(0);

  const startMenuAnimation = () => {
    'worklet';
    scale.value = withTiming(8, {
      duration: 1500,
    });

    setMenuActive(true);
  };

  const closeMenu = () => {
    'worklet';
    scale.value = withTiming(0, {
      duration: 1500,
    });

    setMenuActive(false);
  };

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return {
    startMenuAnimation,
    closeMenu,
    scaleStyle,
  };
};

export default useMenu;
