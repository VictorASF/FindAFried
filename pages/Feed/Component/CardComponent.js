import React, {useState} from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import {
  ContainerBox,
  ContainerFoto,
  FotoDog,
  ContainerInfos,
  ContainerInter,
  TextBasic,
  Nome,
  Idade,
  SaibaMais,
  SaibaMaisTexto
} from './styles';
import { useEffect } from 'react';

export default function CardComponent({animal,uid,name,age, navigation}) {
  
  const [image, setImage] = useState(null)

  useEffect(()=>{
    firebase.storage()
      .ref()
      .child('upload/' + animal.id +'.jpg')
      .getDownloadURL().then(function(URL){
        setImage(URL)
      })
  })

return (
    <ContainerBox>
      <ContainerFoto>
      {image && (
          <FotoDog
            source={{uri:image}}
          />
        )}
      </ContainerFoto>
      <ContainerInfos>
        <ContainerInter>
        <TextBasic>
          Nome
        </TextBasic>
        <Nome>
          {name}
        </Nome>
        <TextBasic>
          Idade
        </TextBasic>
        <Idade>
          {age}
        </Idade>
        <SaibaMais onPress={()=>{navigation.navigate('PerfilDog',{
            uid:animal.uid,
            name:animal.name,
            age:animal.age,
            descricao:animal.descricao,
            phone:animal.phone,
            image:image
          })
        }}>
          <SaibaMaisTexto>
            Saiba Mais
          </SaibaMaisTexto>
        </SaibaMais>
        </ContainerInter>
      </ContainerInfos>
      </ContainerBox>
  )
}