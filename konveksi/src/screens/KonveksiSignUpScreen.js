import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const KonveksiSignUpScreen = ({navigation}) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    //Fill Submit Code here
    signup({email, password});
    //navigation.navigate('Home');
    return;
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.viewTitle}>
      <TouchableOpacity style={{position:'absolute', right:20, top:50, backgroundColor:'white', width:50, height:50, justifyContent:'center', borderRadius:50}} onPress={() => {
        navigation.navigate('Signup');
      }}>
      <FontAwesome style={{fontSize:24, color:'rgb(32,101,145)', alignSelf:'center'}} name='user'/>
      </TouchableOpacity>
      <Text style={styles.title}> Welcome to Konveksiin Aja </Text>
      <Text style={styles.subtitle}> Sign Up as Konveksi </Text>
      </View>
      <View style={styles.viewInput}>
      <Text style={styles.textInput}> Email Address </Text>
      <TextInput style={styles.inputBox}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}/>
      <Text style={styles.textInput}> Password </Text>
      <TextInput style={styles.inputBox}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}/>

      {
      state.errorMessage ?
      <Text style={styles.errorMessage}> {state.errorMessage} </Text>
      : null
      }

      <TouchableOpacity
      style={styles.button}
      onPress={() => {
        submit();
      }}>
        <Text style={styles.buttonText}> Sign Up </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('KonveksiLogin');
      }}>
        <Text style={styles.signin}> Already have an account? <Text style={{color:'rgb(32,101,145)', fontWeight:'bold'}}>Login</Text> instead </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  viewTitle : {
    backgroundColor:'rgb(32,101,145)',
    height: Dimensions.get('window').height*2.5/5,
    justifyContent: 'center'
  },
  title : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  subtitle : {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop:20
  },
  viewInput : {
    backgroundColor:'white',
    height: Dimensions.get('window').height*3/5,
    paddingTop: 30
  },
  textInput: {
    alignSelf:'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 20
  },
  inputBox: {
    marginHorizontal:50,
    borderBottomWidth:1
  },
  button: {
    backgroundColor:'rgb(32,101,145)',
    paddingVertical:20,
    paddingHorizontal:50,
    alignSelf:'center',
    justifyContent:'center',
    marginVertical:30,
    borderRadius:15
  },
  buttonText: {
    alignSelf:'center',
    color:'white'
  },
  errorMessage: {
    fontSize : 16,
    color: 'red',
    textAlign:'center',
    marginTop: 10
  },
  signin: {
    textAlign:'center'
  },
});

export default KonveksiSignUpScreen;
