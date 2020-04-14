import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GetStartedScreen = ({navigation}) => {

  const arrObj = [
    { id : 1, img: require('../../assets/startedImg/one.png'), title: 'Choose Category',
  content: 'Choose the category of clothing that you want to make from the list that we have prepared.'},
    { id : 2, img: require('../../assets/startedImg/two.png'), title: 'Enter Details & Upload Design',
  content: 'Enter the details of your order, such as amount of clothing, colour, your budget, etc. You also need to upload your design in PNG/JPG Format.'},
    { id : 3, img: require('../../assets/startedImg/three.png'), title: 'Wait for Bid',
  content: 'In the next couple of days, various vendors will send you a bid on your order. We will notify you when you received a bid'}
  ];

    const [mainView, updateView] = useState(arrObj[0]);

  const changeView = (id) => {
    updateView(arrObj[id]);
  };

  return (
  <View style={styles.main}>
    <Text style={styles.title}> {mainView.title} </Text>
    <Image source={mainView.img} style={styles.imgStyle}/>
    <Text style={styles.content}> {mainView.content} </Text>
    <View style={styles.carousel}>
      { mainView.id==arrObj[0].id ?
        <FontAwesome style={{ fontSize: 26, color:'#206591', paddingHorizontal:5 }} name='circle'/> :
        <TouchableOpacity onPress={ ()=>{
          changeView(0);
        }
        }>
        <FontAwesome style={{ fontSize: 26, color:'#EDF8FF', paddingHorizontal:5 }} name='circle'/>
        </TouchableOpacity>
      }
      { mainView.id==arrObj[1].id ?
        <FontAwesome style={{ fontSize: 26, color:'#206591', paddingHorizontal:5 }} name='circle'/> :
        <TouchableOpacity onPress={ ()=>{
          changeView(1);
        }
        }>
        <FontAwesome style={{ fontSize: 26, color:'#EDF8FF', paddingHorizontal:5 }} name='circle'/>
        </TouchableOpacity>
      }
      { mainView.id==arrObj[2].id ?
        <FontAwesome style={{ fontSize: 26, color:'#206591', paddingHorizontal:5 }} name='circle'/> :
        <TouchableOpacity onPress={ ()=> {
          changeView(2);
        }
        }>
        <FontAwesome style={{ fontSize: 26, color:'#EDF8FF', paddingHorizontal:5 }} name='circle'/>
        </TouchableOpacity>
      }
    </View>
    { mainView.id!==arrObj[2].id ?
      <TouchableOpacity style={styles.button} onPress={() => {
        changeView(mainView.id);
      }}>
      <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}> Next </Text>
      </TouchableOpacity> :
      <View>
      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.navigate('Home');
        navigation.navigate('Request');
      }}>
      <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}> Create Order </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.home} onPress={()=>{
        navigation.navigate('Home');
      }}>
      <Text style={{fontWeight:'bold'}}> Return Home </Text>
      </TouchableOpacity>
      </View>
    }

  </View>
  )
};

const styles = StyleSheet.create({
  main: {
    backgroundColor:'white',
    height:Dimensions.get('window').height,
    paddingTop:Dimensions.get('window').height/15
  },
  title: {
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold'
  },
  imgStyle: {
    height:240,
    width:240,
    alignSelf:'center',
    marginVertical:10
  },
  content: {
    textAlign:'center',
    width:300,
    alignSelf:'center',
    marginBottom:30,
    marginTop:10
  },
  carousel: {
    flexDirection:'row',
    alignSelf:'center'
  },
  button: {
    alignSelf:'center',
    backgroundColor:'#206591',
    width:150,
    height:60,
    marginVertical:20,
    justifyContent:'center',
    borderRadius:30
  },
  home: {
    alignSelf:'center'
  }
});

export default GetStartedScreen;
