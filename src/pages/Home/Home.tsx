import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Menu from '../../components/Menu';
import Pill from './components/Pill';
import {fadeOutOverlay} from './animations/fadeOutOverlay';
import Splashscreen from './components/Splashscreen';
import {getLocalizedString} from '../../utils/LocalizedUtils';
import {colors} from '../../themes';
import Categories from '../../enum/Categories';

const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

interface Props {
  darkmode: boolean;
  hasSplashscreenOn: boolean;
  navigation: any;
  favorites: ProjectProps[];
  setFavorites: (item: ProjectProps[]) => void;
}

const localizedCopy = (value: string) => getLocalizedString(Pages.HOME, value);

const Home = ({
  navigation,
  darkmode,
  hasSplashscreenOn,
  setFavorites,
  favorites,
}: Props) => {
  const opacityValue = useSharedValue(1);
  const [openingScreenFinished, setOpeningScreenFinished] = useState(false);
  const [categories, setCategories] = useState({
    favorites: false,
    hobby: false,
    blog: false,
    school: false,
  });

  const closeOpeningScreen = useCallback(() => {
    setOpeningScreenFinished(!openingScreenFinished);
  }, [setOpeningScreenFinished, openingScreenFinished]);

  const {
    styles: {opacity, opacity2},
    methods: {fadeOut},
  } = fadeOutOverlay({
    opacityValue,
    openingScreenFinished,
    closeOpeningScreen,
  });

  const scale = useSharedValue(1);
  const heartOpacity = useSharedValue(0);
  const startHeartAnimation = useCallback(() => {
    'worklet';
    scale.value = withTiming(4, {
      duration: 1500,
    });

    // heartOpacity.value = withTiming(isFavourite ? 0 : 1, {
    //   duration: 10000,
    // });
  }, [scale.value]);

  const reverseHeartAnimation = useCallback(() => {
    'worklet';
    scale.value = withRepeat(
      withTiming(1, {
        duration: 1500,
      }),
      1,
      true,
    );
  }, [scale.value]);

  const styleFavoriteTransition = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
    // opacity: heartOpacity.value,
  }));

  const setFavorite = useCallback(
    (item) => {
      let favs = [...favorites];

      // if item is in list, than it is already favorite. If it's not already in list, than its not a fav.
      if (favs.includes(item)) {
        // Remove item from favorites
        favs = favs.filter((_) => _.id !== item.id);
        // reverseHeartAnimation();
      } else {
        // Add item to favorites
        favs.push(item);
        startHeartAnimation();
      }
      setFavorites(favs);
    },
    [favorites, setFavorites, startHeartAnimation, reverseHeartAnimation],
  );

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Menu darkmode={darkmode} goToPage={navigation.navigate} />
      <View>
        <Splashscreen
          opacity={opacity}
          opacity2={opacity2}
          fadeOut={fadeOut}
          hasSplashscreenOn={hasSplashscreenOn}
        />

        <Button
          onPress={() => navigation.navigate(Pages.CPHILIPSE)}
          style={styles.cphilipse}>
          <Text style={[styles.clemens, color(darkmode)]}>
            {localizedCopy('fname')}
          </Text>
          <Text style={[styles.philipse, color(darkmode)]}>
            {localizedCopy('lname')}
          </Text>
        </Button>

        <ScrollView
          horizontal
          contentContainerStyle={styles.categories}
          showsHorizontalScrollIndicator={false}>
          <Button
            onPress={() =>
              setCategories({
                blog: categories.blog,
                favorites: !categories.favorites,
                hobby: categories.hobby,
                school: categories.school,
              })
            }>
            <Text
              style={[
                styles.category,
                categories.favorites && {color: colors.lightPurple},
              ]}>
              Favorites
            </Text>
          </Button>
          <Button
            onPress={() =>
              setCategories({
                blog: categories.blog,
                favorites: categories.favorites,
                hobby: !categories.hobby,
                school: categories.school,
              })
            }>
            <Text
              style={[
                styles.category,
                categories.hobby && {color: colors.lightPurple},
              ]}>
              Hobby project
            </Text>
          </Button>
          <Button
            onPress={() =>
              setCategories({
                blog: !categories.blog,
                favorites: categories.favorites,
                hobby: categories.hobby,
                school: categories.school,
              })
            }>
            <Text
              style={[
                styles.category,
                categories.blog && {color: colors.lightPurple},
              ]}>
              Blog
            </Text>
          </Button>
          <Button
            onPress={() =>
              setCategories({
                blog: categories.blog,
                favorites: categories.favorites,
                hobby: categories.hobby,
                school: !categories.school,
              })
            }>
            <Text
              style={[
                styles.category,
                categories.school && {color: colors.lightPurple},
              ]}>
              School
            </Text>
          </Button>
        </ScrollView>

        <AnimatedScrollview
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          contentContainerStyle={styles.pillList}>
          {categories.favorites
            ? favorites.map((item: ProjectProps) => {
                const {blog, school, hobby} = categories;
                const {BLOG, SCHOOL, HOBBY} = Categories;

                const uncheckedAll = !school && !blog && !hobby;
                if (uncheckedAll) {
                  return (
                    <Button
                      key={item.id}
                      onPress={() =>
                        navigation.navigate(Pages.PROJECT_DETAILS, {...item})
                      }
                      style={[styles.projectContainer]}>
                      <Pill
                        setFavorite={setFavorite}
                        darkmode={darkmode}
                        item={item}
                        favorites={favorites}
                        styleFavoriteTransition={styleFavoriteTransition}
                      />
                    </Button>
                  );
                }

                const showHobbyPills = hobby && HOBBY === item.category;
                const showBlogPills = blog && BLOG === item.category;
                const showSchoolPills = school && SCHOOL === item.category;
                return (
                  <Button
                    key={item.id}
                    onPress={() =>
                      navigation.navigate(Pages.PROJECT_DETAILS, {...item})
                    }
                    style={[
                      styles.projectContainer,
                      {display: 'none'},
                      showHobbyPills && {display: 'flex'},
                      showBlogPills && {display: 'flex'},
                      showSchoolPills && {display: 'flex'},
                    ]}>
                    <Pill
                      setFavorite={setFavorite}
                      darkmode={darkmode}
                      item={item}
                      favorites={favorites}
                      styleFavoriteTransition={styleFavoriteTransition}
                    />
                  </Button>
                );
              })
            : projects.map((item: ProjectProps) => {
                const {blog, school, hobby} = categories;
                const {BLOG, SCHOOL, HOBBY} = Categories;

                const uncheckedAll = !school && !blog && !hobby;
                if (uncheckedAll) {
                  return (
                    <Button
                      key={item.id}
                      onPress={() =>
                        navigation.navigate(Pages.PROJECT_DETAILS, {...item})
                      }
                      style={[styles.projectContainer]}>
                      <Pill
                        setFavorite={setFavorite}
                        darkmode={darkmode}
                        item={item}
                        favorites={favorites}
                        styleFavoriteTransition={styleFavoriteTransition}
                      />
                    </Button>
                  );
                }

                const showHobbyPills = hobby && HOBBY === item.category;
                const showBlogPills = blog && BLOG === item.category;
                const showSchoolPills = school && SCHOOL === item.category;
                return (
                  <Button
                    key={item.id}
                    onPress={() =>
                      navigation.navigate(Pages.PROJECT_DETAILS, {...item})
                    }
                    style={[
                      styles.projectContainer,
                      {display: 'none'},
                      showHobbyPills && {display: 'flex'},
                      showBlogPills && {display: 'flex'},
                      showSchoolPills && {display: 'flex'},
                    ]}>
                    <Pill
                      setFavorite={setFavorite}
                      darkmode={darkmode}
                      item={item}
                      favorites={favorites}
                      styleFavoriteTransition={styleFavoriteTransition}
                    />
                  </Button>
                );
              })}
        </AnimatedScrollview>
      </View>
    </View>
  );
};

export default Home;
