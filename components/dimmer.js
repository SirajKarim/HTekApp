import React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';


function Dimmer() {
    return (
   <Slider
    style={{width: 100, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
   />
    );
}

export default Dimmer;