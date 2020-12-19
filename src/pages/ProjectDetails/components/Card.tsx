import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  darkmode: boolean;
    title: string;
    body: string;
}

const Card = ({darkmode}: Props) => {
  return (
    <View>
      <Text>Component</Text>
    </View>
  );
};

export default Card;
