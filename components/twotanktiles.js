import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,Text } from 'react-native';
import MediumTankTile from './tanktile';

function TwoTankTileContainer(props) {
    return (
        <View style = {styles.threetilecontainer}>       
           <MediumTankTile title = "Overhead Tank" name = "water" />
           <MediumTankTile title = "Ground         Tank" name = "water" />
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


export default TwoTankTileContainer;
