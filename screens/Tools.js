import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Avatar,Card, Title, Paragraph  } from 'react-native-paper';

const Tools = ({navigation}) => {
  const onBPress = () => navigation.navigate("Pedometer");

  return (
    <View style={styles.center}>

    <Card style = {styles.card} >
    <Card.Title
    title="Scientific-Calculator"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="calculator" style = {{backgroundColor: "orange"}} />}
    />
    </Card>

    <Card style = {styles.card}>
    <Card.Title
    title="Unit-Convertion"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="rotate-3d-variant" style = {{backgroundColor: "orange"}} />}
    />
    </Card>

    <Card style = {styles.card}>
    <Card.Title
    title="Bluetooth-Control"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="bluetooth-connect" style = {{backgroundColor: "orange"}} />}
    />
    </Card>

    <Card style = {styles.card}>
    <Card.Title
    title= "Currency Converter"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="scale-balance"  style = {{backgroundColor: "orange"}}/>}
    />
     <Button title = "Open" onPress = {onBPress}/>
    </Card>

    <Card style = {styles.card}>
    <Card.Title
    title= "Pedometer"
    subtitle="Pedometer"
    left={(props) => <Avatar.Icon {...props} icon="walk"  style = {{backgroundColor: "orange"}}/>}
    />
    <Button title = "Open" onPress = {onBPress}/>
    </Card>

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  avt: {
    textAlign: "center"
  },
  card: {
    width: "90%",
    backgroundColor: "#f5f5f5",
    margin: 10
  }
});

export default Tools;