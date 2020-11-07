import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import StrokeAnimation from '../../../../components/StrokeAnimation';
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
        style={[overlayStyle, hasColorAnimationStarted && colorStyle]}>
        <StrokeAnimation start_shrinking={start_shrinking} />
      </Animated.View>
    </View>
  );
};

export default AnimationOverlay;
