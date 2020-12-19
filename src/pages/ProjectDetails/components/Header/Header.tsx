import React from 'react';
import {View, Text} from 'react-native';
import Menu from '../../../../components/Menu';
import {colors} from '../../../../themes';
import {color} from '../../../../utils/DarkmodeUtils';
import styles from './header.style';

interface HeaderProps {
  darkmode: boolean;
  categories: string[];
  title: string;
  navigation: any;
}

const Header = ({title, darkmode, categories, navigation}: HeaderProps) => (
  <>
    <Menu
      backgroundColor={darkmode ? colors.white : colors.black}
      darkmode={darkmode}
      goToPage={navigation.navigate}
    />
    <View style={styles.header}>
      <Text style={[styles.categories, color(darkmode)]}>
        {categories.map((category: string) => `${category} `)}
      </Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
);

export default Header;
