import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import { globalStyles } from '../styles/globalStyles'
import FlatButton from './button'

export default function EnterName ({ setPlayerName }) {
  const [tempName, setTempName] = useState('')

  function onEndEditing () {
    setPlayerName(tempName)
  }

  return (
    <View style={styles.container}>
      
      <Text style={globalStyles.text}> Enter Player 1's name:</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setTempName(text)}
          value={tempName}
          onEndEditing={onEndEditing}
          placeholder='display name'
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'yellow'
  },
  inputContainer: {},
  input: {
    height: 60,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6
  }
})
