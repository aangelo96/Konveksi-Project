import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import TrackMiniView from '../components/TrackMiniView';

const TrackingScreen = ({navigation}) => {
  //We will have an array of objects called "Ongoing Request"
  /*Each "Ongoing Request" will give a brief information including :
    - Request Status
    - Recent Update
    - Request ID
    - Estimated Finish of next deliverable (if after bid)
  */

  const arrObj = [
    {id:'1110001', status:'On Bidding', lastUpdate:'22:00:00 01/03/2020', nextDeadline:'3', img:require('../../assets/hoodieImg/hoodiePink.jpg')},
    {id:'1110000', status:'Waiting for Sample', lastUpdate:'07:00:00 28/02/2020', nextDeadline:'03/03/2020', img:require('../../assets/hoodieImg/hoodieSample.jpg')},
    {id:'1100009', status:'Waiting for Delivery', lastUpdate:'15:00:00 27/02/2020', nextDeadline:'05/03/2020', img:require('../../assets/hoodieImg/hoodieYellow.jpg')}
  ]

  return (
    <View>
    <FlatList
      style={{alignSelf:'center'}}
      showsVerticalScrollIndicator={false}
      keyExtractor={(arrObj) => arrObj.id}
      data={arrObj}
      renderItem={
        ({item}) => {
          return (
            <TouchableOpacity style={{backgroundColor:'white', borderBottomColor:'#ECECEC', borderBottomWidth:1, width:Dimensions.get('window').width}}
            onPress={() => {
              console.log(item.status);
              navigation.navigate('Ongoing', {id:item.id, status:item.status, lastUpdate:item.lastUpdate, nextDeadline:item.nextDeadline, img:item.img});
            }}>
            <TrackMiniView id={item.id} status={item.status} lastUpdate={item.lastUpdate} nextDeadline={item.nextDeadline} img={item.img}/>
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
