import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View,  TextInput} from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import FlatButton from './button';

export default function EnterName({setPlayerName}) {
  const [tempName, setTempName] = useState('')

  function onEndEdit() {
    setPlayerName(tempName)
  }

  return (
    <View style={styles.container}>
        <Text>This is a test</Text>
        <Text style={globalStyles.text}> Enter Player 1's name:</Text>

        <View style={styles.inputContainer}>
            
                <TextInput
                     style={styles.input}
                     autoFocus={true}
                     //onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
                     onEndEditing={onEndEdit}
                     value={tempName}
                    // keyboardType="numeric"
                />
             </View>
             <Text style={globalStyles.text}> Enter Player 1's name:</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'yellow'
    },
    inputContainer: {
        backgroundColor: 'pink'
    },
    input: {
        height: 60,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
      },
})