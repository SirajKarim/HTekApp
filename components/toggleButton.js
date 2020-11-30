import * as React from 'react';
import { ToggleButton } from 'react-native-paper';

const ToggleBtn = () => {
  const [value, setValue] = React.useState('left');

  return (
    <ToggleButton.Row  onValueChange={value => setValue(value)} value={value}>
      <ToggleButton style = {{width: '50%'}} icon="water-pump" value="left" />
      <ToggleButton style = {{width: '50%'}} icon="water-pump-off" value="right" />
    </ToggleButton.Row>
  );
};

export default ToggleBtn;
// import React, { useState } from "react";
// import { View, Switch, StyleSheet } from "react-native";

// const ToggleBtn = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{ false: "#767577", true: "#f5dd4b" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-end",
//     marginBottom:10
//   }
// });

// export default ToggleBtn;

