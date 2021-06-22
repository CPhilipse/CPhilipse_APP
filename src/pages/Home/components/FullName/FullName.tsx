import React from 'react';
import {Text} from 'react-native';
import styles from './fullname.style';
import Button from '../../../../components/Button';
import Pages from '../../../../enum/Pages';
import {color} from '../../../../utils/DarkmodeUtils';
import {getLocalizedString} from '../../../../utils/LocalizedUtils';

const localizedCopy = (value: string) => getLocalizedString(Pages.HOME, value);

interface Props {
  navigation: {navigate: (page: string) => void};
  darkmode: boolean;
}

const FullName = ({navigation, darkmode}: Props) => {
  return (
    <Button
      onPress={() => navigation.navigate(Pages.CPHILIPSE)}
      style={styles.cphilipse}>
      <Text style={[styles.clemens, color(darkmode)]}>
        {localizedCopy('fname')}
      </Text>
      <Text style={[styles.philipse, color(darkmode)]}>
        {localizedCopy('lname')}
      </Text>
    </Button>
  );
};

export default FullName;
