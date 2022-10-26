import * as React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BottomTabs from './routes/bottomTabs';
import MyDrawer from './routes/myDrawer'

export default function App() {

  const logo = require('./assets/splash.png');
  
  const [fontsLoaded] = useFonts({
    'Gothic-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
    'Gothic': require('./assets/fonts/Oswald-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Image source={logo} style={{ height: 100, width: 100, paddingTop: 100 }}>
        </Image>
      </View>
    )
  } else
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
