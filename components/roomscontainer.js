import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,ScrollView } from 'react-native';
import Tile from '../components/tile';

function RoomContainer(props) {
    return (
       
        <View style = {styles.threetilecontainer}>  
            <Tile  title = "Living Room" name = "sofa"/>
            <Tile  title = "Kitchen" name = "stove"/>            
            <Tile  title = "Bed Room 1" name = "bed-empty"/>
            <Tile  title = "Bed Room 2" name = "bed-empty"/>
            <Tile  title = "Add Room" name = "plus"/>
        </View>
    );
}

const styles = StyleSheet.create({
    threetilecontainer: {
        flexWrap: "wrap",
       flexDirection: 'row'
       
    }
}
)




export default RoomContainer;