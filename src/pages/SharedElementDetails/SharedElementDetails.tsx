import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {SharedElement as SharedElementLib} from 'react-navigation-shared-element';
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
      <SharedElementLib id={`item.${item.id}.image_url`}>
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
      </SharedElementLib>
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

/**
This config triggers the transition effects on the shared elements
between screens based on the unique ID shared between those two screens.
 The property animation determines how the animation is going to happen when navigating between two screens.
 For example, in the above code snippet, the animation has a value called move.
 It is also the default value of this property. There are other values available such as fade, fade-in, and fade-out.
 The property resize is the behavior that determines the shape and size of the element should be modified or not. For example,
 in the above snippet, the value clip adds a transition effect which is similar to a text reveal effect.
 */
SharedElementDetails.sharedElements = (route: any) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.id}.image_url`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default SharedElementDetails;
