import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet,KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

class App extends Component {
    state = {}
    render() {
        return (
        <ImageBackground source = {require ('./images/background.jpg')} style = {styles.background}>
            <KeyboardAvoidingView behavior = "padding" style={styles.container}>
               <View style = {styles.logoContainer}>
               <Image style={styles.logo} source={require('./images/logo.png')} />
               </View>
                <View style={styles.loginContainer}>                  
                </View>
                <View style={styles.formContainer}>
                   <LoginForm correctUsername = 'phnguyen@reed.edu' correctPassword = '1234'/>
                </View>        
            </KeyboardAvoidingView>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    },
    container: {
      flex: 1,
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      position: 'relative',
      width: 300,
      height: 200
    },
    title:{
      color: "#FFF",
      marginTop: 120,
      width: 180,
      textAlign: 'center',
      opacity: 0.9
    }
});

export default App;