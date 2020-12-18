import React from "react";
import {  StyleSheet,ScrollView } from "react-native";
import StatusContainer from "../components/statuscontainer";
import TwoTankTileContainer from "../components/twotanktiles";
import BigTile from "../components/bigtile";
import ThreeTilesContainer from "../components/threetilecontainer";
import BottomThreeTilesContainer from "../components/bottomthreetilecontainer";

const Home = ({navigation}) => {
  const onPress = () => navigation.navigate("Rooms");
  const onMotorPress = () => navigation.navigate("MotorControl");


  return (
    
    <ScrollView style = {styles.container}>
     <StatusContainer title1 = "Lights" title2 = "Doors" title3 = "Gate"  name1 = "lightbulb-on-outline" name2 = "door-closed" name3 = "door" />
     <TwoTankTileContainer />
     <BigTile title = "Temperature" name = "thermometer-half" />
     <ThreeTilesContainer onPressEvent = {onPress}  title1 = "Rooms" title2 = "KeyFind" title3 = "Camera"  name1 = "bed-empty" name2 = "key" name3 = "camera-rear"/>
     <BigTile title = "Motor Controlling"  />
     <BottomThreeTilesContainer onMotorPressEvent = {onMotorPress} title1 = "Motor    Control" title2 = "Curtin     Opener" title3 = "Generator Kit"  name1 = "water-pump" name2 = "key" name3 = "power-plug" />   
    </ScrollView>
 
    
 
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
     backgroundColor: '#f2f2ed'
     
  },

}
)


export default Home;