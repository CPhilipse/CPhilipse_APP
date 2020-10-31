import React from 'react';
import {View, Text} from 'react-native';
import styles from './portfolio.style';

interface Props {
  darkmode: boolean;
}

const Portfolio = ({darkmode}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
    </View>
  );
};

export default Portfolio;
