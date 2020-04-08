import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import TrackMiniView from '../components/TrackMiniView';
import BidView from '../components/BidView';
import { FontAwesome } from '@expo/vector-icons';

const OngoingScreen = ({navigation}) => {
  //We will have an array of objects called "Ongoing Request"
  /*Each "Ongoing Request" will give a brief information including :
    - Request Status
    - Recent Update
    - Request ID
    - Estimated Finish of next deliverable (if after bid)
  */

  const bidArray = [
    {name:'Konveksi Biasa Aja', ppItem:10, pTotal:1500, sizing:[
      {size:'s', length:60, width:50},{size:'m', length:62, width:52},{size:'l', length:64, width:54}
    ], duration:15, rating:4.5, nRating:10},
    {name:'Konveksi Baru Bikin', ppItem:10, pTotal:1350, sizing:[
      {size:'s', length:65, width:50},{size:'m', length:67, width:52},{size:'l', length:69, width:54}
    ], duration:15, rating:3.5, nRating:3},
    {name:'Konveksi Udah Lama', ppItem:10, pTotal:1425, sizing:[
      {size:'s', length:60, width:50},{size:'m', length:62, width:52},{size:'l', length:64, width:54}
    ], duration:15, rating:4.5, nRating:30}];

  const status = navigation.getParam('status');
  const id = navigation.getParam('id');

  return (
    <View style={{flex:1}}>
    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, backgroundColor:'rgb(32,101,145)'}}>
    {status==='On Bidding' ?
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10, backgroundColor:'white', borderWidth:1, borderColor:'rgb(32,101,145)'}}>
    <FontAwesome name="money" style={{fontSize:20, color:'rgb(32,101,145)'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'rgb(32,101,145)'}}> 1. Bidding  </Text>
    </View> :
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10}}>
    <FontAwesome name="money" style={{fontSize:20, color:'white'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'white'}}> 1. Bidding  </Text>
    </View>
    }

    {status==='Waiting for Sample' ?
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10, backgroundColor:'white', borderWidth:1, borderColor:'rgb(32,101,145)'}}>
    <FontAwesome name="flask" style={{fontSize:20, color:'rgb(32,101,145)'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'rgb(32,101,145)'}}> 2. Creating Sample  </Text>
    </View> :
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10}}>
    <FontAwesome name="flask" style={{fontSize:20, color:'white'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'white'}}> 2. Creating Sample  </Text>
    </View>
    }

    {status==='Waiting for Product' ?
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10, backgroundColor:'white', borderWidth:1, borderColor:'rgb(32,101,145)'}}>
    <FontAwesome name="hourglass-start" style={{fontSize:16, color:'rgb(32,101,145)'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'rgb(32,101,145)'}}> 3. Creating Product  </Text>
    </View> :
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10}}>
    <FontAwesome name="hourglass-start" style={{fontSize:16, color:'white'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'white'}}> 3. Creating Product  </Text>
    </View>
    }

    </View>
    <View style={{flexDirection:'row', justifyContent:'center', marginBottom:10, marginHorizontal:30, backgroundColor:'rgb(32,101,145)', borderBottomLeftRadius:10, borderBottomRightRadius:10}}>

    {status==='Waiting for Delivery' ?
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10, marginHorizontal:10, backgroundColor:'white', borderWidth:1, borderColor:'rgb(32,101,145)'}}>
    <FontAwesome name="truck" style={{fontSize:20, color:'rgb(32,101,145)'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'rgb(32,101,145)'}}> 4. Delivering Item  </Text>
    </View> :
    <View style={{justifyContent:'center', alignItems:'center', width:120, paddingVertical:10, marginHorizontal:10}}>
    <FontAwesome name="truck" style={{fontSize:20, color:'white'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'white'}}> 4. Delivering Item  </Text>
    </View>
    }

    <View style={{justifyContent:'center', alignItems:'center', maxWidth:120, paddingVertical:10, marginHorizontal:10}}>
    <FontAwesome name="comments-o" style={{fontSize:20, color:'white'}}/>
    <Text style={{textAlign:'center', paddingTop:10, color:'white'}}> 5. Add a Review  </Text>
    </View>

    </View>

    {status==='On Bidding' ?
    <View style={{marginHorizontal:10, flex:1}}>
    <Text style={{fontWeight:'bold', fontSize:20, backgroundColor:'white', width:'auto', alignSelf:'center',
    borderRadius:10, paddingVertical:15, paddingHorizontal:15, marginBottom:10, shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	     height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,}}> Order No. {id} </Text>
    <Text style={{marginVertical:5, fontWeight:'bold'}}> Bids Available : 3 / 25 </Text>

    <FlatList
    showsVerticalScrollIndicator={false}
    keyExtractor={(Obj) => Obj.name}
    data={bidArray}
    renderItem={
      ({item}) => {
        return (
          <BidView name={item.name} ppItem={item.ppItem} pTotal={item.pTotal} sizing={item.sizing} duration={item.duration} rating={item.rating} nRating={item.nRating}/>
          )
    }}/>

    </View> :
    null
    }
    </View>
  );
};

const styles = StyleSheet.create({

});

export default OngoingScreen;
