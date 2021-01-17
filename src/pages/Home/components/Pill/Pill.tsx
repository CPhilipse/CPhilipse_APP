import React from 'react';
import {View, Text, Image} from 'react-native';
import {color} from '../../../../utils/DarkmodeUtils';
import {ProjectProps} from '../../../../utils/DummyData';
import styles from './pill.style';

interface Props {
  darkmode: boolean;
  item: ProjectProps;
}

const Pill = ({darkmode, item}: Props) => {
  return (
    <>
      <View style={styles.container}>
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
    </>
  );
};

export default Pill;
