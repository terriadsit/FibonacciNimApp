import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import FlatButton from './button'
import DisplaySticks from './displaySticks'
import InitialNumber from './initialNumber'
import PlayerChooses from './playerChooses'

import aiTurn from '../shared/aiTurn'
import arraySum from '../shared/arraySum'
import { globalStyles } from '../styles/globalStyles'
import EnterName from './enterName'

export default function GameManager (gameType) {
  
  const max = 150
  const tempRandom = Math.floor(Math.random() * max) + 5

  const [beginning, setBeginning] = useState(tempRandom)
  const [random, setRandom] = useState(tempRandom)
  const [choseNumber, setChoseNumber] = useState(false)
  const [presentNumber, setPresentNumber] = useState(0)
  const [player1Turn, setPlayer1Turn] = useState(false)
  const [player1Remove, setPlayer1Remove] = useState(0)
  const [player2Remove, setPlayer2Remove] = useState(0) 
  const [history, setHistory] = useState([])
  const [player1Won, setPlayer1Won] = useState(false)
  const [player2Won, setPlayer2Won] = useState(false)
  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('A.I. Fibi')

  useEffect(() => {
    setPresentNumber(beginning)
    setHistory([])
  }, [beginning])

  useEffect(() => {
    const totalRemoved = arraySum(history)
    setPresentNumber(beginning - totalRemoved)
  }, [player1Turn])

  const initialProps = {
    initial: random,
    setBeginning: beginning => setBeginning(beginning),
    setChoseNumber: choseNumber => setChoseNumber(choseNumber),
    setPlayer1Turn: player1Turn => setPlayer1Turn(player1Turn)
  }

  const playerChoosesProps = {
    previousNumber: player2Remove,
    history: history,
    beginning: beginning,
    setPlayer1Turn: player1Turn => setPlayer1Turn(player1Turn),
    setPlayer1Remove: player1Remove => setPlayer1Remove(player1Remove),
    setHistory: history => setHistory(history),
    setPlayer1Won: player1Won => setPlayer1Won(player1Won)
  }

  function newGame () {
    setPlayer1Remove(0)
    setPlayer2Remove(0)
    setChoseNumber(false)
    setBeginning(tempRandom)
    setPlayer2Won(false)
    setPlayer1Won(false)
  }


  function aiWins () {
    setPlayer2Won(true)
  }


  function aiTurnEnds () {
    aiTurn(presentNumber, player1Remove, setHistory, setPlayer2Remove, aiWins)
    setPlayer1Turn(true)
  }

  return (
    <View style={globalStyles.container}>
        <View>
          {!player1Name && <EnterName style={styles.enterName} setPlayerName={setPlayer1Name} />}
          {!player2Name && gameType !== 'AI' && <EnterName setPlayerName={setPlayer1Name} />}

          {!choseNumber && player1Name && <InitialNumber {...initialProps} />}

          {choseNumber && <Text style={globalStyles.text}>Beginning Game with {beginning} sticks.</Text>}
          {choseNumber && <Text style={globalStyles.text}>Presently there are {presentNumber} sticks.</Text>}
          {choseNumber && player1Turn && !player2Won && !player1Won && <PlayerChooses {...playerChoosesProps} />}
     
          {choseNumber && !player1Turn && !player2Won && !player1Won && (
            <FlatButton text={`${player1Name} turn`} onPress={aiTurnEnds} />
          )}

          {player1Won && <Text style={globalStyles.text}>You Won! Excellent!</Text>}
          {player2Won && <Text style={globalStyles.text}>Ai chose {player2Remove} sticks. You lost, press New Game to try again</Text>}
          {choseNumber && <DisplaySticks howMany={presentNumber} />}
      </View>
      <View style={styles.bottomRow}>
        {choseNumber && <FlatButton text='New Game' onPress={newGame} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    enterName: {
        paddingBottom: 20,
    },
    bottomRow: {
        paddingTop: 250,
    }

})
