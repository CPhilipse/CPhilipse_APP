import React from 'react';
import {View, Switch, Text} from 'react-native';
import styles from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
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

const Settings = ({
  navigation,
  darkmode,
  switchDarkmode,
  setLanguage,
  language,
}: Props) => {
  return (
    <View style={[styles.container, darkmode && {backgroundColor: 'black'}]}>
      <Button onPress={() => navigation.navigate(Pages.CPHILIPSE)}>
        <Text>{localizedCopy('save')}</Text>
      </Button>
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
      <Switch
        trackColor={{false: '#767577', true: '#434343'}}
        thumbColor={'#bca2ff'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => switchDarkmode(value)}
        value={darkmode}
      />
    </View>
  );
};

export default Settings;
