import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {TextView} from '../components';
import Colors from '../../constants/Colors';

const ContactUs = () => {
  return (
    <View style={styles.screen}>
      <TextView>Contact Us Screen</TextView>
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

export default ContactUs;
