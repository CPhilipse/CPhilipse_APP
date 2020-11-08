import React from 'react';
import {View, Text} from 'react-native';
import styles from './basketball.style';

const Basketball = React.forwardRef((props, ref) => (
  <View ref={ref} style={styles.container} />
));

export default Basketball;
