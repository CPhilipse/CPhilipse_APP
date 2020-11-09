import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './crucifix.style';

interface Props {
  scaleStyle: any;
  colorStyle?: any;
  borderColor?: string;
}

const Crucifix = ({scaleStyle, colorStyle}: Props) => {
  return (
    <Animated.View style={[styles.container, scaleStyle]}>
      <Animated.View style={[styles.topPiece, colorStyle]} />
      <Animated.View style={[styles.leftPiece, colorStyle]} />
      <Animated.View style={[styles.bottomPiece, colorStyle]} />
      <Animated.View style={[styles.rightPiece, colorStyle]} />
      <Animated.View style={[styles.centerSquare, colorStyle]} />
    </Animated.View>
  );
};

export default memo(Crucifix);
