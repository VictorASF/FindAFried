import React, { useState } from 'react';
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
  TextoGrupou,
  ForgotPassword,
  ContainerButtons,
  Button,
  ButtonText,
  TextForgotPassword

} from './styles';

import logoImg from '../../assets/logo.png';
import img from '../../assets/login_backgroud.png';

export default function Login() {

  const [botaoAtual, setBotaoAtual] = useState('aluno')
  const [carregando, setCarregando] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {

    // try {
    //   signIn(email, password)
    // } catch (err) {
    //   console.warn(err);
    // }

  }


  function handleSignUp() {
    // console.warn(email, password);
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
    }, 4000);
    // try {
    //   signUp(email, password)
    // } catch (err) {
    //   console.warn(err);
    // } finally {
    //   setCarregando(false);
    // }
  }

  return (
    <>
      <BackgroundImage source={img}></BackgroundImage>
      <Container>

        <Logo>
          <Image source={logoImg} style={{ width: 300, height: 100 }} />
        </Logo>

        <CaixaTextoChamada>
          <TextoChamada>
            Problemas para formar
        </TextoChamada>
          <TextoChamada>
            um grupo de trabalho
        </TextoChamada>
          <TextoChamada>
            O <TextoGrupou>Grupou! </TextoGrupou>resolve!
        </TextoChamada>
        </CaixaTextoChamada>

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

          <ForgotPassword>
            <TextForgotPassword>
              esqueci minha senha
            </TextForgotPassword>

          </ForgotPassword>
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
    </>
  );
}
