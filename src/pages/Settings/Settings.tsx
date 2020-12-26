import React from 'react';
import {View, Switch} from 'react-native';
import styles, {CIRCLE_SIZE, SLIDER_SIZE} from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import Animated, {
  Easing,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import TitleHeader from '../../components/TitleHeader';
import Slider from '../../components/Slider';
import {
  GestureHandlerGestureEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {clamp, mix, snapPoint} from 'react-native-redash';
import {SLIDER_HEIGHT} from '../../components/Slider/slider.style';
import {colors} from '../../themes';
import {usePullSwitch} from './animations/usePullSwitch';

interface Props {
  navigation: any;
  darkmode: boolean;
  switchDarkmode: (change: boolean) => void;
  setLanguage: (language: string) => void;
  language: string;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.SETTINGS, value);

// TODO: Abstract statusbar so it can be added to any page. Black statusbar looks nicer sometimes
const Settings = ({
  navigation,
  darkmode,
  switchDarkmode,
  setLanguage,
  language,
}: Props) => {
  const translateY = useSharedValue(0);
  const turnLightOff = () => {
    switchDarkmode(true);
  };
  const turnLightOn = () => {
    switchDarkmode(false);
  };
  const enableEnglish = () => {
    setLanguage(languages.en);
  };
  const enableDutch = () => {
    setLanguage(languages.nl);
  };

  const {
    styles: {bgStyle},
    values: {sliderYcable, sliderY},
    event: {onGestureEvent},
  } = usePullSwitch({darkmode, turnLightOff, turnLightOn, translateY});

  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />
      <View style={styles.statusbar} />

      <Animated.View style={[styles.cable, sliderYcable]} />
      <View style={styles.sliderContainer}>
        <View style={[styles.sliderField]}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.sliderCircle, sliderY]}>
              <View style={[styles.innerCircle]} />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>

      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </Animated.View>
  );
};

export default Settings;
