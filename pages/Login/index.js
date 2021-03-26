import React, { useState } from 'react';
import { Text, View } from 'react-native';

import {
  Container,
  CaixaLogin,
  ContainerBotoes,
  Botao,
  BotaoTexto,
  InputTexto,
  Input,
  ContainerInputs
} from './styles';

export default function Login() {

  const [botaoAtual, setBotaoAtual] = useState('aluno')

  return (
    <Container>

      <CaixaLogin>
        <ContainerBotoes>

          <Botao ultimoClick={
            botaoAtual == 'aluno' ? true : false
          }
            onPress={() => {
              setBotaoAtual('aluno')
            }}>
            <BotaoTexto
              ultimoClick={
                botaoAtual == 'aluno' ? true : false
              }
            >Aluno</BotaoTexto>
          </Botao>

          <Botao
            ultimoClick={
              botaoAtual == 'professor' ? true : false
            }
            onPress={() => {
              setBotaoAtual('professor')
            }}>
            <BotaoTexto
              ultimoClick={
                botaoAtual == 'professor' ? true : false
              }
            >Professor</BotaoTexto>
          </Botao>

        </ContainerBotoes>
        <ContainerInputs>
          <InputTexto>Email</InputTexto>
          <Input />

          <InputTexto>Senha</InputTexto>
          <Input />
        </ContainerInputs>
      </CaixaLogin>
    </Container>
  );
}
