import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import Animated from 'react-native-reanimated';
import Menu from '../../components/Menu';

interface Props {
  darkmode: boolean;
  navigation: any;
}

const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

const Home = ({navigation, darkmode}: Props) => {
  return (
    <View style={styles.container}>
      <Menu darkmode={darkmode} goToPage={navigation.navigate} />

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
  );
};

export default Home;
