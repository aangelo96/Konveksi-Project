import React, { useState , useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, TextInput, TouchableOpacity, ScrollView, Image, AsyncStorage} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import ColorView from '../components/ColorView';
import RequestHeaderView from '../components/RequestHeaderView';
import trackerApi from '../api/tracker';

const RequestDetailScreen = ({navigation}) => {
  const name = navigation.getParam('name');
  const [colorState, changeColor] = useState('');
  const [colorOption, changeOption] = useState('None');
  const [secondColor, changeSecond] = useState('');
  const [amount, setAmount] = useState('');
  const [budget, setBudget] = useState('');
  const [image, setImage] = useState([]);
  const [viewState, setView] = useState('Choose Color');

  const colorArray = ["#206591","#EEC729", "#D4512F", "#85BB65", "#FE9800", "#D8D8D8", "#000000", "#FFFFFF"];
  const multiArray = ["None","Inside & Outside","Front & Back"];

  const submitRequest = async () => {

        const token = await AsyncStorage.getItem('token');

        try {
          const response = await trackerApi.post('/order', {color:colorState, secColor:secondColor, option:colorOption, amount:amount, budget:budget, imgs:image}, {headers:{'Authorization':`Bearer ${token}`}});
          //navigate to tracking screen
          navigation.navigate('Request');
          navigation.navigate('Ongoing', {track:response.data});

        } catch (err) {

          console.log(err);

        }

  };

  //Function to pick image from device
  const pickImage = async (set) => {
    await ImagePicker.getCameraPermissionsAsync();
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true
    });
    if(uri) {
      setImage([...image, uri]);
    }
    //console.log(uri);
    //await ImagePicker.getCameraPermissionsAsync();
    /*try {
      console.log('1');
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          setImage([...image], result.uri );
        }

        console.log(result);
      } catch (E) {
        console.log(E);
      }*/
    //f(uri) {
    //  setImage([...image, uri]);
    //}
  };

  //Function to remove an image from image array
  const removeImage = (item) => {
    setImage(image.filter(result => {
      if (result!==item) {
        return result;
      }
    }));
  };

  return (
    <View style={{flex:1, height:Dimensions.get('window').height, backgroundColor:'white'}}>
    <ScrollView>

      <View style={styles.viewTitle}>
      <Text style={styles.titleStyle}> Enter {name} Details </Text>
      </View>

      <RequestHeaderView state={viewState} callback={setView}/>

      { viewState==="Choose Color" ?
        <View style={{paddingBottom:10}}>
        <Text style={styles.subTitleStyle}> 1. Choose Colors </Text>
        <FlatList
          style={styles.FlatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Obj) => Obj}
          data={colorArray}
          renderItem={
          ({item}) => {
            return (
              <ColorView item={item} state={colorState} callback={changeColor}/>)
          }}/>

          <Text style={styles.subTitleStyle}> 2. Choose Multi-Color Option </Text>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Obj) => Obj}
          data={multiArray}
          renderItem={
            ({item}) => {
              return (
                <TouchableOpacity
                onPress={() => {
                  changeOption(item);
                }}>
                {colorOption===item ?
                  <Text style={[styles.optionStyle, {backgroundColor:'rgb(32,101,145)', color:'white'}]}> {item} </Text> :
                  <Text style={styles.optionStyle}> {item} </Text>
                }
                </TouchableOpacity>)
          }}/>
          {
            colorOption !== 'None' ?
            <View>
            <Text style={styles.subTitleStyle}> 2b. Choose Secondary Colors </Text>
            <FlatList
            style={styles.FlatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(Obj) => Obj}
            data={colorArray}
            renderItem={
              ({item}) => {
              return (
                <ColorView item={item} state={secondColor} callback={changeSecond}/>)
              }}/>
            </View>
            : null
      }
      </View> : null
      }

      { viewState==="Upload Design" ?
        <View style={{paddingBottom:10}}>
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
        <Text style={styles.subTitleStyle}> 1. Upload Design | {image.length} Uploaded </Text>
        { (image.length !== 0) &&
        <TouchableOpacity
        style={styles.plusStyle}
        onPress={() => {
          pickImage();
        }}>
        <FontAwesome style={{fontSize:25}} name='plus'/>
        </TouchableOpacity>
        }
        </View>
        { (image.length === 0) &&
        <TouchableOpacity
        style={{width:Dimensions.get('window').width, height:300, justifyContent:'center'}}
        onPress={() => {
          pickImage();
        }}>
          <FontAwesome style={{ fontSize: 50, paddingHorizontal:5, alignSelf:'center'}} name='cloud-upload'/>
          <Text style={{ fontSize: 12, alignSelf:'center', fontWeight:'bold'}}> Upload Files </Text>
        </TouchableOpacity>
        }
        {image &&
          <FlatList
          style={styles.FlatList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Obj) => Obj}
          data={image}
          renderItem={
            ({item}) => {
              console.log(item);
              return (
                <View>
                <Image source={{ uri: item }} style={{ width: Dimensions.get('window').width, height: undefined, aspectRatio:1, marginTop:5 }} />
                <TouchableOpacity
                onPress= {() => {
                  removeImage(item);
                }}>
                <FontAwesome style={{ fontSize: 50, paddingHorizontal:5, alignSelf:'center' }} name='trash-o'/>
                </TouchableOpacity>
                </View>
                )
          }}/>
        }
        </View> : null
      }

      { viewState==="Set Amount & Budget" ?
      <View>
        <Text style={styles.subTitleStyle}> 1. Enter Amount of Item </Text>
        <View style={{flexDirection:'row', marginHorizontal:10}}>
        <TextInput style={styles.inputBox}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={amount}
          onChangeText={(text) => {
            setAmount(text);
          }}/>
        <Text style={{alignSelf:'center', flex:3}}> Pcs </Text>
        </View>

        <Text style={styles.subTitleStyle}> 2. Enter Budget </Text>
        <View style={{flexDirection:'row', marginHorizontal:10}}>
        <TextInput style={styles.inputBox}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={budget}
          onChangeText={(text) => {
            setBudget(text);
          }}/>
        <Text style={{alignSelf:'center', flex:3}}> AUD </Text>
        </View>
        { amount !== '' &&
        <Text style={{marginHorizontal:10}}> Average Price for <Text style={{fontWeight:'bold'}}>{amount}</Text> pcs is <Text style={{fontWeight:'bold'}}>2500 AUD</Text> </Text>
        }
      </View> : null
      }
    </ScrollView>
    { viewState === "Set Amount & Budget" ? <TouchableOpacity
    onPress={() => {
      submitRequest();
    }}
    style={styles.circle}>
    <FontAwesome name="check" size={30} style={styles.check}/>
    </TouchableOpacity> : null }
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
  },
  subTitleStyle: {
    fontSize:20,
    marginTop:30,
    marginBottom:10,
    fontWeight:'bold'
  },
  plusStyle: {
    marginTop:30,
    marginBottom:10,
    fontWeight:'bold',
    marginRight:20
  },
  optionStyle: {
    fontSize:16,
    borderWidth:1,
    borderRadius:10,
    marginHorizontal:5,
    paddingHorizontal:10,
    paddingVertical:10
  },
  inputBox: {
    marginLeft:5,
    marginRight:10,
    width:300,
    borderBottomWidth:1
  },
  check: {
    color: 'white',
    alignSelf: 'center'
  },
  circle: {
    right: 0,
    bottom: 20,
    backgroundColor: 'green',
    position: 'absolute',
    width: 80,
    height:70,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    justifyContent: 'center'
  }
});

export default RequestDetailScreen;
