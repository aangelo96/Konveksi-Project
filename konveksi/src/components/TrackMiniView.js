import React from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';

const TrackMiniView = ({id, status, lastUpdate, nextDeadline, img}) => {
  //We will have an array of objects called "Ongoing Request"
  /*Each "Ongoing Request" will give a brief information including :
    - Request Status
    - Recent Update
    - Request ID
    - Estimated Finish of next deliverable (if after bid)
  */

  return (
    <View style={{flexDirection:'row', marginVertical:10, paddingLeft:15, paddingRight:10}}>
      <Image source={{ uri: img }} style={{width:80, height:80}}/>
      <View style={{marginLeft:5}}>
        <Text style={{fontWeight:'bold'}}> ORDER No. {id} </Text>
        <Text> Status : {status} </Text>
        { status !== 'On Bidding' ?
        <Text> {status} Deadline : {nextDeadline} </Text> :
        <Text> Number of Bids : {nextDeadline} </Text>
        }
        <Text style={{width:275}}> Last Updated on : {lastUpdate} </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default TrackMiniView;
