import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

interface Props {
  style?: object;
  onPress: () => void;
  children: ReactNode;
}

const Button = ({style, onPress, children}: Props) => (
  <TouchableOpacity style={style} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default Button;
