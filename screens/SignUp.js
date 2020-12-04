import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button  } from 'react-native';

export default function RegistrationForm({navigation}) {
    let [userEmail , setUserEmail] = useState("Email");
    let [password , setpassword] = useState("password");
    let [repeatPassword , setRepeatPassword] = useState("repeatPassword");
return (
    <View style={styles.container}>
    <Text style = {styles.heading}>SIGNUP</Text>
    <View style = {styles.innercontainer}>
    <TextInput style = {styles.txtBox} placeholder = "Email" placeholderTextColor="white"  onChange = {setUserEmail}/>
    <TextInput style = {styles.txtBox}  placeholder = "Password" placeholderTextColor="white"   secureTextEntry = {true}  onChange = {setpassword}/>
    <TextInput style = {styles.txtBox}  placeholder = "Repeat Password" placeholderTextColor="white"  secureTextEntry = {true}   onChange = {setRepeatPassword}/>
    <TouchableOpacity style={styles.appButtonContainer}>
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