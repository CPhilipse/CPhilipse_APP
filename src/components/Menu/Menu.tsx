import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {colors} from '../../themes';
import Button from '../Button';
import Pages from '../../enum/Pages';
import styles from './menu.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import useMenu from './useMenu';
import {getLocalizedString} from '../../utils/LocalizedUtils';

interface Props {
  disableOverlayOpacity?: boolean;
  darkmode: boolean;
  goToPage: (page: string) => void;
  backgroundColor?: string;
}

const localizedCopy = (value: string) => getLocalizedString(Pages.HOME, value);

const Menu = ({
  disableOverlayOpacity,
  darkmode,
  goToPage,
  backgroundColor = colors.lightPurple,
}: Props) => {
  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleMenu = useCallback(
    (isActive: boolean) => {
      setMenuActive(isActive);
    },
    [setMenuActive],
  );
  const toggleOverlay = useCallback(
    (isActive: boolean) => {
      setOverlayActive(isActive);
    },
    [setOverlayActive],
  );

  const {
    methods: {startMenuAnimation, closeMenu},
    styles: {scaleStyle, opacityStyle, opacityIcon, opacityIcon2},
  } = useMenu(toggleOverlay, toggleMenu, disableOverlayOpacity);

  return (
    <>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.black,
          },
          overlayActive && {zIndex: 2},
          opacityStyle,
        ]}>
        <Button
          onPress={() => goToPage(Pages.SETTINGS)}
          style={styles.menuItem}
          disabled={!overlayActive}>
          <Text style={styles.menuItemText}>{localizedCopy('settings')}</Text>
        </Button>
        <Button
          onPress={() => goToPage(Pages.CPHILIPSE)}
          style={styles.menuItem2}
          disabled={!overlayActive}>
          <Text style={styles.menuItemText}>{localizedCopy('about')}</Text>
        </Button>
      </Animated.View>
      <View style={styles.menuContainer}>
        <Button
          onPress={menuActive ? closeMenu : startMenuAnimation}
          style={styles.menu}>
          <View style={[styles.lineOne, {backgroundColor}]}>
            <Animated.View
              style={[
                {...StyleSheet.absoluteFillObject},
                bgcolor(!darkmode),
                opacityIcon,
              ]}
            />
          </View>
          <View style={[styles.lineTwo, {backgroundColor}]}>
            <Animated.View
              style={[
                {...StyleSheet.absoluteFillObject},
                bgcolor(!darkmode),
                opacityIcon2,
              ]}
            />
          </View>
        </Button>
      </View>
      <Animated.View style={[styles.menuCircle, scaleStyle]} />
    </>
  );
};

export default Menu;
