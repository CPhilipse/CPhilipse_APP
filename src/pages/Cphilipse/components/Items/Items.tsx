import React, {useCallback, memo} from 'react';
import {View, Text} from 'react-native';
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
import {getLocalizedString} from '../../../../utils/LocalizedUtils';
import Pages from '../../../../enum/Pages';
import {openUrl} from '../../../../utils/LinkingUtils';

interface Props {
  onGestureEvent: any;
  style: any;
  gestureStyle: any;
  colorStyle: any;
  colorStyle2: any;
  colorStyle3: any;
  colorStyle4: any;
  colorStyle5: any;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.CPHILIPSE, value);

const Items = ({
  onGestureEvent,
  style,
  gestureStyle,
  colorStyle,
  colorStyle2,
  colorStyle3,
  colorStyle4,
  colorStyle5,
}: Props) => {
  const openLinkedin = useCallback(() => {
    openUrl(localizedCopy('linkedinUrl'));
  }, []);
  const openGithub = useCallback(() => {
    openUrl(localizedCopy('githubUrl'));
  }, []);

  return (
    <View style={styles.characterColumn}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View style={[style, gestureStyle, styles.basketball]}>
          <Basketball />
        </Animated.View>
      </PanGestureHandler>
      <View style={styles.crucifix}>
        <Crucifix
          {...{colorStyle, colorStyle2, colorStyle3, colorStyle4, colorStyle5}}
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
        <Text style={styles.nineteen}>{localizedCopy('age')}</Text>
      </View>
      <Button onPress={openLinkedin} style={styles.button}>
        <Text style={styles.buttonText}>{localizedCopy('linkedin')}</Text>
      </Button>
      <Button onPress={openGithub} style={styles.button}>
        <Text style={styles.buttonText}>{localizedCopy('github')}</Text>
      </Button>
    </View>
  );
};

export default memo(Items);
