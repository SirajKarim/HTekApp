import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button,KeyboardAvoidingView,Platform  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationForm  from "./SignUp";
import { firebase } from '../src/firebase/config'

export default function LoginForm({navigation}) {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [userStatus, setUserStatus] = useState('false')

     const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            // .then((response) => {
            //     const uid = response.user.uid
            //     const usersRef = firebase.firestore().collection('users')
            //     usersRef
            //         .doc(uid)
            //         .get()
            //         .then(firestoreDocument => {
            //             if (!firestoreDocument.exists) {
            //                 alert("User does not exist anymore.")
            //                 return;
            //             }
            //             const user = firestoreDocument.data()
            //             // navigation.navigate("Home")
            //         })
            //         .catch(error => {
            //             alert(error)
            //         });
            // })
            // .catch(error => {
            //     alert(error)
            // })
            .then(() => navigation.navigate('Home'))
            .catch(error => console.log(error))

    }

    return (
        <KeyboardAvoidingView   behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}>
        {/* <View style={styles.container}> */}
        <Text style = {styles.heading}>LOGIN</Text>
        <View style = {styles.innercontainer}>
        <TextInput 
        style = {styles.txtBox}  
        placeholder = "Email"  
        placeholderTextColor="white" 
        onChangeText={(text) => setEmail(text)}
        value={email}
        />

        <TextInput 
        style = {styles.txtBox} 
        placeholder = "Password" 
        placeholderTextColor="white"  
        secureTextEntry = {true} 
        onChangeText={(text) => setPassword(text)}
        value={password}
        />

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => onLoginPress()}>
            <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <Text style = {styles.signupDire} >Not a member ?
           
        </Text>
        <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
            <Text style = {styles.tot}> Register Here</Text>
            </TouchableOpacity>
        {/* </View> */}
        </KeyboardAvoidingView>

    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242945',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color:'white',
        // fontWeight: 'bold',
        fontSize: 40,
        fontFamily:'Roboto',
        marginBottom: 100
    },
    innercontainer: {
    width:'80%',
    height:'40%',
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderBottomWidth:15,
    
    },
    signupDire:{
        color: 'white',
        marginTop: 10
    },
    tot:{
        color: 'orange',
       
    },
    txtBox:{
        height: 40,
        borderColor: '#242945',
        borderWidth: 2 ,
        borderRadius: 3,
        margin: '4%',
        backgroundColor: '#242945',
        color: 'white',
        textAlign: 'center'
    },
    appButtonText: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonContainer: {
        margin: '5%',
        width:'90%',
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    
    });
