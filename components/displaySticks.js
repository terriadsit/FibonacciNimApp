import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Stick from './stick';


export default function DisplaySticks({howMany}) {
    const emptyArray = Array(howMany).fill(0);
    console.log('empty Array', emptyArray)

    return (
        <View>
            <View style={styles.stickContainer}>
              {emptyArray.map((x, i) => <Stick key={i} /> )}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    stickContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 20,
    }
})