import React from 'react';
import { Text, View } from 'react-native'

import ComponenteDois from './ComponenteDois';

export default function ComponenteUm({ valor, handleValor }) {

  return (
    <View>
      {/* <Text>Componente Um => {valor}</Text> */}
      <ComponenteDois
        moeda={"R$"}
        valor={valor}
        handleValor={handleValor}
      />
    </View>
  )
}