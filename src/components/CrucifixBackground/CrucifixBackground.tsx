import React from 'react';
import {styles} from './crucifixbackground.style';
import {StyleProp, View} from 'react-native';

interface Props {
  style?: StyleProp<object>;
  bgcolor?: StyleProp<object>;
}

const CrucifixBackground = ({style, bgcolor}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.topPiece, bgcolor]} />
      <View style={[styles.leftPiece, bgcolor]} />
      <View style={[styles.bottomPiece, bgcolor]} />
      <View style={[styles.rightPiece, bgcolor]} />
      <View style={[styles.centerSquare, bgcolor]} />
    </View>
  );
};

export default CrucifixBackground;
