import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextView} from '../components';
import Colors from '../../constants/Colors';

const Faq = () => {
  return (
    <View style={styles.screen}>
      <TextView>Faq Screen</TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

export default Faq;
