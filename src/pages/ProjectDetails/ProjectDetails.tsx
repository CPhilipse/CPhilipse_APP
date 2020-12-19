import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles, {OFFSET_CARD} from './projectdetails.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps} from '../../utils/DummyData';
import Menu from '../../components/Menu';
import {colors, metrics} from '../../themes';

interface Props {
  darkmode: boolean;
  route: {params: ProjectProps};
  navigation: any;
}

interface HeaderProps {
  darkmode: boolean;
  categories: string[];
  title: string;
  navigation: any;
}

interface CardProps {
  title: string;
  body: string;
}

const Header = ({title, darkmode, categories, navigation}: HeaderProps) => (
  <>
    <Menu
      backgroundColor={darkmode ? colors.white : colors.black}
      darkmode={darkmode}
      goToPage={navigation.navigate}
    />
    <View style={styles.header}>
      <Text style={[styles.categories, color(darkmode)]}>
        {categories.map((category: string) => `${category} `)}
      </Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </>
);

const Card = ({title, body}: CardProps) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardBody}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  </View>
);

//https://www.youtube.com/watch?v=yV-2HRzNX9o
// https://github.com/catalinmiron/react-native-movie-2.0-carousel/blob/master/App.js
// TODO: https://www.youtube.com/watch?v=rWwz9WO-hCo for the cards.
const snapToOffsets = [0, OFFSET_CARD];
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
          snapToInterval={metrics.screenWidth}
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
