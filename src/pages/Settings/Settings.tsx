import React from 'react';
import {View, Switch} from 'react-native';
import styles from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import {useSharedValue} from 'react-native-reanimated';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import TitleHeader from '../../components/TitleHeader';
import Slider from '../../components/Slider';

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

  const lanGestureX = useSharedValue(0);
  const lanVelocityX = useSharedValue(0);
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

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />
      <View style={styles.settingsContainer}>
        <View style={styles.row}>
          <Slider
            title={darkmode ? localizedCopy('dark') : localizedCopy('light')}
            gestureX={gestureX}
            velocityX={velocityX}
            darkmode={darkmode}
            rightCb={darkmodeRight}
            leftCb={darkmodeLeft}
          />
        </View>
        <View style={styles.row}>
          <Slider
            title={
              language === languages.en
                ? localizedCopy('english')
                : localizedCopy('dutch')
            }
            darkmode={
              (language === languages.nl && darkmode) ||
              (!darkmode && language === languages.en) ||
              darkmode
            }
            gestureX={lanGestureX}
            velocityX={lanVelocityX}
            rightCb={lanRight}
            leftCb={lanLeft}
          />
        </View>
      </View>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
