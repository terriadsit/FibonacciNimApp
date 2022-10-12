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
        let total = 0;
        for (let i = fibonacci.length - 1; i >= 1; i--) {
            if (total + fibonacci[i] <= presentNumber) {
                total += fibonacci[i];
                remove = fibonacci[i];
            }
        }

        if (remove > 2 * prevRemove) {
            remove = 2 * prevRemove;
        }
        // let remove = presentNumber;
        // let leftover = presentNumber - fibonacci[fibonacci.length - 1];
        // let isAcceptable = false;
        // while (!isAcceptable & leftover > 1) {

        //     console.log('in while', leftover);
        //     fibonacci = []
        //     loadFibonacci(leftover);
            
        //     leftover -= fibonacci[fibonacci.length - 1];
        //     console.log('remove', remove, 'prevRemove', prevRemove, 'fibonacci', fibonacci)
        //     isAcceptable = ((fibonacci.includes(leftover) && leftover <= (2 * prevRemove)) || leftover <= 0 );
        //     console.log('includes', fibonacci.includes(remove), "less than?", remove <= (2*prevRemove) )
        //     console.log('isAccept', isAcceptable)
        //     if (leftover > 0 ){
        //         remove = leftover;
        //     } else {
        //         remove = 2 * prevRemove
        //     }
        // }
        // if (leftover ===1 ) {
        //     remove = 1;
        // }
        // if (remove <= 2 * prevRemove ) {
        //    // removeSticks(remove);

        // }
        console.log('remove', remove);
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