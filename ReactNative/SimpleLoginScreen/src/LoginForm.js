import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    onLogin() {
        const {username, password} = this.state;
        if (username === this.props.correctUsername && password === this.props.correctPassword)
            Alert.alert("Logging in...")
        else Alert.alert("Incorrect credentials!")
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email or Username' 
                            onChangeText={(username) => this.setState({username})}
                            placeholderTextColor='rgb(2,54,18)'/>

                <TextInput style = {styles.input}   
                           returnKeyType="go" ref={(input)=> this.passwordInput = input} 
                           placeholder='Password' 
                           placeholderTextColor='rgb(2,54,18)' 
                           onChangeText={(password) => this.setState({password})}
                           secureTextEntry/>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onLogin()}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: 'rgb(2,54,18)'
    },
    buttonContainer:{
        backgroundColor: 'rgb(16,82,36)',
        paddingVertical: 15
    },
    buttonText:{
        color: 'black',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  'gray',
       color: 'gray'
    }
   
});

export default LoginForm;