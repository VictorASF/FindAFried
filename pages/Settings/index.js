import React, { useEffect, useContext, useState } from 'react';
import { Text } from 'react-native';

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
  const [ UsuarioName, setUsuarioName ] = useState('')
  const [ UsuarioTelefone, setUsuarioTelefone] = useState('')
  const [ UsuarioEndereco, setUsuarioEndereco] = useState('')
  const [ UsuarioUid, setUsuarioUid ] = useState('')
  const [ UsuarioId, setUsuarioId ] = useState('')
  const { signOut } = useContext(UsuarioContext)
  const { user } = useContext(UsuarioContext)

  const ListenUpdate = (snap) => {
    const data = snap.docs.map((doc)=>{
      setUsuarioId(doc.id)
      console.warn(UsuarioId)
      return{
        uid:doc.id,
        ... doc.data()
      }
      
    })
    setUsuarioName(data[0].name)
    setUsuarioTelefone(data[0].telefone)
    setUsuarioEndereco(data[0].endereco)
    setUsuarioUid(data[0].uid)
  }

  // const UpdateDb = () =>{
  // firebase.firestore().collection('Users').doc(`${UsuarioId}`)
  // .update({name: UsuarioName,
  // telefone: UsuarioTelefone,
  // endereco: UsuarioEndereco})
  // }
  
  useFocusEffect(React.useCallback(()=>{
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
        </InfoText>
        <ContainerBox>
        <Box onChangeText={setUsuarioName} value = {UsuarioName}/>
        </ContainerBox>
        <InfoText>
          Telefone
        </InfoText>
        <ContainerBox>
        <Box onChangeText={setUsuarioTelefone} value={UsuarioTelefone}/>
        </ContainerBox>
        <InfoText>
          Endereço
        </InfoText>
        <ContainerBox>
        <Box onChangeText={setUsuarioEndereco} value={UsuarioEndereco}/>
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
