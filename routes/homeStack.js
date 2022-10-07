import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    
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
          name="Home" 
          component={Home}
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    )
  }