import React, { useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

import {
  Container,
} from './styles';

import CardComponent from './Component/CardComponent'

import { ScrollView } from 'react-native-gesture-handler';

export default function FindAFriend({ navigation }) {

  const[animais,setAnimais] = useState([])

  const listenUpdate = (snap) => {
    const data = snap.docs.map((doc)=>{
      return{
        id:doc.id,
        ... doc.data()
      }
      
    })
    setAnimais(data)
  }

  useEffect(()=>{
    firebase.firestore().collection('animais').orderBy('uid','asc').onSnapshot(listenUpdate);
  },[])

  return (
    <ScrollView>
      <Container>
      {
        animais.map((animal) => 
          <CardComponent
          key={animal.uid} animal={ animal } uid={animal.uid} name={animal.name} age={animal.age} navigation={ navigation }/>
        )
      }   
      </Container>
    </ScrollView>
  );
}
