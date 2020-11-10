import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './card.style';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';
import {colors, metrics} from '../../../../themes';

interface Props {
  body: string;
}

const Card = ({body}: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const velocityX = useSharedValue(0);
  const velocityY = useSharedValue(0);
  // const translateXx = useSpring({
  //   value: translation.x,
  //   velocity: velocity.x,
  //   state,
  //   snapPoints: [-metrics.screenWidth, 0, metrics.screenWidth],
  //   onSnap: ([x]) => x !== 0 && onSwipe(),
  // });
  // const translateYy = add(
  //   translateYOffset,
  //   useSpring({
  //     value: translation.y,
  //     velocity: velocity.y,
  //     state,
  //     snapPoints: [0],
  //   }),
  // );

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

  const swipeStyle = useAnimatedStyle(() => {
    const springX = withSpring(translateX.value, {velocity: velocityX.value});
    const springY = withSpring(translateY.value, {velocity: velocityY.value});

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
