import React from 'react';
import { View,StyleSheet,TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button,}  from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
function Tile(props) {
    const a = props.NavigationProp;
    const onMyPress = () => a.navigate(props.componentNameWhereToNavigate);

    // console.log(props)
    return (
    // <TouchableOpacity style = {styles.cardStyle} onPress = {() => {console.log("jkvhurfhvuirhruih")}}>
    // <Card style = {{ backgroundColor:'#91b5ad'}}>
    // <Card.Content>
    // <MaterialCommunityIcons name={props.name} size={64} color="black" />
    // <Title>{props.title}</Title>
    // <Paragraph>Card content</Paragraph>
    // </Card.Content>
    // </Card>
    // </TouchableOpacity>
    
    <Card style = {styles.cardStyle} onPress = {onMyPress}>
    <Card.Content>
    <MaterialCommunityIcons name={props.name} size={64} color="black" />
    <Title>{props.title}</Title>
    <Paragraph>Card content</Paragraph>
    </Card.Content>
    </Card>
  
    )}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#242945',
    //     alignItems: 'center',
    //     justifyContent: 'center',
      
       
    // },
    cardStyle: {
        
        width: "46%",
        backgroundColor:'#91b5ad',
        margin: '2%',
       
    }

}
)

export default Tile;