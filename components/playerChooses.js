import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

import FlatButton from './button';
import arraySum from '../shared/arraySum';
import { globalStyles } from '../styles/globalStyles';

export default function PlayerChooses({...props}) {
   
    const [tempRemove, setTempRemove] = useState(0);
    const [error, setError] = useState('');

    const previousNumber = props.previousNumber;
    const setPlayer1Turn = props.setPlayer1Turn;
    const setPlayerRemove = props.setPlayerRemove;
    const setPlayerWon = props.setPlayerWon;
    const beginning = props.beginning;
    const setHistory = props.setHistory;
    const history = props.history;
    
    const removedSoFar = arraySum(history);

    let largest = previousNumber === 0 ? beginning - 1 : previousNumber * 2;
    if (largest > beginning - removedSoFar) {
        largest = beginning - removedSoFar
    }
    
    function checkForWin(removed) {
        console.log('check for win beginning', beginning, 'history', arraySum(history))
        if (beginning - removedSoFar - removed === 0) {
            setPlayerWon(true);
         } 
    }

    function onChange(number) {
        console.log('in onChange')
        setError('')
        setTempRemove(number)
    }

    function onEndEdit() {
       console.log('tempRemove', tempRemove)
        if (tempRemove < 1 || tempRemove > largest) {
            setError(`Choose a number between 1 and ${largest}`)
        } else {
            setError('');
            setPlayerRemove(tempRemove);
            setPlayer1Turn(false);
            checkForWin(tempRemove);
            setHistory(prev => [...prev, Number(tempRemove)])
         }
    }

    
    return (
        <View>
            <View>
              {previousNumber !== 0 && <Text style={styles.instructions}>The last player, AI, removed {previousNumber}.</Text>}
              <Text style={styles.instructions}> You may remove between 1 and {largest}.</Text>
              <View style={styles.chooseNumberContainer}>
                <TextInput
                     style={styles.input}
                     onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
                     onEndEditing={onEndEdit}
                     value={tempRemove}
                     keyboardType="numeric"
                />
             </View> 
             {error && <Text style={globalStyles.errorText}>{error}</Text>}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    instructions: {
        padding: 10,
        fontFamily: 'Gothic'
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