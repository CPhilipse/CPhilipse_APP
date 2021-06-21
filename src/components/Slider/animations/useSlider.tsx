import {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import {clamp} from '../../../utils/AnimationUtils';
import {KNOB_SIZE, SLIDER_HEIGHT, SLIDER_WIDTH} from '../slider.style';
import {snapPoint} from 'react-native-redash';
import {colors} from '../../../themes';

interface sliderProps {
  gestureX: any;
  velocityX: any;
  onDraggedSuccess: () => void;
  OnDraggedLeft: () => void;
}

const useSlider = ({
  gestureX,
  velocityX,
  onDraggedSuccess,
  OnDraggedLeft,
}: sliderProps) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = gestureX.value;
    },
    onActive: (event, ctx) => {
      // gestureX.value = event.translationX + ctx.offsetX;
      gestureX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        SLIDER_WIDTH - KNOB_SIZE,
      );
      velocityX.value = event.velocityX;
    },
    onEnd: () => {
      gestureX.value = snapPoint(gestureX.value, velocityX.value, [
        0,
        SLIDER_WIDTH - SLIDER_HEIGHT,
      ]);
      if (gestureX.value > SLIDER_WIDTH - KNOB_SIZE - 10) {
        runOnJS(onDraggedSuccess)();
      } else if (gestureX.value <= 0) {
        runOnJS(OnDraggedLeft)();
      }
    },
  });

  const gestureStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: gestureX.value}],
    };
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: gestureX.value + KNOB_SIZE,
    };
  });

  const colorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      gestureX.value,
      [0, SLIDER_WIDTH - KNOB_SIZE],
      [0xffffffff, 0x00000000],
    );
    return {
      backgroundColor,
    };
  });

  const rotateStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      gestureX.value,
      [0, SLIDER_WIDTH - KNOB_SIZE - 10],
      [0, 3 * 180],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{rotate: `${rotate}deg`}],
    };
  });

  return {
    styles: {
      gestureStyle,
      progressStyle,
      colorStyle,
      rotateStyle,
    },
    onGestureEvent,
  };
};

export default useSlider;
