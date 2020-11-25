import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import styles from './projectdetails.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
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

// TODO: https://www.youtube.com/watch?v=rWwz9WO-hCo for the cards.
const ProjectDetails = ({darkmode, route, navigation}: Props) => {
  const {id, title, subTitle, body, images, video, categories} = route.params;

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <TitleHeader darkmode={darkmode} title={title} />
      <Menu darkmode={darkmode} goToPage={navigation.navigate} />
      <View style={styles.backgroundImageContainer}>
        <Image
          source={images[0]}
          style={styles.backgroundImageBlurred}
          blurRadius={4}
        />
        <LinearGradient
          style={styles.gradient}
          colors={['transparent', '#000']}
          locations={[0.5, 1]}
        />
      </View>

      <View style={styles.cardContainer}>
        <ScrollView
          scrollEventThrottle={16}
          decelerationRate="fast"
          snapToInterval={metrics.screenWidth / 1.3 + metrics.scale(80)}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{body}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{body}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{body}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{body}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{body}</Text>
          </View>
        </ScrollView>
      </View>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
