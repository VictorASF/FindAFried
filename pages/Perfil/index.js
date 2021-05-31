import React from 'react';
import { Linking } from 'react-native';

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

  const { uid,name,age, descricao,phone, image } = route.params;

  return (
      <ScrollView>
        <Container>
            <ContainerImagem>
                {image&& (
                    <Imagem
                        source={{uri:image}}
                    />
                )}
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
