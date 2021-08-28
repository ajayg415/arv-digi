import React, {ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

interface TextViewProps {
  children: ReactNode;
  customStyles?: any;
}

const TextView = ({children, customStyles}: TextViewProps) => {
  return <Text style={[styles.text, customStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});

export default TextView;
