import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './crucifix.style';
import {View} from 'react-native';

interface Props {
  scaleStyle: any;
  borderColor?: string;
}

const Crucifix = ({scaleStyle}: Props) => {
  return (
    <Animated.View style={[styles.container, scaleStyle]}>
      <View style={styles.topPiece} />
      <View style={styles.leftPiece} />
      <View style={styles.bottomPiece} />
      <View style={styles.rightPiece} />
      <View style={styles.centerSquare} />
    </Animated.View>
  );
};

export default memo(Crucifix);
