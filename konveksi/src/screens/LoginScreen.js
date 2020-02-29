import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    //Fill Submit Code here
    navigation.navigate('Home');
    return;
  };

  return (
    <View>
      <View style={styles.viewTitle}>
      <Text style={styles.title}> Welcome to Konveksiin Aja </Text>
      </View>
      <View style={styles.viewInput}>
      <Text style={styles.textInput}> Email Address </Text>
      <TextInput style={styles.inputBox}
        autoFocus
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
      <TouchableOpacity
      style={styles.button}
      onPress={() => {
        submit();
      }}>
        <Text style={styles.buttonText}> Login </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  viewTitle : {
    backgroundColor:'rgb(32,101,145)',
    height: Dimensions.get('window').height*2/5,
    justifyContent: 'center'
  },
  title : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
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
  }
});

export default LoginScreen;
