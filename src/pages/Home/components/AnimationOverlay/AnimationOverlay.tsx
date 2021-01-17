import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import StrokeAnimation from '../../../../components/StrokeAnimation';
import styles from './animationoverlay.style';
import {useOverlay} from '../../animations/useOverlay';

const AnimationOverlay = () => {
  const {
    styles: {overlayStyle},
    methods: {start_fadeout},
  } = useOverlay();

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bg, overlayStyle]}>
        <StrokeAnimation fadeOutOverlay={start_fadeout} />
      </Animated.View>
    </View>
  );
};

export default AnimationOverlay;
