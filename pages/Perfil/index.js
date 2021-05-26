import React, { useState, useEffect} from 'react';
import { Button } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

import {
    Container,
    Texto
} from './styles';



export default function PerfilDog({ route, navigation }) {

  const { animal } = route.params;

  return (
      <Container>
                <Texto>
                    {animal.uid}
                    {animal.name}
                    {animal.age}
                    {console.warn(animal)}
                </Texto> 
             
      </Container>
  );
}
