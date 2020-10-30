import React from 'react';
import {View, Text} from 'react-native';
import styles from './home.style';

interface Props {
  darkmode: boolean;
}

const Home = ({darkmode}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home page</Text>
    </View>
  );
};

export default Home;
