import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-native';

import {
  Container,
  Texto
} from './styles';

import CardComponent from './Component/CardComponent'

import { CarteiraContext } from '../../contexts/carteira'
import { ScrollView } from 'react-native-gesture-handler';

export default function Dashboard({ navigation }) {

  const { valorCarteira } = useContext(CarteiraContext);

  // const [valorCarteira, setValorCarteira] = useState(100);
  const [resultado, setResultado] = useState(null)

  useEffect(() => {
    if (valorCarteira > 0) {
      setResultado(`você tem R$ ${valorCarteira}`)
    } else {
      setResultado(`saldo insuficiente`)
    }
  }, [valorCarteira])

  const handleValor = (valor) => {
    if (valorCarteira > 0) {
      setValorCarteira(valorCarteira - valor)
    }
  }

  return (
    <ScrollView>
      <Container>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </Container>
    </ScrollView>
  );
}
