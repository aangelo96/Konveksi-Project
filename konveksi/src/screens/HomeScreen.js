import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from '../components/Icon';
import { Ionicons } from '@expo/vector-icons';
import QuickView from '../components/QuickView';
import { Context as AuthContext } from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const [mainImg, updateImg] = useState(require('../../assets/hoodieImg/hoodieSample.jpg'));
  const { signout } = useContext(AuthContext);

  const arrObj = [
    { id : '1', name: require('../../assets/hoodieImg/hoodieSample.jpg'), color: ['rgb(32,101,145)']},
    { id : '2', name: require('../../assets/hoodieImg/hoodieYellow.jpg'), color: ['yellow','white']},
    { id : '3', name: require('../../assets/hoodieImg/hoodiePink.jpg'), color: ['pink','white']}
  ];

  const changeImg = (newName) => {
    updateImg(newName);
  };

  return (
  <View style={{zIndex:10}}>
      <Image source={mainImg} style={styles.imgStyle}/>
    <TouchableOpacity style={styles.getStarted} onPress={() => {
      navigation.navigate('GetStarted');
    }}>
      <Text style={styles.startText}> Get Started </Text>
      <Icon name="arrow-circle-right" color={'white'} style={{alignSelf:'center'}}/>
    </TouchableOpacity>
    <View style={styles.bottomView}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.title}> Made with Konveksiin Aja </Text>
        <Text style={{alignSelf:'center'}}> More... </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(arrObj) => arrObj.id}
        data={arrObj}
        renderItem={
          ({item}) => {
            return <QuickView imgSource={item.name} colors={item.color} callback={changeImg}/>
          }}
      />
    </View>
  </View>
  )
};

HomeScreen.navigationOptions = ({ navigation }) => {

  return {
      title: "Konveksiin Aja",
      // headerRight: () => <TouchableOpacity onPress={signout}>
      //         <Ionicons name="md-exit" style={styles.signout} />
      //     </TouchableOpacity>
  };
};

const styles = StyleSheet.create({
  imgStyle: {
      height:Dimensions.get('window').height*2.6/5,
      width:Dimensions.get('window').width,
      zIndex:-2,
  },
  getStarted: {
    alignSelf:'flex-end',
    backgroundColor:'rgb(32,101,145)',
    justifyContent:'space-between',
    paddingVertical:10,
    paddingHorizontal:20,
    top:-75,
    borderBottomLeftRadius:15,
    borderTopLeftRadius:15,
    flexDirection:'row',
    zIndex:2,
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13
  },
  startText: {
    fontSize: 25,
    alignSelf:'center',
    marginRight:10,
    color:'white'
  },
  bottomView: {
    backgroundColor:'white',
    top:-100,
    height:Dimensions.get('window').height*3/5,
    borderTopLeftRadius:30,
    paddingVertical:40,
    paddingHorizontal:20,
    zIndex:-1,
  },
  title:{
    fontWeight:'bold',
    fontSize:20
  },
  signout: {
    fontSize: 25,
    marginRight: 15
  }
});

export default HomeScreen;
