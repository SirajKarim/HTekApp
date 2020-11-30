import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Card, Title, Paragraph,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Tile(props) {
    return (
    <Card style = {styles.cardStyle}>
    <Card.Content>
    <MaterialCommunityIcons name={props.name} size={32} color="black" />
    <Title>{props.title}</Title>
    <Paragraph>Card content</Paragraph>
    </Card.Content>
    </Card>
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

export default Tile;