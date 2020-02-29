import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ColorView = ({state, item, callback}) => {

  return (
    <TouchableOpacity
    onPress={()=> {
      callback(item)}}>
    { state===item ?
    <View>
    <FontAwesome style={{ fontSize: 100, color:item, paddingHorizontal:5, alignSelf:'center' }} name='circle'/>
    {
    item==="#000000" ? <FontAwesome style={{ fontSize: 100, color:'white', paddingHorizontal:5, alignSelf:'center', position:'absolute', opacity:0.5}} name='circle-o'/> :
    <FontAwesome style={{ fontSize: 100, color:"#000000", paddingHorizontal:5, alignSelf:'center', position:'absolute', opacity:0.5}} name='circle-o'/>
    }
    <Text style={{alignSelf:'center'}}> {item} </Text>
    </View> :
    <View>
    <FontAwesome style={{ fontSize: 100, color:item, paddingHorizontal:5, alignSelf:'center' }} name='circle'/>
    <Text style={{alignSelf:'center'}}> {item} </Text>
    </View>
    }
    </TouchableOpacity>
  );
};


export default ColorView;
