import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

interface IconViewProps {
  name: any;
  size: number;
}

const IconView = ({name, size}: IconViewProps) => {
  return <Icon icon={name} size={size} color={Colors.white} />;
};

export default IconView;
