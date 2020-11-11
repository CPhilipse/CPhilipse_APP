import React from 'react';
import {View, Switch} from 'react-native';
import styles from './settings.style';

interface Props {
  darkmode: boolean;
  switchDarkmode: (change: boolean) => void;
}

const Settings = ({darkmode, switchDarkmode}: Props) => {
  return (
    <View style={[styles.container, darkmode && {backgroundColor: 'black'}]}>
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
