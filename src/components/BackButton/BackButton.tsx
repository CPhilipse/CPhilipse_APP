import React from 'react';
import CustomIcon from '../Icon';
import Icons from '../../enum/Icons';
import styles from './backbutton.style';
import {colors} from '../../themes';
import Button from '../Button';

interface Props {
  icon?: string;
  darkmode: boolean;
  onPress: () => {navigate: (page: string) => void};
}

const BackButton = ({
  onPress,
  darkmode = true,
  icon = Icons.BACK_BUTTON,
}: Props) => {
  return (
    <Button style={styles.container} onPress={onPress}>
      <CustomIcon name={icon} color={darkmode ? colors.white : colors.black} />
    </Button>
  );
};

export default BackButton;
