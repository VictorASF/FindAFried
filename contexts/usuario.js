import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const listenAuth = (userState) => {
    setUser(userState)
  }

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(listenAuth)

  }, [])

  const CreateUser = (user) =>{
    firebase.firestore().collection("Users").add({
      uid:user,
      name: "",
      telefone: '',
      endereco: ''
    })
    console.warn('Sucesso')
  }

  const signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp => {
        CreateUser(resp.user.uid)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resp => {
        console.warn(resp)
      })
      .catch(err => {
        console.warn(err)
      })
  }

  const signOut = () => {
    firebase.auth().signOut()
      .then(resp => {
        console.warn('Usuario deslogado com sucesso')
      })
      .catch(err => {
        console.warn(err)
      })
  }


  return (
    <UsuarioContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider }