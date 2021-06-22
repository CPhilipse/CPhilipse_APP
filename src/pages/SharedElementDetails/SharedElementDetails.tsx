import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {bgcolor} from '../../utils/DarkmodeUtils';
import styles from './sharedelementdetails.style';
import BackButton from '../../components/BackButton';
import {metrics} from '../../themes';

interface Props {
  darkmode: boolean;
  navigation: any;
  route: any;
}

const ITEM_HEIGHT = metrics.screenHeight * 0.5;
const SharedElementDetails = ({darkmode, navigation, route}: Props) => {
  const {item} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: '#0f0f0f'}}>
      <Image
        source={{uri: item.image_url}}
        style={{
          width: '100%',
          height: ITEM_HEIGHT,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        resizeMode="cover"
      />
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
      <View
        style={{flexDirection: 'row', marginTop: 10, paddingHorizontal: 20}}>
        <View style={{flexDirection: 'column', paddingLeft: 6}}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              lineHeight: 28,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 18,
            }}>
            {item.description}
          </Text>
        </View>
      </View>
      <ScrollView
        indicatorStyle="white"
        style={{
          paddingHorizontal: 20,
          backgroundColor: '#0f0f0f',
        }}
        contentContainerStyle={{paddingVertical: 20}}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            lineHeight: 24,
            marginBottom: 4,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};

export default SharedElementDetails;
