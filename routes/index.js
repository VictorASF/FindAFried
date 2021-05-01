import React, { } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { NavigationContainer } from '@react-navigation/native';


const Routes = () => {
  return (
    <NavigationContainer>
      {true ?
        <AuthRoutes />
        :
        <AppRoutes />
      }
    </NavigationContainer>
  )

}

export default Routes;