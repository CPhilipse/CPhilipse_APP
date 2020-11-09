import React, {useCallback, useEffect} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import Basketball from '../../components/Basketball';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {images} from '../../themes';
import Header from '../../components/Header';
import {useBounce} from './animations/useBounce';
import {useCrucifix} from './animations/useCrucifix';
import Crucifix from '../../components/Crucifix/Crucifix';
import Button from '../../components/Button';

interface Props {
  navigation: any;
}

const Cphilipse = ({navigation}: Props) => {
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
  const scale = useSharedValue(1);

  useEffect(() => {
    startBasketballAnimation();
    startAnimatingCrucifix();
  }, [startBasketballAnimation, startAnimatingCrucifix, scale.value, scale]);

  const openLinkedIn = useCallback(() => {
    Linking.openURL('https://www.linkedin.com/in/clemens-philipse-2615b9162/');
  }, []);

  return (
    <View style={styles.container}>
      <Header title={'Clemens Philipse'} image={images.cphilipse} />

      <Animated.View style={[style, styles.basketball]}>
        <Basketball />
      </Animated.View>
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
      <View style={[styles.nineteenContainer]}>
        <Text style={styles.nineteen}>19</Text>
      </View>

      <Button onPress={openLinkedIn} style={styles.linkedinContainer}>
        <Text style={styles.linkedin}>LinkedIn</Text>
      </Button>
      <BackButton onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Cphilipse;
