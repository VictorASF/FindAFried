import React, { useEffect, useContext, useState } from 'react';

import {
  Container,
  ContainerButton,
  ButtonSalvar,
  ContainerButtons,
  Button,
  ButtonText,
  ContainerFoto,
  Foto,
  ContainerInfo,
  InfoText,
  ContainerBox,
  Box,
  ContainerButtonAlterar,
  ButtonAlterar
} from './styles';

import { UsuarioContext } from '../../contexts/usuario';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';


export default function Settings({route, navigation}) {

  const [ image,setImage] = useState(null)
  const [ UsuarioName, setUsuarioName ] = useState('')
  const [ UsuarioTelefone, setUsuarioTelefone] = useState('')
  const [ UsuarioEndereco, setUsuarioEndereco] = useState('')
  const [ UsuarioUid, setUsuarioUid ] = useState('')
  const [ UsuarioId, setUsuarioId ] = useState('')
  const { signOut } = useContext(UsuarioContext)
  const { user } = useContext(UsuarioContext)

  const listenUpdate = (snap) => {
    const data = snap.docs.map((doc)=>{
      setUsuarioId(doc.id)
      return{
        id:doc.id,
        ... doc.data()
      }
      
    })
    setUsuarioName(data[0].name)
    setUsuarioTelefone(data[0].telefone)
    setUsuarioEndereco(data[0].endereco)
    setUsuarioUid(data[0].uid)
    setUsuarioId(data[0].id)
  }

  const updateDb = async () =>{
    console.warn(UsuarioId)
  await firebase.firestore()
    .collection('Users')
    .doc(`${UsuarioId}`)
    .update({name: UsuarioName,
            telefone: UsuarioTelefone,
            endereco: UsuarioEndereco})
  }

  const uploadImage = async (uri) =>{

    const image_local = await fetch(uri)

    const blob = await image_local.blob()
    
    const filename = UsuarioId

    var ref = firebase.storage().ref().child('upload/' + filename)

    ref.put(blob).then(function(imagem){
      
      imagem.ref.getDownloadURL().then(function(URL){
        setImage(URL)
      })
    })
  }

  const changeImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,4],
      quality:1
    })

    if(!result.cancelled){
      uploadImage(result.uri);
    }
  }

  useEffect(()=>{
    firebase.firestore()
      .collection('Users')
      .where('uid','==', user.uid)
      .onSnapshot(listenUpdate);
  },[])

  useEffect(()=>{
    if(UsuarioId != ''){
      firebase.storage()
      .ref()
      .child('upload/' + UsuarioId)
      .getDownloadURL().then(function(URL){
        setImage(URL)
      })
    }
  },[UsuarioId])


  return (
    <ScrollView>
    <Container>
      <ContainerButton>
        <ButtonSalvar onPress={()=>{updateDb()}}><ButtonText>Salvar</ButtonText></ButtonSalvar>
      </ContainerButton>
      <ContainerFoto>
        {image && (
          <Foto
            source={{uri:image}}
          />
        )}
      </ContainerFoto>
      <ContainerButtonAlterar>
        <ButtonAlterar onPress={()=>{changeImage()}}><ButtonText>Alterar Foto</ButtonText></ButtonAlterar>
      </ContainerButtonAlterar>    
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
        <Box onChangeText={setUsuarioTelefone} keyboardType='number-pad' value={UsuarioTelefone}/>
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
