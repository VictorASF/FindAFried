import React from 'react';
import { Text, View } from 'react-native'

import ComponenteTres from './ComponenteTres'



export default function ComponenteDois({ valor, moeda, handleValor }) {

  return (
    <View>
      {/* <Text>Componente Dois => {`${valor} ${moeda}`}</Text> */}
      <ComponenteTres
        valor={valor}
        moeda={moeda}
        separador={','}
        handleValor={handleValor}
      />
    </View>
  )
}