import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './home.style';
import Pages from '../../enum/Pages';
import {ProjectProps, projects} from '../../utils/DummyData';
import Button from '../../components/Button';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import Animated, {useSharedValue} from 'react-native-reanimated';
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

  const setFavorite = useCallback(
    (item) => {
      let favs = [...favorites];

      // if item is in list, than it is already favorite. If it's not already in list, than its not a fav.
      if (favs.includes(item)) {
        // Remove item from favorites
        favs = favs.filter((_) => _.id !== item.id);
      } else {
        // Add item to favorites
        favs.push(item);
      }
      setFavorites(favs);
    },
    [favorites, setFavorites],
  );

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <View style={styles.padding}>
        <Menu darkmode={darkmode} goToPage={navigation.navigate} />

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

        <ScrollView horizontal contentContainerStyle={styles.categories}>
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
