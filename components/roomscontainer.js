import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,ScrollView, Button,TouchableHighlight, Text } from 'react-native';
import Tile from '../components/tile';

function RoomContainer(props) {
    // const a = props.NavigateProp;
    // console.log(a.navigate)
    // const onMyPress = () => a.navigate("ControlScreen");
    // const onPressButton =() => {
    //     alert('You tapped the button!')
    //   }
    
    //  const onLongPressButton = () => {
    //     alert('You long-pressed the button!')
    //   }
   
    return (
       
        <View style = {styles.threetilecontainer}>  
          {/* <Button title="Goto Motor Controller"  onPress = {onMyPress}/> */}
          {/* <TouchableHighlight onPress={onPressButton} onLongPress={onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight> */}
            <Tile  title = "Living Room" name = "sofa"  componentNameWhereToNavigate = "ControlScreen" NavigationProp = {props.NavigateProp}/>
            <Tile  title = "Kitchen" name = "stove" componentNameWhereToNavigate = "ControlScreen" NavigationProp = {props.NavigateProp}/>            
            <Tile  title = "Bed Room 1" name = "bed-empty"  componentNameWhereToNavigate = "ControlScreen" NavigationProp = {props.NavigateProp}/>
            <Tile  title = "Bed Room 2" name = "bed-empty"  componentNameWhereToNavigate = "ControlScreen" NavigationProp = {props.NavigateProp}/>
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