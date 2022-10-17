import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,  TextInput} from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import FlatButton from './button';


export default function InitialNumber({...props}) {

    const focusRef = useRef()

    useEffect(() => {     
      if (focusRef.current) focusRef.current.focus()
    },[focusRef])
  
   
    const [userNumberChoice, setUserNumberChoice] = useState(0);
    let initialSticks = props.initial;
    const setBeginning = props.setBeginning;
    const setChoseNumber = props.setChoseNumber;
    const setPlayer1Turn = props.setPlayer1Turn;
    
    console.log('initial', props.initial)
    
    function onChange(number) {
        
        initialSticks = number ? Number(number) : initialSticks;
        console.log('onChange initialSticks', initialSticks)
    }

    function onEndEdit() {
        setBeginning(initialSticks);
        setChoseNumber(true);
        console.log('onEndit intialSticks', initialSticks);
        setPlayer1Turn(true);
     }

    function hide() {
        setBeginning(initialSticks);
        setChoseNumber(true);
        console.log('in hide', initialSticks)
    }

    return (
        <View style={styles.container}>
            
              <Text style={globalStyles.text}>Input an initial number of sticks or else press the button to start with {initialSticks} sticks.</Text>
              <View style={styles.choiceContainer}>
                 
                 <TextInput
                     style={styles.input}
                     ref={focusRef}
                     onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
                     onEndEditing={onEndEdit}
                     value={userNumberChoice}
                     keyboardType="numeric"
                  />
                </View>
                <Text></Text>
                <Text style={globalStyles.text}>Or : </Text>
               
                
                  <FlatButton text={initialSticks} onPress={hide}  />
                
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 20 
    },
    instructions: {
        padding: 10,
    },
    choiceContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 40,
        justifyContent: 'center',
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