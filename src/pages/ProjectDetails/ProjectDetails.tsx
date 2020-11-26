import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import styles from './projectdetails.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps} from '../../utils/DummyData';
import Menu from '../../components/Menu';
import TitleHeader from '../../components/TitleHeader';
import LinearGradient from 'react-native-linear-gradient';
import {colors, metrics} from '../../themes';

interface Props {
  darkmode: boolean;
  route: {params: ProjectProps};
  navigation: any;
}

interface CardProps {
  title: string;
  body: string;
}

const Card = ({title, body}: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{body}</Text>
    </View>
  );
};

// TODO: https://www.youtube.com/watch?v=rWwz9WO-hCo for the cards.
const ProjectDetails = ({darkmode, route, navigation}: Props) => {
  const {id, title, subTitle, body, images, video, categories} = route.params;

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Menu
        backgroundColor={darkmode ? colors.white : colors.black}
        darkmode={darkmode}
        goToPage={navigation.navigate}
      />
      <View style={styles.header}>
        <Text style={[styles.categories, color(darkmode)]}>
          {categories.map((category: string) => `${category}`)}
        </Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.cardContainer}>
        <ScrollView
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToInterval={metrics.screenWidth}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Card key={index} title={title} body={body} />
          ))}
        </ScrollView>
      </View>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
