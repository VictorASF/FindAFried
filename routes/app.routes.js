import React, { } from 'react';

import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppRoutes = () => (
  <Tab.Navigator
    tabBarOptions={
      {
        activeTintColor: 'tomato',
        inactiveTintColor: '#ccc'
      }
    }
  >

    <Tab.Screen
      name="Find a Friend"
      component={Dashboard}
      options={
        {
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="dog"
              size={32}
              color={color}
            />
          )
        }
      }
    />

    <Tab.Screen
      name="Settings"
      component={Settings}
      options={
        {
          tabBarIcon: ({ color }) => (
            <Feather
              name="coffee"
              size={32}
              color={color}
            />
          )
        }
      }
    />
  </Tab.Navigator>
)

export default AppRoutes;