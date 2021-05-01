import React, { useState } from 'react';
import { Button } from 'react-native';

import {
  Container,
  Texto
} from './styles';



export default function Dashboard({ navigation }) {

  return (
    <Container>
      <Texto>Dashboard</Texto>
      <Button title="Chat" onPress={() => navigation.push('Chat')} />
    </Container>
  );
}
