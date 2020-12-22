import React,{Component} from 'react';
import { StyleSheet,View,Text,TouchableHighlight,Modal,Button } from 'react-native';
import { Card,Title,Paragraph,TextInput,RadioButton   } from 'react-native-paper';
import SwitchBtn from '../components/switch';
import ValSlider from '../components/slider'
import Dimmer from '../components/dimmer';
import { MaterialIcons } from '@expo/vector-icons';

class ControlScreen extends Component{
    state = {
        modalVisible: false,
     }
     toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }

     handleAddButton = () =>{
         console.log("Item added buttoin has been clicked")
     }
    render(){
        return (
            <View style = {styles.mybg} >

             <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
               <Text style = {styles.myheading}>BUTTON EDITOR</Text>
               <View style = {{width: 300, height: 70}}>
               <TextInput
                label="Status Off"
                placeholder = "Light Off"
                />
               </View>
               <View style = {{width: 300, height: 70}}>
               <TextInput
                label="Hexadecimal Code"
                placeholder = "012 235 110 11"
                />
               </View>
               <View style = {{width: 300, height: 70}}>
               <TextInput
                label="Status On"
                placeholder = "Light On"
                />
               </View>
           
             
               <View style = {{width: 300, height: 70}}>
               <TextInput
                 label="Hexadecimal Code"
                placeholder = "012 235 110 11"
                />
               </View>
              <View style = {{flexDirection: "row"}}>
              <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}
                     style = {{marginLeft: 150}}
                     >
                     
                     <Text style = {{fontWeight: "bold"}}>Close</Text>
               </TouchableHighlight>
               <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}
                     style = {{marginLeft: 50}}
                     >
                     
                     <Text style = {{fontWeight:"bold"}}>Save</Text>
                </TouchableHighlight>
              </View>
                 
                      {/* <Button title = "Delete" style = {{marginLeft: 300}}/>
                      
                      <Button title = "Close" />
                      <Button title = "Open" /> */}
                      
                     
               
               </View>
            </Modal>
               
                <View style = {styles.container}>
                   <TouchableHighlight style={styles.tile} onLongPress = {() => {this.toggleModal(true)}}  underlayColor = "white">
                     
                    <View >
                        <Text style = {styles.myheading}>Switch 1</Text>
                        <SwitchBtn />
                    </View>
                   </TouchableHighlight>
                   <TouchableHighlight style={styles.tile} onLongPress = {() => {this.toggleModal(true)}}  underlayColor = "white">
                     
                     <View >
                         <Text style = {styles.myheading}>Switch 1</Text>
                         <SwitchBtn />
                     </View>
                    </TouchableHighlight>
                 
                </View>
              
                <Button title = "Add Switch" style = {styles.AddButton} onPress = {this.handleAddButton}/>
             </View>

               
       );
    }  
}

const styles = StyleSheet.create({
    mybg: {
        backgroundColor: '#dfe5f0',
        flex : 1,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 100
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
    },
    AddButton: {
        // marginTop: '995%'
    }
});

export default ControlScreen; 