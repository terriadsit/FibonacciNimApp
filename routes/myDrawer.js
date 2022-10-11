import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

//import Header from '../shared/header';

import HomeStack from './homeStack';
import DirectionsStack from './directionsStack'
import PlayerVsLocal from '../screens/playerVsLocal';
import PlayerVsPC from '../screens/playerVsPC';
import PlayerVsRemote from '../screens/playerVsRemote';
import Header from '../components/header';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close Menu"
          onPress={() => props.navigation.closeDrawer()}
        />
        
      </DrawerContentScrollView>
    );
   }
  
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  
  export default function MyDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#BDBBC7'
            //backgroundColor: '#FFEAB8'
            //backgroundColor: '#7B7B7B'
          },
          //headerTintColor: 'white',
          headerTintColor: '#151515',
          headerTitleStyle: {
            fontFamily: 'Gothic-Bold',
          }
        }}
       
        Navigator initialRouteName="HomeStack"
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="HomeStack" 
          component={HomeStack} 
          options={{ headerTitle: (props) => <Header title='Fibonacci Nim ' /> }} 
         />
         <Drawer.Screen 
          name="Directions" 
          component={DirectionsStack} 
          options={{ headerTitle: (props) => <Header title='What to do  ' /> }} 
         />
         <Drawer.Screen 
          name="Against AI" 
          component={PlayerVsPC} 
          options={{ headerTitle: (props) => <Header title='Beat the computer'/> }}
        />
        <Drawer.Screen 
          name="2 Players 1 Screen" 
          component={PlayerVsLocal} 
          options={{ headerTitle: (props) => <Header title='Share a screen'/> }}
        />
        <Drawer.Screen 
          name="Play Online" 
          component={PlayerVsRemote} 
          options={{ headerTitle: (props) => <Header title='Play online' /> }} 
         />
        
     </Drawer.Navigator>
    );
  }
  

