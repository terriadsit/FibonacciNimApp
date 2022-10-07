import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Directions from '../screens/directions';

const Stack = createNativeStackNavigator();

export default function DirectionsStack() {
    
    return(
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#BDBBC7',
          
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          //fontFamily: 'Gothic-Bold',
        }
      }}
      >
        <Stack.Screen 
          name="Directions" 
          component={Directions}
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    )
  }