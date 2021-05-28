import React, { useState, useContext } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';

import {
  Container,
  CaixaLogin,
  ContainerBotoes,
  Botao,
  BotaoTexto,
  InputTexto,
  Input,
  ContainerInputs,
  BackgroundImage,
  Logo,
  CaixaTextoChamada,
  TextoChamada,
  ContainerButtons,
  Button,
  ButtonText,

} from './styles';

import { ScrollView } from 'react-native-gesture-handler';

import img from '../../assets/images.jpg';
import logo from '../../assets/pata.png';

import { UsuarioContext } from '../../contexts/usuario';

export default function Login() {

  const { signIn, signUp } = useContext(UsuarioContext)

  const [botaoAtual, setBotaoAtual] = useState('login')
  const [carregando, setCarregando] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
    try {
      signIn(email, password)
    } catch (err) {
      console.warn(err)
    }
  }


  function handleSignUp() {

    setCarregando(true);
    try {
      signUp(email, password)
    } catch (err) {
      console.warn(err)
    } finally {
      setCarregando(false);
    }
  }

  return (
   <ScrollView>

      <BackgroundImage source={img}></BackgroundImage>
      <Container>

        <Logo>
          <Image source={logo} style={{ width: 175, height: 175 }} />
        </Logo>

        <CaixaTextoChamada>
          <TextoChamada>
            Find a Friend
        </TextoChamada>
          <TextoChamada>
            um app para doguinhos
        </TextoChamada>
        </CaixaTextoChamada>

        <CaixaLogin>
          <ContainerBotoes>

            <Botao ultimoClick={
              botaoAtual == 'login'
            }>
              <BotaoTexto
                ultimoClick={
                  botaoAtual == 'login'
                }
              >Login</BotaoTexto>
            </Botao>

          </ContainerBotoes>
          <ContainerInputs>
            <InputTexto>Email</InputTexto>
            <Input
              placeholder="Digite seu email"
              onChangeText={text => setEmail(text)}
              value={email}
            />

            <InputTexto>Senha</InputTexto>
            <Input
              placeholder="Digite sua senha"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </ContainerInputs>
          <ContainerButtons>
            <Button
              invert={true}
              onPress={() => { handleSignUp() }}
            >
              {carregando ?
                <ActivityIndicator color="#AE1B73" /> :
                <ButtonText invert={true}>
                  Cadastre-se
              </ButtonText>
              }


            </Button>
            <Button
              onPress={() => { handleSignIn() }}
            >
              <ButtonText>Entrar</ButtonText>
            </Button>
          </ContainerButtons>

        </CaixaLogin>
      </Container>
    </ScrollView>           
  );
}
