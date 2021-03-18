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

interface Props {
  darkmode: boolean;
  navigation: any;
}

const EvidenceForJesus = ({darkmode, navigation}: Props) => {
  const opacity = useSharedValue(0);

  const styleOpacity = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{rotate: '90deg'}],
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
        <View style={styles.page}>
          <Text style={[styles.headerTitle, color(darkmode)]}>
            Evidence for the historical Jesus
          </Text>

          <Text style={[styles.title1, color(darkmode)]}>
            Is the story of Jesus historical?
          </Text>
          <Text style={[styles.body1, color(darkmode)]}>
            {/*The short answer is most likely. There is no reason to disbelief*/}
            {/*that Jesus was condemned to the cross by Pontius Pilate, let alone*/}
            {/*that Jesus never existed. If Jesus lived and died, than the only*/}
            {/*reasonable explanation for the empty tomb is the resurrection. 007*/}
          </Text>
        </View>
        <CrucifixBackground
          style={{zIndex: 99}}
          bgcolor={{backgroundColor: colors.black}}
        />
        <CrucifixBackground
          style={{left: 10, bottom: 45, opacity: 0.5}}
          // bgcolor={{backgroundColor: colors.lightPurple}}
        />
        <Animated.View
          style={[
            {
              position: 'absolute',
              top: metrics.screenHeight * 0.85,
              alignSelf: 'center',
            },
            styleOpacity,
          ]}>
          <Text
            style={[
              color(darkmode),
              {
                transform: [{rotate: '270deg'}],
                position: 'absolute',
                width: 70,
                left: -50,
              },
            ]}>
            Swipe up
          </Text>
          <Icon name={Icons.ARROW_RIGHT} color={colors.white} />
        </Animated.View>
        <View style={[styles.page, {marginTop: metrics.screenHeight / 1.5}]}>
          <Text style={[styles.title1, color(darkmode)]}>
            {/*Did Jesus even live and die on the cross?*/}
            What's the historical evidence?
          </Text>
          <Text style={[styles.body1, color(darkmode)]}>
            Tacitus Josephus
            {/*The short answer is most likely. There is no reason to disbelief*/}
            {/*that Jesus was condemned to the cross by Pontius Pilate, let alone*/}
            {/*that Jesus never existed. If Jesus lived and died, than the only*/}
            {/*reasonable explanation for the empty tomb is the resurrection.*/}
          </Text>
        </View>
        <CrucifixBackground
          style={{zIndex: 99}}
          bgcolor={{backgroundColor: colors.black}}
        />
        <CrucifixBackground
          style={{left: 10, bottom: 45, opacity: 0.5}}
          // bgcolor={{backgroundColor: colors.lightPurple}}
        />
        <View style={[styles.page, {marginTop: metrics.screenHeight / 1.5}]}>
          <Text style={[styles.title1, color(darkmode)]}>
            Is the story of Jesus historical?
          </Text>
          <Text style={[styles.body1, color(darkmode)]}>
            {/*The short answer is most likely. There is no reason to disbelief that*/}
            {/*Jesus was condemned to the cross by Pontius Pilate, let alone that*/}
            {/*Jesus never existed. If Jesus lived and died, than the only reasonable*/}
            {/*explanation for the empty tomb is the resurrection. 007*/}
          </Text>
        </View>
        <CrucifixBackground
          style={{zIndex: 99}}
          bgcolor={{backgroundColor: colors.black}}
        />
        <CrucifixBackground
          style={{left: 10, bottom: 45, opacity: 0.5}}
          // bgcolor={{backgroundColor: colors.lightPurple}}
        />
      </ScrollView>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EvidenceForJesus;
