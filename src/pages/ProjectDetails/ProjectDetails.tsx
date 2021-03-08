import React, {useState} from 'react';
import {View, ScrollView, FlatList, Image, StyleSheet} from 'react-native';
import styles from './projectdetails.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps, projects} from '../../utils/DummyData';
import Header from './components/Header';

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
  const [index, setIndex] = useState(0);

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Header
        categories={categories}
        title={title}
        darkmode={darkmode}
        navigation={navigation}
      />
      <FlatList
        style={styles.mainFlatlist}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          console.log('>> Flatlist: ', item);
          return (
            <View style={styles.listItem}>
              <View style={styles.overlay} />
              <Image source={item} style={styles.image} />
            </View>
          );
        }}
      />
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
