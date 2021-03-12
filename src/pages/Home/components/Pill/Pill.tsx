import React from 'react';
import {View, Text, Image} from 'react-native';
import {color} from '../../../../utils/DarkmodeUtils';
import {ProjectProps} from '../../../../utils/DummyData';
import styles from './pill.style';
import Icon from '../../../../components/Icon';
import Icons from '../../../../enum/Icons';
import {colors} from '../../../../themes';

interface Props {
  darkmode: boolean;
  item: ProjectProps;
}

// Onpress of heart a nice animation.
// maybe like with IWDER checkbox, have it go bigger and dissipate.
// OR
// fill the heart with a red element from bottom to top when activated
// when unactivated have the red element go down
const Pill = ({darkmode, item}: Props) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={item.images[0]} style={styles.image} />
      </View>
      <Text style={[styles.projectTitle, color(darkmode)]}>{item.title}</Text>
      <Text style={[styles.projectSubtitle, color(darkmode)]}>
        {item.subTitle}
      </Text>
      <View style={styles.categoriesContainer}>
        <Text style={[styles.projectCategories, color(darkmode)]}>
          {item.category}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}>
        <Icon name={Icons.FAVORITE} size={30} color={colors.lightGrey} />
      </View>
    </>
  );
};

export default Pill;
