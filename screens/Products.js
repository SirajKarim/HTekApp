import React from 'react';
import { StyleSheet,View,Text,ScrollView } from 'react-native';
import { Appbar,Card, Button,Title,Paragraph  } from 'react-native-paper';

function Products() {
    return (
     <ScrollView>
           <ScrollView horizontal={true}  style = {{margin: 10}}>
             
           </ScrollView>
           <Text style={styles.st}>Electric</Text>  
           <View style = {styles.productBox}>
             {/* card Starts */}
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
                      {/* card Starts */}
             <Card style = {styles.card}>
                 <Card.Cover style= {styles.cardCover} source={require('../assets/socket.png') }  />
                 <Card.Content>
                 <Text style = {styles.contentText}>Socket</Text>
                 <Text>3.5$</Text>
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Buy</Button>  
                 </Card.Actions>
             </Card>
                      {/* card Starts */}
             <Card style = {styles.card}>
                 <Card.Cover style= {styles.cardCover} source={require('../assets/keyfinder.png') }  />
                 <Card.Content>
                 <Text style = {styles.contentText}>KeyFinder</Text>
                 <Text>3.5$</Text>
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Buy</Button>  
                 </Card.Actions>
             </Card>
        
           </View>
           <Text style={styles.st}>Lighting</Text>  
           <View style = {styles.productBox}>
             {/* card Starts */}
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
                      {/* card Starts */}
             <Card style = {styles.card}>
                 <Card.Cover style= {styles.cardCover} source={require('../assets/socket.png') }  />
                 <Card.Content>
                 <Text style = {styles.contentText}>Socket</Text>
                 <Text>3.5$</Text>
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Buy</Button>  
                 </Card.Actions>
             </Card>
                      {/* card Starts */}
             <Card style = {styles.card}>
                 <Card.Cover style= {styles.cardCover} source={require('../assets/keyfinder.png') }  />
                 <Card.Content>
                 <Text style = {styles.contentText}>KeyFinder</Text>
                 <Text>3.5$</Text>
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Buy</Button>  
                 </Card.Actions>
             </Card>
        
           </View>

           <Text style={styles.st}>Security</Text> 
           <View style = {styles.productBox}>
             {/* card Starts */}
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
                      {/* card Starts */}
             <Card style = {styles.card}>
                 <Card.Cover style= {styles.cardCover} source={require('../assets/socket.png') }  />
                 <Card.Content>
                 <Text style = {styles.contentText}>Socket</Text>
                 <Text>3.5$</Text>
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Buy</Button>  
                 </Card.Actions>
             </Card>
                      {/* card Starts */}
             <Card style = {styles.card}>
                 <Card.Cover style= {styles.cardCover} source={require('../assets/keyfinder.png') }  />
                 <Card.Content>
                 <Text style = {styles.contentText}>KeyFinder</Text>
                 <Text>3.5$</Text>
                 </Card.Content>
                 <Card.Actions>
                 <Button mode="contained"  style = {styles.btn}>Buy</Button>  
                 </Card.Actions>
             </Card>
        
           </View>
     </ScrollView>
    );
}

const styles = StyleSheet.create({
     background: {
          backgroundColor: '#EEEEEE',
         
     },
     card: {
        width: '30%',
         marginRight: 5             
      },
     cardCover: {
          borderRadius: 5,
          height: 100
     },
     productBox: {
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10
     },

     btn: {
          backgroundColor: 'tomato',
        //   backgroundColor: '#242945',
          height: 35,
          width:70,
          marginLeft: '20%'
    },
     st:{
          color:'#242945',
          fontSize:15,
          borderBottomWidth: 2,
          width:'31%',
          fontWeight:"bold",
          marginLeft: 10,
          marginTop:'2%'
     },
     boxText: {
          margin:10,
          width:'22%',
          backgroundColor: '#242945',
          color: "white",
          fontWeight:"bold",
          marginLeft:'75%',
          borderRadius: 8,
          height: 22
     },
     contentText:{
          color:'#242945',
          fontSize:15,
          fontWeight:"bold"
     }
}

);

export default Products;