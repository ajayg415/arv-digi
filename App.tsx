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
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';

import Navigator from './src/navigation/routes';

enableScreens();

const App = () => {
  return (
    <>
      <StatusBar />
      <Navigator />
    </>
  );
};

export default App;
