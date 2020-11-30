import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button}  from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

function BigTile(props) {
    return (
    <Card style = {styles.cardStyle}>
    <Card.Content>
    <FontAwesome5 name={props.name} size={32} color="black" />
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
        
        width: '97%',
        // height: '3%',
        backgroundColor:'#d4aa04',
        // flexDirection: 'row',
        margin: '1%',
       
    }

}
)

export default BigTile;