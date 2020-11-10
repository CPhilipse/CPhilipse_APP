import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {metrics} from '../../../themes';
import {ICON_SIZE} from '../../../components/Icon';

export const swipeBasketball = () => {
  const gestureX = useSharedValue(metrics.scale(200));
  const gestureY = useSharedValue(metrics.scale(190));

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = gestureX.value;
      ctx.offsetY = gestureY.value;
    },
    onActive: (event, ctx) => {
      gestureX.value = event.translationX + ctx.offsetX;
      gestureY.value = event.translationY + ctx.offsetY;
    },
    onEnd: (event, ctx) => {
      gestureX.value = withDecay({
        velocity: event.velocityX,
        deceleration: 0.993,
        clamp: [-10, metrics.screenWidth - 50],
      });
      gestureY.value = withDecay({
        velocity: event.velocityY,
        deceleration: 0.993,
        clamp: [-150, metrics.screenHeight / 1.5],
      });
    },
  });
  const gestureStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: gestureX.value}, {translateY: gestureY.value}],
    };
  });

  return {
    gestureStyle,
    onGestureEvent,
  };
};
