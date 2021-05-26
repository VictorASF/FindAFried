import React, { useState, useEffect} from 'react';
import { Button } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

import {
  Container,
  Texto
} from './styles';

import CardComponent from './Component/CardComponent'

import { ScrollView } from 'react-native-gesture-handler';

export default function FindAFriend({ navigation }) {

  const[animais,setAnimais] = useState([])

  const TestClick = (msg)=>{
    console.warn(msg)
  }

  const ListenUpdate = (snap) => {
    const data = snap.docs.map((doc)=>{
      return{
        uid:doc.id,
        ... doc.data()
      }
      
    })
    setAnimais(data)
  }

  useEffect(()=>{
    firebase.firestore().collection('animais').orderBy('uid','asc').onSnapshot(ListenUpdate);
  },[])

  return (
    <ScrollView>
      <Container>
      {
        animais.map((animal) => 
          <CardComponent
          key={animal.uid} uid={animal.uid} name={animal.name} age={animal.age} navigation={ navigation } animals={ animais }/>
        )
      }   
      </Container>
    </ScrollView>
  );
}
