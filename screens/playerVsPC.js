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
    const [presentNumber, setPresentNumber] = useState(0);
    const [player1Turn, setPlayer1Turn] = useState(false);
    const [playerRemove, setPlayerRemove] = useState(0);
    const [totalRemoved, setTotalRemoved] = useState(0);
    const [turn, setTurn] = useState(0);
    //const [aiRemove, setAiRemove] = useState(0);

    let fibonacci = [];
    //let presentNumber = 0;
    //let prevRemove = 0;
    let previousNumber = 0;
    let won = false;
    let playerWon = false;
    let aiText = ''; 
    let aiRemove = 0;
    //let turn = 0;
    let remove = 0; // ai removes

    useEffect(() => {
        if (turn === 0) {
            setPresentNumber(beginning);
           
        } else {
            if (turn % 2 === 1) {
                setPresentNumber(prev => prev - playerRemove);
            } else {
                setPresentNumber(prev => prev - remove);
            }
            
        }
        console.log('useEffect', presentNumber, turn);
        setTurn(prev => prev + 1);
        
    },[player1Turn])
         
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
    //    setTotalRemoved: (totalRemoved) => setTotalRemoved(totalRemoved)
       // aiTurn: () => aiTurn()
    }

    function newGame() {
        setChoseNumber(false);
        setBeginning(tempRandom);
        setTurn(0);
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
        console.log('aiTurnEnds')
        setPlayer1Turn(true);
    }

    
    function aiTurn() {
        console.log('aiTurn, presentNumber', presentNumber, 'turn', turn);
        //turn++;
        console.log('turn again', turn);
        fibonacci = [];
        if (turn === 0) {
            return;
            //presentNumber = beginning;
        } else {
            previousNumber = playerRemove;
           // presentNumber -= playerRemove;
       
            if (presentNumber === 0) {
                won = true;
                playerWon = true;
                return;
            }
        
            loadFibonacci(presentNumber);

            console.log('fib in aiturn', fibonacci)
            // choose how many to remove
            let total = 0;
            for (let i = fibonacci.length - 1; i >= 1; i--) {
                if (total + fibonacci[i] <= presentNumber) {
                  total += fibonacci[i];
                  remove = fibonacci[i];
                  }
            console.log('remove in loop', remove);
            }

            // only able to remove if following rules
            if (remove > 2 * previousNumber) {
                remove = 2 * previousNumber;
            }

            // check if removing all so that ai won
            previousNumber = remove;
            aiRemove = remove;

           // presentNumber -= remove;
            console.log('remove', remove);
            aiText = `AI removes ${remove}`;
             //setTotalRemoved((prev) => prev - remove)
        }
    }
    


    if (choseNumber) {
   //     while (presentNumber > 0) {
          if (!player1Turn) {
              aiTurn();
          }
   //     }
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