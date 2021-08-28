import React from 'react';
import {NavigationContainer, TabActionHelpers} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Spends from '../screens/spends';
import ContactUs from '../screens/contact-us';
import Faq from '../screens/faq';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Spends" component={Spends} />
        <Tab.Screen name="ContactUs" component={ContactUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
