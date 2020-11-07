import React from 'react';
import {View, Text} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';

interface Props {
  navigation: any;
}

const Cphilipse = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>CPhilipse page.</Text>
      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Cphilipse;
