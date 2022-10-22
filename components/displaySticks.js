import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Stick from './stick';


export default function DisplaySticks({howMany}) {
    const emptyArray = Array(howMany).fill(0);

    if (howMany < 0 || howMany > 1000) {
        console.log('error, must be between 0 and 1000 sticks')
        return (
            <View>
                <Text>
                    Error, must be between 0 and 1000 sticks
                </Text>
            </View>
        )
    }
  
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
        paddingTop: 30,
    }
})