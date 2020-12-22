import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert  } from 'react-native';
import {firebase} from '../src/firebase/config';

export default function RegistrationForm({navigation}) {
    // const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

   
    
    const onRegisterPress = () => {
        if(password !== confirmPassword){
            alert("Password don't match. ")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(() => navigation.navigate('Home'))
            .then(() => {
                const uid = firebase.auth().currentUser.uid
                const data = {
                    userid: uid,
                    useremail: email
                };
                const userref  = firebase.firestore().collection('users')
                userref
                    .doc(uid)
                    .set(data)
            })
            .catch(error => console.log(error))
            // .then((response) => {
            //     const uid = response.user.uid
            //     const data = {
            //         id: uid,
            //         email,
            //         // fullName,
            //     };
            //     const usersRef = firebase.firestore().collection('users')

            //     usersRef
            //         .doc(uid)
            //         .set(data)
            //         .then(() => {
                        
            //             // navigation.navigate("Login", {user: data})
            //         })
            //         .catch((error) => {
            //             alert(error)
            //         });
            // })
            // .catch((error) =>{
            //     alert(error)
            // });
    }
return (
    <View style={styles.container}>
    <Text style = {styles.heading}>SIGNUP</Text>
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
    <TextInput 
    style = {styles.txtBox} 
    placeholder = "Repeat Password" 
    placeholderTextColor="white"  
    secureTextEntry = {true}   
    onChangeText={(text) => setConfirmPassword(text)}
    value={confirmPassword}
    />
    <TouchableOpacity style={styles.appButtonContainer}  onPress={() => onRegisterPress()}>
        <Text style={styles.appButtonText}>SignUp</Text>
    </TouchableOpacity>
    </View>
    <Text style = {styles.signupDire} >Already a member ?
       
    </Text>
    <TouchableOpacity  onPress = {() => navigation.navigate('Login')}>
        <Text style = {styles.tot}> Login Here</Text>
        </TouchableOpacity>
    </View>
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
height:'57%',
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
    color: 'orange'
},
txtBox:{
    height: 40,
    borderColor: '#242945',
    borderWidth: 2 ,
    borderRadius: 3,
    margin: '5%',
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