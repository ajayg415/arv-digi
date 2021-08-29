import React, {ReactNode} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';

import Colors from '../../constants/Colors';

interface TextViewProps {
  children: ReactNode;
  customStyles?: StyleProp<TextStyle>;
  onPress?: () => Promise<boolean | void>;
}

const TextView = ({children, customStyles, onPress}: TextViewProps) => {
  return (
    <Text style={[styles.text, customStyles]} onPress={() => onPress?.()}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});

export default TextView;
