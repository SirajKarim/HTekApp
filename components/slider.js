import React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';


function ValSlider(props) {
    return (
   <Slider
    style={{width: 200, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor={props.colour}
    maximumTrackTintColor="#FFFFFF"
   />
    );
}

export default ValSlider;