import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const typography = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args: any) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Sansita-Regular', //Default font family
  },
});
