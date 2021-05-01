import React, { useState } from 'react';
import { Button } from 'react-native';

import {
  Container,
  Texto
} from './styles';



export default function Chat({ navigation }) {

  return (
    <Container>
      <Texto>Chat</Texto>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </Container>
  );
}
