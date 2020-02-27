import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

const RequestDetailScreen = ({navigation}) => {
  const name = navigation.getParam('name');
  const [colorState, changeColor] = useState('');
  const [colorOption, changeOption] = useState('None');
  const [secondColor, changeSecond] = useState('');

  return (
    <View style={{flex:1}}>
      <View style={styles.viewTitle}>
      <Text style={styles.titleStyle}> Enter {name} Details </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default RequestDetailScreen;
