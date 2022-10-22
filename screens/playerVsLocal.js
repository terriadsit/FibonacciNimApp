import * as React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '../styles/globalStyles';
import GameManager from '../components/gameManager';

export default function PlayerVsLocal() {
    return (
        <View style={globalStyles.container}>
            <GameManager gameType='local' />
        </View>
    )
}