import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

/*
name    rating
        nRating

*/

const BidView = ({name, ppItem, pTotal, sizing, duration, rating, nRating}) => {

  return (
    <View style={styles.background}>

    <View flexDirection='row' justifyContent='space-between' style={{marginBottom:10, marginTop:10}}>
      <Text style={styles.name}> {name} </Text>
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:15}}> {rating} </Text>
        <Text style={{fontSize:10, color:'grey'}}> {nRating} Review </Text>
      </View>
    </View>

    <View flexDirection='row' justifyContent='space-between' style={{marginBottom:5}}>
      <View>
        <Text> <Text style={{fontWeight:'bold'}}>Bid Price</Text> :  $ {pTotal}</Text>
        <Text> <Text style={{fontWeight:'bold'}}>Work Duration</Text> :  {duration} Days</Text>
      </View>
      <View style={{alignItems:'center', marginRight:15}}>
        <Text style={{fontWeight:'bold'}}>Size Chart</Text>
        <FlatList
        style={{}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(Obj) => Obj.size}
        data={sizing}
        renderItem={
          ({item}) => {
            return (
              <View flexDirection='row'>
              <Text style={{width:20}}> {item.size} </Text>
              <Text> |  w : {item.width},  l : {item.length} </Text>
              </View>
              )
        }}/>
      </View>
    </View>

    <FontAwesome name="circle" style={{fontSize:40, color:'green', position:'absolute', right:-18, top:-20}}/>
    <FontAwesome name="check" style={{fontSize:20, color:'white', position:'absolute', right:-10, top:-10}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  background :{
    width:Dimensions.get('window').width-70,
    backgroundColor:'white',
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	     height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    marginVertical:20,
    paddingVertical:10,
    paddingHorizontal:10,
    alignSelf:'center'
  },
  name : {
    fontWeight:'bold',
    fontSize:20
  }
});

export default BidView;
