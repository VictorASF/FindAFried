import React from 'react';
import { Linking,Button } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

import {
    Container,
    ContainerImagem,
    Imagem,
    ContainerInfo,
    Info,
    InfoText,
    InfoTextInner,
    ContainerBotao,
    Botao,
    Text
} from './styles';

import { ScrollView } from 'react-native-gesture-handler';

export default function PerfilDog({ route, navigation }) {

  const { uid,name,age, descricao,phone } = route.params;

  return (
      <ScrollView>
        <Container>
            <ContainerImagem>
                <Imagem/>
            </ContainerImagem>
            <ContainerBotao>
                <Botao title='Quero Adotar' onPress={()=>{
                    Linking.openURL(`http://api.whatsapp.com/send?phone=${phone}`)
                }}>
                    <Text>
                        Quero Adotar
                    </Text>
                </Botao>
            </ContainerBotao>
            <ContainerInfo>
                <Info>
                    <InfoText>
                        Nome
                    </InfoText>
                    <InfoTextInner>
                        {name}
                    </InfoTextInner>
                </Info>
                <Info>
                    <InfoText>
                        Idade
                    </InfoText>
                    <InfoTextInner>
                        {age}
                    </InfoTextInner>
                </Info>
           </ContainerInfo>
           <ContainerInfo>
                <Info>
                    <InfoText>
                        Descrição
                    </InfoText>
                    <InfoTextInner>
                        {descricao}
                    </InfoTextInner>
                </Info>
           </ContainerInfo>             
        </Container>
      </ScrollView>
  );
}
