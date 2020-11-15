import React from 'react';
import CustomIcon from '../Icon';
import Icons from '../../enum/Icons';
import {colors} from '../../themes';

const Basketball = React.forwardRef((props, ref) => (
  <CustomIcon name={Icons.BASKETBALL} color={colors.darkOrange} />
));

export default Basketball;
