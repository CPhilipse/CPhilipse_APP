import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import {images, metrics} from '../../themes';
import Header from '../../components/Header';
import {useBounce} from './animations/useBounce';
import {useCrucifix} from './animations/useCrucifix';
import {swipeBasketball} from './animations/swipeBasketball';
import Paragraph from '../../components/Paragraph';
import {paragraphs} from '../../utils/DummyData';
import Items from './components/Items';
import Card from '../../components/Card';
import {getLocalizedString} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';

interface Props {
  navigation: any;
  darkmode: boolean;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.CPHILIPSE, value);

/**
 * TODO: Test this page on multiple device simulators.
 * TODO: Create 'master' branch, change 'main' to 'master' branch. Delete 'main' branch.
 *  Merge all to 'dev' and the 'master' branch. Remove 'setup' branch.
 * */
const Cphilipse = ({navigation, darkmode}: Props) => {
  const {onGestureEvent, gestureStyle} = swipeBasketball();
  const {style, startBasketballAnimation} = useBounce();
  const {
    colorStyle,
    colorStyle2,
    colorStyle3,
    colorStyle4,
    colorStyle5,
    startAnimatingCrucifix,
  } = useCrucifix();

  useEffect(() => {
    startBasketballAnimation();
    startAnimatingCrucifix();
  }, [startBasketballAnimation, startAnimatingCrucifix]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={localizedCopy('name')} image={images.cphilipse} />
        <Items
          {...{
            style,
            gestureStyle,
            onGestureEvent,
            colorStyle,
            colorStyle2,
            colorStyle3,
            colorStyle4,
            colorStyle5,
          }}
        />
        <View style={{bottom: 30}}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
              ...metrics.fonts.subtitle,
              paddingBottom: 20,
            }}>
            About me
          </Text>
          <Card body={paragraphs[5]} />
        </View>
        {/*<Paragraph paragraph={paragraphs} />*/}
        <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};

export default Cphilipse;
