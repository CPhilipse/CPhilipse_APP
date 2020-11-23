import {SetStateAction} from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const useMenu = (setMenuActive: (isActive: boolean) => void) => {
  const scale = useSharedValue(0);
  const opacityValue = useSharedValue(0);

  const startMenuAnimation = () => {
    'worklet';
    // Circle animation
    scale.value = withTiming(8, {
      duration: 1500,
    });

    setMenuActive(true);

    // Overlay animation
    opacityValue.value = withTiming(0.8, {
      duration: 1500,
    });
  };

  const closeMenu = () => {
    'worklet';
    // Circle animation
    scale.value = withTiming(0, {
      duration: 1500,
    });

    // TODO: Fix this hankey code. - cause of zIndex of overlay, once false overlay goes below container
    setTimeout(() => {
      setMenuActive(false);
    }, 1500);

    // Overlay animation
    opacityValue.value = withTiming(0, {
      duration: 1500,
    });
  };

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityValue.value,
    };
  });

  return {
    methods: {
      startMenuAnimation,
      closeMenu,
    },
    styles: {
      opacityStyle,
      scaleStyle,
    },
  };
};

export default useMenu;
