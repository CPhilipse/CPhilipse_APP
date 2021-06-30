import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './evidenceforjesus.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Page from './components/Page';
import {getLocalizedString} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.EVIDENCE_FOR_JESUS, value);

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
          title={localizedCopy('firstTitle')}
          body={localizedCopy('firstBody')}
          styleOpacity={styleOpacity}
          showSwipeIndication
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={localizedCopy('secondTitle')}
          body={localizedCopy('secondBody')}
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={localizedCopy('thirdTitle')}
          body={localizedCopy('thirdBody')}
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={localizedCopy('fourthTitle')}
          body={localizedCopy('fourthBody')}
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={localizedCopy('fifthTitle')}
          body={localizedCopy('fifthBody')}
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={localizedCopy('sixthTitle')}
          body={localizedCopy('sixthBody')}
          styleOpacity={styleOpacity}
        />
        <Page
          style={styles.nextPagePadding}
          darkmode={darkmode}
          title={'Sources'}
          body={'...'}
          styleOpacity={styleOpacity}
        />
      </ScrollView>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EvidenceForJesus;
