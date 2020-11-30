import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Button } from "react-native";
import { Card, Title, Paragraph,}  from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ConfigScreen = ({navigation}) => {
  const onPress = () => navigation.navigate("Tools");
  return (

    <View style = {{alignItems: "center", marginTop: "40%"}}>
    <AntDesign name="addfile" size={64} color="black" />
    <Button icon="camera" mode="contained" title="Add Device" onPress={() => console.log('Pressed daba')}>
  </Button>
    </View>
    //  <TouchableOpacity >    
    //  <Card style = {styles.cardStyle}  onPress={onPress} >
    
    //  <Card.Content>
    //  <Title style = {{textAlign: "center", fontWeight: "bold"}}>Add Device</Title>
    //   <View style = {{alignItems: "center"}}><FontAwesome5 name="plus" size={44} color="black" /></View>
    //  </Card.Content>
    // </Card>
    // </TouchableOpacity>
    
 
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242945',
        alignItems: 'center',
        justifyContent: 'center',
      
       
    },
    cardStyle: {
        
        width: '80%',
        marginTop: '50%',
        backgroundColor:'#42A5F5',
        // flexDirection: 'row',
        margin: '10%',
        borderRadius: 15,
        opacity: 100
    }

}
)


export default ConfigScreen;