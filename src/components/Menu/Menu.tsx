import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {colors} from '../../themes';
import Button from '../Button';
import Pages from '../../enum/Pages';
import styles from './menu.style';
import {color} from '../../utils/DarkmodeUtils';
import CustomIcon from '../Icon';
import Icons from '../../enum/Icons';
import useMenu from './useMenu';

interface Props {
  darkmode: boolean;
  goToPage: (page: string) => void;
}

const Menu = ({darkmode, goToPage}: Props) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = useCallback(
    (isActive: boolean) => {
      setMenuActive(isActive);
    },
    [setMenuActive],
  );

  const {
    methods: {startMenuAnimation, closeMenu},
    styles: {scaleStyle, opacityStyle},
  } = useMenu(toggleMenu);

  return (
    <>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.black,
          },
          menuActive && {zIndex: 1},
          opacityStyle,
        ]}>
        <Button
          onPress={() => goToPage(Pages.SETTINGS)}
          style={styles.menuItem}>
          <Text style={[color(darkmode), styles.menuItemText]}>Settings</Text>
        </Button>
        <Button
          onPress={() => goToPage(Pages.CPHILIPSE)}
          style={styles.menuItem2}>
          <Text style={[color(darkmode), styles.menuItemText]}>
            The creator
          </Text>
        </Button>
      </Animated.View>
      <View style={styles.menuContainer}>
        <Button
          onPress={menuActive ? closeMenu : startMenuAnimation}
          style={styles.menu}>
          {menuActive ? (
            <View style={styles.closeIcon}>
              <CustomIcon name={Icons.CLOSE} color={colors.white} />
            </View>
          ) : (
            <>
              <View style={styles.lineOne} />
              <View style={styles.lineTwo} />
            </>
          )}
        </Button>
      </View>
      <Animated.View style={[styles.menuCircle, scaleStyle]} />
    </>
  );
};

export default Menu;
