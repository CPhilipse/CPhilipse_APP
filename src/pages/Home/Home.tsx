import React, {useCallback, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import StrokeAnimation from '../../components/StrokeAnimation';
import {metrics} from '../../themes';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Extrapolate,
  useDerivedValue,
} from 'react-native-reanimated';
import AnimationOverlay from './components/AnimationOverlay';
import {projects} from '../../utils/DummyData';

interface Props {
  navigation: any;
}

const Home = ({navigation}: Props) => {
  /** Pangesture code */
  // const translateX = useSharedValue(0);
  // const translateY = useSharedValue(0);
  // const onGestureEvent = useAnimatedGestureHandler({
  //   onActive: (event, ctx) => {
  //     translateX.value = event.translationX;
  //     translateY.value = event.translationY;
  //   },
  // });
  // const style = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       {translateX: translateX.value},
  //       {translateY: translateY.value},
  //     ],
  //   };
  // });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push(Pages.CPHILIPSE)}>
        <AnimationOverlay />
      </TouchableOpacity>
      {/*<PanGestureHandler {...{onGestureEvent}}>*/}
      {/*  <Animated.View style={style}>*/}
      {/*    <View style={styles.cardContainer}>*/}
      {/*      <View style={styles.card}>*/}
      {/*        <Text style={styles.title}>CPhilipse</Text>*/}
      {/*        <Text*/}
      {/*          onPress={() => navigation.navigate(Pages.PORTFOLIO)}*/}
      {/*          style={styles.title}>*/}
      {/*          Portfolio*/}
      {/*        </Text>*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*  </Animated.View>*/}
      {/*</PanGestureHandler>*/}
    </View>
  );
};

export default Home;
