import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './crucifix.style';
import {View} from 'react-native';

interface Props {
  scaleStyle: any;
  colorStyle: any;
  colorStyle2: any;
  colorStyle3: any;
  colorStyle4: any;
  colorStyle5: any;
  borderColor?: string;
}

const Crucifix = ({
  scaleStyle,
  colorStyle,
  colorStyle2,
  colorStyle3,
  colorStyle4,
  colorStyle5,
}: Props) => {
  return (
    <Animated.View style={[styles.container]}>
      <Animated.View style={[styles.topPiece, colorStyle]} />
      <Animated.View style={[styles.leftPiece, colorStyle2]} />
      <Animated.View style={[styles.bottomPiece, colorStyle3]} />
      <Animated.View style={[styles.rightPiece, colorStyle4]} />
      <Animated.View style={[styles.centerSquare, colorStyle5]} />
    </Animated.View>
  );
};

export default memo(Crucifix);
