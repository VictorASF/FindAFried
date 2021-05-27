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

export default function CardComponent({animal,uid,name,age, navigation}) {
  
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
        <SaibaMais onPress={()=>{navigation.navigate('PerfilDog',{
            uid:animal.uid,
            name:animal.name,
            age:animal.age,
            descricao:animal.descricao,
            phone:animal.phone,
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