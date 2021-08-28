import React, {ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';

interface TextViewProps {
  children: ReactNode;
}

const TextView = ({children}: TextViewProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});

export default TextView;
