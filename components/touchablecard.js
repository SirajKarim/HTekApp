import React from 'react';
import { Button, StyleSheet,TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


function TouchableCards(props) {
    return (
        <TouchableOpacity style = {styles.cardStyle} >
             <Card style = {{backgroundColor: '#d4aa04'}} onPress = {props.onPressEvent}>
             <Card.Content>
             <MaterialCommunityIcons name={props.name} size={32} color="black" />
             <Title>{props.title}</Title>
             {/* <Button title = "click me" onPress = {props.onPressEvent}/> */}
             <Paragraph>Card content</Paragraph>
             </Card.Content>
             </Card>
        </TouchableOpacity>   
    )}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242945',
        alignItems: 'center',
        justifyContent: 'center',
      
       
    },
    cardStyle: {
        
        width: '30%',
        backgroundColor:'#d4aa04',
        // flexDirection: 'row',
        margin: '1.6%',
       
    }

}
)

export default TouchableCards;