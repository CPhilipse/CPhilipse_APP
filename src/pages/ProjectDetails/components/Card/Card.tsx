import React from 'react';
import {View, Text} from 'react-native';
import styles from './card.style';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {metrics} from '../../../../themes';

interface CardProps {
  title: string;
  body: string;
  translateX: Animated.SharedValue<number>;
  translateY: Animated.SharedValue<number>;
  index: number;
}

/**
 * Basic trigonomotry
 * https://www.youtube.com/watch?t=53&v=m3KqkvqfI48&feature=youtu.be
 * */
export const a = Math.PI / 12;
export const A =
  Math.sin(a) * metrics.screenHeight + Math.cos(a) * metrics.screenWidth;
const Card = ({title, body, translateX, translateY, index}: CardProps) => {
  // const style = useAnimatedStyle(() => {
  //   const input = [(index - 1) * width, index * width, (index + 1) * width];
  //   const translateX = interpolate(x.value, input, [width / 2, 0, -width / 2]);
  //   const scale = interpolate(x.value, input, [0.61, 1, 0.61]);
  //   return {
  //     transform: [{translateX}, {scale}],
  //   };
  // });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardBody}>{body}</Text>
      </View>
    </Animated.View>
  );
};

export default Card;
