import React from 'react';
import { StyleSheet,View,Text,ScrollView } from 'react-native';
import { Appbar,Card, Button,Title,Paragraph  } from 'react-native-paper';

<Card style = {styles.card}>
<Card.Cover style= {styles.cardCover} source={require('../assets/camera.png') }  />
<Card.Content>
<Text style = {styles.contentText}>Camera</Text>
<Text>3.5$</Text>
</Card.Content>
<Card.Actions>
<Button mode="contained"  style = {styles.btn}>Buy</Button>  
</Card.Actions>
</Card>