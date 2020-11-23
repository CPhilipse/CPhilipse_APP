import React from 'react';
import {View, Text} from 'react-native';
import styles from './projectdetails.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps} from '../../utils/DummyData';
import Menu from '../../components/Menu';

interface Props {
  darkmode: boolean;
  route: {params: ProjectProps};
  navigation: any;
}

const ProjectDetails = ({darkmode, route, navigation}: Props) => {
  const {id, title, body, video} = route.params;

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Menu darkmode={darkmode} goToPage={navigation.navigate} />
      <Text>{title}</Text>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProjectDetails;
