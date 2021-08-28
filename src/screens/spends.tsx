import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextView, HeaderView} from '../components';
import Colors from '../../constants/Colors';

const Spends = () => {
  return (
    <View style={styles.screen}>
      <HeaderView title="ARV Case Study" />
      <TextView>Spends Screen</TextView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    color: '#fff',
  },
});

export default Spends;
