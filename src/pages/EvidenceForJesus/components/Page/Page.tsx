import React from 'react';
import {View, Text, ScrollView, StyleProp} from 'react-native';
import styles from './page.style';
import {color} from '../../../../utils/DarkmodeUtils';
import CrucifixBackground from '../../../../components/CrucifixBackground';
import {colors, metrics} from '../../../../themes';
import Animated from 'react-native-reanimated';
import Icon from '../../../../components/Icon/Icon';
import Icons from '../../../../enum/Icons';

interface Props {
  style?: StyleProp<object>;
  darkmode: boolean;
  title: string;
  body?: string;
  styleOpacity?: any;
  showSwipeIndication: boolean;
}

const Page = ({
  style,
  darkmode,
  title,
  body,
  styleOpacity,
  showSwipeIndication,
}: Props) => {
  return (
    <>
      <View style={[styles.page, style]}>
        <Text style={[styles.title, color(darkmode)]}>{title}</Text>
        <Text style={[styles.body, color(darkmode)]}>{body}</Text>
      </View>
      <CrucifixBackground
        style={styles.crucifixTopLayer}
        bgcolor={{backgroundColor: colors.black}}
      />
      <CrucifixBackground style={styles.crucifixShadow} />
      {showSwipeIndication && (
        <Animated.View style={[styles.swipeUpContainer, styleOpacity]}>
          <Text style={[color(darkmode), styles.swipeUpCopy]}>Swipe up</Text>
          <Icon name={Icons.ARROW_DOWN} color={colors.white} />
        </Animated.View>
      )}
    </>
  );
};

export default Page;
