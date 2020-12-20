import React from 'react';
import {View, Text} from 'react-native';
import styles from './card.style';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {metrics} from '../../../../themes';

interface CardProps {
  title: string;
  body: string;
  x: Animated.SharedValue<number>;
  index: number;
}

const width = metrics.screenWidth;
const Card = ({title, body, x, index}: CardProps) => {
  const style = useAnimatedStyle(() => {
    const input = [(index - 1) * width, index * width, (index + 1) * width];
    const translateX = interpolate(x.value, input, [width / 2, 0, -width / 2]);
    const scale = interpolate(x.value, input, [0.61, 1, 0.61]);
    return {
      transform: [{translateX}, {scale}],
    };
  });

  return (
    <Animated.View style={[styles.cardContainer, style]}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardBody}>{body}</Text>
      </View>
    </Animated.View>
  );
};

export default Card;
