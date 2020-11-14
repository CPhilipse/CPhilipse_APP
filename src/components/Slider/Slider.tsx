import React, {memo} from 'react';
import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import styles from './slider.style';
import useSlider from './animations/useSlider';
import CustomIcon from '../Icon';
import Icons from '../../enum/Icons';
import {colors} from '../../themes';
import {color} from '../../utils/DarkmodeUtils';

interface Props {
  darkmode: boolean;
  title: string;
  gestureX: {value: number};
  velocityX: any;
  rightCb: () => void;
  leftCb: () => void;
}

const Slider = ({
  darkmode,
  gestureX,
  velocityX,
  title,
  rightCb,
  leftCb,
}: Props) => {
  const onDraggedSuccess = () => {
    return rightCb();
  };
  const OnDraggedLeft = () => {
    return leftCb();
  };

  const {
    styles: {gestureStyle, progressStyle, colorStyle, rotateStyle},
    onGestureEvent,
  } = useSlider({...{gestureX, velocityX, onDraggedSuccess, OnDraggedLeft}});

  return (
    <View style={styles.slider}>
      <Text style={[styles.title, color(darkmode)]}>{title}</Text>
      <Animated.View style={[styles.progress, progressStyle, colorStyle]} />
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[styles.knob, gestureStyle]}>
          <Animated.View style={rotateStyle}>
            <CustomIcon name={Icons.ARROW_RIGHT} color={colors.lightPurple} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default memo(Slider);
