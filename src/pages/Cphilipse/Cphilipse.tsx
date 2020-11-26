import React, {useCallback, useEffect, useState} from 'react';
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
import {sub, useDerivedValue, useSharedValue} from 'react-native-reanimated';
import {useTiming} from 'react-native-redash';

interface Props {
  navigation: any;
  darkmode: boolean;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.CPHILIPSE, value);

const cards = [
  {index: 3, body: 'Fourth card'},
  {index: 2, body: 'Third card'},
  {index: 1, body: 'Second card'},
  {index: 0, body: 'First card'},
];
const step = 1 / (cards.length - 1);
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

  const scrollY = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(step);
  const aIndex = useTiming(currentIndex);

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
        {cards.map(
          ({index, body}) =>
            currentIndex < index * step + step + step && (
              <Card
                key={index}
                index={index}
                aIndex={aIndex}
                body={body}
                step={step}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
              />
            ),
        )}
        {/*<Paragraph paragraph={paragraphs} />*/}
        <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};

export default Cphilipse;
