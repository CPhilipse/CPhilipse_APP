import React from 'react';
import {View} from 'react-native';
import styles from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import Animated, {useSharedValue} from 'react-native-reanimated';
import BackButton from '../../components/BackButton';
import TitleHeader from '../../components/TitleHeader';
import {usePullSwitch} from './animations/usePullSwitch';
import PullSwitch from './components/PullSwitch';

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
