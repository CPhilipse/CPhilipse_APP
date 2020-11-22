import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import {styles} from './crucifix.style';
import {StyleSheet, View} from 'react-native';

interface Props {
  colorStyle: Animated.AnimateStyle<any>;
  colorStyle2: Animated.AnimateStyle<any>;
  colorStyle3: Animated.AnimateStyle<any>;
  colorStyle4: Animated.AnimateStyle<any>;
  colorStyle5: Animated.AnimateStyle<any>;
  borderColor?: string;
}

const Crucifix = ({
  colorStyle,
  colorStyle2,
  colorStyle3,
  colorStyle4,
  colorStyle5,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.topPiece]}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            colorStyle,
          ]}
        />
      </View>
      <View style={[styles.leftPiece]}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            colorStyle2,
          ]}
        />
      </View>
      <View style={[styles.bottomPiece]}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            colorStyle3,
          ]}
        />
      </View>
      <View style={[styles.rightPiece]}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            colorStyle4,
          ]}
        />
      </View>
      <View style={[styles.centerSquare]}>
        <Animated.View
          style={[
            {backgroundColor: 'white', ...StyleSheet.absoluteFillObject},
            colorStyle5,
          ]}
        />
      </View>
    </View>
  );
};

export default memo(Crucifix);
