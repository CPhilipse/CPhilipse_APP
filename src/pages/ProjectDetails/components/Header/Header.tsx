import React from 'react';
import {View, Text} from 'react-native';
import styles from './header.style';

interface HeaderProps {
  category: string;
  title: string;
}

const Header = ({title, category}: HeaderProps) => (
  <>
    <View style={styles.header}>
      <Text style={styles.categories}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
);

export default Header;
