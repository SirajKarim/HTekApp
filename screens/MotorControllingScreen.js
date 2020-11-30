import React from 'react';
import {StyleSheet, View } from 'react-native';
import MotorControlBox from '../components/mcBox';

function MotorControls(props) {
    return (
        <View style = {styles.bg}>
            <MotorControlBox />
        </View>
    );
}

const  styles =  StyleSheet.create({
    bg: {
        flex: 1,
       // backgroundColor: '#edf5ff'
    }
})
export default MotorControls;