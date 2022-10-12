import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

import FlatButton from './button';

export default function InitialNumber({...props}) {
   
    const [userNumberChoice, setUserNumberChoice] = useState(0);
    let initialSticks = props.initial;
    //let textNumber = props.intitial;
    const setBeginning = props.setBeginning;
    const setChoseNumber = props.setChoseNumber;

    console.log('initial', props.initial)
    
    function onChange(number) {
        
        initialSticks = number ? Number(number) : initialSticks;
        console.log('onChange initialSticks', initialSticks)
    }

    function onEndEdit() {
        setBeginning(initialSticks);
        setChoseNumber(true);
        console.log('onEndit intialSticks', initialSticks)
    }

    function hide() {
        setBeginning(initialSticks);
        setChoseNumber(true);
        console.log('in hide', initialSticks)
    }

    return (
        <View>
            <View>
              <Text style={styles.instructions}>Input an initial number of sticks or else press the button to start with {initialSticks} sticks</Text>
              <View style={styles.chooseNumberContainer}>
              <TextInput
                     style={styles.input}
                     onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
                     onEndEditing={onEndEdit}
                     value={userNumberChoice}
                     keyboardType="numeric"
                />
                <FlatButton text={initialSticks} onPress={hide}  />
             </View> 
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    instructions: {
        padding: 10
    },
    chooseNumberContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    input: {
        height: 60,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderRadius: 6
      },
})