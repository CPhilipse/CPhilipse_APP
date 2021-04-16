import React from 'react';
import {View, Text} from 'react-native';
import Menu from '../../../../components/Menu';
import {colors} from '../../../../themes';
import {color} from '../../../../utils/DarkmodeUtils';
import styles from './header.style';

interface HeaderProps {
  darkmode: boolean;
  category: string;
  title: string;
  navigation: any;
}

const Header = ({title, darkmode, category, navigation}: HeaderProps) => (
  <>
    <Menu
      disableOverlayOpacity
      backgroundColor={darkmode ? colors.white : colors.black}
      darkmode={darkmode}
      goToPage={navigation.navigate}
    />
    <View style={styles.header}>
      <Text style={[styles.categories, color(darkmode)]}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
);

export default Header;
