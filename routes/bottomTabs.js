import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Directions from '../screens/directions';
import PlayerVsLocal from '../screens/playerVsLocal';
import PlayerVsPC from '../screens/playerVsPC';
import PlayerVsRemote from '../screens/playerVsRemote';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return(
    <Tab.Navigator tabBar={props => <TabBar {...props} />}
       screenOptions={{
        headerStyle: {
          backgroundColor: '#BDBBC7'
        
        },
        headerTintColor: '#151515',
        headerTitleStyle: {
          //fontFamily: 'Gothic-Bold',
        }
      }}
      Navigator initialRouteName="On YouTube"
    >
      <Tab.Screen 
        name="Local Player" 
        component={PlayerVsLocal}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="Play AI" 
        component={PlayerVsPC}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="Play Online" 
        component={PlayerVsRemote}
        options={{ headerShown: true }} 
      />

      <Tab.Screen 
        name="Directions" 
        component={Directions}      
        options={{ headerShown: true }} 
      />
      
    </Tab.Navigator>
  )
}