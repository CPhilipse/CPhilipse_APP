import React from 'react';
import {Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './card.style';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {mix, mixColor, snapPoint} from 'react-native-redash';
import {colors, metrics} from '../../themes';
import {color} from '../../utils/DarkmodeUtils';
import Button from '../Button';
import {openUrl} from '../../utils/LinkingUtils';

interface Props {
  darkmode: boolean;
  title: string;
  body: string;
  step: number;
  index: number;
  aIndex: Animated.SharedValue<number>;
  onSwipe: () => void;
}

// Snap out of the screen on the left, snap in the middle or out of screen to the right
const snapPoints = [-metrics.screenWidth, 0, metrics.screenWidth];

const Card = ({darkmode, title, body, index, aIndex, step, onSwipe}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const velocityX = useSharedValue(0);

  const position = useDerivedValue(() => index * step - aIndex.value);

  const cardStyle = useAnimatedStyle(() => {
    const scale = mix(position.value, 1, 0.9);

    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {scale},
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {offsetY: number; offsetX: number}
  >({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event) => {
      // When swiping up or down it should spring back to 0.
      translateY.value = withSpring(0, {
        velocity: event.velocityY,
      });
      const dest = snapPoint(translateX.value, velocityX.value, snapPoints);
      translateX.value = withSpring(
        dest,
        {
          overshootClamping: dest !== 0,
          restSpeedThreshold: dest === 0 ? 0.01 : 100,
          restDisplacementThreshold: dest === 0 ? 0.01 : 100,
        },
        // () => dest !== 0 && {},
        () => dest !== 0 && runOnJS(onSwipe)(),
      );
    },
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[styles.card, cardStyle]}>
          {body?.[0] !== ':' ? (
            <>
              <Text style={[styles.title, color(!darkmode)]}>{title}</Text>
              <Text style={[styles.body, color(!darkmode)]}>{body}</Text>
            </>
          ) : (
            <Button
              style={styles.bodyButton}
              onPress={() => openUrl(body.substring(1))}>
              <Text style={[styles.title, color(darkmode)]}>{title}</Text>
            </Button>
          )}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card;
