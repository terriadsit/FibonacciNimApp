import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import DisplaySticks from './displaySticks';


export default function InitialNumber() {
    const max = 200;
    const random = Math.floor(Math.random() * max);

    return (
        <View>
            <DisplaySticks howMany={random} />
        </View>
    )
}