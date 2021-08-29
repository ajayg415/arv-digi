import React from 'react';
import {Icon} from 'react-native-elements';
import Colors from '../../constants/Colors';

interface IconViewProps {
  name: any;
  size: number;
  color?: string;
  onPress?: () => void;
}

const IconView = ({name, size, color, ...restPorps}: IconViewProps) => {
  return (
    <Icon
      name={name}
      size={size}
      color={color || Colors.white}
      type="font-awesome"
      solid
      {...restPorps}
    />
  );
};

export default IconView;
