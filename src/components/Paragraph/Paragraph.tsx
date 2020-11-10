import React from 'react';
import {View, Text} from 'react-native';
import styles from './paragraph.style';

interface Props {
  paragraph: [];
}

const Paragraph = ({paragraph}: Props) => {
  return paragraph.map((text: string, index: number) => {
    if (text !== '') {
      return (
        <View key={index} style={styles.bodyContainer}>
          <Text style={index % 2 === 0 ? styles.subtitle : styles.body}>
            {text}
            {index % 2 === 1 && '\n'}
          </Text>
        </View>
      );
    }
  });
};

export default Paragraph;
