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

const AnimatedScrollview = Animated.createAnimatedComponent(ScrollView);

interface Props {
  darkmode: boolean;
  hasSplashscreenOn: boolean;
  navigation: any;
}

const localizedCopy = (value: string) => getLocalizedString(Pages.HOME, value);

const Home = ({navigation, darkmode, hasSplashscreenOn}: Props) => {
  const opacityValue = useSharedValue(1);
  const [openingScreenFinished, setOpeningScreenFinished] = useState(false);

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

        <View style={styles.categories}>
          <Text style={[styles.category, {color: colors.lightPurple}]}>
            Show all
          </Text>
          <Text style={[styles.category]}>Hobby project</Text>
          <Text style={[styles.category]}>Blog</Text>
        </View>

        <AnimatedScrollview
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}>
          {projects.map((item: ProjectProps) => {
            return (
              <Button
                key={item.id}
                onPress={() =>
                  navigation.navigate(Pages.PROJECT_DETAILS, {...item})
                }
                style={styles.projectContainer}>
                <Pill darkmode={darkmode} item={item} />
              </Button>
            );
          })}
        </AnimatedScrollview>
      </View>
    </View>
  );
};

export default Home;
