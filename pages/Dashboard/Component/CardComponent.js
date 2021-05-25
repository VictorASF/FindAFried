import React from 'react';
import { ScrollView } from 'react-native'

import {
  ContainerBox,
  ContainerFoto,
  FotoDog,
  ContainerInfos,
  ContainerInter,
  TextBasic,
  Nome,
  Idade
} from './styles';

export default function CardComponent() {

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
            Brutus
          </Nome>
          <TextBasic>
            Idade
          </TextBasic>
          <Idade>
            6 anos
          </Idade>
          </ContainerInter>
        </ContainerInfos>
      </ContainerBox>
  )
}