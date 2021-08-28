/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {enableScreens} from 'react-native-screens';

import Colors from './constants/Colors';
import Navigator from './src/navigation/routes';

enableScreens();

const App = () => {
  return (
    <View style={styles.screen}>
      <StatusBar />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
