import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import CustomIcon from '../../components/Icon';
import Icons from '../../enum/Icons';
import {colors} from '../../themes';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

const Home = ({navigation, darkmode}: Props) => {
  const [menuActive, setMenuActive] = useState(false);
  const scale = useSharedValue(0);

  const startMenuAnimation = () => {
    'worklet';
    scale.value = withTiming(8, {
      duration: 1500,
    });

    setMenuActive(true);
  };

  const closeMenu = () => {
    'worklet';
    scale.value = withTiming(0, {
      duration: 1500,
    });

    setMenuActive(false);
  };
  // const translationX = useSharedValue(0);
  //
  // const onScroll = useAnimatedScrollHandler({
  //   onScroll: (event) => {
  //     translationX.value = event.contentOffset.x;
  //   },
  // });

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  // TODO: Onpress of menu, grow circle and rotate icon to close icon. Once done, fade all the other stuff in.
  return (
    <View style={styles.container}>
      <Button
        onPress={menuActive ? closeMenu : startMenuAnimation}
        style={[styles.menu, bgcolor(darkmode)]}>
        {menuActive ? (
          <View style={styles.closeIcon}>
            <CustomIcon name={Icons.CLOSE} color={colors.white} />
          </View>
        ) : (
          <>
            <View style={styles.lineOne} />
            <View style={styles.lineTwo} />
          </>
        )}
      </Button>
      <Animated.View style={[styles.menuCircle, scaleStyle]} />

      <Button
        onPress={() => navigation.navigate(Pages.CPHILIPSE)}
        style={styles.cphilipse}>
        <Text style={[styles.clemens, color(darkmode)]}>Clemens</Text>
        <Text style={[styles.philipse, color(darkmode)]}>Philipse</Text>
      </Button>
      <AnimatedScrollview
        horizontal
        scrollEventThrottle={1}
        // onScroll={onScroll}
      >
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
                    body,
                    video,
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
  );
};

export default Home;
