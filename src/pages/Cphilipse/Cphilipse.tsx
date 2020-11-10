import React, {useEffect} from 'react';
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

interface Props {
  navigation: any;
}

/**
 * TODO: Make buttons padding bigger, so it'll be easier to press.
 * TODO: Locales for the text.
 * TODO: Test this page on multiple device simulators.
 * TODO: Create 'master' branch, change 'main' to 'master' branch. Delete 'main' branch.
 *  Merge all to 'dev' and the 'master' branch. Remove 'setup' branch.
 * */
const Cphilipse = ({navigation}: Props) => {
  const {onGestureEvent, gestureStyle} = swipeBasketball();
  const {style, startBasketballAnimation} = useBounce();
  const {
    scaleStyle,
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
        <Header title={'Clemens Philipse'} image={images.cphilipse} />
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
            scaleStyle,
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
            Me
          </Text>
          <Card body={paragraphs[5]} />
        </View>
        {/*<Paragraph paragraph={paragraphs} />*/}
        <BackButton onPress={() => navigation.navigate('Home')} />
      </ScrollView>
    </View>
  );
};

export default Cphilipse;
