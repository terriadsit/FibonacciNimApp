import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import FlatButton from '../components/button';
import DisplaySticks from '../components/displaySticks';
import InitialNumber from '../components/initialNumber';

export default function PlayerVsPC() {
    const max = 200;
    const tempRandom =  Math.floor(Math.random() * max);

    const [beginning, setBeginning] = useState(tempRandom);
    const [random, setRandom] = useState(tempRandom);
    const [choseNumber, setChoseNumber] = useState(false);
    //const [presentNumber, setPresentNumber] = useState(0);

    let fibonacci = [];
    let summation = [];
    let presentNumber = 0;
    let prevRemove = 10;
   
    const initialProps = {
        initial: random,
        setBeginning: (beginning) => setBeginning(beginning),
        setChoseNumber: (choseNumber) => setChoseNumber(choseNumber)
    }

    function newGame() {
        setChoseNumber(false);
        setBeginning(tempRandom);
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

    //loadFibonacci(beginning);
    
    function aiTurn() {
        loadFibonacci(presentNumber);
        console.log('aiturn', fibonacci)
        let remove = presentNumber;
        let leftover = presentNumber - fibonacci[fibonacci.length - 1];
        while (leftover > 0) {
            fibonacci = []
            loadFibonacci(leftover);
            remove = leftover;
            leftover -= fibonacci[fibonacci.length - 1];
        }
        if (remove <= 2 * prevRemove ) {
           // removeSticks(remove);
        }
        console.log('leftover', remove);
    }

    if (choseNumber ) {
        presentNumber = beginning;
        aiTurn();
        console.log('inchose', fibonacci) 
    }

    

    return (
        <View>
            {!choseNumber && <InitialNumber {...initialProps}/>}
            {choseNumber && <DisplaySticks howMany={beginning}  />}
            {choseNumber && <FlatButton text='New Game' onPress={newGame} />}
        </View>
    )
}