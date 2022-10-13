import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import FlatButton from '../components/button';
import DisplaySticks from '../components/displaySticks';
import InitialNumber from '../components/initialNumber';
import PlayerChooses from '../components/playerChooses';

export default function PlayerVsPC() {
    const max = 200;
    const tempRandom =  Math.floor(Math.random() * max);

    const [beginning, setBeginning] = useState(tempRandom);
    const [random, setRandom] = useState(tempRandom);
    const [choseNumber, setChoseNumber] = useState(false); 
    //const [presentNumber, setPresentNumber] = useState(0);
    const [player1Turn, setPlayer1Turn] = useState(false);
    const [playerRemove, setPlayerRemove] = useState(0);
    //const [aiRemove, setAiRemove] = useState(0);

    let fibonacci = [];
    let presentNumber = 0;
    //let prevRemove = 0;
    let previousNumber = 0;
    let won = false;
    let playerWon = false;
    let aiText = '';
    let aiRemove = 0;
    let turn = 0;
    let remove = 0; // ai removes
         
    const initialProps = {
        initial: random,
        setBeginning: (beginning) => setBeginning(beginning),
        setChoseNumber: (choseNumber) => setChoseNumber(choseNumber),
        setPlayer1Turn: (player1Turn) => setPlayer1Turn(player1Turn)
    }

    const playerChoosesProps = {
        previousNumber: previousNumber,
        beginning: beginning,
        turn: turn,
        setPlayer1Turn: (player1Turn) => setPlayer1Turn(player1Turn),
        setPlayerRemove: (playerRemove) => setPlayerRemove(playerRemove),
       // aiTurn: () => aiTurn()
    }

    function newGame() {
        setChoseNumber(false);
        setBeginning(tempRandom);
        turn = 0;
    }

    function loadFibonacci(last) {
        let first = 1;
        let second = 1;
        let next = first + second;
        fibonacci.push(first, second)
        while (next < last) {
            fibonacci.push(next);
            first = second;
            second = next;
            next = first + second
        }
    }

    function aiTurnEnds() {
        setPlayer1Turn(true);
    }

    
    function aiTurn() {
        turn++;
        fibonacci = [];
        previousNumber = playerRemove;
        presentNumber -= playerRemove;
        if (presentNumber === 0) {
            won = true;
            playerWon = true;
            return;
        }
        
        loadFibonacci(presentNumber);
        console.log('aiturn', fibonacci)
        let total = 0;
        for (let i = fibonacci.length - 1; i >= 1; i--) {
            if (total + fibonacci[i] <= presentNumber) {
                total += fibonacci[i];
                remove = fibonacci[i];
            }
        }

        if (remove > 2 * previousNumber) {
            remove = 2 * previousNumber;
        }
        previousNumber = remove;
        aiRemove = remove;
        presentNumber -= remove;
        console.log('remove', remove);
        aiText = `AI removes ${remove}`;
    }
    
    presentNumber = beginning;
    if (choseNumber) {
        if (!player1Turn) {
            aiTurn();
        }
    }

    

    return (
        <View>
            {!choseNumber && <InitialNumber {...initialProps}/>}
          
            {choseNumber && <Text>Beginning Game with {beginning} sticks.</Text>}
            {choseNumber && <Text>Presently there are {presentNumber} sticks.</Text>}
            {choseNumber && player1Turn  && <PlayerChooses {...playerChoosesProps} />}
            {choseNumber && !player1Turn && <Text>You removed {playerRemove}, then AI removed {remove} sticks leaving {presentNumber}.</Text>}
            {choseNumber && !player1Turn && <FlatButton text='your turn' onPress={aiTurnEnds} />}
            {playerWon && <Text>You Won! Excellent!</Text>}
            {choseNumber && <DisplaySticks howMany={beginning}  />}
            {choseNumber && <FlatButton text='New Game' onPress={newGame} />}
        </View>
    )
}