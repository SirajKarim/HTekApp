import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Card, Button,Title,Paragraph  } from 'react-native-paper';
import SwitchBtn from '../components/switch';
import ValSlider from '../components/slider'
import Dimmer from '../components/dimmer';
import { MaterialIcons } from '@expo/vector-icons';

function ControlScreen() {
    return (
         <View style = {styles.mybg} >
             
             <View style = {styles.container}>
                 <View style={styles.tile}>
                     <Text style = {styles.myheading}>Switch 1</Text>
                     <SwitchBtn />
                 </View>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Switch 2</Text>
                 <SwitchBtn />
                 </View>
              
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Switch 3</Text>
                 <SwitchBtn />
                 </View>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Switch 4</Text>
                 <SwitchBtn />
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Switch 5</Text>
                 <SwitchBtn />
                 </View>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Socket</Text>
                 <SwitchBtn />
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Dimmer</Text>
                 <View style = {styles.sldr}><Dimmer /></View>
                 </View>
                 <View style={styles.tile}>
                 <Text  style = {styles.myheading}>Add Button</Text>
                 <View style = {styles.sldr}><MaterialIcons name="add-box" size={44} color="black" style = {{alignItems: 'center'}}/></View>
                 
                 </View>
               
             </View>
             <View style = {styles.container}>
                 <View style={styles.rgbtile}>
                 <Text  style = {styles.myheading}>RGB</Text>
                     <View style = {styles.sldr}><ValSlider  colour = "red"/></View>
                     <View style = {styles.sldr}><ValSlider  colour = "green"/></View>
                     <View style = {styles.sldr}><ValSlider colour = "blue"/></View>
                 </View>
                
               
             </View>
            
         </View>
    );
}

const styles = StyleSheet.create({
    mybg: {
        backgroundColor: '#dfe5f0',
        flex : 1,
    },
    container: {
        flex: 0.185,
        flexWrap: 'wrap',
        flexDirection: 'row',
        // alignItems:'center',
        justifyContent: 'space-evenly',
        // backgroundColor:'grey'
      

        
    },
    tile: {
        height: '80%',
        width:'45%',
        backgroundColor:'lightblue',
        justifyContent: 'center',
        marginTop: '4%'

    },
    rgbtile: {
        height: '100%',
        width:'92%',
        backgroundColor:'lightblue',
        justifyContent: 'center',
        marginTop: '4%'

    },
    sldr: {
       alignItems: 'center'

    },
    myheading: {
        fontSize:18,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        textAlign: 'center'
    }
});

export default ControlScreen; 