import React from 'react';
import {View, Switch} from 'react-native';
import styles from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import TitleHeader from '../../components/TitleHeader';
import Slider from '../../components/Slider';
import {
  GestureHandlerGestureEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';

interface Props {
  navigation: any;
  darkmode: boolean;
  switchDarkmode: (change: boolean) => void;
  setLanguage: (language: string) => void;
  language: string;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.SETTINGS, value);

const Settings = ({
  navigation,
  darkmode,
  switchDarkmode,
  setLanguage,
  language,
}: Props) => {
  const gestureY = useSharedValue(0);
  const velocityY = useSharedValue(0);

  const gestureX = useSharedValue(0);
  const velocityX = useSharedValue(0);

  const lanGestureX = useSharedValue(0);
  const lanVelocityX = useSharedValue(0);
  const darkmodeRight = () => {
    switchDarkmode(true);
  };
  const darkmodeLeft = () => {
    switchDarkmode(false);
  };
  const lanRight = () => {
    setLanguage(languages.en);
  };
  const lanLeft = () => {
    setLanguage(languages.nl);
  };

  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {offsetY: number}
  >({
    onStart: (_, ctx) => {
      ctx.offsetY = translateY.value;
    },
    onActive: ({translationY}, {offsetY}) => {
      translateY.value = offsetY + translationY;
    },
    onEnd: (event) => {
      // When swiping up or down it should spring back to 0.
      translateY.value = withSpring(0, {
        velocity: event.velocityY,
      });
    },
  });

  const sliderY = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />

      <View style={styles.sliderContainer}>
        <View style={styles.sliderField}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.sliderCircle, sliderY]} />
          </PanGestureHandler>
        </View>
      </View>

      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
