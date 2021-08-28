import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Spends = () => {
  return (
    <View style={styles.screen}>
      <Text>Spends Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spends;
