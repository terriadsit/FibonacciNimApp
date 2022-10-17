import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { globalStyles } from '../styles/globalStyles'
import GameManager from '../components/gameManager'

export default function PlayerVsPC () {
 
  return (
    <View style={globalStyles.container}>
     <GameManager gameType='AI' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    bottomRow: {
        paddingTop: 250,
    }

})
