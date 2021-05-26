import React, {useState} from 'react';
import { ScrollView} from 'react-native'

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

export default function CardComponent({uid,name,age, navigation, animals}) {

  const [animal,setAnimal] = useState({});

  const handleUid = (uid) =>{
      animals.map(animal=>{
        if(animal.uid == uid){
          setAnimal(animal)
          console.warn(animal)
        }
      })
  }
  
return (
    <ContainerBox>
      <ContainerFoto>
        <FotoDog>

        </FotoDog>
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
        <SaibaMais onPress={()=>{handleUid(uid),navigation.navigate('PerfilDog',{
            animal:animal
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