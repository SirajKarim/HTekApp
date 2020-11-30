import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Title, Paragraph, TextInput  } from 'react-native-paper';
import OutlinedInputBox from './InputBox';
import ToggleBtn from './toggleButton';


function MotorControlBox(props) {
    return (
        
      <View style = {styles.box}>
        <Card style = {{height: '40%', alignItems: "center", backgroundColor: '#a0dbda'}}>
        <Card.Content>
        <Title style = {{textAlign: 'center' , fontSize: 30, color: '#8a5801'}} >Ground Tank</Title>
        </Card.Content>
        <ToggleBtn/>
        <OutlinedInputBox />
      </Card>
      <Card style = {{height: '40%', alignItems: "center", backgroundColor: '#a0dbda', marginTop: 10}}>
        <Card.Content>
        <Title style = {{textAlign: 'center' , fontSize: 30, color: '#8a5801'}}>Overhead Tank</Title>
        </Card.Content>
        <ToggleBtn/>
        <OutlinedInputBox />
      </Card>
      </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexWrap: "wrap",
        padding: 10,
    }
})

export default MotorControlBox;