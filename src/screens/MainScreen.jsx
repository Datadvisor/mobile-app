import * as React from 'react';
import { View } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import {
  ColoredHomeIcon,
  ColoredProfileIcon,
  ColoredSearchIcon,
  OutlinedHomeIcon,
  OutlinedProfileIcon,
  OutlinedSearchIcon,
} from '../components/Icons';

const Tab = createBottomTabNavigator();

const TABS = {
  Home: {
    colored: ColoredHomeIcon,
    outlined: OutlinedHomeIcon,
  },
  Profile: {
    colored: ColoredProfileIcon,
    outlined: OutlinedProfileIcon,
  },
  Search: {
    colored: ColoredSearchIcon,
    outlined: OutlinedSearchIcon,
  },
};

export default function MainScreen() {
  return (
    <View flex={1} w="100%" h="100%" justifyContent="center">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            let Ic = focused ? TABS[route.name].colored : TABS[route.name].outlined;

            return <Ic color={color} />;
          },
          tabBarActiveTintColor: '#3258DC',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}
