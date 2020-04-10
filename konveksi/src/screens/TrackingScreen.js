import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, AsyncStorage} from 'react-native';
import TrackMiniView from '../components/TrackMiniView';
import trackerApi from '../api/tracker';

const TrackingScreen = ({navigation}) => {

  const [arrObj, setArray] = useState([]);

  const getTrack = async () => {
    const token = await AsyncStorage.getItem('token');

    try {
      const response = await trackerApi.post('/fetchlist', {token:token}, {headers:{'Authorization':`Bearer ${token}`}});

      setArray(response.data);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {
    getTrack();

    const listener = navigation.addListener('didFocus', () => {
      getTrack();
    });

    //CLEANING UP LISTENER TO PREVENT MEMORY LEAK
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
    <FlatList
      style={{alignSelf:'center'}}
      showsVerticalScrollIndicator={false}
      keyExtractor={(arrObj) => arrObj._id}
      data={arrObj}
      renderItem={
        ({item}) => {
          return (
            <TouchableOpacity style={{backgroundColor:'white', borderBottomColor:'#ECECEC', borderBottomWidth:1, width:Dimensions.get('window').width}}
            onPress={() => {
              navigation.navigate('Ongoing',{track:item});
            }}>
            <TrackMiniView id={item._id} status={item.status} lastUpdate={item.lastUpdate} nextDeadline={item.nextDeadline} img={item.img}/>
            </TouchableOpacity>
          )
        }}
    />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default TrackingScreen;
