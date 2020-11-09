import React, {useCallback, useEffect} from 'react';
import {Linking, ScrollView, Text, View} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import Basketball from '../../components/Basketball';
import Animated from 'react-native-reanimated';
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

  useEffect(() => {
    startBasketballAnimation();
    startAnimatingCrucifix();
  }, [startBasketballAnimation, startAnimatingCrucifix]);

  const openLinkedIn = useCallback(() => {
    Linking.openURL('https://www.linkedin.com/in/clemens-philipse-2615b9162/');
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
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

        <View style={styles.bodyContainer}>
          <Text style={styles.body}>
            Hello! My name is Clemens and here I'm gonna tell some things about
            me and this app.{'\n'}
          </Text>

          <Text style={styles.subtitle}>Me</Text>
          <Text style={styles.body}>
            I live in The Netherlands and I'm following the education Machine
            Science at the university of Leiden. My ultimate dream and goal is
            to become a digital investigator at Interpol in Lyon.
            {'\n'}
          </Text>

          <Text style={styles.subtitle}>Reason</Text>
          <Text style={styles.body}>
            I started making this app with the intent of practicing mobile
            animations. I knew I could go nuts with animations on my own app and
            since I really love animations, I went all out! While trying to not
            make it too chaotic.
            {'\n'}
          </Text>

          <Text style={styles.body}>
            PS You can swipe the basketball :D{'\n'}
          </Text>
          <Text style={styles.body}>More...</Text>
        </View>
        <BackButton onPress={() => navigation.navigate('Home')} />
      </ScrollView>
    </View>
  );
};

export default Cphilipse;
