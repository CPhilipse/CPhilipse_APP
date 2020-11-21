import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

const Home = ({navigation, darkmode}: Props) => {
  // const translationX = useSharedValue(0);
  //
  // const onScroll = useAnimatedScrollHandler({
  //   onScroll: (event) => {
  //     translationX.value = event.contentOffset.x;
  //   },
  // });

  const handleMenuAnimation = () => {};

  // TODO: Onpress of menu, grow circle and rotate icon to close icon. Once done, fade all the other stuff in.
  return (
    <Button
      onPress={handleMenuAnimation}
      style={[styles.container, bgcolor(darkmode)]}>
      <View style={styles.menu}>
        <View style={styles.lineOne} />
        <View style={styles.lineTwo} />
      </View>
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
                  {categories.map((category: string) => {
                    return (
                      <Text style={[styles.projectCategories, color(darkmode)]}>
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
    </Button>
  );
};

export default Home;
