import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {clamp, snapPoint} from 'react-native-redash';
import {SLIDER_SIZE} from '../settings.style';
import {colors} from '../../../themes';

interface PullSwitchProps {
  darkmode: boolean;
  turnLightOff: () => void;
  turnLightOn: () => void;
  translateY: Animated.SharedValue<number>;
}

export const usePullSwitch = ({
  darkmode,
  turnLightOff,
  turnLightOn,
  translateY,
}: PullSwitchProps) => {
  const bgTime = useSharedValue(darkmode ? 0 : 1);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {offsetY: number}
  >({
    onStart: (_, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: ({translationY}, {offsetY}) => {
      translateY.value = offsetY + translationY;
    },
    onEnd: (event) => {
      const dest = snapPoint(translateY.value, event.velocityY, [0]);
      translateY.value = withSpring(dest);
      if (translateY.value > SLIDER_SIZE / 2 && !darkmode) {
        runOnJS(turnLightOff)();
        bgTime.value = withTiming(0);
      } else {
        runOnJS(turnLightOn)();
        bgTime.value = withTiming(1);
      }
    },
  });

  const clampY = useDerivedValue(() => {
    return clamp(translateY.value, -SLIDER_SIZE, SLIDER_SIZE);
  });
  const sliderY = useAnimatedStyle(() => ({
    transform: [{translateY: clampY.value}],
  }));
  const sliderYcable = useAnimatedStyle(() => ({
    transform: [{translateY: clampY.value}],
  }));

  // @ts-ignore
  const bgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      bgTime.value,
      [0, 1],
      [colors.black, colors.white],
    );
    return {backgroundColor};
  });

  return {
    styles: {
      bgStyle,
    },
    values: {
      sliderY,
      sliderYcable,
    },
    event: {
      onGestureEvent,
    },
  };
};
