import React from 'react';
import {View, Text} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {logApiSuccess} from '../../utils/LoggingUtils';

interface Props {
  navigation: any;
  darkmode: boolean;
}

const Home = ({navigation, darkmode}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>CPhilipse</Text>
          <Text
            onPress={() => navigation.navigate(Pages.PORTFOLIO)}
            style={styles.title}>
            Portfolio
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
