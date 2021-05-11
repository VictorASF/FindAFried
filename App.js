import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';

import { UsuarioProvider } from './contexts/usuario';

import Routes from './routes';

import './services/firebase';

export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>

  );
}
