import React from 'react';
import {View, Text, ImageRequireSource, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import styles from './header.style';

interface Props {
  title: string;
  image: ImageRequireSource;
}

const Header = ({title, image}: Props) => {
  return (
    <>
      <Image style={styles.image} source={image} />
      <LinearGradient
        style={styles.gradient}
        colors={['transparent', '#000']}
        locations={[0.5, 1]}
      />
      <View style={styles.overlay} />
      <View>
        <Animated.View style={styles.textContainer}>
          <Text style={styles.imageTitle}>{title}</Text>
        </Animated.View>
      </View>
    </>
  );
};

export default Header;
