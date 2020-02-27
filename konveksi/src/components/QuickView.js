import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const QuickView = ({imgSource, colors, callback}) => {

  return (
  <View style={styles.viewStyle}>
      <TouchableOpacity onPress={() => {
        callback(imgSource);
      }}>
      <Image source={imgSource} style={styles.imgStyle}/>
      </TouchableOpacity>
    <FlatList
      style={styles.listStyle}
      horizontal
      keyExtractor={(color) => color}
      data={colors}
      renderItem={
        ({item}) => {
          return (
            <View style={{flex:1, flexDirection:'column'}}>
            <FontAwesome style={{ fontSize: 26, color:item, paddingHorizontal:5 }} name='circle'/>
            <FontAwesome style={{ fontSize: 26, color:'black', paddingHorizontal:5, top:-26 }} name='circle-o'/>
            </View>)
        }}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
      height:120,
      width:100,
      marginTop:15,
      alignSelf:'center'
  },
  viewStyle: {
    paddingHorizontal:10
  },
  listStyle: {
    flexDirection:'row',
    alignSelf:'center',
    marginTop:10
  }
});

export default QuickView;
