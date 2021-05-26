import React, { } from 'react';

import FindAFriend from '../pages/Dashboard'
import Settings from '../pages/Settings'
import PerfilDog from '../pages/Perfil'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const StackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='FindAFriend' component={FindAFriend}/>
    <Stack.Screen
      name='PerfilDog' component={PerfilDog}/>
  </Stack.Navigator>
)

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
      component={StackScreen}
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