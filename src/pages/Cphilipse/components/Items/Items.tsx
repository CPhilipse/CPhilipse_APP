import React, {useCallback, memo} from 'react';
import {View, Text} from 'react-native';
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
  colorStyle: Animated.AnimatedStyleProp<object>;
  colorStyle2: Animated.AnimatedStyleProp<object>;
  colorStyle3: Animated.AnimatedStyleProp<object>;
  colorStyle4: Animated.AnimatedStyleProp<object>;
  colorStyle5: Animated.AnimatedStyleProp<object>;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.CPHILIPSE, value);

const Items = ({
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
      <View style={styles.row}>
        <View style={styles.basketball}>
          <Basketball />
        </View>
        <View style={styles.crucifix}>
          <Crucifix
            {...{
              colorStyle,
              colorStyle2,
              colorStyle3,
              colorStyle4,
              colorStyle5,
            }}
          />
        </View>
        <Button onPress={openLinkedin} style={styles.button}>
          <Text style={styles.buttonText}>{localizedCopy('linkedin')}</Text>
        </Button>
      </View>

      <View style={styles.row}>
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
        <Button onPress={openGithub} style={styles.button}>
          <Text style={styles.buttonText}>{localizedCopy('github')}</Text>
        </Button>
      </View>
    </View>
  );
};

export default memo(Items);
