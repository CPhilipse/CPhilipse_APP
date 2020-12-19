import React from 'react';
import {View, Text} from 'react-native';
import styles from './card.style';

interface CardProps {
  title: string;
  body: string;
}

const Card = ({title, body}: CardProps) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{body}</Text>
    </View>
  </View>
);

export default Card;
