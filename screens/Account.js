import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet,Button } from 'react-native'
// import LoginSignUp from "./navigation/LoginSignUp.Navigator";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { Button } from 'react-native-paper';
import {firebase} from '../src/firebase/config';

export default function Account({navigation}) {
    return(
        <View style = {style.container}>
         <View style = {style.innercontainer}>
         <Button 
         title = "LOGOUT"
         onPress = {() =>{
             firebase.auth().signOut()
             .then(
                () => navigation.navigate("Login")
             )
         } }
         />
         </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
       flex: 1,
    },
    innercontainer:{
        marginTop:100,
        height: 30
    }
}   
);