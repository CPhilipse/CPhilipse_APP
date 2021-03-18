import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './crucifixicon.style';
import {StyleProp, StyleSheet, View} from 'react-native';

interface Props {
  isAnimation: boolean;
  colorStyle?: Animated.AnimateStyle<object>;
  colorStyle2?: Animated.AnimateStyle<object>;
  colorStyle3?: Animated.AnimateStyle<object>;
  colorStyle4?: Animated.AnimateStyle<object>;
  colorStyle5?: Animated.AnimateStyle<object>;
  borderColor?: string;
  style?: StyleProp<object>;
}

const CrucifixIcon = ({
  isAnimation,
  colorStyle,
  colorStyle2,
  colorStyle3,
  colorStyle4,
  colorStyle5,
  style,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topPiece}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            isAnimation && colorStyle,
          ]}
        />
      </View>
      <View style={styles.leftPiece}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            isAnimation && colorStyle2,
          ]}
        />
      </View>
      <View style={styles.bottomPiece}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            isAnimation && colorStyle3,
          ]}
        />
      </View>
      <View style={styles.rightPiece}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            isAnimation && colorStyle4,
          ]}
        />
      </View>
      <View style={styles.centerSquare}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            isAnimation && colorStyle5,
          ]}
        />
      </View>
    </View>
  );
};

export default memo(CrucifixIcon);
