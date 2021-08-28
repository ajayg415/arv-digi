import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextView} from '../components';
import Colors from '../../constants/Colors';

const Spends = () => {
  return (
    <View style={styles.screen}>
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
