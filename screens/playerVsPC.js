import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { set } from 'react-native-reanimated'

import FlatButton from '../components/button'
import DisplaySticks from '../components/displaySticks'
import InitialNumber from '../components/initialNumber'
import PlayerChooses from '../components/playerChooses'

import arraySum from '../shared/arraySum'

export default function PlayerVsPC () {
  const max = 200
  const tempRandom = Math.floor(Math.random() * max)

  const [beginning, setBeginning] = useState(tempRandom)
  const [random, setRandom] = useState(tempRandom)
  const [choseNumber, setChoseNumber] = useState(false)
  const [presentNumber, setPresentNumber] = useState(0)
  const [player1Turn, setPlayer1Turn] = useState(false)
  const [playerRemove, setPlayerRemove] = useState(0)
  const [turn, setTurn] = useState(0)
  const [aiRemove, setAiRemove] = useState(0) 
  const [history, setHistory] = useState([])
  const [playerWon, setPlayerWon] = useState(false)
  const [win, setWin] = useState(false)
  const [aiWon, setAiWon] = useState(false)

  let fibonacci = []
  let previousNumber = 0
  let remove = 0 // ai temporary removes

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
    previousNumber: aiRemove,
    history: history,
    beginning: beginning,
    turn: turn,
    setPlayer1Turn: player1Turn => setPlayer1Turn(player1Turn),
    setPlayerRemove: playerRemove => setPlayerRemove(playerRemove),
    setHistory: history => setHistory(history),
    setPlayerWon: playerWon => setPlayerWon(playerWon)
  }

  function newGame () {
    setPlayerRemove(0)
    setAiRemove(0)
    setChoseNumber(false)
    setBeginning(tempRandom)
    setTurn(0)
    setAiWon(false)
    setPlayerWon(false)
    setWin(false)
  }


  function aiWins () {
    setAiWon(true)
    setWin(true)
  }

//   function playerWins() {
//     setPlayerWon(true)
//     setWin(true)
//   }

  function loadFibonacci (last) {
    let first = 1
    let second = 1
    let next = first + second
    fibonacci.push(first, second)
    while (next < last) {
      fibonacci.push(next)
      first = second
      second = next
      next = first + second
    }
  }

  function aiTurnEnds () {
    aiTurn()
    setPlayer1Turn(true)
  }

  function aiTurn () {
    
    console.log('aiTurn, presentNumber', presentNumber, 'turn', turn)
    fibonacci = []
    previousNumber = playerRemove

    // can AI win this round?
    if (presentNumber <= 2 * previousNumber && previousNumber !== 0) {
        remove = presentNumber
        aiWins()
    } else {

      loadFibonacci(presentNumber)

      // choose how many to remove
      let total = 0
      for (let i = fibonacci.length - 1; i >= 1; i--) {
        if (total + fibonacci[i] <= presentNumber) {
          total += fibonacci[i]
          remove = fibonacci[i]
        }
      }

      // only able to remove if following rules
      if (remove > 2 * previousNumber) {
        remove = 2 * previousNumber
      }
    }
    
    previousNumber = remove
    setHistory(prev => [...prev, remove])
    setAiRemove(remove);
  }

  return (
    <View>
      {!choseNumber && <InitialNumber {...initialProps} />}

      {choseNumber &&  <Text>Beginning Game with {beginning} sticks.</Text>}
      {choseNumber && <Text>Presently there are {presentNumber} sticks.</Text>}

      {choseNumber && player1Turn && !win && !playerWon && <PlayerChooses {...playerChoosesProps} />}
     
      {choseNumber && !player1Turn && !win && !playerWon && (
        <FlatButton text='your turn' onPress={aiTurnEnds} />
      )}
      {playerWon && <Text>You Won! Excellent!</Text>}
      {aiWon && <Text>Ai chose {aiRemove} sticks. You lost, press New Game to try again</Text>}
      {choseNumber && <DisplaySticks howMany={beginning} />}
      {choseNumber && <FlatButton text='New Game' onPress={newGame} />}
    </View>
  )
}
