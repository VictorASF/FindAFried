import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native'

import { CarteiraContext } from "../../contexts/carteira"

export default function ComponenteTres({ valor, moeda, separador, handleValor }) {

  const { handleDebitar } = useContext(CarteiraContext)

  const [itens, setItens] = useState([
    { nome: 'Lápis', valor: 10 },
    { nome: 'Guarda-Chuva', valor: 40 }
  ])

  const handleClick = (valor) => {
    // console.warn(valor)
    handleDebitar(valor)
    // handleValor(valor)
  }

  useEffect(() => {

    setItens(itens.map((item) => {
      return {
        ...item,
        descricao: `${moeda} ${item.valor.toFixed(2).replace(".", separador)}`
      }
    }))

  }, [])

  return (
    <View>
      {itens.map((item) =>
        <Text
          onPress={() => { handleClick(item.valor) }}
          key={item.nome}> {item.nome} {item.descricao}
        </Text>
      )}
      {/* <Text>Componente Tres => {`${valor} ${moeda} ${separador}`}</Text> */}
    </View>
  )
}