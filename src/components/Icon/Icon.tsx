import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, metrics} from '../../themes';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const ICON_SIZE = metrics.scale(75);
const COLOR = colors.black;
const CustomIcon = ({name, size = ICON_SIZE, color = COLOR}: Props) => {
  return <Icon {...{name, size, color}} />;
};

export default CustomIcon;
