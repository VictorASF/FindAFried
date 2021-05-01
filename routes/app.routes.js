import React, { } from 'react';

import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import Chat from '../pages/Chat'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const DashboardStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const DashboardStackScreen = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name="Dashboard" component={Dashboard} />
    <DashboardStack.Screen
      name="Chat" component={Chat} />
  </DashboardStack.Navigator>
)

const TabInDrawerScreen = () => (
  <Tab.Navigator
    tabBarOptions={
      {
        activeTintColor: 'tomato',
        inactiveTintColor: '#ccc'
      }
    }
  >

    <Tab.Screen
      name="Dashboard"
      component={DashboardStackScreen}
      options={
        {
          tabBarIcon: ({ color }) => (
            <Feather
              name="airplay"
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

const AppRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabInDrawerScreen} />
      <Drawer.Screen name="Chat" component={Chat} />
    </Drawer.Navigator>
  )
}

export default AppRoutes;