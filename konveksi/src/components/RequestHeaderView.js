import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RequestHeaderView = ({state, callback}) => {

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10, flex:1, marginHorizontal:5}}>
    { state==='Choose Color' ?
      <Text style={[styles.optionStyle, {backgroundColor:'rgb(32,101,145)', color:'white'}]}> 1. Choose Color </Text> :
      <TouchableOpacity
      onPress={() => callback("Choose Color")}>
      <Text style={styles.optionStyle}> 1. Choose Color </Text>
      </TouchableOpacity>
    }
    { state==='Upload Design' ?
      <Text style={[styles.optionStyle, {backgroundColor:'rgb(32,101,145)', color:'white'}]}> 2. Upload Design </Text> :
      <TouchableOpacity
      onPress={() => callback("Upload Design")}>
      <Text style={styles.optionStyle}> 2. Upload Design </Text>
      </TouchableOpacity>
    }
    { state==='Set Amount & Budget' ?
      <Text style={[styles.optionStyle, {backgroundColor:'rgb(32,101,145)', color:'white'}]}> 3. Set Amount & Budget </Text> :
      <TouchableOpacity
      onPress={() => callback("Set Amount & Budget")}>
      <Text style={styles.optionStyle}> 3. Set Amount & Budget </Text>
      </TouchableOpacity>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  optionStyle: {
    fontSize:16,
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    maxWidth:120,
    height:80,
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight:'bold'
  }
});

export default RequestHeaderView;
