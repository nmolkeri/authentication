import React , { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount(){
      firebase.initializeApp({
      apiKey: "AIzaSyBU2AtpijI69-Ns2DcZBMjETiecv0IfZqY",
      authDomain: "authentication-44412.firebaseapp.com",
      databaseURL: "https://authentication-44412.firebaseio.com",
      projectId: "authentication-44412",
      storageBucket: "authentication-44412.appspot.com",
      messagingSenderId: "945539204645"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
