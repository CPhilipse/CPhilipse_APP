import React from 'react';
import {View, Switch} from 'react-native';
import styles from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import Slider from '../../components/Slider';
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
  const gestureX = useSharedValue(0);
  const velocityX = useSharedValue(0);
  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />
      <View style={styles.row}>
        <Slider {...{gestureX, velocityX, darkmode, switchDarkmode}} />
      </View>
      <Switch
        trackColor={{false: '#767577', true: '#434343'}}
        thumbColor={'#bca2ff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => {
          if (value) {
            setLanguage(languages.en);
          } else {
            setLanguage(languages.nl);
          }
        }}
        value={language === languages.en}
      />
      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
