import React from 'react';
import {View, Text, Image} from 'react-native';
import {color} from '../../../../utils/DarkmodeUtils';
import {ProjectProps} from '../../../../utils/DummyData';
import styles from './pill.style';
import Icon from '../../../../components/Icon';
import Icons from '../../../../enum/Icons';
import {colors} from '../../../../themes';
import Button from '../../../../components/Button';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  darkmode: boolean;
  item: ProjectProps;
  setFavorite: (item: ProjectProps) => void;
  favorites: ProjectProps[];
  styleFavoriteTransition: Animated.AnimatedStyleProp<object>;
}

// Onpress of heart a nice animation.
// maybe like with IWDER checkbox, have it go bigger and dissipate.
// OR
// fill the heart with a red element from bottom to top when activated
// when unactivated have the red element go down
const Pill = ({
  darkmode,
  item,
  setFavorite,
  favorites,
  styleFavoriteTransition,
}: Props) => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={item.home_image} style={styles.image} />
      </View>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <Text style={styles.projectSubtitle}>{item.subTitle}</Text>
      <View style={styles.categoriesContainer}>
        <Text style={styles.projectCategories}>{item.category}</Text>
      </View>
      <Button style={styles.favorite} onPress={() => setFavorite(item)}>
        <Animated.View style={[styleFavoriteTransition]}>
          <Icon
            name={Icons.FAVORITE}
            size={30}
            color={favorites.includes(item) ? colors.red : colors.white}
          />
        </Animated.View>
      </Button>
    </>
  );
};

export default Pill;
