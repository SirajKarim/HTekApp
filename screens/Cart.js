














































import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button,Title,Paragraph,Divider  } from 'react-native-paper';

const Cart = () => {
  return (
    <View style={styles.center}>
      <Card style = {styles.cardStyle} >
     <Card.Content>
     <Text>Name:    Ateeb Hilal</Text>
     <Divider />
     <Text>Address:    D-44 Block XYZ</Text>
     <Divider />
     <Text>City:    Karachi</Text>
     <Divider />
     <Text>Country:    Pakistan</Text>
     <Divider />
     <Text>Contact:    03002100321</Text>
     </Card.Content>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    marginTop: '5%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  cardStyle: {
    width: '90%',
    height: 150,
    borderWidth: 1,
    borderRadius: 10
  }
});

export default Cart;