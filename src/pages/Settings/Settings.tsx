import React from 'react';
import {View, Switch} from 'react-native';
import styles from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import {useSharedValue} from 'react-native-reanimated';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import TitleHeader from '../../components/TitleHeader';

interface Props {
  navigation: any;
  darkmode: boolean;
  switchDarkmode: (change: boolean) => void;
  setLanguage: (language: string) => void;
  language: string;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.SETTINGS, value);

const Settings = ({
  navigation,
  darkmode,
  switchDarkmode,
  setLanguage,
  language,
}: Props) => {
  const darkmodeRight = () => {
    switchDarkmode(true);
  };
  const darkmodeLeft = () => {
    switchDarkmode(false);
  };
  const lanRight = () => {
    setLanguage(languages.en);
  };
  const lanLeft = () => {
    setLanguage(languages.nl);
  };

  // TODO: On darkmode, when restarting the app, the slider is on the left (lightmode) side.
  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />
      <View style={styles.settingsContainer} />
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
