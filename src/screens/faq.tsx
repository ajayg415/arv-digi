import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Faq = () => {
  return (
    <View style={styles.screen}>
      <Text>Faq Screen</Text>
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

export default Faq;
