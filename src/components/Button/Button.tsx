import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

interface Props {
  style?: object;
  onPress: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({style, onPress, disabled, children}: Props) => (
  <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default Button;
