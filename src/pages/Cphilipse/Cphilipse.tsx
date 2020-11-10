import React, {useCallback, useEffect} from 'react';
import {Linking, ScrollView, Text, View} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import Basketball from '../../components/Basketball';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {colors, images, metrics} from '../../themes';
import Header from '../../components/Header';
import {useBounce} from './animations/useBounce';
import {useCrucifix} from './animations/useCrucifix';
import Crucifix from '../../components/Crucifix/Crucifix';
import Button from '../../components/Button';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {swipeBasketball} from './animations/swipeBasketball';
import Icons from '../../enum/Icons';
import Icon from 'react-native-vector-icons/Entypo';
import {ICON_SIZE} from '../../components/Icon/Icon';
import Paragraph from '../../components/Paragraph';
import {paragraphs} from '../../utils/DummyData';

interface Props {
  navigation: any;
}

/**
 * TODO: Make buttons padding bigger, so it'll be easier to press.
 * TODO: Locales for the text.
 * TODO: Abstract the body.
 * TODO: Abstract the character container.
 * TODO: Test this page on multiple device simulators.
 * TODO: Create 'master' branch, change 'main' to 'master' branch. Delete 'main' branch.
 *  Merge all to 'dev' and the 'master' branch. Remove 'setup' branch.
 * */
const Cphilipse = ({navigation}: Props) => {
  const {onGestureEvent, gestureStyle} = swipeBasketball();
  const {style, startBasketballAnimation} = useBounce();
  const {
    scaleStyle,
    colorStyle,
    colorStyle2,
    colorStyle3,
    colorStyle4,
    colorStyle5,
    startAnimatingCrucifix,
  } = useCrucifix();

  useEffect(() => {
    startBasketballAnimation();
    startAnimatingCrucifix();
  }, [startBasketballAnimation, startAnimatingCrucifix]);

  const openLinkedIn = useCallback(() => {
    Linking.openURL('https://www.linkedin.com/in/clemens-philipse-2615b9162/');
  }, []);
  const openGitHub = useCallback(() => {
    Linking.openURL('https://github.com/CPhilipse/CPhilipse_APP');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={'Clemens Philipse'} image={images.cphilipse} />

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

        <View style={styles.characterColumn}>
          <View style={[styles.gameController]}>
            <Icon
              name={Icons.GAME_CONTROLLER}
              size={ICON_SIZE}
              color={colors.lightPurple}
            />
          </View>
          <View style={[styles.nineteenContainer]}>
            <Text style={styles.nineteen}>19</Text>
          </View>
          <Button onPress={openLinkedIn} style={styles.button}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </Button>
          <Button onPress={openGitHub} style={styles.button}>
            <Text style={styles.buttonText}>GitHub</Text>
          </Button>
        </View>

        {/* @ts-ignore */}
        <Paragraph paragraph={paragraphs} />
        <BackButton onPress={() => navigation.navigate('Home')} />
      </ScrollView>
    </View>
  );
};

export default Cphilipse;
