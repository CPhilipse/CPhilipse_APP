import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const useMenu = (setMenuActive: (isActive: boolean) => void) => {
  const scale = useSharedValue(0);
  const opacityValue = useSharedValue(0);
  const opacityIconValue = useSharedValue(0);
  const opacityIconValue2 = useSharedValue(0);

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
    opacityIconValue.value = withTiming(1, {
      duration: 1500,
    });
    opacityIconValue2.value = withTiming(1, {
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
    opacityIconValue.value = withTiming(0, {
      duration: 1500,
    });
    opacityIconValue2.value = withTiming(0, {
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

  const opacityIcon = useAnimatedStyle(() => {
    return {
      opacity: opacityIconValue.value,
    };
  });
  const opacityIcon2 = useAnimatedStyle(() => {
    return {
      opacity: opacityIconValue2.value,
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
      opacityIcon,
      opacityIcon2,
    },
  };
};

export default useMenu;
