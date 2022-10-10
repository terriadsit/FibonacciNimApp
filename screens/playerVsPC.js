import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import DisplaySticks from '../components/displaySticks';
import InitialNumber from '../components/initialNumber';

export default function PlayerVsPC() {
    const max = 200;
    const random =  Math.floor(Math.random() * max);

    const [beginning, setBeginning] = useState(random)

    const initialProps = {
        initial: random,
        setBeginning: (beginning) => setBeginning(beginning)
    }

    return (
        <View>
            <InitialNumber {...initialProps}/>
            <DisplaySticks howMany={beginning}  />
        </View>
    )
}