import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Menu from '../../components/Menu';
import StrokeAnimation from '../../components/StrokeAnimation';
import {colors, metrics} from '../../themes';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

const Home = ({navigation, darkmode}: Props) => {
  const opacityValue = useSharedValue(1);
  const [openingScreenFinished, setOpeningScreenFinished] = useState(false);

  const closeOpeningScreen = useCallback(() => {
    setOpeningScreenFinished(!openingScreenFinished);
  }, [setOpeningScreenFinished, openingScreenFinished]);

  const fadeOutOverlay = () => {
    'worklet';
    opacityValue.value = withTiming(
      0,
      {
        duration: 500,
        easing: Easing.linear,
      },
      () => !openingScreenFinished && runOnJS(closeOpeningScreen)(),
    );
  };

  const opacity = useAnimatedStyle(() => {
    const zIndex = openingScreenFinished ? 0 : 999;
    return {
      opacity: opacityValue.value,
      zIndex,
    };
  });
  const opacity2 = useAnimatedStyle(() => {
    const zIndex = openingScreenFinished ? 0 : 9999;
    return {
      opacity: opacityValue.value,
      zIndex,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <Menu darkmode={darkmode} goToPage={navigation.navigate} />

        <Animated.View style={[styles.strokeOverlay, opacity]} />
        <Animated.View style={[styles.stroke, opacity2]}>
          <StrokeAnimation fadeOutOverlay={fadeOutOverlay} />
        </Animated.View>

        <Button
          onPress={() => navigation.navigate(Pages.CPHILIPSE)}
          style={styles.cphilipse}>
          <Text style={[styles.clemens, color(darkmode)]}>Clemens</Text>
          <Text style={[styles.philipse, color(darkmode)]}>Philipse</Text>
        </Button>
        <AnimatedScrollview horizontal scrollEventThrottle={1}>
          {projects.map(
            ({
              id,
              title,
              subTitle,
              body,
              images,
              video,
              categories,
            }: ProjectProps) => {
              return (
                <Button
                  key={id}
                  onPress={() =>
                    navigation.navigate(Pages.PROJECT_DETAILS, {
                      id,
                      title,
                      subTitle,
                      body,
                      images,
                      video,
                      categories,
                    })
                  }
                  style={styles.projectContainer}>
                  <View style={styles.imageContainer}>
                    <Image source={images[0]} style={styles.image} />
                  </View>
                  <Text style={[styles.projectTitle, color(darkmode)]}>
                    {title}
                  </Text>
                  <Text style={[styles.projectSubtitle, color(darkmode)]}>
                    {subTitle}
                  </Text>
                  <View style={styles.categoriesContainer}>
                    {categories.map((category: string, index: number) => {
                      return (
                        <Text
                          key={index}
                          style={[styles.projectCategories, color(darkmode)]}>
                          {category}
                        </Text>
                      );
                    })}
                  </View>
                </Button>
              );
            },
          )}
        </AnimatedScrollview>
      </View>
    </View>
  );
};

export default Home;
