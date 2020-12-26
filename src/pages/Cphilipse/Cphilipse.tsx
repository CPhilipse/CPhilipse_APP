import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './cphilipse.style';
import BackButton from '../../components/BackButton';
import {images} from '../../themes';
import Header from '../../components/Header';
import {useCrucifix} from './animations/useCrucifix';
import Items from './components/Items';
import Card from '../../components/Card';
import {getLocalizedString} from '../../utils/LocalizedUtils';
import Pages from '../../enum/Pages';
import {useTiming} from 'react-native-redash';

interface Props {
  navigation: any;
  darkmode: boolean;
}

const localizedCopy = (value: string) =>
  getLocalizedString(Pages.CPHILIPSE, value);

interface cardProps {
  index: number;
  title: string;
  body: string;
}

const cards: cardProps[] = [
  {
    index: 3,
    title: localizedCopy('fourthCardTitle'),
    body: localizedCopy('fourthCard'),
  },
  {
    index: 2,
    title: localizedCopy('thirdCardTitle'),
    body: localizedCopy('thirdCard'),
  },
  {
    index: 1,
    title: localizedCopy('secondCardTitle'),
    body: localizedCopy('secondCard'),
  },
  {
    index: 0,
    title: localizedCopy('firstCardTitle'),
    body: localizedCopy('firstCard'),
  },
];
const step = 1 / (cards.length - 1);
const Cphilipse = ({navigation, darkmode}: Props) => {
  const {
    colorStyle,
    colorStyle2,
    colorStyle3,
    colorStyle4,
    colorStyle5,
    startAnimatingCrucifix,
  } = useCrucifix();

  useEffect(() => {
    startAnimatingCrucifix();
  }, [startAnimatingCrucifix]);

  const [currentIndex, setCurrentIndex] = useState(step);
  const aIndex = useTiming(currentIndex);

  return (
    <View style={styles.container}>
      <Header title={localizedCopy('name')} image={images.cphilipse} />
      <Items
        {...{
          colorStyle,
          colorStyle2,
          colorStyle3,
          colorStyle4,
          colorStyle5,
        }}
      />
      {cards.map(({index, title, body}) => {
        const showCard = currentIndex < index * step + step + step;
        return (
          showCard && (
            <Card
              key={index}
              darkmode={darkmode}
              index={index}
              aIndex={aIndex}
              title={title}
              body={body}
              step={step}
              onSwipe={() => console.log('HIIAa')}
              // onSwipe={() => setCurrentIndex((prev) => prev + step)}
            />
          )
        );
      })}
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Cphilipse;
