import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SharedElement as SharedElementLib} from 'react-navigation-shared-element';
import styles from './sharedelement.style';
import {bgcolor} from '../../utils/DarkmodeUtils';
import Pages from '../../enum/Pages';
import Menu from '../../components/Menu';
import BackButton from '../../components/BackButton';
import {metrics} from '../../themes';

interface Props {
  darkmode: boolean;
  navigation: any;
}

export const data = [
  {
    id: '1',
    title: 'Manarola, Italy',
    description: 'The Cliffs of Cinque Terre',
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    iconName: 'location-pin',
  },
  {
    id: '2',
    title: 'Venezia, Italy',
    description: 'Rialto Bridge, Venezia, Italy',
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
    iconName: 'location-pin',
  },
  {
    id: '3',
    title: 'Prague, Czechia',
    description: 'Tram in Prague',
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    iconName: 'location-pin',
  },
];

const SharedElement = ({darkmode, navigation}: Props) => {
  return (
    <View style={[styles.container, bgcolor(darkmode)]}>
      <Menu darkmode={darkmode} goToPage={navigation.navigate} />
      <BackButton darkmode={darkmode} onPress={() => navigation.goBack()} />
      <ScrollView
        indicatorStyle="white"
        contentContainerStyle={{alignItems: 'center', paddingTop: 100}}>
        {data.map((item: any) => (
          <View key={item.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{marginBottom: 14}}
              onPress={() =>
                navigation.navigate(Pages.SHARED_ELEMENT_DETAILS, {item})
              }>
              <SharedElementLib id={`item.${item.id}.image_url`}>
                <Image
                  style={{
                    borderRadius: 14,
                    width: metrics.screenWidth * 0.9,
                    height: metrics.screenHeight * 0.5,
                  }}
                  source={{uri: item.image_url}}
                  resizeMode="cover"
                />
              </SharedElementLib>
              <View
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
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
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SharedElement;
