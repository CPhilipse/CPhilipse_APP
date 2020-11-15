import React from 'react';
import {TouchableOpacity} from 'react-native';
import CustomIcon from '../Icon';
import Icons from '../../enum/Icons';
import styles from './backbutton.style';
import {colors} from '../../themes';

interface Props {
  darkmode: boolean;
  onPress: () => {navigate: (page: string) => void};
}

const BackButton = ({onPress, darkmode = true}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CustomIcon
        name={Icons.BACK_BUTTON}
        color={darkmode ? colors.white : colors.black}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
