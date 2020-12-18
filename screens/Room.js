import React from 'react';     //type rsf for react simple functional components
import { View } from 'react-native';
import RoomContainer from '../components/roomscontainer';

function Rooms({navigation}) {
  
    return (
        <View >
            <RoomContainer  NavigateProp = {navigation}/>
        </View>
    );
}



export default Rooms;