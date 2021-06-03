import React, {useCallback, useRef, useState} from 'react';
import {View, FlatList, Image, Text, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import styles, {IMAGE_SIZE, SPACING} from './projectdetails.style';
import {bgcolor, color} from '../../utils/DarkmodeUtils';
import BackButton from '../../components/BackButton';
import {ProjectProps} from '../../utils/DummyData';
import Header from './components/Header';
import {colors, metrics} from '../../themes';
import Button from '../../components/Button';
import Icons from '../../enum/Icons';
import useMenu from '../../components/Menu/useMenu';
import Menu from '../../components/Menu';
import {getLocalizedString} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import {openUrl} from '../../utils/LinkingUtils';

interface Props {
  darkmode: boolean;
  route: {params: ProjectProps};
  navigation: any;
}

const ProjectDetails = ({darkmode, route, navigation}: Props) => {
  const {title, body, category, url, images} = route.params;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeOverlayImage, setActiveOverlayImage] = useState(false);

  const [menuActive, setMenuActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleMenu = useCallback(
    (isActive: boolean) => {
      setMenuActive(isActive);
    },
    [setMenuActive],
  );
  const toggleOverlay = useCallback(
    (isActive: boolean) => {
      setOverlayActive(isActive);
    },
    [setOverlayActive],
  );

  const {
    methods: {startMenuAnimation, closeMenu},
    styles: {opacityStyle},
  } = useMenu(toggleOverlay, toggleMenu);

  // Sync galleries
  const topRef: any = useRef();
  const thumbRef: any = useRef();

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * metrics.screenWidth,
      animated: true,
    });

    // middle of thumbnail greater than middle of screen, true
    // then scroll thumbnail gallery to middle.
    if (
      index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 >
      metrics.screenWidth / 2
    ) {
      thumbRef?.current?.scrollToOffset({
        offset:
          index * (IMAGE_SIZE + SPACING) -
          metrics.screenWidth / 2 +
          IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  const handleOverlayImage = () => {
    console.log('>> Overlay image: ', activeOverlayImage);
    setActiveOverlayImage(!activeOverlayImage);
  };

  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <StatusBar hidden />
      <Animated.View
        style={[
          styles.extraInformationOverlayContainer,
          overlayActive ? {zIndex: 2} : {zIndex: -2},
          opacityStyle,
        ]}>
        <Header
          category={category}
          title={title}
          darkmode={darkmode}
          navigation={navigation}
        />
        <View style={styles.textContainer}>
          <Text style={styles.overlayCopy}>{body}</Text>
          <Text
            onPress={() => openUrl(url)}
            style={[styles.overlayCopy, styles.link]}>
            {url}
          </Text>
        </View>
        <BackButton
          darkmode
          icon={Icons.HOME}
          onPress={() => navigation.goBack()}
        />
      </Animated.View>
      <FlatList
        ref={topRef}
        style={styles.mainFlatlist}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          // Give info as to how far we are in the list
          // Math.round actually rounds the number upwards instead of with floor which doesn't do it
          // offset x divided by screenWidth cause at the start, no offset
          // index is 0. One slide further, the offset is screenwidth,
          // so screenwidth / screenwidth makes 1, index 1. Etc.
          scrollToActiveIndex(
            Math.round(ev.nativeEvent.contentOffset.x / metrics.screenWidth),
          );
        }}
        renderItem={({item}) => {
          return activeOverlayImage ? (
            <Button onPress={handleOverlayImage}>
              <Image source={item} style={styles.overlayImage} />
            </Button>
          ) : (
            <Button onPress={handleOverlayImage} style={styles.listItem}>
              <View style={styles.overlay} />
              <Image source={item} style={styles.image} />
            </Button>
          );
        }}
      />
      <FlatList
        ref={thumbRef}
        style={styles.smallFlatlist}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        data={images}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Button onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={item}
                style={[
                  styles.smallImage,
                  activeIndex === index && styles.activeStyle,
                ]}
              />
            </Button>
          );
        }}
      />
      <Button
        style={[
          styles.extraBtn,
          menuActive && {backgroundColor: colors.lightPurple},
        ]}
        onPress={menuActive ? closeMenu : startMenuAnimation}>
        <Text>{menuActive ? 'Show Less' : 'Show Extra'}</Text>
      </Button>
    </View>
  );
};

export default ProjectDetails;
