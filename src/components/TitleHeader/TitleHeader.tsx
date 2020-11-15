import React from 'react';
import {Text} from 'react-native';
import {color} from '../../utils/DarkmodeUtils';
import styles from './titleheader.style';

interface Props {
  darkmode: boolean;
  title: string;
}

const TitleHeader = ({darkmode, title}: Props) => {
  return <Text style={[styles.header, color(darkmode)]}>{title}</Text>;
};

export default TitleHeader;
