import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import {metrics} from '../../../themes';
import {ICON_SIZE} from '../../../components/Icon';

export const swipeBasketball = () => {
  const gestureX = useSharedValue(metrics.scale(260));
  const gestureY = useSharedValue(metrics.scale(325));

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
        clamp: [0, metrics.screenWidth - 25],
      });
      gestureY.value = withDecay({
        velocity: event.velocityY,
        deceleration: 0.993,
        clamp: [-160, metrics.screenHeight / 1.5],
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
