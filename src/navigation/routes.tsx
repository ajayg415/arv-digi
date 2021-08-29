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
import {color} from 'react-native-elements/dist/helpers';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: {route: any}) => ({
        tabBarIcon: ({focused}: {focused: boolean}) => {
          let iconName;
          let iconSize;

          if (route.name === 'Spends') {
            iconName = 'home';
            iconSize = focused ? 30 : 24;
          } else {
            iconName = 'list-alt';
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
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerContentStyle: {backgroundColor: Colors.black},
        drawerContentContainerStyle: {backgroundColor: Colors.black},
        drawerLabelStyle: {color: Colors.white},
        drawerStyle: {width: '100%'},
        drawerIcon: () => (
          <IconView name="close" size={20} color={Colors.primary} />
        ),
      }}>
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon: () => <IconView name="home" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          drawerIcon: () => <IconView name="star" size={20} />,
        }}
      />
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
