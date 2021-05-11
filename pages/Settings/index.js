import React, { useState, useContext } from 'react';
import { } from 'react-native';

import {
  Container,
  Texto,
  ContainerButtons,
  Button,
  ButtonText
} from './styles';

import { UsuarioContext } from '../../contexts/usuario';


export default function Settings() {

  const { signOut } = useContext(UsuarioContext)

  return (
    <Container>
      <ContainerButtons>
        <Button onPress={() => { signOut() }}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>
  );
}
