import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './evidenceforjesus.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import CrucifixBackground from '../../components/CrucifixBackground';
import {colors, metrics} from '../../themes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from '../../components/Icon/Icon';
import Icons from '../../enum/Icons';
import Page from './components/Page';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const EvidenceForJesus = ({darkmode, navigation}: Props) => {
  const opacity = useSharedValue(0);

  const styleOpacity = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    'worklet';
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 1500,
      }),
      -1,
      true,
    );
  }, [opacity]);

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <ScrollView>
        <Text style={[styles.headerTitle, color(darkmode)]}>
          Evidence for the historical Jesus
        </Text>
        <Page
          darkmode={darkmode}
          title={'Is the story of Jesus historical accurate?'}
          body={"Let's find out! "}
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Historical evidence'}
          body={
            "In order to answer the question, we need to look at the historical evidence. There are 2 historians that are of significant value in regards to Jesus' existence and death; Tacitus and Josephus."
          }
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'haiii'}
          body={"Let's find out! "}
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'TEST'}
          body={"Let's find out! "}
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
      </ScrollView>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EvidenceForJesus;
