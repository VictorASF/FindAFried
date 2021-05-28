import React, { useEffect, useContext, useState } from 'react';
import { } from 'react-native';

import {
  Container,
  Texto,
  ContainerButtons,
  Button,
  ButtonText,
  ContainerFoto,
  Foto,
  ContainerInfo,
  InfoText,
  ContainerBox,
  Box
} from './styles';

import { UsuarioContext } from '../../contexts/usuario';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';


export default function Settings({route, navigation}) {

  const [ usuario, setUsuario ] = useState([{name:'',telefone:'',endereco:''}])
  const { signOut } = useContext(UsuarioContext)
  const { user } = useContext(UsuarioContext)

  const ListenUpdate = (snap) => {
    const data = snap.docs.map((doc)=>{
      return{
        uid:doc.id,
        ... doc.data()
      }
      
    })
    setUsuario(data)
  }

  useFocusEffect(React.useCallback(()=>{
    console.warn('To aqui')
    firebase.firestore().collection('Users').where('uid','==', user.uid).onSnapshot(ListenUpdate);
  },[]))


  // firebase.firestore().collection('Users').where('uid', '==',user.uid)
  // .get().then((doc)=>{
  //     console.warn(doc.id);
  //   })

  return (
    <ScrollView>
    <Container>
      <ContainerFoto>
        <Foto/>
      </ContainerFoto>
      <ContainerInfo>
        <InfoText>
          Nome:
          {usuario[0].name}
        </InfoText>
        <ContainerBox>
        <Box/>
        </ContainerBox>
        <InfoText>
          Telefone
        </InfoText>
        <ContainerBox>
        <Box/>
        </ContainerBox>
        <InfoText>
          Endereço
        </InfoText>
        <ContainerBox>
        <Box/>
        </ContainerBox>
      </ContainerInfo>
      <ContainerButtons>
        <Button onPress={() => { signOut() }}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </ContainerButtons>
    </Container>
    </ScrollView>
  );
}
