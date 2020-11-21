import React from 'react';
import {View, Text} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor} from '../../utils/DarkmodeUtils';

interface Props {
  darkmode: boolean;
  navigation: any;
}

// AnimationOverlay causes error when navigating to other page.
const Home = ({navigation, darkmode}: Props) => {
  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Button onPress={() => navigation.navigate(Pages.CPHILIPSE)}>
        <View style={styles.cphilipse}>
          <Text style={{color: 'white'}}>CPhilipse</Text>
        </View>
      </Button>
      <Button onPress={() => navigation.navigate(Pages.SETTINGS)}>
        <View style={styles.cphilipse}>
          <Text style={{color: 'white'}}>Settings</Text>
        </View>
      </Button>
      {projects.map(({id, title, body, video}: ProjectProps) => {
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
            }>
            <View style={styles.projectContainer}>
              <Text style={{color: 'white'}}>{title}</Text>
            </View>
          </Button>
        );
      })}
    </View>
  );
};

export default Home;
