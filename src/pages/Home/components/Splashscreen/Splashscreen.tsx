import React, {memo} from 'react';
import Animated from 'react-native-reanimated';
import StrokeAnimation from '../../../../components/StrokeAnimation';
import styles from './splashscreen.style';

interface Props {
  opacity: Animated.AnimatedStyleProp<object>;
  opacity2: Animated.AnimatedStyleProp<object>;
  fadeOut: () => void;
  hasSplashscreenOn: boolean;
}

const Splashscreen = ({
  opacity,
  opacity2,
  fadeOut,
  hasSplashscreenOn,
}: Props) => {
  return (
    <>
      <Animated.View
        style={[
          styles.strokeOverlay,
          opacity,
          !hasSplashscreenOn && {display: 'none'},
        ]}
      />
      <Animated.View
        style={[
          styles.stroke,
          opacity2,
          !hasSplashscreenOn && {display: 'none'},
        ]}>
        <StrokeAnimation fadeOutOverlay={fadeOut} />
      </Animated.View>
    </>
  );
};

export default memo(Splashscreen);
