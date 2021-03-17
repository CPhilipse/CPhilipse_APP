import React from 'react';
import {View, Text} from 'react-native';
import styles from './evidenceforjesus.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';

interface Props {
  darkmode: boolean;
  navigation: any;
}

// TODO: Add the cross here, just as the library page in the HvGeA app.
const EvidenceForJesus = ({darkmode, navigation}: Props) => {
  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, color(darkmode)]}>
          Evidence for the historical Jesus
        </Text>

        <Text style={[styles.title1, color(darkmode)]}>
          Is the story of Jesus historical?
        </Text>
        <Text style={[styles.body1, color(darkmode)]}>
          The short answer is most likely. There is no reason to disbelief that
          Jesus was condemned to the cross by Pontius Pilate, let alone that
          Jesus never existed. If Jesus lived and died, than the only reasonable
          explanation for the empty tomb is the resurrection.
        </Text>
      </View>
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EvidenceForJesus;
