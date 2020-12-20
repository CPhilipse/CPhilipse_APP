import React from 'react';
import {View, Switch} from 'react-native';
import styles, {SLIDER_SIZE} from './settings.style';
import {getLocalizedString, languages} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
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
import {clamp, mix, snapPoint} from 'react-native-redash';

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
      translateY.value = snapPoint(translateY.value, event.velocityY, [
        0,
        SLIDER_SIZE,
      ]);
    },
  });

  const clampY = useDerivedValue(() => {
    return clamp(translateY.value, 0, SLIDER_SIZE);
  });
  const sliderY = useAnimatedStyle(() => ({
    transform: [{translateY: clampY.value}],
  }));
  const sliderYcable = useAnimatedStyle(() => ({
    transform: [{translateY: clampY.value}],
  }));

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <TitleHeader darkmode={darkmode} title={localizedCopy('title')} />

      <Animated.View style={[styles.cable, sliderYcable]} />
      <View style={styles.sliderContainer}>
        <View style={styles.sliderField}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.sliderCircle, sliderY]}>
              <View style={styles.innerCircle} />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>

      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Settings;
