import React from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {interpolateColor} from 'react-native-redash';
import StrokeAnimation from '../../../../components/StrokeAnimation';
import {colors, metrics} from '../../../../themes';
import styles from './animationoverlay.style';
import {useOverlay} from '../../animations/useOverlay';

const AnimationOverlay = () => {
  const {
    styles: {overlayStyle, colorStyle},
    methods: {start_shrinking},
    flag: {hasColorAnimationStarted},
  } = useOverlay();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.overlay,
          overlayStyle,
          hasColorAnimationStarted && colorStyle,
        ]}>
        <StrokeAnimation start_shrinking={start_shrinking} />
      </Animated.View>
    </View>
  );
};

export default AnimationOverlay;
