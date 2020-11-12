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
import {getLocalizedString} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';

interface Props {
  darkmode: boolean;
  gestureX: {value: number};
  velocityX: any;
  switchDarkmode: (change: boolean) => void;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.SETTINGS, value);

const Slider = ({darkmode, gestureX, velocityX, switchDarkmode}: Props) => {
  const onDraggedSuccess = () => {
    switchDarkmode(true);
  };
  const OnDraggedLeft = () => {
    switchDarkmode(false);
  };

  const {
    styles: {gestureStyle, progressStyle, colorStyle, rotateStyle},
    onGestureEvent,
  } = useSlider({...{gestureX, velocityX, onDraggedSuccess, OnDraggedLeft}});

  return (
    <View style={styles.slider}>
      <Text style={[styles.title, color(darkmode)]}>
        {darkmode ? localizedCopy('dark') : localizedCopy('light')}
      </Text>
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
