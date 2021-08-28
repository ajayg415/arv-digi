import React from 'react';
import {Icon} from 'react-native-elements';
import Colors from '../../constants/Colors';

interface IconViewProps {
  name: any;
  size: number;
}

const IconView = ({name, size}: IconViewProps) => {
  return (
    <Icon
      name={name}
      size={size}
      color={Colors.white}
      type="font-awesome"
      solid
    />
  );
};

export default IconView;
