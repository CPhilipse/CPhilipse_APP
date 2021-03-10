import React, {useRef, useState} from 'react';
import {View, ScrollView, FlatList, Image, StyleSheet} from 'react-native';
import styles, {IMAGE_SIZE, SPACING} from './projectdetails.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps, projects} from '../../utils/DummyData';
import Header from './components/Header';
import {metrics} from '../../themes';
import Button from '../../components/Button';

interface Props {
  darkmode: boolean;
  route: {params: ProjectProps};
  navigation: any;
}

type Offset = {
  offsetY: number;
  offsetX: number;
};

/**
 * TODO:
 *  1. Show cards on the sides
 *  2. Scale active card bigger
 *
 *  OnSwipe of the image/card, add this image to the back of the stack.
 *  Do this by accessing the Prev state and adding the swiped card to the array in the state.
 *
 * Potential helpful resources;
 *  - https://www.youtube.com/watch?v=rWwz9WO-hCo
 *  - https://github.com/catalinmiron/react-native-movie-2.0-carousel/blob/master/App.js
 *  - Tinder Swiping video of William Candillion
 * */
const ProjectDetails = ({darkmode, route, navigation}: Props) => {
  const {title, body, categories, images} = route.params;
  // const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync galleries
  const topRef = useRef();
  const thumbRef = useRef();

  const scrollToActiveIndex = (index: number) => {
    console.log('>>> ACTIVE INDEX: ', index);
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * metrics.screenWidth,
      animated: true,
    });

    // middle of thumbnail greater than middle of screen, true
    // then scroll thumbnail gallery to middle.
    if (
      index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 >
      metrics.screenWidth / 2
    ) {
      thumbRef?.current?.scrollToOffset({
        offset:
          index * (IMAGE_SIZE + SPACING) -
          metrics.screenWidth / 2 +
          IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Header
        categories={categories}
        title={title}
        darkmode={darkmode}
        navigation={navigation}
      />
      <FlatList
        ref={topRef}
        style={styles.mainFlatlist}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          // Give info as to how far we are in the list
          // Math.round actually rounds the number upwards instead of with floor which doesn't do it
          // offset x divided by screenWidth cause at the start, no offset
          // index is 0. One slide further, the offset is screenwidth,
          // so screenwidth / screenwidth makes 1, index 1. Etc.
          scrollToActiveIndex(
            Math.round(ev.nativeEvent.contentOffset.x / metrics.screenWidth),
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.listItem}>
              <View style={styles.overlay} />
              <Image source={item} style={styles.image} />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumbRef}
        style={styles.smallFlatlist}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Button onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={item}
                style={[
                  styles.smallImage,
                  activeIndex === index && styles.activeStyle,
                ]}
              />
            </Button>
          );
        }}
      />
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
