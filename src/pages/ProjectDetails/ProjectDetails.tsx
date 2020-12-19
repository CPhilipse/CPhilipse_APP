import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './projectdetails.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps} from '../../utils/DummyData';
import {metrics} from '../../themes';
import Card from './components/Card';
import Header from './components/Header';

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

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Header
        categories={categories}
        title={title}
        darkmode={darkmode}
        navigation={navigation}
      />
      <View style={styles.cardRow}>
        <ScrollView
          snapToInterval={metrics.screenWidth / 2}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {[1, 2, 3, 4, 5].map(() => (
            <View style={styles.cards}>
              <Card title={title} body={body} />
            </View>
          ))}
        </ScrollView>
      </View>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
