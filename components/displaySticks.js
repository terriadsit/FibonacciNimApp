import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Stick from './stick';


export default function DisplaySticks() {
    const max = 200;
    const random = Math.random() * max;

    return (
        <View>
            
            <Stick />
        </View>
    )
}