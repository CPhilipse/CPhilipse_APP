import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './card.style';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';
import {colors, metrics} from '../../themes';

interface Props {
  body: string;
  onSwipe: () => void;
}

const Card = ({body, onSwipe}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const velocityX = useSharedValue(0);
  const velocityY = useSharedValue(0);
  const isActive = useSharedValue(true);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
      velocityX.value = event.velocityX;
      velocityY.value = event.velocityY;
    },
    onEnd: (event, ctx) => {
      translateX.value = snapPoint(translateX.value, velocityX.value, [0]);
      translateY.value = snapPoint(translateY.value, velocityY.value, [0]);
    },
  });

  // TODO: Wait for the Swiping video https://start-react-native.dev/
  //  This will help with the snapping points of the cards.
  const swipeStyle = useAnimatedStyle(() => {
    const springX = withSpring(translateX.value, {velocity: velocityX.value});
    const springY = withSpring(translateY.value, {velocity: velocityY.value});
    console.log(
      translateX.value,
      translateX.value > metrics.screenWidth / 4,
      isActive.value,
    );
    return {
      transform: [{translateX: springX}, {translateY: springY}],
    };
  });

  return (
    <View style={[styles.container]}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[styles.card, swipeStyle]}>
          <Text style={styles.body}>{body}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card;
