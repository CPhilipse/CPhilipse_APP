import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './projectdetails.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps} from '../../utils/DummyData';
import {metrics} from '../../themes';
import Card from './components/Card';
import Header from './components/Header';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

interface Props {
  darkmode: boolean;
  route: {params: ProjectProps};
  navigation: any;
}

/**
 * TODO:
 *  1. Show cards on the sides
 *  2. Scale active card bigger
 * Potential helpful resources;
 *  - https://www.youtube.com/watch?v=rWwz9WO-hCo
 *  - https://github.com/catalinmiron/react-native-movie-2.0-carousel/blob/master/App.js
 * */
const ProjectDetails = ({darkmode, route, navigation}: Props) => {
  const {title, body, categories} = route.params;

  const translateX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Header
        categories={categories}
        title={title}
        darkmode={darkmode}
        navigation={navigation}
      />
      <View style={styles.cardRow}>
        <Animated.ScrollView
          onScroll={onScroll}
          snapToInterval={metrics.screenWidth / 2}
          // snapToInterval={metrics.screenWidth}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <View style={styles.cards} key={index}>
              <Card title={title} body={body} x={translateX} index={index} />
            </View>
          ))}
        </Animated.ScrollView>
      </View>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
