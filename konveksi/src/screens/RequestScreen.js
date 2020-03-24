import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, TouchableOpacity, Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';

const RequestScreen = ({navigation}) => {

  const arrObj = [
    { id : '1', name: 'Shirts', img: require('../../assets/typeImg/shirt.jpg'), objects:
    [
      { id : '1A', name: 'Shirts', img: require('../../assets/typeImg/shirt.jpg')},
      { id : '1B', name: 'T-Shirts', img: require('../../assets/typeImg/t-shirt.jpg')}
    ]},
    { id : '2', name: 'Jackets', img: require('../../assets/typeImg/hoodie.jpg'), objects:
    [
      { id : '2A', name: 'Hoodie', img: require('../../assets/typeImg/hoodie.jpg')},
      { id : '2B', name: 'Varsity', img: require('../../assets/typeImg/varsity.jpg')},
      { id : '2C', name: 'Bomber', img: require('../../assets/typeImg/bomber.jpg')}
    ]},
    { id : '3', name: 'Sports', img: require('../../assets/typeImg/sport.jpg'), objects:
    [
      { id : '3A', name: 'Shirt', img: require('../../assets/typeImg/sport.jpg')}
    ]}
  ];

  const [currentType, setType] = useState(arrObj[0]);

  return (
    <View style={{flex:1}}>
      <View style={styles.viewTitle}>
      <Text style={styles.titleStyle}> Choose Clothing Type </Text>
      </View>
      <View style={styles.parentStyle}>
      <FlatList
        style={{alignSelf:'center'}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(arrObj) => arrObj.id}
        data={arrObj}
        renderItem={
          ({item}) => {
            return (
              <TouchableOpacity
              onPress={() => {
                setType(item);
              }}>
              <ImageBackground source={item.img} style={styles.imgStyle}>
              <View style={styles.blackLayer}/>
              <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold', color:'white'}}>{item.name}</Text>
              </ImageBackground>
              </TouchableOpacity>
            )
          }}
      />
      <FlatList
        style={{alignSelf:'center'}}
        keyExtractor={(object) => object.id}
        data={currentType.objects}
        renderItem={
          ({item}) => {
            return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("RequestDetail", {name:item.name});
                }}>
                <ImageBackground source={item.img} style={styles.imgStyle}>
                <View style={styles.blackLayer}/>
                <Text style={{alignSelf:'center', fontSize:25, fontWeight:'bold', color:'white'}}>Create {item.name}</Text>
                </ImageBackground>
                </TouchableOpacity>
            )
          }}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection:'row',
    flex:1
  },
  imgStyle: {
    height:200,
    width:Dimensions.get('window').width/2,
    justifyContent:'center'
  },
  titleStyle: {
    alignSelf:'center',
    paddingVertical:10,
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  },
  viewTitle: {
    width: Dimensions.get('window').width,
    backgroundColor:'rgb(32,101,145)'
  },
  blackLayer: {
    height:200,
    width:Dimensions.get('window').width/2,
    backgroundColor:'black',
    opacity:0.3,
    borderBottomColor:'red',
    position:'absolute'
  }
});

export default RequestScreen;
