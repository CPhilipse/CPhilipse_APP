import React, {useCallback} from 'react';
import {View, Text, Linking} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';
import Basketball from '../../../../components/Basketball';
import Crucifix from '../../../../components/Crucifix/Crucifix';
import Icons from '../../../../enum/Icons';
import {ICON_SIZE} from '../../../../components/Icon/Icon';
import {colors} from '../../../../themes';
import Button from '../../../../components/Button';
import styles from './items.style';

interface Props {
  onGestureEvent: any;
  style: any;
  gestureStyle: any;
  scaleStyle: any;
  colorStyle: any;
  colorStyle2: any;
  colorStyle3: any;
  colorStyle4: any;
  colorStyle5: any;
}

const Items = ({
  onGestureEvent,
  style,
  gestureStyle,
  scaleStyle,
  colorStyle,
  colorStyle2,
  colorStyle3,
  colorStyle4,
  colorStyle5,
}: Props) => {
  const openLinkedIn = useCallback(() => {
    Linking.openURL('https://www.linkedin.com/in/clemens-philipse-2615b9162/');
  }, []);
  const openGitHub = useCallback(() => {
    Linking.openURL('https://github.com/CPhilipse/CPhilipse_APP');
  }, []);

  return (
    <View style={styles.characterColumn}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[style, styles.basketball, gestureStyle]}>
          <Basketball />
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.crucifix}>
        <Crucifix
          {...{
            scaleStyle,
            colorStyle,
            colorStyle2,
            colorStyle3,
            colorStyle4,
            colorStyle5,
          }}
        />
      </View>

      <View style={styles.gameController}>
        <Icon
          name={Icons.GAME_CONTROLLER}
          size={ICON_SIZE}
          color={colors.red}
        />
      </View>
      <View style={styles.nineteenContainer}>
        <Text style={styles.nineteen}>19</Text>
      </View>
      <Button onPress={openLinkedIn} style={styles.button}>
        <Text style={styles.buttonText}>LinkedIn</Text>
      </Button>
      <Button onPress={openGitHub} style={styles.button}>
        <Text style={styles.buttonText}>GitHub</Text>
      </Button>
    </View>
  );
};

export default Items;
