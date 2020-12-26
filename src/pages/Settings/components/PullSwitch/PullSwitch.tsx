import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import styles from './pullSwitch.style';

interface PullSwitchProps {
  sliderYcable: Animated.AnimatedStyleProp<any>;
  sliderY: Animated.AnimatedStyleProp<any>;
  onGestureEvent: (event: PanGestureHandlerGestureEvent) => void;
}

const PullSwitch = ({
  sliderYcable,
  onGestureEvent,
  sliderY,
}: PullSwitchProps) => {
  return (
    <>
      <Animated.View style={[styles.cable, sliderYcable]} />
      <View style={styles.container}>
        <View style={[styles.sliderField]}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.sliderCircle, sliderY]} />
          </PanGestureHandler>
        </View>
      </View>
    </>
  );
};

export default PullSwitch;
