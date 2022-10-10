import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

import DisplaySticks from './displaySticks';


export default function InitialNumber({...props}) {
    console.log('props', props)
    const [userNumberChoice, setUserNumberChoice] = useState(0);
    let initialSticks = props.initial;
    const setBeginning = props.setBeginning;
    console.log('initial', props.initial)
    
    function onChange(number) {
        
        initialSticks = number ? Number(number) : initialSticks;
        
    }

    function onEndEdit() {
        setBeginning(initialSticks);
    }

    return (
        <View>
            <Text>Input an initial number of sticks or else press enter to start with {initialSticks} sticks</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
              onEndEditing={onEndEdit}
              value={userNumberChoice}
              keyboardType="numeric"
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})