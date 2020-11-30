import React from 'react';     //type rsf for react simple functional components
import { StyleSheet,View,TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import TouchableCards from './touchablecard';


function ThreeTilesContainer(props) {
    return (
        <View style = {styles.threetilecontainer}>
            <TouchableOpacity style = {styles.cardStyle} >
             <Card style = {{backgroundColor: '#d4aa04'}} onPress = {props.onPressEvent}>
             <Card.Content>
             <MaterialCommunityIcons name={props.name1} size={32} color="black" />
             <Title>{props.title1}</Title>
             {/* <Button title = "click me" onPress = {props.onPressEvent}/> */}
             <Paragraph>Card content</Paragraph>
             </Card.Content>
             </Card>
            </TouchableOpacity>   

            
            <TouchableOpacity style = {styles.cardStyle} >
             <Card style = {{backgroundColor: '#d4aa04'}} >
             <Card.Content>
             <MaterialCommunityIcons name={props.name2} size={32} color="black" />
             <Title>{props.title2}</Title>
             {/* <Button title = "click me" onPress = {props.onPressEvent}/> */}
             <Paragraph>Card content</Paragraph>
             </Card.Content>
             </Card>
            </TouchableOpacity>  

            <TouchableOpacity style = {styles.cardStyle} >
             <Card style = {{backgroundColor: '#d4aa04'}}>
             <Card.Content>
             <MaterialCommunityIcons name={props.name3} size={32} color="black" />
             <Title>{props.title3}</Title>
             {/* <Button title = "click me" onPress = {props.onPressEvent}/> */}
             <Paragraph>Card content</Paragraph>
             </Card.Content>
             </Card>
            </TouchableOpacity>  

            {/* previous */}
            {/* <TouchableCards onPressEvent ={props.onPressEvent} title = {props.title1} name = {props.name1} />
            <TouchableCards  title = {props.title2} name = {props.name2} />
            <TouchableCards title = {props.title3} name = {props.name3} /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    threetilecontainer: {
        flexWrap: "wrap",
      flexDirection: 'row'
       
    },
    cardStyle: {
        
        width: '30%',
        backgroundColor:'#d4aa04',
        // flexDirection: 'row',
        margin: '1.6%',
       
    }
}
)


export default ThreeTilesContainer;