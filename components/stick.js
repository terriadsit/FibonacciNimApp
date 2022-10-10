import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Stick() {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const stickStyle = '#' + randomColor;
    const stickTilt =  Math.floor(Math.random()*360) + 'deg';
    
    return (
        <View style={styles.stickContainer}>
            <Text style=
              {[
                styles.stick,
                {
                  transform: [{ rotate: stickTilt }],
                },
                ,{backgroundColor: stickStyle}
              ]}>
              </Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    stickContainer: {

    },
    stick: {
        width: 50,
        height: 5,
        borderRadius: 4,
        border: 1,
    },
  });