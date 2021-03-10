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
        {item.categories.map((category: string, index: number) => {
          return (
            <Text
              key={index}
              style={[styles.projectCategories, color(darkmode)]}>
              {category}
            </Text>
          );
        })}
      </View>
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          opacity: 0.9,
        }}>
        <Icon name={Icons.FAVORITE} size={75} color={colors.lightGrey} />
      </View>
    </>
  );
};

export default Pill;
