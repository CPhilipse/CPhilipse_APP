import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles, {LAN_CIRCLE_SIZE} from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BackButton from '../../components/BackButton';
import TitleHeader from '../../components/TitleHeader';
import {usePullSwitch} from './animations/usePullSwitch';
import PullSwitch from './components/PullSwitch';
import {color} from '../../utils/DarkmodeUtils';
import Button from '../../components/Button';

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
  const lanX = useSharedValue(language === languages.en ? 0 : LAN_CIRCLE_SIZE);
  const turnLightOff = () => {
    switchDarkmode(true);
  };
  const turnLightOn = () => {
    switchDarkmode(false);
  };

  const setEnglish = () => {
    setLanguage(languages.en);
    moveCircleLeft();
  };
  const setDutch = () => {
    setLanguage(languages.nl);
    moveCircleRight();
  };
  const moveCircleRight = () => {
    'worklet';
    lanX.value = withTiming(LAN_CIRCLE_SIZE, {}, () => runOnJS(setDutch)());
  };
  const moveCircleLeft = () => {
    'worklet';
    lanX.value = withTiming(0, {}, () => runOnJS(setEnglish)());
  };
  const circlePosition = useAnimatedStyle(() => {
    return {
      transform: [{translateX: lanX.value}],
    };
  });
  const {
    styles: {bgStyle},
    values: {sliderYcable, sliderY},
    event: {onGestureEvent},
  } = usePullSwitch({darkmode, turnLightOff, turnLightOn, translateY});

  return (
    <Animated.View style={[styles.container, bgStyle]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />
      <View style={styles.statusbar} />

      <View style={styles.languageContainer}>
        <Text style={[styles.subTitle, color(darkmode)]}>
          {localizedCopy('lan')}
        </Text>
        <View style={styles.lanOptions}>
          <Animated.View style={[styles.circle, circlePosition]} />
          <Button style={styles.enButton} onPress={moveCircleLeft}>
            <Text style={[styles.enText, color(darkmode)]}>
              {localizedCopy('english')}
            </Text>
          </Button>
          <Button style={styles.nlButton} onPress={moveCircleRight}>
            <Text style={[styles.nlText, color(darkmode)]}>
              {localizedCopy('dutch')}
            </Text>
          </Button>
        </View>
      </View>

      <PullSwitch
        sliderYcable={sliderYcable}
        sliderY={sliderY}
        onGestureEvent={onGestureEvent}
      />

      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </Animated.View>
  );
};

export default Settings;
