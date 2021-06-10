import React, {useCallback} from 'react';
import {View, Text, Image} from 'react-native';
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
  item: ProjectProps;
  setFavorite: (item: ProjectProps) => void;
  favorites: ProjectProps[];
}

const Pill = ({item, setFavorite, favorites}: Props) => {
  // Filter out the id of the favorites, so it'll show the heart red when there is a favorite.
  // Cause for some very odd reason, favorites.includes(item) does not work.
  const favId = favorites.filter((_: ProjectProps) => _.id === item.id);

  // TODO: abstract this animation code into its own function.
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);
  const addFavAnimation = useCallback(() => {
    scale.value = withRepeat(
      withTiming(2, {
        duration: 750,
      }),
      2,
      true,
    );
  }, [scale.value]);
  const removeFavAnimation = useCallback(() => {
    'worklet';
    translateY.value = withRepeat(withTiming(50, {duration: 750}), 2, true);
  }, [translateY.value]);

  const heartAnimationStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}, {translateY: translateY.value}],
  }));

  const handleFav = useCallback(() => {
    if (favId?.[0]?.id !== item.id) {
      setFavorite(item);
      addFavAnimation();
    } else {
      setTimeout(() => {
        setFavorite(item);
      }, 550);
      removeFavAnimation();
    }
  }, [favId, item, removeFavAnimation, setFavorite, addFavAnimation]);

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
      <Button style={styles.favorite} onPress={handleFav}>
        <Animated.View style={heartAnimationStyle}>
          <Icon
            name={Icons.FAVORITE}
            size={30}
            color={favId?.[0]?.id === item.id ? colors.red : colors.white}
          />
        </Animated.View>
      </Button>
    </>
  );
};

export default Pill;
