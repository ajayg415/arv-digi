import React from 'react';
import {NavigationContainer, TabActionHelpers} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Spends from '../screens/spends';
import ContactUs from '../screens/contact-us';
import Faq from '../screens/faq';
import {IconView} from '../components';
import Colors from '../../constants/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: {route: any}) => ({
        tabBarIcon: ({focused}: {focused: boolean}) => {
          let iconName;
          let iconSize;

          if (route.name === 'Spends') {
            iconName = 'money';
            iconSize = focused ? 30 : 24;
          } else {
            iconName = 'rocket';
            iconSize = focused ? 30 : 24;
          }

          return <IconView name={iconName} size={iconSize} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: Colors.primary,
        tabBarInactiveBackgroundColor: Colors.primary,
      })}>
      <Tab.Screen name="Spends" component={Spends} />
      <Tab.Screen name="ContactUs" component={ContactUs} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const StackNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Faq" component={Faq} />
    </Drawer.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigator;
